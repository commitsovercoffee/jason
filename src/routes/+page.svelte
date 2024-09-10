<script>
	import { onMount } from 'svelte';

	// Your app state object
	let appState = {
		resumePath: 'resume.json',
		resumeData: null
	};

	// Simulating a function to check for saved data in local storage
	function checkSavedData() {
		const savedData = localStorage.getItem('resumeData');
		if (savedData) {
			appState.resumeData = JSON.parse(savedData);
			return true;
		}
		return false;
	}

	// Function to load the resume.json file
	async function loadResumeJson() {
		try {
			const response = await fetch(appState.resumePath);
			if (!response.ok) {
				throw new Error('Failed to fetch resume.json');
			}
			const jsonData = await response.json();
			appState.resumeData = jsonData;

			// Optionally, save the loaded data into localStorage
			localStorage.setItem('resumeData', JSON.stringify(jsonData));
		} catch (error) {
			console.error('Error loading resume.json:', error);
		}
	}

	onMount(() => {
		// If no saved data is found, load resume.json
		if (!checkSavedData()) {
			loadResumeJson();
		}
	});
</script>

<main>
	{#if appState.resumeData}
		<p>Resume data loaded successfully!</p>
		<!-- Display or use appState.resumeData here -->
		<pre>{JSON.stringify(appState.resumeData, null, 2)}</pre>
	{:else}
		<p>Loading resume data...</p>
	{/if}
</main>
