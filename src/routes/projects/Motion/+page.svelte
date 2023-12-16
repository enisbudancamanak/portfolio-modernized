<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'Motion'
	const prefix = 'Motion'

	const badges = ['Motion', 'Blender', 'Premiere Pro', 'After Effects']

	const description = `In addition to my programming skills, I have also developed some motion knowledge over time, even if it may not seem like much, which I would like to present on this page.`

	const countImages = 0
</script>

<svelte:head>
	<title>{projectName} | Enis Budancamanak</title>
	<meta name="description" content={projectName + ' | Enis Budancamanak'} />
</svelte:head>

<div class="projectsDetailWrapper">
	<div class="textBase">
		<div>
			<div class="header">
				<h1>
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
				<!-- <div class="links"></div> -->
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
						alt=""
						loading="lazy" />
				</div>
			{:else}
				<img
					src={base + `/images/projects/${prefix}/${index + 1}.png`}
					alt=""
					loading="lazy" />
			{/if}
		{/each}

		<video
			controls
			src={base + `/images/projects/${prefix}/Svelte5-Teaser.mp4`} />
		<video
			controls
			src={base + `/images/projects/${prefix}/After-Effects-2D.mp4`} />
	</div>
</div>

<style>
</style>
