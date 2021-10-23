import { Writable, writable } from "svelte/store";

export const CANVAS_SIZE = {
	width: 640,
	height: 480,
};

// Global state for top menu.
export const isFileClicked: Writable<boolean> = writable(false);
export const isEditClicked: Writable<boolean> = writable(false);
export const isViewClicked: Writable<boolean> = writable(false);
export const isBrandClicked: Writable<boolean> = writable(false);

export interface MenuStateStruct {
	Name: string;
	State: Writable<boolean>;
}
export const menuStates: MenuStateStruct[] = [
	{ Name: "File", State: isFileClicked },
	{ Name: "Edit", State: isEditClicked },
	{ Name: "View", State: isViewClicked },
	{ Name: "Brand", State: isBrandClicked },
];
