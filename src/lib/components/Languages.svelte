<script>
	export let languages = [
		{
			language: 'English',
			fluency: 'Native speaker'
		}
	];
</script>

<div>
	{#each languages as language}
		<div class="my-4">
			<ul>
				<li class="list-none list-inside">
					<span class="font-bold">{language.language}:</span>
					{language.fluency}
				</li>
			</ul>
		</div>
	{/each}
</div>
