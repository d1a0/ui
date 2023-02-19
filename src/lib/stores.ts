import { writable } from "svelte/store";
import type { Highlighter } from "./types";

export const highlighter = writable<Highlighter>(undefined);