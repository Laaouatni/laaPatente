<script lang="ts">
  import quizData from "$lib/quizData";
  import { recursiveObjectToArray } from "$lib/recursiveObjectToArray";
  import { getWordBoolPercentage } from "$lib/getWordBoolPercentage";

  const allQuiz = recursiveObjectToArray(quizData);

  let word = "";

  $: wordBoolPercentageObject = getWordBoolPercentage(allQuiz, word);
</script>

<div class="p-4 grid gap-4 h-full grid-rows-[auto_1fr]">
  <nav class="grid">
    <input
      bind:value={word}
      type="text"
      class="shadow rounded-md text-2xl p-3 border-4 border-transparent focus:shadow-2xl focus:border-gray-200 focus:rounded-xl !outline-none transition"
      placeholder="scrivi..."
    />
  </nav>

  <main class="grid grid-cols-2 gap-4">
    <div
      class="border bg-white/50 p-4 rounded-md {wordBoolPercentageObject.whoWins
        ? 'border-8 rounded-2xl shadow bg-green-400/10 border-green-500'
        : ''}"
    >
      <h1 class="text-green-400 font-bold text-3xl uppercase">vero</h1>

      {#if wordBoolPercentageObject}
        <div class="flex flex-col">
          <div>
            <span class="font-bold text-[8vw]"
              >{wordBoolPercentageObject.howManyTrue}</span
            >
            <span class="text-[4vw]">domande vere</span>
          </div>
          <div>
            <span class="font-bold text-[10vw]">
              {wordBoolPercentageObject.percentageTrue.toFixed(2)}
            </span>
            <span class="text-[5vw]"> % </span>
          </div>
        </div>
      {/if}

      {#if wordBoolPercentageObject.quizWithWordTrue.length === 0}
        <div class="text-center text-gray-400">Nessuna domanda</div>
      {:else}
        <div class="overflow-scroll grid gap-6 shadow-md rounded-lg p-3 border-4 border-white bg-white/50">
          {#each wordBoolPercentageObject.quizWithWordTrue as thisTrueQuizObj, i}
            <div>{i + 1} - {thisTrueQuizObj.q}</div>
          {/each}
        </div>
      {/if}
    </div>

    <div
      class="border bg-white/50 p-4 rounded-md {!wordBoolPercentageObject.whoWins
        ? 'border-8 rounded-2xl shadow bg-red-400/10 border-red-500'
        : ''}"
    >
      <h1 class="text-red-400 font-bold text-3xl uppercase">falso</h1>

      {#if wordBoolPercentageObject}
        <div class="flex flex-col">
          <div>
            <span class="font-bold text-[8vw]"
              >{wordBoolPercentageObject.howManyFalse}</span
            >
            <span class="text-[4vw]">domande false</span>
          </div>
          <div>
            <span class="font-bold text-[10vw]">
              {wordBoolPercentageObject.percentageFalse.toFixed(2)}
            </span>
            <span class="text-[5vw]"> % </span>
          </div>
        </div>
      {/if}

      {#if wordBoolPercentageObject.quizWithWordFalse.length === 0}
        <div class="text-center text-gray-400">Nessuna domanda</div>
      {:else}
        <div class=" overflow-scroll grid gap-6 shadow-md rounded-lg p-3 border-4 border-white bg-white/50">
          {#each wordBoolPercentageObject.quizWithWordFalse as thisFalseQuizObj, i}
            <div>{i + 1} - {thisFalseQuizObj.q}</div>
          {/each}
        </div>
      {/if}
    </div>
  </main>
</div>
