export function getWordBoolPercentage(
  quiz: any[],
  word: string,
): {
  howManyFalse: number;
  howManyTrue: number;
  percentageTrue: number;
  percentageFalse: number;
  whoWins: boolean;
  quizWithWordTrue: any[];
  quizWithWordFalse: any[];
} {
  const quizWithWord = quiz.filter((thisQuiz) => thisQuiz.q.includes(word));
  const quizWithWordTrue = quizWithWord.filter(
    (thisQuiz) => thisQuiz.a === true,
  );
  const quizWithWordFalse = quizWithWord.filter(
    (thisQuiz) => thisQuiz.a === false,
  );
  const howManyTrue = quizWithWordTrue.length;
  const howManyFalse = quizWithWordFalse.length;
  const percentageTrue = (howManyTrue / quizWithWord.length) * 100;
  const percentageFalse = (howManyFalse / quizWithWord.length) * 100;
  const whoWins = percentageTrue > percentageFalse;
  return {
    howManyFalse,
    howManyTrue,
    percentageTrue,
    percentageFalse,
    whoWins,
    quizWithWordTrue,
    quizWithWordFalse,
  };
}
