<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'Feastables Redesign'
	const prefix = 'FeastablesRedesign'

	const badges = ['UI Design', 'Web Dev', 'E-Commerce', 'SvelteKit']

	const description = `Dissatisfied with the original Feastables website, I started  a journey to redesign the site and capture the unique flair of the chocolate brand. My main focus was to integrate micro-animations to create a more interactive and engaging online experience. This redesign aimed to take the brand identity to a new level through visual elements and an improved user experience. Immerse yourself in the redesigned Feastables website and experience the fusion of aesthetic design and engaging animation.`

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
				<h1 style="color: #e9acc5 !important">
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
						href="https://ju-nmd2023.github.io/group-13/"
						target="_blank"
						rel="noopener noreferrer">
						Open Redesign <TopRightArrow
							style="width: 1.5rem; height: 1.5rem; rotate: -45deg" />
					</a>

					<a
						href="https://feastables.com/"
						target="_blank"
						rel="noopener noreferrer">
						Original Page <TopRightArrow
							style="width: 1.5rem; height: 1.5rem; rotate: -45deg" />
					</a>

					<a
						href="https://www.figma.com/file/v9ogfrZwoiQvPvqDey7Yq7/UI?type=design&node-id=0%3A1&mode=design&t=X43xgNwjOcLsKvdh-1"
						target="_blank"
						rel="noopener noreferrer">
						Open Figma Board <TopRightArrow
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
	</div>
</div>

<style>
</style>
