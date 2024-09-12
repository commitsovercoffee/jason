<script>
	export let education = [
		{
			institution: 'University',
			url: 'https://institution.com/',
			area: 'Software Development',
			studyType: 'Bachelor',
			startDate: '2011-01-01',
			endDate: '2013-01-01',
			score: '4.0',
			courses: ['DB1101 - Basic SQL']
		},
		{
			institution: 'University',
			url: 'https://institution.com/',
			area: 'Software Development',
			studyType: 'Bachelor',
			startDate: '2011-01-01',
			endDate: '2013-01-01',
			score: '4.0',
			courses: ['DB1101 - Basic SQL']
		}
	];
</script>

<div>
	{#each education as e}
		<div class="my-4">
			<div class="flex flex-row justify-between">
				<p class="text-xl font-bold">{e.institution}</p>
				<p class="italic">{e.startDate} to {e.endDate}</p>
			</div>
			<p>{e.area}</p>
			<p>{e.studyType} ({e.score})</p>
			<ul>
				{#each e.courses as course}
					<li class="list-disc list-inside">{course}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
