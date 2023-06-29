<script lang="ts">
  import { lives, score, state, time } from "../stores/game"

  state.subscribe(val => {
    if (!val) return stopGame()

    lives.set(3)
    score.set(0)
    time.set(0)
  })

  let interval = setInterval(() => {
    time.update(time => time + 1)
  }, 1000)

  function stopGame() {
    state.set(false)
    clearInterval(interval)
  }
</script>

<section class="p-10 pb-0 flex flex-col gap-10">
  <header class="flex select-none cursor-default justify-between">
    <h1 class="text-4xl">Score:{$score}</h1>
    <h1 class="text-4xl">Lives:{$lives}</h1>
    <h1 class="text-4xl">Time:{$time}</h1>
  </header>

  <footer>
    <div class="flex justify-center">
      <button
        on:click={stopGame}
        class="text-3xl p-4 border hover:bg-white hover:text-black"
      >
        Stop game
      </button>
    </div>
  </footer>
</section>
