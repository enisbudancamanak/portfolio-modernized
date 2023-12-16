<script lang="ts">
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'

	const { transition } = setupViewTransition()

	const projects = [
		'Motion',
		'AlbumCover',
		'TasteBuddy',
		'FeastablesRedesign',
		'AniCafe',
		'ARthlete',
		'WagenfeldRedesign',
		'Toyroom',
		'CarShowcase',
		'SlimeHero',
		'SinOfSloth',
		'ShioriList',
		'InteractiveGraphics',
	]
</script>

<svelte:head>
	<title>Projects | Enis Budancamanak</title>
	<meta name="description" content="Projects | Enis Budancamanak" />
</svelte:head>

<article class="projects-wrapper">
	{#each projects as project}
		<!-- svelte-ignore a11y-missing-content -->
		<a
			use:transition={project}
			href={`${base}/projects/${project}`}
			class="projectItem"
			style={`background-image: url(${base}/images/projects/${project}/1.png`} />
	{/each}
</article>

<style>
	@media (max-width: 1080px) {
		.projects-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			gap: 1rem;
			width: 100%;
		}

		.projects-wrapper .projectItem {
			width: 50%;
			aspect-ratio: 16/9;
			background-size: cover;
			background-position: center;
			border-radius: var(--radius);
			max-width: 350px;
			outline: 2px solid var(--border);
		}
	}

	@media (max-width: 768px) {
		.projects-wrapper .projectItem {
			width: 100% !important;
		}
	}

	@media (min-width: 1080px) {
		.projects-wrapper {
			--size: 92.5px;
			display: grid;
			grid-template-columns: repeat(6, var(--size));
			grid-auto-rows: var(--size);
			place-items: start center;
			margin-bottom: var(--size);
			gap: 2px;
		}

		.projects-wrapper .projectItem {
			position: relative;

			width: calc(var(--size) * 2);
			height: calc(var(--size) * 2);
			object-fit: cover;
			background-size: cover;
			background-position: center;
			grid-column: auto / span 2;
			border-radius: var(--radius);
			clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
			background-color: var(--card-bg);

			transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
		}

		.projects-wrapper .projectItem:nth-child(5n - 1) {
			grid-column: 2 / span 2;
		}

		.projects-wrapper .projectItem:hover {
			clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%);
			width: calc(var(--size) * 3.5);
			z-index: 999;
			cursor: pointer;
			/* scale: 1.1; */
		}

		.projectItem:not(.projectItem:hover) {
			filter: brightness(0.4);
		}
	}

	@media (min-width: 1440px) {
		.projects-wrapper {
			--size: 150px;
		}
	}
</style>
