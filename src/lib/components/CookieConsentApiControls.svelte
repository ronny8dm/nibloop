<script lang="ts">
  import * as cookieConsent from 'vanilla-cookieconsent';
  import pluginConfig from '$lib/config/CookieConsentConfig';

  function acceptAndHide(acceptType: string | string[]) {
    cookieConsent.acceptCategory(acceptType);
    cookieConsent.hide();
  }

  function resetPlugin() {
    cookieConsent.reset(true);
    cookieConsent.run(pluginConfig);
  }

  function toggleDarkMode() {
    document.documentElement.classList.toggle('cc--darkmode');
  }
</script>

<div class="p-6 bg-gray-100 rounded-lg shadow-md">
  <p class="text-lg font-semibold text-gray-800 mb-4">API Calls:</p>
  <div class="flex flex-wrap gap-4">
    <button 
      type="button" 
      class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      on:click={() => cookieConsent.showPreferences()}
    >
      Show Preferences Modal
    </button>
    <button 
      type="button" 
      class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      on:click={() => acceptAndHide('all')}
    >
      Accept All
    </button>
    <button 
      type="button" 
      class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
      on:click={() => acceptAndHide([])}
    >
      Accept Necessary
    </button>
    <button 
      type="button" 
      class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      on:click={resetPlugin}
    >
      Reset Plugin
    </button>
    <button 
      type="button" 
      class="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      on:click={toggleDarkMode}
    >
      Toggle Dark Mode
    </button>
  </div>
</div>