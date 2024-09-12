<script>
	import Social from './Social.svelte';

	export let basics = {
		name: 'John Doe',
		label: 'Programmer',
		image: '',
		email: 'john@gmail.com',
		phone: '(912) 555-4321',
		url: 'https://johndoe.com',
		summary:
			'A summary of John Doe… Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.',
		location: {
			address: '2712 Broadway St',
			postalCode: 'CA 94115',
			city: 'San Francisco',
			countryCode: 'US',
			region: 'California'
		},
		profiles: [
			{
				network: 'Twitter',
				username: 'john',
				url: 'https://twitter.com/john'
			}
		]
	};
</script>

<div class="p-2">
	<h1 class="text-4xl text-center font-garamod font-bold">{basics.name}</h1>
	<div class="my-4 flex flex-row justify-center flex-wrap gap-4">
		<div class="flex flex-row gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-map-pin"
				><path
					d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
				/><circle cx="12" cy="10" r="3" /></svg
			>
			<p>{basics.location.city}, {basics.location.region} {basics.location.countryCode}</p>
		</div>

		<div class="flex flex-row gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-mail"
				><rect width="20" height="16" x="2" y="4" rx="2" /><path
					d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				/></svg
			>
			<p>{basics.email}</p>
		</div>

		<div class="flex flex-row gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-phone"
				><path
					d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
				/></svg
			>
			<p>{basics.phone}</p>
		</div>

		<div class="flex flex-row gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-link"
				><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path
					d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
				/></svg
			>
			<a href={basics.url}>{basics.url}</a>
		</div>

		{#each basics.profiles as profile}
			<div class="flex flex-row gap-2">
				<Social network={profile.network} />
				<a href={profile.url}>{profile.username}</a>
			</div>
		{/each}
	</div>
	<p>{basics.summary}</p>
</div>
