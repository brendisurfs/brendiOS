<script lang="ts">
	import { menuStates } from "../../store";
	interface DropOption {
		Name: string;
		Content: string;
	}
	const dropdownOptions = [{ Name: "About", Content: "About This Site" }];

	let showMenu: boolean = false;

	function clickBrand(e: Event) {
		e.preventDefault();
		console.log("menu is: ", showMenu);
	}
</script>

<button class="brand-button" on:click={clickBrand}>brand</button>
<div class={showMenu ? "show" : "hidden"}>
	{#each dropdownOptions as option}
		<button class="menu-btn">
			{option.Name}
		</button>
	{/each}
</div>

<style>
	.brand-button {
		padding-left: 1em;
		margin: 0;
		border: none;
		background: none;
	}

	.menu-btn {
		width: 100%;
		border: 0;
		border-radius: 0;
	}
	.show {
		position: absolute;
		transform: translate(0px, 22px);
		visibility: visible;
		width: 120px;
		height: 120px;
	}
	.hidden {
		position: fixed;
		visibility: hidden;
	}
</style>
