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

	onMount(() => {
		if (!checkSavedData()) {
			loadResumeJson();
		}
	});

	function checkSavedData() {
		const savedData = localStorage.getItem('resumeData');
		if (savedData) {
			resumeData = JSON.parse(savedData);
			console.log(resumeData);
			return true;
		}
		return false;
	}

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

	function getNestedProperty(obj, path, defaultValue = '') {
		return path
			.split('.')
			.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
	}

	const buttonStyle =
		'p-2 rounded-lg bg-white group hover:bg-[#15273c] active:scale-90 transition-all duration-100 ease-in shadow';
</script>

<main
	class="max-w-screen-md mx-auto print:m-0 -mt-32 p-4 flex flex-col bg-white print:shadow-none shadow-lg"
>
	<div class="flex flex-col gap-4 absolute 20"></div>
	<div class="flex flex-col gap-4 absolute -ml-20">
		<a class={buttonStyle} href="/resume.json" download="resume.json">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="group-hover:stroke-white"
				><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
					points="7 10 12 15 17 10"
				/><line x1="12" x2="12" y1="15" y2="3" /></svg
			>
		</a>

		<button class={buttonStyle} on:click={() => document.getElementById('jsonInput').click()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="group-hover:stroke-white"
				><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path
					d="M14 2v4a2 2 0 0 0 2 2h4"
				/><path d="M12 12v6" /><path d="m15 15-3-3-3 3" /></svg
			>
			<input
				id="jsonInput"
				class="hidden"
				type="file"
				accept=".json"
				on:change={handleJsonChange}
			/>
		</button>

		<button class={buttonStyle} on:click={loadResumeJson}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="group-hover:stroke-white"
				><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg
			>
		</button>

		<button
			class={buttonStyle}
			on:click={() => {
				window.print();
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="group-hover:stroke-white"
				><path
					d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
				/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" /><rect
					x="6"
					y="14"
					width="12"
					height="8"
					rx="1"
				/></svg
			>
		</button>
	</div>

	<article>
		<Who basics={getNestedProperty(resumeData, 'basics')} />

		<Section label="Experience">
			<Experience experience={getNestedProperty(resumeData, 'work')} />
		</Section>

		{#if getNestedProperty(resumeData, 'projects').length > 0}
			<Section label="Projects">
				<Projects projects={getNestedProperty(resumeData, 'projects')} />
			</Section>
		{/if}

		<Section label="Education">
			<Education education={getNestedProperty(resumeData, 'education')} />
		</Section>

		{#if getNestedProperty(resumeData, 'certificates').length > 0}
			<Section label="Certificates">
				<Certificates certificates={getNestedProperty(resumeData, 'certificates')} />
			</Section>
		{/if}

		{#if getNestedProperty(resumeData, 'publications').length > 0}
			<Section label="Publications">
				<Publications publications={getNestedProperty(resumeData, 'publications')} />
			</Section>
		{/if}

		{#if getNestedProperty(resumeData, 'awards').length > 0}
			<Section label="Awards">
				<Awards awards={getNestedProperty(resumeData, 'awards')} />
			</Section>
		{/if}

		<Section label="Languages">
			<Languages languages={getNestedProperty(resumeData, 'languages')} />
		</Section>

		<Section label="Skills">
			<Skills skills={getNestedProperty(resumeData, 'skills')} />
		</Section>

		<Section label="Interests">
			<Interests interests={getNestedProperty(resumeData, 'interests')} />
		</Section>

		{#if getNestedProperty(resumeData, 'references').length > 0}
			<Section label="References">
				<References references={getNestedProperty(resumeData, 'references')} />
			</Section>
		{/if}
	</article>
</main>
