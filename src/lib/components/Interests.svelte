<script>
	export let interests = [
		{
			name: 'Wildlife',
			keywords: ['Ferrets', 'Unicorns']
		}
	];
</script>

<ul class="my-4">
	{#each interests as interest}
		<li class="list-none list-inside">
			<p>
				<span class="font-bold">{interest.name}:</span>
				{#each interest.keywords as keyword}
					{keyword} <span class="last:hidden">, </span>
				{/each}
			</p>
		</li>
	{/each}
</ul>
