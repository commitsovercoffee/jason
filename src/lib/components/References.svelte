<script>
	export let references = [
		{
			name: 'Jane Doe',
			reference: 'Reference…'
		}
	];
</script>

<div>
	{#each references as reference}
		<div class="my-4">
			<p class="font-bold">{reference.name}</p>
			<p>{reference.reference}</p>
		</div>
	{/each}
</div>
