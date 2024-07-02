<script lang="ts">
  import QuizCard from "$lib/QuizCard.svelte";
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
    <div class="border bg-white/50 p-4 rounded-md">
      <h1 class="text-green-400 font-bold text-3xl uppercase">vero</h1>

      <div class="grid gap-2 content-center justify-items-center h-full scale-150">
        {#if wordBoolPercentageObject}
          <div>
            <span class="font-bold text-[6vw]">{wordBoolPercentageObject.howManyTrue}</span>
            <span class="text-[2.5vw]">domande vere</span>
          </div>
          <div>
            <span class="font-bold text-[6vw]">
              {wordBoolPercentageObject.percentageTrue.toFixed(2)}
            </span>
            <span class="text-[3vw]"> % </span>
          </div>
        {/if}
      </div>
    </div>

    <div class="border bg-white/50 p-4 rounded-md">
      <h1 class="text-red-400 font-bold text-3xl uppercase">falso</h1>
    </div>
  </main>
</div>
