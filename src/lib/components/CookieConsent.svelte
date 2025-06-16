<script lang="ts">
  import { onMount } from 'svelte';
  import cookieConsent from 'vanilla-cookieconsent';
  import pluginConfig from '$lib/config/CookieConsentConfig';

  onMount(() => {
    cookieConsent.run(pluginConfig);
  });

  function openPreferences() {
    cookieConsent.showPreferences();
    return false; // Prevent default link behavior
  }
</script>

<a href="#" on:click|preventDefault={openPreferences}>
  Show Cookie Preferences
</a>