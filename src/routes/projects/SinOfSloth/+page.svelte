<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'Sin Of Sloth'
	const prefix = 'SinOfSloth'

	const badges = ['Game Dev', 'HTML, CSS & JavaScript', 'Phaser 3']

	const description = `In a team of five, where I was the lead developer, we developed "Sin Of Sloth". The pixel art 2D platform game deals with the everyday fears and stress in the life of a student who finds himself in an endless nightmare. The level environment combines everyday life and absurd fantasies as the main character tries to escape the pursuit of a giant hand. The deliberate choice of an endless level structure and teleporters emphasizes the inability to distinguish reality from fantasy, while collected items represent everyday objects.`

	const countImages = 2
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
				<div class="links">
					<a
						href="https://enisbudancamanak.github.io/SinOfSlothWebsite/"
						target="_blank"
						rel="noopener noreferrer">
						Play it yourself! <TopRightArrow
							style="width: 1.5rem; height: 1.5rem; rotate: -45deg" />
					</a>
				</div>
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

		<video controls src={base + `/images/projects/${prefix}/website.mp4`} />
		<video controls src={base + `/images/projects/${prefix}/game.mp4`} />
	</div>
</div>

<style>
</style>
