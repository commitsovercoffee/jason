<script>
	export let awards = [
		{
			title: 'Award',
			date: '2014-11-01',
			awarder: 'Company',
			summary: 'There is no spoon.'
		}
	];
</script>

<div>
	{#each awards as award}
		<div class="my-4">
			<div class="flex flex-row justify-between">
				<p class="text-xl font-bold">{award.title}</p>
				<p class="italic">{award.date}</p>
			</div>
			<p class="italic">{award.awarder}</p>
			<p>{award.summary}</p>
		</div>
	{/each}
</div>
