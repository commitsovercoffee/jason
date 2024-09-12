<script>
	export let label = '';
</script>

<div>
	<h2 class="border-b-2 border-black text-2xl font-garamod font-bold">{label}</h2>
	<div class="p-2">
		<slot />
	</div>
</div>
