<script lang="ts">
  import Game from "./lib/Game.svelte"
  import Info from "./lib/Info.svelte"
  import StartPage from "./lib/StartPage.svelte"
  import { state } from "./stores/game"
</script>

<main class="bg-gray-800 h-screen relative text-white flex flex-col">
  {#if !$state}
    <StartPage />
  {/if}

  {#if $state}
    <Info />
    <Game />
  {/if}
</main>

<style lang="postcss">
  @font-face {
    font-family: "ARCADE_I";
    src: url("fonts/arcade/ARCADE_I.TTF");
  }
</style>
