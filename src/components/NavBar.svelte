<script lang="ts">
	import type { Writable } from "svelte/store";
	import BrandDropdown from "./Dropdowns/BrandDropdown.svelte";
	import DropdownLayout from "./Dropdowns/DropdownLayout.svelte";
	import EditDropdown from "./Dropdowns/EditDropdown.svelte";
	import FileDropdown from "./Dropdowns/FileDropdown.svelte";

	import { isFileClicked, isEditClicked, isBrandClicked } from "../store";

	interface NavOptionsStruct {
		Name: string;
		Content: any;
		isOpen: Writable<boolean>;
	}

	// problem: need to deconstruct array into state values,
	// need them to go into those top nav options.
	const topnavOptions: NavOptionsStruct[] = [
		{
			Name: "File",
			Content: FileDropdown,
			isOpen: isFileClicked,
		},
		{
			Name: "Edit",
			Content: EditDropdown,
			isOpen: isEditClicked,
		},
	];

	// TIME
	let currentDate = new Date();
	let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
</script>

<!-- COMP LAYOUT -->
<nav>
	<div class="left-nav">
		<BrandDropdown />
		{#each topnavOptions as navItem}
			<DropdownLayout
				nameString={navItem.Name}
				nameState={navItem.isOpen}
			/>
		{/each}
	</div>
	<div class="right-menu">
		<ul class="right-menu-items">
			<li>
				{currentTime}
			</li>
			<span>:</span>
			<li>Find Yourself</li>
		</ul>
	</div>
</nav>

<style>
	nav {
		margin: 0;
		padding: 0;
		display: flex;
		height: 100%;
		flex-direction: row;
		background: lightgray;
		justify-content: space-between;

		/* shadow and stuff */
		box-shadow: 0px 1px 2px black;
	}
	.left-nav {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	.right-menu {
		display: flex;
		flex-direction: row;
	}
	.right-menu ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		list-style: none;
		align-items: center;
	}
	.right-menu li {
		padding-left: 1em;
		padding-right: 1em;
	}
	.nav-item {
		list-style: none;
		text-align: center;
		background: none;
		border: none;
	}
	button {
		text-transform: uppercase;
		text-rendering: optimizeSpeed;
	}
</style>
