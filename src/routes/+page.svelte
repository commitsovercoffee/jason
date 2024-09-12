<script>
	import Awards from '$lib/components/Awards.svelte';
	import Certificates from '$lib/components/Certificates.svelte';
	import Education from '$lib/components/Education.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Interests from '$lib/components/Interests.svelte';
	import Languages from '$lib/components/Languages.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Publications from '$lib/components/Publications.svelte';
	import References from '$lib/components/References.svelte';
	import Section from '$lib/components/Section.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Who from '$lib/components/Who.svelte';
	import { onMount } from 'svelte';

	var resumeData = {
		basics: {
			name: '',
			label: '',
			image: '',
			email: '',
			phone: '',
			url: '',
			summary: '',
			location: {
				address: '',
				postalCode: '',
				city: '',
				countryCode: '',
				region: ''
			},
			profiles: [
				{
					network: '',
					username: '',
					url: ''
				}
			]
		},
		work: [
			{
				name: '',
				position: '',
				url: '',
				startDate: '',
				endDate: '',
				summary: '',
				highlights: ['']
			}
		],
		volunteer: [
			{
				organization: '',
				position: '',
				url: '',
				startDate: '',
				endDate: '',
				summary: '',
				highlights: ['']
			}
		],
		education: [
			{
				institution: '',
				url: '',
				area: '',
				studyType: '',
				startDate: '',
				endDate: '',
				score: '',
				courses: ['']
			}
		],
		awards: [
			{
				title: '',
				date: '',
				awarder: '',
				summary: ''
			}
		],
		certificates: [
			{
				name: '',
				date: '',
				issuer: '',
				url: ''
			}
		],
		publications: [
			{
				name: '',
				publisher: '',
				releaseDate: '',
				url: '',
				summary: ''
			}
		],
		skills: [
			{
				name: '',
				level: '',
				keywords: ['']
			}
		],
		languages: [
			{
				language: '',
				fluency: ''
			}
		],
		interests: [
			{
				name: '',
				keywords: ['']
			}
		],
		references: [
			{
				name: '',
				reference: ''
			}
		],
		projects: [
			{
				name: '',
				startDate: '',
				endDate: '',
				description: '',
				highlights: [''],
				url: ''
			}
		]
	};

	// Function to check for saved data in local storage
	function checkSavedData() {
		const savedData = localStorage.getItem('resumeData');
		if (savedData) {
			resumeData = JSON.parse(savedData);
			console.log(resumeData);
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

<main
	class="print:m-0 max-w-screen-md mx-auto -mt-32 px-6 py-8 flex flex-col space-y-6 bg-white print:shadow-none shadow-lg"
>
	<a class="p-2 border shadow" href="/resume.json" download="resume.json">
		<button>Download Resume</button>
	</a>

	<input class="border shadow p-2" type="file" accept=".json" on:change={handleJsonChange} />

	<button class="p-2 border shadow" on:click={loadResumeJson}>Reset</button>

	<article>
		<Who basics={getNestedProperty(resumeData, 'basics')} />
		<Section label="Education">
			<Education education={getNestedProperty(resumeData, 'education')} />
		</Section>
		<Section label="Experience">
			<Experience experience={getNestedProperty(resumeData, 'work')} />
		</Section>
		<Section label="Projects">
			<Projects projects={getNestedProperty(resumeData, 'projects')} />
		</Section>
		<Section label="Certificates">
			<Certificates certificates={getNestedProperty(resumeData, 'certificates')} />
		</Section>
		<Section label="Publications">
			<Publications publications={getNestedProperty(resumeData, 'publications')} />
		</Section>

		<Section label="Awards">
			<Awards awards={getNestedProperty(resumeData, 'awards')} />
		</Section>
		<Section label="Languages">
			<Languages languages={getNestedProperty(resumeData, 'languages')} />
		</Section>
		<Section label="Skills">
			<Skills skills={getNestedProperty(resumeData, 'skills')} />
		</Section>

		<Section label="Interests">
			<Interests interests={getNestedProperty(resumeData, 'interests')} />
		</Section>

		<Section label="References">
			<References references={getNestedProperty(resumeData, 'references')} />
		</Section>
	</article>
</main>
