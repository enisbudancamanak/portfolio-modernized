<script lang="ts">
	import { T } from '@threlte/core'
	import { Float, OrbitControls } from '@threlte/extras'
	import Logo from './models/logo.svelte'
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 0, 10]}
	fov={20}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0)
	}}>
	<OrbitControls
		enabled={false}
		autoRotate
		enableDamping
		autoRotateSpeed={10}
		enableZoom={false} />
</T.PerspectiveCamera>

<T.AmbientLight intensity={1} />

<!-- <Float rotationIntensity={2.5} rotationSpeed={5}> -->
<Logo scale={150} position={[0, 0, 0]} />
<!-- </Float> -->
