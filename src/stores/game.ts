import { writable } from "svelte/store"

export const score = writable<number>(0)
export const lives = writable<number>(0)
export const time = writable<number>(0)
export const state = writable<boolean>(false)
