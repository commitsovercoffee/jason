<script>
	export let certificates = [
		{
			name: 'Certificate',
			date: '2021-11-07',
			issuer: 'Company',
			url: 'https://certificate.com'
		}
	];
</script>

<div>
	{#each certificates as certificate}
		<div class="my-4">
			<div class="flex flex-row justify-between">
				<a href={certificate.url} class="text-xl font-bold">{certificate.name}</a>
				<p class="italic">{certificate.date}</p>
			</div>
			<p>{certificate.issuer}</p>
		</div>
	{/each}
</div>
