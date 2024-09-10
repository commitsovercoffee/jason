<script>
	import { onMount } from 'svelte';

	let resumeData = null;

	// Function to check for saved data in local storage
	function checkSavedData() {
		const savedData = localStorage.getItem('resumeData');
		if (savedData) {
			resumeData = JSON.parse(savedData);
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
			resumeData = jsonData;

			// Optionally, save the loaded data into localStorage
			localStorage.setItem('resumeData', JSON.stringify(jsonData));
		} catch (error) {
			console.error('Error loading resume.json:', error);
		}
	}

	// Function to handle JSON file changes
	function handleJsonChange(event) {
		const file = event.target.files[0];

		if (file && file.type === 'application/json') {
			const reader = new FileReader();
			reader.onload = () => {
				try {
					const jsonData = JSON.parse(reader.result);
					resumeData = jsonData;

					// Optionally, save the uploaded data into localStorage
					localStorage.setItem('resumeData', JSON.stringify(jsonData));
				} catch (error) {
					alert('Error parsing JSON file. Please ensure the file contains valid JSON.');
				}
			};
			reader.readAsText(file);
		} else {
			alert('Please select a valid JSON file.');
		}
	}

	// Safe access to nested properties
	function getNestedProperty(obj, path, defaultValue = '') {
		return path
			.split('.')
			.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
	}
</script>

<main>
	<!-- File input to handle JSON uploads -->
	<input type="file" accept=".json" on:change={handleJsonChange} />

	<!-- Use utility function to get nested property safely -->
	<h1 class="font-inter font-light">
		Name: {getNestedProperty(resumeData, 'basics.name', 'Name not available')}
	</h1>
	<h1 class="font-garamod">
		Name: {getNestedProperty(resumeData, 'basics.name', 'Name not available')}
	</h1>
</main>
