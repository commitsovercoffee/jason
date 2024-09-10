<script>
	import '../app.css';

	// Supports weights 100-900
	import '@fontsource-variable/inter';

	import '@fontsource/cormorant-garamond';
	import '@fontsource/cormorant-garamond/400-italic.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div>
	<Header
		title="Instant resume, for the impatient."
		subtitle="Download, edit, upload & puff, your perfect resume."
	/>
	<slot />

	<Footer repo="jason" />
</div>
