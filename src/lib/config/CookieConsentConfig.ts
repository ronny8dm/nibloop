import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    console.log('onFirstAction fired');
  },

  onConsent: function ({ cookie }) {
    console.log('onConsent fired ...');
  },

  onChange: function ({ changedCategories, cookie }) {
    console.log('onChange fired ...');
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
  },

  language: {
    default: 'en',

    translations: {
      en: {
        consentModal: {
          title: "We value your privacy",
          description:
            'Nibloop uses cookies to enhance your browsing experience, analyze site traffic, and serve personalized content. By clicking "Accept All", you consent to our use of cookies. <a href="/legal/cookies" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          showPreferencesBtn: 'Manage Preferences',
          footer: `
            <a href="/legal/privacy">Privacy Policy</a>
            <a href="/legal/terms">Terms & Conditions</a>
          `,
        },
        preferencesModal: {
          title: 'Cookie Preferences',
          acceptAllBtn: 'Accept All',
          acceptNecessaryBtn: 'Reject All',
          savePreferencesBtn: 'Save Preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details, please read our <a href="/legal/privacy" class="cc__link">Privacy Policy</a>.',
            },
            {
              title: 'Strictly Necessary Cookies',
              description: 'These cookies are essential for the website to function properly.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Performance and Analytics Cookies',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Service',
                  description: 'Description',
                  expiration: 'Expiration',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description: 'Cookie set by Google Analytics.',
                    expiration: 'Expires after 12 days',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description: 'Cookie set by Google Analytics.',
                    expiration: 'Session',
                  },
                ],
              },
            },
            {
              title: 'More Information',
              description:
                'For any queries regarding our cookie policy, please <a href="/contact" class="cc__link">contact us</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;
