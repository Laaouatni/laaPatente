export function getWordBoolPercentage(quiz: any[], word: string) {
  const quizWithWord = quiz.filter((thisQuiz) => thisQuiz.q.includes(word));
  const howManyTrue = quizWithWord.filter((thisQuiz) => thisQuiz.a === true).length;
  const howManyFalse = quizWithWord.filter((thisQuiz) => thisQuiz.a === false).length;
  const percentageTrue = (howManyTrue / quizWithWord.length) * 100;
  const percentageFalse = (howManyFalse / quizWithWord.length) * 100;
  return { howManyFalse, howManyTrue, percentageTrue, percentageFalse };
}