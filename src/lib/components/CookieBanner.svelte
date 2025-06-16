<script lang="ts">
  import { onMount } from 'svelte';
  import 'vanilla-cookieconsent/dist/cookieconsent.css'; 
  import * as cookieConsent from 'vanilla-cookieconsent';
  import pluginConfig from '$lib/config/CookieConsentConfig';

  onMount(() => {
    // Initialize the cookie consent banner
    cookieConsent.run(pluginConfig);
    
    // Apply dark mode if needed
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('cc--darkmode');
    }
  });
</script>

<!-- The cookie banner will be injected into the DOM automatically by vanilla-cookieconsent -->