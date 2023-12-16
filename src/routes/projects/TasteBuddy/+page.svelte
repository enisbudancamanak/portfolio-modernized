<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'TasteBuddy'
	const prefix = 'TasteBuddy'

	const badges = ['Brand Development']

	const description = `
	"A sustainable and sugar-free solution for adding flavor to a meal or beverage"
	<br><br>
	In this project "TasteBuddy" I worked together with my Girlfriend and we combined our passion for 3D design with the pursuit of sustainable innovation. Inspired by leading projects such as TasteDrops and IronFish, We created a unique brand that revitalizes boring food and drinks with a sustainable twist. TasteBuddy, an innovative character, allows endless taste personalization and is designed to provide a sustainable and creative solution through easy cleaning after each use. Immerse yourself in the world of TasteBuddy, where design, sustainability and culinary enjoyment meet.`

	const countImages = 15
</script>

<svelte:head>
	<title>{projectName} | Enis Budancamanak</title>
	<meta name="description" content={projectName + ' | Enis Budancamanak'} />
</svelte:head>

<div class="projectsDetailWrapper">
	<div class="textBase">
		<div>
			<div class="header">
				<h1 style="color: #da6baa !important;">
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
					{@html description}
				</p>
				<div class="links">
					<a
						href="https://www.canva.com/design/DAF148Igyb8/axjvdfdnf3AkgA978WdwSA/edit?utm_content=DAF148Igyb8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
						target="_blank"
						rel="noopener noreferrer">
						Presentation <TopRightArrow
							style="width: 1.5rem; height: 1.5rem; rotate: -45deg" />
					</a>
					<a
						href="https://enisbudancamanak.github.io/tasteBuddy-landingPage-demonstration/ready/"
						target="_blank"
						rel="noopener noreferrer">
						Landing Page Demonstration <TopRightArrow
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

				<img
					src={base + `/images/projects/${prefix}/logo.gif`}
					alt="" />
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
