<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'AniCafe'
	const prefix = 'AniCafe'

	const badges = ['UI Design', 'App Dev', 'Android Studio', 'REST-API']

	const description = `Together with two other students, I ventured into a comprehensive "redesign" of the app MyAnimeList, an anime tracker. Our goal was to create a product that would not only make it easier to discover new anime, but also allow users to add them to a personalized list and edit them according to their preferences. This creative collaboration resulted in an innovative application that not only improves functionality, but also takes the anime enthusiast experience to a new level. Immerse yourself in our visionary redesign of the MyAnimeList app and experience a more intuitive and engaging way to organize your anime world.`

	const countImages = 4
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
						href="https://github.com/AniCafe-MobileComputing/AniCafe"
						target="_blank"
						rel="noopener noreferrer">
						Link to Project & Download <TopRightArrow
							style="width: 1.5rem; height: 1.5rem; rotate: -45deg" />
					</a>

					<a
						href="https://www.figma.com/file/YyazbCZ9D1hWkGyJoC4go9/UI-Skizzen?type=design&node-id=0%3A1&mode=design&t=nSCuStIfj63neQEC-1"
						target="_blank"
						rel="noopener noreferrer">
						Link to Figma Board <TopRightArrow
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
