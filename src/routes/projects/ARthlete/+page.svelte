<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'

	const { transition } = setupViewTransition()

	const projectName = 'ARthlete'
	const prefix = 'ARthlete'

	const badges = ['App Dev', 'Augmented Reality', 'Unity', 'Image Tracking']

	const description = `In a creative team with three other students, we created the fascinating project "ARthlete". This innovative augmented reality application offers a unique way to explore fitness exercises. From any perspective, users can immerse themselves in the world of the demonstrated exercises and experience them interactively. ARthlete takes the fitness experience to a new level, allowing users to view movements from multiple angles. This project combines technology and fitness in a compelling way, creating an immersive environment to give users a unique experience. Immerse yourself in the world of ARthlete and experience fitness in a new dimension.`

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
				<h1 style="color: #bb7b00 !important;">
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
