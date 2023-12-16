<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'Slime Hero'
	const prefix = 'SlimeHero'

	const badges = ['Game Dev', 'Phaser 3', 'JavaScript']

	const description = `Slime Hero is an addictive 2D Metroidvania, Action-RPG-Adventure web game developed by a creative team of three dedicated students. Players take control of "Slime" and journey through a fantastical and mysterious world. Along the way, they will be accompanied by an enchanting fairy-like creature named Fairy. Together, they set out to unravel the mysteries of unknown lands and find answers to questions about their identity and their mysterious stay in this world. Immerse yourself in the charming atmosphere of Slime Hero and experience an exciting adventure full of action, puzzles and discoveries.`

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
				<h1 style="color: #64427a !important">
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
						href="https://slimehero.netlify.app/"
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

		<video controls src={base + `/images/projects/${prefix}/game.mp4`} />
	</div>
</div>

<style>
</style>
