<script async script lang="ts">
  import { lives, score, state } from "../stores/game"
  import Dartboard from "./Dartboard.svelte"

  let dartboards: DartboardProps[] = []
  let boardWidth: number
  let boardHeight: number
  let intervalTime: number = 1000

  state.subscribe(val => {
    if (!val) return

    dartboards = []
    startGame()
  })

  lives.subscribe(lives => {
    if (lives === 0) {
      state.set(false)
    }
  })

  async function startGame() {
    while ($state) {
      await new Promise(resolve => setTimeout(resolve, intervalTime))

      dartboards = [
        ...dartboards,
        {
          x: Math.floor(Math.random() * (boardWidth - 100)),
          y: Math.floor(Math.random() * (boardHeight - 100)),
        },
      ]
    }
  }

  function destroyDartboard(type: "lives" | "score") {
    if (type === "score") return increaseScore()
    if (type === "lives") reduceLives()
  }

  function reduceLives() {
    lives.update(lives => lives - 1)
  }

  function increaseScore() {
    score.update(score => score + 1)
    if (intervalTime > 500) intervalTime = intervalTime -= 20
  }
</script>

<section class="bg-gray-900 flex flex-grow m-10 mt-5 rounded-xl">
  <div
    class="h-full w-full relative"
    bind:clientWidth={boardWidth}
    bind:clientHeight={boardHeight}
  >
    <div class="h-full w-full" on:click={reduceLives} on:keydown={() => {}} />
    {#each dartboards as dartboard}
      <Dartboard
        on:destroyDartboard={({ detail }) => destroyDartboard(detail.type)}
        x={dartboard.x}
        y={dartboard.y}
      />
    {/each}
  </div>
</section>
