(function () {
// Ensure global objects exist
window.schoolData = window.schoolData || {};
window.quizData = window.quizData || {};

// Create data structure for Class 10
window.schoolData["Class"] = window.schoolData["Class"] || {};

// Add History subject
window.schoolData["Class"]["Subject"] = {
topics: {
"Topic 1": {
notes: [
{
title: "",
content: ''
},
{title: "",
content: ''
}
],
longQuestions: [           {        question:               '',             answer: '',
},
],
shortQuestions: [{
question: "",
answer:
"",
} ],
multipleChoiceQuestions: [
{
question:
"ସମ୍ବଳ କହିଲେ ପରିବେଶର କେଉଁ ପଦାର୍ଥକୁ ବୁଝାଏ?",
options: ['କେବଳ ପ୍ରାକୃତିକ ପଦାର୍ଥ','କେବଳ ମାନବକୃତ ପଦାର୍ଥ','ପ୍ରାଦ୍ୟୋଗିକ ଦୃଷ୍ଟିକୋଣରୁ ସୁଗମ୍ୟ, ଆର୍ଥିକ ଦୃଷ୍ଟିକୋଣରୁ ସମ୍ଭବ ଏବଂ ସାଂସ୍କୃତିକ ଦୃଷ୍ଟିକୋଣରୁ ଗ୍ରହଣଯୋଗ୍ୟ ପଦାର୍ଥ','ଯେକୌଣସି ଅବ୍ୟବହୃତ ପଦାର୍ଥ' ],
answer:'ପ୍ରାଦ୍ୟୋଗିକ ଦୃଷ୍ଟିକୋଣରୁ ସୁଗମ୍ୟ',
correct: 2,
},
{
question:'',
options:[],
}
],

    audio: [   {
                    title: "",
                    description: "",
                   src: "", // Placeholder, update path if needed
                },], // Placeholder ଭାରତ ଓ ଓଡ଼ିଶାରେ ଅସହଯୋଗ ଆନ୍ଦୋଳନ
    video: [], // Placeholder
  },

},
};
window.quizData["subject"] = window.quizData["subject"] || {};
window.quizData["subject"]["subjectName"] = [
{
question: "MCQ from your file...",
options: ["Option A", "Option B", "Option C", "Option D"],
correct: 0,
},
];
})();