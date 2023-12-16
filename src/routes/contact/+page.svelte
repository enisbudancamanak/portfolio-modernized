<script lang="ts">
	import { onMount } from 'svelte'

	onMount(() => {
		// Cursor Elements
		const cursor = document.querySelector('.cursor-dot') as HTMLElement
		const cursorOutline = document.querySelector(
			'.cursor-outline'
		) as HTMLElement

		let elements = document.querySelectorAll('input, textarea, button, h1')
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
	<title>Contact | Enis Budancamanak</title>
	<meta name="description" content="Contact | Enis Budancamanak" />
</svelte:head>

<div class="contentWrapper">
	<div class="textWrapper">
		<h1>
			Let's get in touch! <span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="64"
					height="64"
					viewBox="0 0 64 64"
					class="animate-waving">
					<path
						fill="currentColor"
						d="M5.946 30.785c-2.999 7.189 2.213 15.866 9.784 17.387c-5.9-3.962-9.584-10.327-9.784-17.387" />
					<path
						fill="currentColor"
						d="m15.73 48.172l-.184-.039c.023.006.078.015.184.039M2 44.261c.489 6.02 8.039 9.878 13.457 7.412C9.879 50.475 6.179 49.378 2 44.261m44.504-21.467c3.512-7.168-1.475-16.036-9.055-17.963c5.799 4.233 9.239 10.824 9.055 17.963m2.361-4.946c4.192-3.709 2.502-11.088-2.332-13.49c2.33 4.565 3.151 8.421 2.332 13.49" />
					<path
						fill="currentColor"
						d="M60.519 14.345a5.43 5.43 0 0 0-3.303-1.116c-7.206 0-8.498 9.386-10.097 13.05c0 0-7.389-15.469-9.959-20.573c-2.65-5.265-8.307-4.177-9.964-1.311C23.26.316 15.823 3.609 16.771 8.568c-5.104-.392-7.167 4.643-6.034 7.871c-3.945-.122-5.789 4.757-4.455 8.25c.069.182 7.073 13.966 8.959 18.662c.219.545.44 1.128.672 1.742c1.525 4.032 3.614 9.554 8.84 13.989C27.003 60.991 30.118 62 33.764 62c6.426 0 13.581-3.189 18.229-8.126c4.163-4.421 6.158-9.848 5.77-15.695c-.348-5.256 1.324-10.208 2.667-14.188c1.457-4.319 2.607-7.731.089-9.646m-5.947 23.66c.813 11.628-10.842 21.439-20.73 21.439c-3.021 0-6.15-.488-8.105-2.147c-5.606-4.758-7.013-10.646-8.638-14.684c-1.941-4.831-6.705-14.114-9.014-18.784c-.945-1.912.634-5.981 3.384-5.981L19.4 34.716l3.005 1.804s-6.882-14.998-9.061-20.167c-1.272-3.018.92-6.662 3.874-6.187l9.846 21.016l3.006 1.808L18.594 8.757c-.046-4.295 5.831-4.362 7.197-1.854c3.457 6.348 9.947 20.279 9.947 20.279l3.004 1.807L27.969 6.146c2.104-2.754 5.816-2.368 7.416.975c1.922 4.015 10.061 21.454 10.061 21.454c-8.035 3.012-13.52 11.743-7.777 20.35c-4.557-9.41 3.516-16.06 8.285-18.258c1.805-.833 2.469-2.408 2.469-2.408l-.004.001c.629-1.139.592-2.662 1.342-5.127c1.625-5.335 3.854-8.162 7.125-8.162c.754 0 1.704.564 2.14 1.207c2.203 3.251-5.21 11.023-4.454 21.827" />
				</svg>
			</span>
		</h1>
		<p>
			Fill out the form below if you're interested in working on something
			together.
		</p>
	</div>

	<form>
		<input placeholder="Your Name" type="text" />
		<input placeholder="Your Email" type="email" />
		<textarea placeholder="Your Message" />
		<button
			on:click={() => {
				alert('Form not working :P')
			}}>
			<span>Submit</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="animate-spin">
				<circle cx="12" cy="12" r="10" />
				<path d="M8 12h8" />
				<path d="m12 16 4-4-4-4" />
			</svg>
		</button>
	</form>
</div>

<style>
	.contentWrapper {
		max-width: 400px;
		margin: 0 auto;
	}

	.textWrapper {
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;

		gap: 0.75rem;
		max-width: 300px;
		margin: 2rem auto;
	}

	h1 {
		font-size: clamp(1.5rem, 0.625rem + 4vw, 2rem);
		line-height: 10px;
	}

	p {
		max-width: 30ch;
		line-height: 1.4rem;
		font-size: clamp(0.75rem, 0.625rem + 2vw, 1.25rem);
		color: var(--text-accent);
	}

	form input,
	form textarea,
	form button {
		color: var(--foreground);
		font-size: 14px;
		padding: 1rem 1rem;
		border-radius: var(--radius);
		background-color: var(--card-bg);
		position: relative;
		font-family: 'Satoshi', sans-serif;
		border: 0 !important;
		box-shadow: inset 0 0 5px var(--border);
		transition: all 0.2s ease-in-out;
	}

	form input:focus,
	form textarea:focus {
		outline: none;
		box-shadow: inset 0 0 5px var(--foreground);
	}

	form button:before {
		content: ' ';
		position: absolute;
		z-index: -1;
		top: 4px;
		left: 4px;
		right: 4px;
		bottom: 4px;
		border: 2px solid var(--border);
		border-radius: calc(var(--radius) - 4px);
	}

	form input::placeholder,
	form textarea::placeholder {
		color: var(--text-placeholder);
		font-family: 'Satoshi', sans-serif;
	}

	form button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.5rem;
		font-weight: 500;
		background-color: var(--card-bg-hover);
	}

	form button:hover {
		background-color: var(--card-bg);
		cursor: pointer;
	}

	.animate-spin {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.animate-waving {
		animation: waving 1s alternate infinite ease-in-out;
	}

	@keyframes waving {
		from {
			transform: rotate(-5deg);
		}
		to {
			transform: rotate(30deg);
		}
	}

	@media (min-width: 1440px) {
		.contentWrapper {
			max-width: 600px;
		}

		form {
			max-width: 500px;
		}
	}
</style>
