<script>
	export let languages = [
		{
			language: 'English',
			fluency: 'Native speaker'
		}
	];
</script>

<ul class="my-4">
	{#each languages as language}
		<li class="list-none list-inside">
			<span class="font-bold">{language.language}:</span>
			{language.fluency}
		</li>
	{/each}
</ul>
