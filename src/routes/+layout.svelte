<script lang="ts">
	import '../app.css'
	import { ModeWatcher } from 'mode-watcher'
	import { page } from '$app/stores'
	import { base } from '$app/paths'
	import { setupViewTransition } from 'sveltekit-view-transition'
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'

	setupViewTransition()

	// Custom Cursor
	onMount(() => {
		// Cursor Elements
		const cursor = document.querySelector('.cursor-dot') as HTMLElement
		const cursorOutline = document.querySelector(
			'.cursor-outline'
		) as HTMLElement

		let elements = document.querySelectorAll('.navItem')
		// Hover Animation
		elements.forEach((element) => {
			element.addEventListener('mouseover', () => {
				cursor.classList.add('cursor-dot-hover')
				cursorOutline.classList.add('cursor-outline-hover')
			})
			element.addEventListener('mouseleave', () => {
				cursor.classList.remove('cursor-dot-hover')
				cursorOutline.classList.remove('cursor-outline-hover')
			})
		})

		// Click Animation
		document.addEventListener('click', () => {
			cursorOutline.classList.add('cursor-dot-expand')
			setTimeout(() => {
				cursorOutline.classList.remove('cursor-dot-expand')
			}, 100)
		})

		// Cursor Movement
		document.addEventListener('mousemove', (e) => {
			cursor.setAttribute(
				'style',
				'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
			)

			cursorOutline.animate(
				{
					left: `${e.pageX}px`,
					top: `${e.pageY}px`,
				},
				{
					duration: 50,
					fill: 'forwards',
					easing: 'ease-in-out',
				}
			)
		})
	})
</script>

<!-- Library for Dark Mode 
https://github.com/huntabyte/mode-watcher-->
<ModeWatcher />

<!-- Custom Cursor -->
<div class="cursor-dot" />
<div class="cursor-outline" />

<!-- Dotted Background -->
<div class="background" />

<div class="container">
	<!-- Sidebar -->
	<aside
		class:transformLeft={$page.route.id?.split('/').length === 3 ||
			$page.route.id?.includes('brand')}>
		<nav>
			<ul class="navInnerWrapper">
				<li
					class="navItem activeMenu"
					class:activeMenu={$page.route.id === '/'}>
					<button on:click={() => goto(`${base}/`)} class="link">
						Home
					</button>
				</li>
				<li
					class="navItem"
					class:activeMenu={$page.route.id === '/projects'}>
					<button
						on:click={() => goto(`${base}/projects`)}
						class="link">
						Projects</button>
				</li>
				<li
					class="navItem"
					class:activeMenu={$page.route.id === '/brand'}>
					<button on:click={() => goto(`${base}/brand`)} class="link"
						>Branding</button>
				</li>
				<li
					class="navItem"
					class:activeMenu={$page.route.id === '/contact'}>
					<button
						on:click={() => goto(`${base}/contact`)}
						class="link">Contact</button>
				</li>
			</ul>
		</nav>
	</aside>
	<!-- Content -->
	<main class="content">
		<slot />
	</main>
</div>

<style>
	/* Remove default styling for buttons */
	button {
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}

	/* CURSOR */
	@media (min-width: 1024px) {
		:global(.cursor-outline-hover) {
			width: 50px !important;
			height: 50px !important;
			background-color: var(--text-accent);
		}

		:global(.cursor-dot-hover) {
			width: 15px !important;
			height: 15px !important;
		}

		@keyframes expand {
			0% {
				width: 15px;
				height: 15px;
			}
			50% {
				width: 30px;
				height: 30px;
			}
			100% {
				width: 15px;
				height: 15px;
			}
		}

		:global(.cursor-dot-expand) {
			animation: expand 0.2s ease-in-out;
		}

		.cursor-dot {
			position: fixed;
			top: -50px;
			left: -50px;
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background-color: var(--text-accent);
			transform: translate(-50%, -50%);
			transition: all 150ms ease;
			transition-property: width, height, border;
			will-change: width, height, transform, border;
			pointer-events: none;
			z-index: 9999;
		}

		.cursor-outline {
			position: fixed;
			top: -50px;
			left: -50px;
			width: 20px;
			height: 20px;
			border: 2px solid var(--text-accent);
			border-radius: 50%;
			transform: translate(-50%, -50%);
			transition: all 150ms ease;
			transition-property: width, height, border;
			will-change: width, height, transform, border;
			pointer-events: none;
			z-index: 9999;
		}

		.cursor-dot,
		.cursor-outline {
			mix-blend-mode: difference;
		}
	}

	/* BACKGROUND DOTTED BACKGROUND */
	.background {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;

		background: var(--background);
		background-image: radial-gradient(
			var(--card-bg) 1px,
			var(--background) 1px
		);
		background-size: 20px 20px;
	}

	/* MAIN */
	main {
		padding: 2rem;
		display: grid;
		grid-area: content;
		align-items: center;
		justify-content: center;
	}

	.transformLeft {
		transform: translateX(-100%);
	}

	@media (max-width: 1080px) {
		main {
			align-items: unset;
			justify-content: unset;
		}

		.transformLeft {
			transform: translateY(-200%);
		}
	}

	/* Overall Container */
	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-rows: 0fr 1fr;
		grid-template-areas:
			'sidebar'
			'content';
	}

	@media (min-width: 1080px) {
		.container {
			grid-template-rows: unset;
			grid-template-columns: repeat(6, 1fr);
			grid-template-areas: 'sidebar content content content content content';
		}
	}

	/* SIDEBAR */
	nav {
		position: relative;
		border-radius: var(--radius);
		background-color: var(--card-bg);
		box-shadow: inset 0 0 5px rgb(0, 0, 0, 0.15);
		border: 1px solid var(--border);
		min-width: 125px;
	}

	.navInnerWrapper > li {
		list-style-type: none;
		padding: 0.75rem;
		transition: all 0.2s ease-in-out;
	}

	aside {
		transition: all 0.3s cubic-bezier(0.36, -0.01, 0, 0.77);

		grid-area: sidebar;
		display: grid;
		justify-content: center;
		align-items: center;
		max-width: 100%;
	}

	.navInnerWrapper {
		display: flex;
		flex-direction: row;

		gap: 1rem;
		padding: 0rem 1rem;
	}

	aside {
		margin-top: 2rem;
	}

	@media (min-width: 1080px) {
		.navInnerWrapper {
			display: flex;
			flex-direction: column;

			justify-content: center;
			align-items: center;

			gap: 1rem;
			padding: 0rem;
		}
		aside {
			margin-top: unset;
		}
	}

	.activeMenu {
		background-color: var(--text-dark-hover);
		box-shadow: inset 0 0 10px rgba(var(--accent), 0.4);
		border-radius: var(--radius);
		font-weight: 600;
	}

	.navItem:not(.activeMenu):hover {
		color: var(--text-hover);
	}

	@media (min-width: 1440px) {
		nav {
			min-width: 180px;
		}

		nav a {
			font-size: 1.2rem;
		}
	}
</style>
