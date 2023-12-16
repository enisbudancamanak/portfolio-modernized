<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'

	const { transition } = setupViewTransition()

	const projectName = 'Car Showcase'
	const prefix = 'CarShowcase'

	const badges = ['Experimental', 'WebGL', 'SvelteKit']

	const description = `During International Week (University), we were given a unique opportunity to unleash our creativity. My project for the week was to create a car showcase. The professor provided me with a car model to use as a starting point. The resulting product now allows you to immerse yourself in the fascinating 3D world of the car and create custom configurations. The showcase provides an immersive experience that allows viewers to explore and experience the car in different variations. Immerse yourself in this innovative 3D world and experience the diversity and customization of a car in an unprecedented dimension.`

	const countImages = 3
</script>

<svelte:head>
	<title>{projectName} | Enis Budancamanak</title>
	<meta name="description" content={projectName + ' | Enis Budancamanak'} />
</svelte:head>

<div class="projectsDetailWrapper">
	<div class="textBase">
		<div>
			<div class="header">
				<h1 style="color: #9e198b !important;">
					<button
						class="backArrow"
						on:click={() => goto(base + '/projects')}>
						<BackArrow style="width: 2rem; height: 2rem;" />
					</button>
					{projectName}
				</h1>
			</div>
			<div class="small-margin">
				<div class="badges">
					{#each badges as badge}
						<div class="badge">{badge}</div>
					{/each}
				</div>
				<p class="project-description">
					{description}
				</p>
			</div>
		</div>
	</div>
	<div class="imagesBase small-margin">
		{#each Array(countImages) as element, index}
			{#if index === 0}
				<div>
					<img
						use:transition={prefix}
						src={base +
							`/images/projects/${prefix}/${index + 1}.png`}
						alt="" />
				</div>
			{:else}
				<img
					src={base + `/images/projects/${prefix}/${index + 1}.png`}
					alt="" />
			{/if}
		{/each}

		<video controls src={base + `/images/projects/${prefix}/video.mp4`} />
	</div>
</div>

<style>
</style>
