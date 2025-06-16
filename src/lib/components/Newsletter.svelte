<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Checkbox } from "$lib/components/ui/checkbox";
    import {
        Dialog,
        DialogContent,
        DialogDescription,
        DialogHeader,
        DialogTitle,
        DialogTrigger,
    } from "$lib/components/ui/dialog";
    import SuccessModal from "$lib/components/SuccessModal.svelte";

    let name = '';
    let email = '';
    let loading = false;
    let newsletterModalOpen = false;
    let successModalOpen = false;
    let privacyPolicyAccepted = false;
    let termsAccepted = false;
    
    // Error states
    let errors = {
        name: false,
        email: false,
        policies: false
    };
    let formSubmitted = false;

    async function handleSubmit() {
        formSubmitted = true;
        
        // Reset errors
        errors = {
            name: !name,
            email: !email,
            policies: !privacyPolicyAccepted || !termsAccepted
        };
        
        // If any errors exist, return early
        if (errors.name || errors.email || errors.policies) {
            return;
        }

        loading = true;
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    name, 
                    email,
                    privacyPolicyAccepted,
                    termsAccepted,
                    acceptedAt: new Date().toISOString()
                })
            });

            const data = await response.json();
            
            if (!response.ok) throw new Error(data.message);
            
            // Close newsletter modal and open success modal
            newsletterModalOpen = false;
            successModalOpen = true;
            
            // Reset form
            name = '';
            email = '';
            privacyPolicyAccepted = false;
            termsAccepted = false;
            formSubmitted = false;
        } catch (error) {
            console.error('Waitlist submission error:', error);
        } finally {
            loading = false;
        }
    }
    
    function closeSuccessModal() {
        successModalOpen = false;
    }
</script>

<Dialog bind:open={newsletterModalOpen}>
    <DialogTrigger>
        <Button variant="default">
            Join Waitlist
        </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
            <DialogTitle>Join Our Waitlist</DialogTitle>
            <DialogDescription>
                Be the first to know when we launch. Get exclusive early access to our platform.
            </DialogDescription>
        </DialogHeader>
        <form on:submit|preventDefault={handleSubmit} class="grid gap-4 py-4">
            <div class="grid gap-2">
                <label for="name" class="text-sm font-medium">
                    Name
                </label>
                <Input
                    id="name"
                    bind:value={name}
                    placeholder="Enter your name"
                    disabled={loading}
                    class={errors.name && formSubmitted ? "border-red-500" : ""}
                />
                {#if errors.name && formSubmitted}
                    <p class="text-red-500 text-xs mt-1">Please enter your name</p>
                {/if}
            </div>
            <div class="grid gap-2">
                <label for="email" class="text-sm font-medium">
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    bind:value={email}
                    placeholder="Enter your email"
                    disabled={loading}
                    class={errors.email && formSubmitted ? "border-red-500" : ""}
                />
                {#if errors.email && formSubmitted}
                    <p class="text-red-500 text-xs mt-1">Please enter your email</p>
                {/if}
            </div>

            <!-- GDPR Compliance Checkboxes -->
            <div class="space-y-4 pt-3">
                <div class="flex items-start space-x-2">
                    <Checkbox id="privacy" bind:checked={privacyPolicyAccepted} />
                    <div class="grid gap-1.5 leading-none">
                        <Label 
                            for="privacy" 
                            class="text-sm text-muted-foreground font-normal"
                        >
                            I have read and agree to the <a href="/legal/privacy" class="text-primary hover:underline" data-sveltekit-reload>Privacy Policy</a>
                        </Label>
                    </div>
                </div>
                
                <div class="flex items-start space-x-2">
                    <Checkbox id="terms" bind:checked={termsAccepted} />
                    <div class="grid gap-1.5 leading-none">
                        <Label 
                            for="terms" 
                            class="text-sm text-muted-foreground font-normal"
                        >
                            I accept the <a href="/legal/terms" class="text-primary hover:underline" data-sveltekit-reload>Terms and Conditions</a>
                        </Label>
                    </div>
                </div>
                
                {#if errors.policies && formSubmitted}
                    <p class="text-red-500 text-xs">Please accept the privacy policy and terms</p>
                {/if}
            </div>

            <Button type="submit" disabled={loading} class="mt-2">
                {loading ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    </DialogContent>
</Dialog>

<SuccessModal bind:open={successModalOpen} onClose={closeSuccessModal} />