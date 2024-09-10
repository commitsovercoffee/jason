<script>
	import { onMount } from 'svelte';

	// Your app state object
	let appState = {
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

	onMount(() => {
		// If no saved data is found, load resume.json
		if (!checkSavedData()) {
			loadResumeJson();
		}
	});

	// Function to load the resume.json file
	async function loadResumeJson() {
		try {
			const response = await fetch('/resume.json');
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

	function handleJsonChange(event) {
		const file = event.target.files[0];

		if (file && file.type === 'application/json') {
			const reader = new FileReader();
			reader.onload = () => {
				try {
					const jsonData = JSON.parse(reader.result);
					appState.resumeData = jsonData; // Assuming you want to store the JSON data in appState
				} catch (error) {
					alert('Error parsing JSON file. Please ensure the file contains valid JSON.');
				}
			};
			reader.readAsText(file);
		} else {
			alert('Please select a valid JSON file.');
		}
	}
</script>

<main>
	<div class="flex flex-row items-center print:space-x-0 space-x-4">
		<button class="p-2 bg-red-200" on:click={loadResumeJson}> Reset </button>
		<button class="p-2 bg-sky-200" on:click={() => document.getElementById('jsonInput').click()}>
			Upload
			<input
				id="jsonInput"
				type="file"
				accept=".json"
				on:change={handleJsonChange}
				class="hidden"
			/>
		</button>
	</div>
	{#if appState.resumeData}
		<p>Resume data loaded successfully!</p>
		<!-- Display or use appState.resumeData here -->
		<pre>{JSON.stringify(appState.resumeData, null, 2)}</pre>
	{:else}
		<p>Loading resume data...</p>
	{/if}
</main>
