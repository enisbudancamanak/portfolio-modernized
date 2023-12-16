<script>
	import { goto } from '$app/navigation'
	import { base } from '$app/paths'
	import LogoCanvas from '$lib/components/LogoCanvas.svelte'
	import BackArrow from '~icons/material-symbols/arrow-back-ios-new-rounded'

	const projectName = 'Personal Branding'
	const prefix = 'PersonalBranding'

	const badges = ['Personal Branding']

	const description = `Welcome to my brand philosophy! 
	<br> <br>
	I'm Enis Budancamanak, an upcoming freelance web developer from Germany. I have been creating websites and turning ideas into digital reality for over 6 years. For me, it's not just a job, but a journey exploring what's possible in the online world. Join me on this adventure where I bring a range of web skills to make things happen. 
	<br> <br>
	Let's do something amazing together! :)`

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
					<button class="backArrow" on:click={() => goto(base + '/')}>
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
				<!-- <div class="links"></div> -->
			</div>
		</div>
	</div>
	<div class="imagesBase small-margin">
		{#each Array(countImages) as element, index}
			{#if index === 0}
				<div id="logoWrapper">
					<LogoCanvas />
				</div>
				<div>
					<img
						src={base +
							`/images/projects/${prefix}/${index + 1}.png`}
						alt="" />
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
	@media (max-width: 768px) {
		#logoWrapper {
			min-height: 0 !important;
			max-height: 200px;
		}
	}

	#logoWrapper {
		pointer-events: none !important;
		width: 100%;
		height: 100%;
		min-height: 400px;
		display: grid;
		place-items: center;
	}
</style>
