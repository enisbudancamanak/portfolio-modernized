<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'
	import TopRightArrow from '~icons/ic/baseline-arrow-forward'

	const { transition } = setupViewTransition()

	const projectName = 'Wagenfeld Redesign'
	const prefix = 'WagenfeldRedesign'

	const badges = ['Web Dev', 'WebGL', 'SvelteKit']

	const description = `In a collaborative project with two other students, we have created an impressive minimalistic product. Our goal was to develop a redesign in cooperation with the Wagenfeld Haus in Bremen that would give the exhibition a special, modern touch. By combining design aesthetics and functionality, we have created a contemporary and appealing reinterpretation that highlights the unique characteristics of the Wagenfeld Haus. Immerse yourself in this innovative redesign and experience how minimalist design blurs the boundaries between aesthetics and functionality in a captivating way.`

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
				<h1 style="color: #b62cc4 !important;">
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
						href="https://wagenfeld-redesign.netlify.app/"
						target="_blank"
						rel="noopener noreferrer">
						Open Redesign <TopRightArrow
							style="width: 1.5rem; height: 1.5rem; rotate: -45deg" />
					</a>

					<a
						href="https://wilhelm-wagenfeld-stiftung.de/"
						target="_blank"
						rel="noopener noreferrer">
						Original Page <TopRightArrow
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
