<script lang="ts">
	import { menuStates } from "../../store";
	import type { MenuStateStruct } from "../../store";
	import type { Writable } from "svelte/store";

	// binding for matching state
	export let nameState: Writable<boolean>;
	export let nameString: string;

	// create a local subscriber
	let componentState: boolean;

	nameState.subscribe((v) => {
		componentState = v;
	});
	function clickDropdown(e: Event): void {
		e.preventDefault();
		menuStates.map((ms) => {
			if (nameString == ms.Name) {
				ms.State.set(!componentState);
				console.log(ms.Name, componentState);
			} else {
				ms.State.set(false);
				console.log(ms.Name, componentState);
			}
		});
	}
</script>

<button on:click={clickDropdown}>
	{nameString}
</button>
<div class={componentState ? "show" : "hidden"}>
	<slot />
</div>

<style>
	.show {
		position: fixed;
		transform: translate(20px, 22px);
		visibility: visible;
		width: 120px;
		height: 120px;
		border: 2px solid red;
	}
	.hidden {
		position: fixed;
		visibility: hidden;
	}
</style>
