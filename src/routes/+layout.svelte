<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import { siteConfig } from "$lib/config/meta";
	import CookieBanner from "$lib/components/CookieBanner.svelte";
	import "../app.css";
	let { children } = $props();
</script>

<svelte:head>
	<title>{siteConfig.name}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords.join(', ')} />
	
	<!-- Open Graph -->
	<meta property="og:title" content={siteConfig.name} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:image" content={siteConfig.ogImage} />
	<meta property="og:url" content={siteConfig.url} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={siteConfig.name} />
	<meta property="twitter:description" content={siteConfig.description} />
	<meta property="twitter:image" content={siteConfig.ogImage} />
</svelte:head>

<ModeWatcher />

{@render children()}

<CookieBanner />