<script lang="ts">
	import Bubble from '$lib/components/Bubble.svelte'

	import { mode, toggleMode } from 'mode-watcher'

	// Icons
	import GitHubIcon from '~icons/mdi/github'
	import CVIcon from '~icons/academicons/cv'
	import MailIcon from '~icons/simple-icons/maildotru'
	import LinkedInIcon from '~icons/entypo-social/linkedin-with-circle'
	import MoonIcon from '~icons/material-symbols/dark-mode'
	import SunIcon from '~icons/material-symbols/clear-day-rounded'
	import { base } from '$app/paths'
	import { onMount } from 'svelte'
	import LogoCanvas from '$lib/components/LogoCanvas.svelte'

	onMount(() => {
		// Cursor Elements
		const cursor = document.querySelector('.cursor-dot') as HTMLElement
		const cursorOutline = document.querySelector(
			'.cursor-outline'
		) as HTMLElement

		let elements = document.querySelectorAll('.card')
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
	})
</script>

<svelte:head>
	<title>Enis Budancamanak</title>
	<meta name="description" content="Enis Budancamanak" />
</svelte:head>

<div class="bento-layout">
	<!-- Name-Box -->
	<div id="nameWrapper" class="div1 card">
		<h1>Enis <Bubble /></h1>
		<h2>Budancamanak</h2>
	</div>
	<!-- Image-Box -->
	<div id="imageWrapper" class="div2 card" />

	<!-- About-Box -->
	<div id="aboutWrapper" class="div3 card">
		<h2>About me</h2>
		<p>
			As a full-stack developer with over 6 years of experience, I have a
			wide range of skills in web and app development. I am passionate
			about developing innovative solutions and using the latest
			technologies to create stunning websites and apps. My current
			passion is developing with SvelteKit & Threlte. I am convinced that
			SvelteKit & Threlte are the future of web development. They allow
			developers to focus on what's most important: creating great user
			experiences. If you are looking for an experienced and skilled
			full-stack developer who can help you develop and deploy your web
			applications, then I am the right person for you.
		</p>
	</div>

	<!-- SocialIcons-Box -->
	<div class="div4 card">
		<div class="iconsWrapper">
			<a
				href="https://github.com/enisbudancamanak"
				target="_blank"
				class="icon">
				<GitHubIcon />
			</a>
			<a href={`${base}/files/CV.pdf`} target="_blank" class="icon">
				<CVIcon />
			</a>
			<a href="mailto:enis.budancamanak@hotmail.com" class="icon">
				<MailIcon />
			</a>
			<a
				href="https://www.linkedin.com/in/enisbu/"
				target="_blank"
				class="icon">
				<LinkedInIcon />
			</a>
		</div>
	</div>
	<!-- ThemeSwitch-Box -->
	<div class="cursor-pointer div5 card">
		<button on:click={toggleMode}>
			{#if $mode === 'light'}
				<MoonIcon style="width: 42px; height: 42px" />
			{:else}
				<SunIcon style="width: 42px; height: 42px" />
			{/if}
		</button>
	</div>

	<div class="grid-item div6 card" id="logoWrapper">
		<div>
			<LogoCanvas />
		</div>
	</div>

	<a
		href={base + '/projects/FeastablesRedesign'}
		class="grid-item div7 card"
		id="recentProject">
		<p>Recent Project</p>
	</a>
</div>

<style>
	:global(#nameWrapper svg) {
		position: absolute;
	}

	#nameWrapper h1 {
		font-size: clamp(3.5rem, 0.625rem + 6vw, 4rem);
		line-height: 1rem;
	}

	#nameWrapper h2 {
		font-size: clamp(2.5rem, 1.7143rem + 2.2857vw, 2.5rem);
		line-height: 0;
		margin-left: 2px;
	}

	#aboutWrapper {
		overflow: hidden;
	}

	#aboutWrapper h2 {
		font-size: clamp(2rem, 1.7143rem + 2.2857vw, 2.5rem);
		line-height: 10px;
	}

	#logoWrapper div {
		max-width: 100%;
		max-height: 100%;
	}

	#imageWrapper::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.8;
		background-image: url('/images/portrait.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		filter: drop-shadow(0 0 2rem black);

		transition: all 0.4s ease-in-out;
	}

	#imageWrapper:hover:after {
		opacity: 1;
		filter: drop-shadow(0 0 0.5rem black);
	}

	#imageWrapper {
		min-height: 250px;
	}

	/* Recent Project */
	#recentProject {
		min-height: 150px;
		display: grid;
		place-items: center;
		cursor: pointer;
		text-decoration: none;
		color: unset;
	}

	#recentProject p {
		text-align: center;
		font-size: 1.5rem;
		font-weight: bold;
	}

	#recentProject::before {
		content: '';
		position: absolute;
		inset: 1;

		background-image: url('/images/projects/FeastablesRedesign/1.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.cursor-pointer {
		cursor: pointer;
	}

	.card button {
		all: unset;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		min-height: 100px;
	}

	.iconsWrapper {
		width: 100%;
		height: 100%;
		min-height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	/* Bento Layout */
	.bento-layout {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1rem;
	}

	/* mobile breakpoint */
	@media (max-width: 768px) {
		#aboutWrapper p {
			font-size: 1rem !important;
			text-align: justify;
		}
	}

	/* tablet breakpoint */
	@media (min-width: 768px) and (max-width: 1080px) {
		.bento-layout {
			display: unset;
			columns: 2;
			gap: 1rem;
		}

		.card {
			margin-bottom: 1rem;
		}
	}

	/* desktop breakpoint */
	@media (min-width: 1080px) {
		#nameWrapper h1 {
			line-height: 2.5px;
		}

		#aboutWrapper p {
			font-size: clamp(0.8rem, 1vw, 1rem) !important;
			display: -webkit-box;
			-webkit-line-clamp: 12;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: justify;
		}

		/* The following .bento-layout and following .div(x) are generated by https://cssgrid-generator.netlify.app/ 2023-10-26 */
		.bento-layout {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-rows: repeat(6, 1fr);
			grid-column-gap: 1rem;
			grid-row-gap: 1rem;
			max-height: 550px;
		}

		/* 
    grid-row-start
    grid-column-start
    grid-row-end
    grid-column-end 
    */
		.div1 {
			grid-area: 1 / 1 / 3 / 3;
		}
		.div2 {
			grid-area: 3 / 1 / 7 / 3;
		}
		.div3 {
			grid-area: 1 / 3 / 5 / 5;
		}
		.div4 {
			grid-area: 5 / 3 / 7 / 5;
		}
		.div5 {
			grid-area: 1 / 5 / 3 / 7;
		}
		.div6 {
			grid-area: 3 / 5 / 5 / 7;
		}
		.div7 {
			grid-area: 5 / 5 / 7 / 7;
		}
	}

	/* bigger desktop breakpoint */
	@media (min-width: 1440px) {
		.bento-layout {
			max-width: 1440px;
		}
	}
</style>
