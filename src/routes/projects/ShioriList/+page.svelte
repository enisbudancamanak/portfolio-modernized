<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'

	const { transition } = setupViewTransition()

	const projectName = 'ShioriList'
	const prefix = 'ShioriList'

	const badges = ['Web Dev', 'Angular', 'REST-API']

	const description = `As the head of the programming team, I played a key role in the development of "ShioriList". The concept is based on the idea of a website where users can manage their anime and manga experiences. Inspired by the "MyAnimeList" platform, the vision was to create a more modern and user-friendly version. Focusing on functionalities such as list management, user profiles and community interaction, we developed an Angular-based website. Users can maintain their personal anime and manga lists, submit ratings, personalize profiles and interact in an anime community.`

	const countImages = 7
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
	</div>
</div>

<style>
</style>
