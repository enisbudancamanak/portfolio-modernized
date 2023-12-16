<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'

	const { transition } = setupViewTransition()

	const projectName = 'Toyroom'
	const prefix = 'Toyroom'

	const badges = ['Game Dev', 'Unity', 'Blender']

	const description = `In this project, my girlfriend and I worked together to create a sandbox game. The basic idea was to give players a free experience without a fixed goal by allowing them to run around freely in the game world using an active ragdoll function. Another focus was a parkour element where players could interact with different objects in a child's room. The integration of a cannon made it possible to shoot the player in the desired direction using ragdoll physics, adding a dynamic dimension to the game.`

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
				<h1 style="color: #622b81 !important">
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

		<video
			controls
			src={base + `/images/projects/${prefix}/videocompressed.mp4`} />
	</div>
</div>

<style>
</style>
