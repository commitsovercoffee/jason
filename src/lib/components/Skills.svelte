<script>
	export let skills = [
		{
			name: 'Web Development',
			level: 'Master',
			keywords: ['HTML', 'CSS', 'JavaScript']
		}
	];
</script>

<ul class="my-4">
	{#each skills as skill}
		<li class="list-none list-inside">
			<p>
				<span class="font-bold">{skill.name}:</span>
				{#each skill.keywords as keyword}
					{keyword} <span class="last:hidden">, </span>
				{/each}
			</p>
		</li>
	{/each}
</ul>
