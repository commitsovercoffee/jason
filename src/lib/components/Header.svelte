<script>
	import FeatureItem from '$lib/components/FeatureItem.svelte';

	export let title = 'Enter Title Here';
	export let subtitle = 'Enter subtitle here';
</script>

<div class="print:hidden bg-[#d5e8e4] pt-20 pb-40">
	<div class="max-w-screen-md mx-auto flex flex-col items-center gap-4">
		<h1 class="text-center font-bold text-4xl text-[#16423C]">
			{title}
		</h1>
		<p class="text-center opacity-80">
			{subtitle}
		</p>
		<div class="flex flex-row">
			<FeatureItem label="No Signup">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-log-in"
					><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline
						points="10 17 15 12 10 7"
					/><line x1="15" x2="3" y1="12" y2="12" /></svg
				>
			</FeatureItem>
			<FeatureItem label="No Telemetry">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-user-round-search"
					><circle cx="10" cy="8" r="5" /><path d="M2 21a8 8 0 0 1 10.434-7.62" /><circle
						cx="18"
						cy="18"
						r="3"
					/><path d="m22 22-1.9-1.9" /></svg
				>
			</FeatureItem>

			<FeatureItem label="Open Source">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-code"
					><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg
				>
			</FeatureItem>
		</div>
	</div>
</div>
