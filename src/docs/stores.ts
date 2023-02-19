import { writable } from "$lib/utilities/storage/store";


const defaultTheme = "zimablue";

export const theme = writable<string>("storeTheme",  defaultTheme);