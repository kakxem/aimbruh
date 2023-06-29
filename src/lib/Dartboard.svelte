<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte"
  export let x: number
  export let y: number

  const dispatch = createEventDispatcher()
  let isAlive: boolean = true
  let hit: boolean = false
  let timeout: NodeJS.Timeout

  $: if (!isAlive) {
    destroyDartboard("lives")
  }

  onMount(() => {
    timeout = setTimeout(() => {
      isAlive = false
    }, 4000)
  })

  function onHit() {
    clearTimeout(timeout)
    hit = true
    destroyDartboard("score")
  }

  function destroyDartboard(type: "lives" | "score") {
    dispatch("destroyDartboard", { type })
  }
</script>

<svg
  style={`left: ${x}px; top: ${y}px;`}
  class={`select-none absolute z-10 circle ${hit && "hidden"}`}
  on:click={onHit}
  on:keydown={() => {}}
  viewBox="0 0 500 500"
  width="100"
  height="100"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    style="stroke: rgb(0, 0, 0); fill: rgb(255, 0, 0);"
    cx="250"
    cy="250"
    r="205.356"
  />
  <circle
    style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"
    cx="250"
    cy="250"
    r="173.381"
  />
  <circle
    style="stroke: rgb(0, 0, 0); fill: rgb(255, 0, 0);"
    cx="250"
    cy="250"
    r="141.64"
  />
  <circle
    style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"
    cx="250"
    cy="250"
    r="108.705"
  />
  <circle
    style="stroke: rgb(0, 0, 0); fill: rgb(255, 0, 0);"
    cx="250"
    cy="250"
    r="71.461"
  />
  <circle
    style="stroke: rgb(0, 0, 0); fill: rgb(255, 255, 255);"
    cx="250"
    cy="250"
    r="40.094"
  />
</svg>

<style>
  @keyframes pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(0);
      display: none;
    }
  }

  /* animation of 5 seconds */
  circle {
    animation: pulse 4s;
    transform-origin: center;
  }
</style>
