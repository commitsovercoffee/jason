<script>
	export let publications = [
		{
			name: 'Publication',
			publisher: 'Company',
			releaseDate: '2014-10-01',
			url: 'https://publication.com',
			summary: 'Description…'
		}
	];
</script>

<div>
	{#each publications as publication}
		<div class="my-4">
			<div class="flex flex-row justify-between">
				<a href={publication.url} class="text-xl font-bold">{publication.name}</a>
				<p class="italic">{publication.releaseDate}</p>
			</div>
			<p class="italic">{publication.publisher}</p>
			<p>{publication.summary}</p>
		</div>
	{/each}
</div>
