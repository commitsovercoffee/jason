<script>
	export let experience = [
		{
			name: 'Company',
			position: 'President',
			url: 'https://company.com',
			startDate: '2013-01-01',
			endDate: '2014-01-01',
			summary: 'Description…',
			highlights: ['Started the company']
		},

		{
			name: 'Company',
			position: 'President',
			url: 'https://company.com',
			startDate: '2013-01-01',
			endDate: '2014-01-01',
			summary: 'Description…',
			highlights: ['Started the company']
		}
	];
</script>

<div>
	{#each experience as e}
		<div class="my-4">
			<div class="flex flex-row justify-between">
				<p class="text-xl font-bold">{e.position}</p>
				<p class="italic">{e.startDate} to {e.endDate}</p>
			</div>
			<a href={e.url}>{e.name}</a>
			<p>{e.summary}</p>
			<ul>
				{#each e.highlights as highlight}
					<li class="list-disc list-inside">{highlight}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
