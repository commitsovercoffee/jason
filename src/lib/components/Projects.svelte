<script>
	export let projects = [
		{
			name: 'Project',
			startDate: '2019-01-01',
			endDate: '2021-01-01',
			description: 'Description...',
			highlights: ['Won award at AIHacks 2016'],
			url: 'https://project.com/'
		}
	];
</script>

<div>
	{#each projects as project}
		<div class="my-4">
			<div class="flex flex-row justify-between">
				<p class="text-xl font-bold">{project.name}</p>
				<p class="italic">{project.startDate} to {project.endDate}</p>
			</div>
			<a href={project.url}>{project.url}</a>
			<p>{project.description}</p>
			<ul>
				{#each project.highlights as highlight}
					<li class="list-disc list-inside">{highlight}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
