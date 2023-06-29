<script lang="ts">
  import { score, state, time } from "../stores/game"

  function startGame() {
    state.set(true)
  }
</script>

{#if !$state}
  <div
    class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="flex flex-col gap-20">
      <header
        class="flex items-center flex-col select-none cursor-default justify-between gap-4"
      >
        <h1 class="text-4xl">Score:{$score}</h1>
        <h1 class="text-4xl">Time:{$time}</h1>
      </header>
      <button
        on:click={startGame}
        class="text-3xl p-4 border hover:bg-white hover:text-black"
      >
        Start game
      </button>
    </div>
  </div>
{/if}
