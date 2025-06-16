import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { KLAVIYO_API_KEY, KLAVIYO_LIST_ID } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
    try {
        // Parse and validate the request body
        const { name, email, privacyPolicyAccepted, termsAccepted, acceptedAt } = await request.json();

        // Server-side validation
        if (!name || !name.trim()) {
            return json({ success: false, message: 'Name is required' }, { status: 400 });
        }

        if (!email || !email.trim() || !email.includes('@')) {
            return json({ success: false, message: 'Valid email is required' }, { status: 400 });
        }

        // Validate consent (GDPR compliance)
        if (!privacyPolicyAccepted || !termsAccepted) {
            return json({ 
                success: false, 
                message: 'Privacy policy and terms must be accepted' 
            }, { status: 400 });
        }

        // Step 1: First create/update the profile
        const profileResponse = await fetch('https://a.klaviyo.com/api/profiles', {
            method: 'POST',
            headers: {
                'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Revision': '2023-10-15'
            },
            body: JSON.stringify({
                data: {
                    type: 'profile',
                    attributes: {
                        email,
                        properties: {
                            name,
                            Source: 'Waitlist',
                            SignupDate: acceptedAt || new Date().toISOString(),
                            PrivacyPolicyAccepted: privacyPolicyAccepted,
                            TermsAccepted: termsAccepted,
                            ConsentTimestamp: acceptedAt || new Date().toISOString()
                        }
                    }
                }
            })
        });

        if (!profileResponse.ok) {
            const errorData = await profileResponse.json();
            console.error('Klaviyo Profile API Error:', errorData);
            throw new Error('Failed to create profile');
        }

        const profileData = await profileResponse.json();
        const profileId = profileData.data.id;

        // Step 2: Subscribe the profile using the bulk subscription endpoint
        // Fixed: Removed 'timestamp' field that's not valid
        const subscribeResponse = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs', {
            method: 'POST',
            headers: {
                'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json',
                'Revision': '2023-10-15'
            },
            body: JSON.stringify({
                data: {
                    type: "profile-subscription-bulk-create-job",
                    attributes: {
                        profiles: {
                            data: [
                                {
                                    type: "profile",
                                    attributes: {
                                        email: email,
                                        subscriptions: {
                                            email: {
                                                marketing: {
                                                    consent: "SUBSCRIBED"
                                                    
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                        
                    },
                    relationships: {
                        list: {
                            data: {
                                type: "list",
                                id: KLAVIYO_LIST_ID
                            }
                        }
                    }
                }
            })
        });

        if (!subscribeResponse.ok) {
            const errorData = await subscribeResponse.json();
            console.error('Klaviyo Subscription API Error:', errorData);
            // Don't throw here as the profile might have been created
        }
        
        // Step 3: Add profile to the list (if subscription didn't handle it)
        // Fixed: Added required 'id' field for relationship data
        const addToListResponse = await fetch(`https://a.klaviyo.com/api/lists/${KLAVIYO_LIST_ID}/relationships/profiles`, {
            method: 'POST',
            headers: {
                'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Revision': '2023-10-15'
            },
            body: JSON.stringify({
                data: [
                    {
                        type: 'profile',
                        id: profileId // Added required 'id' field
                    }
                ]
            })
        });

        if (!addToListResponse.ok) {
            const errorData = await addToListResponse.json();
            console.error('Klaviyo List API Error:', errorData);
            // Continue as the subscription might have succeeded
        }

        return json({ 
            success: true, 
            message: 'Successfully joined the waitlist!' 
        });

    } catch (error) {
        console.error('Waitlist error:', error);
        return json({ 
            success: false, 
            message: error instanceof Error ? error.message : 'Failed to join waitlist' 
        }, { status: 500 });
    }
};