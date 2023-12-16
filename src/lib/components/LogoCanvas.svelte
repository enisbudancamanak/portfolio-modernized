<script lang="ts">
	import { Canvas } from '@threlte/core'
	import Scene from './LogoScene.svelte'
	import { Environment } from '@threlte/extras'
	import { base } from '$app/paths'
</script>

<Canvas rendererParameters={{ antialias: true }}>
	<Environment
		path={base + '/hdrs/'}
		files="small_empty_room_3_1k.hdr"
		isBackground={false}
		format="hdr" />
	<Scene />
</Canvas>
