<script>
	export let interests = [
		{
			name: 'Wildlife',
			keywords: ['Ferrets', 'Unicorns']
		}
	];
</script>

<div>
	{#each interests as interest}
		<div class="my-4">
			<ul>
				<li class="list-none list-inside">
					<p>
						<span class="font-bold">{interest.name}:</span>
						{#each interest.keywords as keyword}
							{keyword} <span class="last:hidden">, </span>
						{/each}
					</p>
				</li>
			</ul>
		</div>
	{/each}
</div>
