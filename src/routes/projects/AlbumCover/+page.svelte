<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'

	const { transition } = setupViewTransition()

	const projectName = 'Album Cover'
	const prefix = 'AlbumCover'

	const badges = ['Graphic Design', 'Album Cover']

	const description = `In the world of visual aesthetics, I jumped at the opportunity to design the album cover for the unique band "Cigarettes After Sex". In a melting pot of creative passion and musical inspiration, I created a black and white symphony that not only graces the cover of their albums, but also captures the feel and atmosphere of their unique soundscape. Immerse yourself in my visual interpretation and be mesmerized by the nuanced shades of gloom that reflect the essence of "Cigarettes After Sex".`

	const countImages = 6
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
	</div>
</div>

<style>
</style>
