export const sampleQuestion = {
  longQuestions: [{ question: "", answer: "" }],
  shortQuestions: [
    {
      question: "",
      answer: "",
    },
  ],
  multipleChoiceQuestions: convertQuestions(magnetQuestions, 'MCQ'),

  audio: [
    {
      title: "",
      description: "",
      src: "", // Placeholder, update path if needed
    },
  ], // Placeholder ଭାରତ ଓ ଓଡ଼ିଶାରେ ଅସହଯୋଗ ଆନ୍ଦୋଳନ
  video: [], // Placeholder
};


function convertQuestions(magnetQuestions, questionType = 'MCQ') {
  return {
    multipleChoiceQuestions: magnetQuestions
      .filter(q => q.type === questionType)
      .map(q => {
        // Find the index of the correct answer
        const correctIndex = q.options.findIndex(option => option === q.answer);
        
        return {
          question: q.question,
          options: q.options,
          answer: q.answer,
          correct: correctIndex
        };
      })
  };
}
console.log(sampleQuestion)