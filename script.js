// --- Application State ---
let currentClass = "";
let currentSubject = "";
let currentTopic = "";
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let selectedAnswer = null; // Stores the index of the currently selected option for the quiz

// --- DOM Element References ---
const homePage = document.getElementById("home-page");
const subjectPage = document.getElementById("subject-page");
const topicPage = document.getElementById("topic-page");
const contentPage = document.getElementById("content-page");
const quizPage = document.getElementById("quiz-page");

const classGrid = document.getElementById("class-grid");
const selectedClassTitle = document.getElementById("selected-class-title");
const subjectGrid = document.getElementById("subject-grid");
const selectedSubjectTitle = document.getElementById("selected-subject-title");
const topicGrid = document.getElementById("topic-grid");
const topicTitle = document.getElementById("topic-title");

const notesContent = document.getElementById("notes-content");
const mcqContent = document.getElementById("mcq-content");
const questionsContent = document.getElementById("questions-content");
const mediumQuestionsContent = document.getElementById("medium-questions-content");
const longQuestionsContent = document.getElementById("long-questions-content");
const audioContent = document.getElementById("audio-content");
const videoContent = document.getElementById("video-content");

const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const questionText = document.getElementById("question-text");
const quizOptionsContainer = document.getElementById("quiz-options");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const quizContentDiv = document.getElementById("quiz-content");
const quizResultsDiv = document.getElementById("quiz-results");
const finalScoreSpan = document.getElementById("final-score");
const scoreMessageP = document.getElementById("score-message");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", init);

function init() {
  // schoolData and quizData are now expected to be populated globally
  // by the individual data files loaded in index.html
  if (typeof window.schoolData === 'undefined' || typeof window.quizData === 'undefined') {
    console.error("Data files not loaded correctly. Make sure schoolData and quizData are defined.");
    alert("Error: Educational data could not be loaded. Please check the console for details.");
    return;
  }
  displayClasses();
}

// --- Navigation Functions ---
function showPage(pageToShow) {
  [homePage, subjectPage, topicPage, contentPage, quizPage].forEach((page) => {
    page.classList.add("hidden");
  });
  pageToShow.classList.remove("hidden");
}

function showHomePage() {
  showPage(homePage);
}

function showSubjectPage() {
  showPage(subjectPage);
}

function showTopicPage() {
  showPage(topicPage);
}

function showContentPage() {
  showPage(contentPage);
}

function showQuizPage() {
  showPage(quizPage);
}

// --- Content Display Functions ---

function displayClasses() {
  classGrid.innerHTML = "";
  // Use window.schoolData which is populated by separate files
  Object.keys(window.schoolData).forEach((className) => {
    const classCard = document.createElement("button");
    classCard.className = "class-card";
    classCard.textContent = className;
    classCard.onclick = () => selectClass(className);
    classGrid.appendChild(classCard);
  });
}

function selectClass(className) {
  currentClass = className;
  selectedClassTitle.textContent = `Select Subject - ${className}`;
  displaySubjects(className);
  showSubjectPage();
}

function displaySubjects(className) {
  subjectGrid.innerHTML = "";
  // Use window.schoolData
  Object.keys(window.schoolData[className]).forEach((subjectName) => {
    const subjectCard = document.createElement("button");
    subjectCard.className = "subject-card";
    subjectCard.textContent = subjectName;
    subjectCard.onclick = () => selectSubject(subjectName);
    subjectGrid.appendChild(subjectCard);
  });
}

function selectSubject(subjectName) {
  currentSubject = subjectName;
  selectedSubjectTitle.textContent = `Select Topic - ${currentClass} - ${subjectName}`;
  displayTopics(currentClass, subjectName);
  showTopicPage();
}

function displayTopics(className, subjectName) {
  topicGrid.innerHTML = "";
  // Use window.schoolData
  const subjectTopics = window.schoolData[className][subjectName].topics;
  Object.keys(subjectTopics).forEach((topicName) => {
    const topicCard = document.createElement("button");
    topicCard.className = "topic-card";
    topicCard.textContent = topicName;
    topicCard.onclick = () => selectTopic(topicName);
    topicGrid.appendChild(topicCard);
  });
}

function selectTopic(topicName) {
  currentTopic = topicName;
  loadTopicContent(currentClass, currentSubject, topicName);
  showContentPage();
}

function loadTopicContent(className, subjectName, topicName) {
  // Use window.schoolData
  const topicData = window.schoolData[className][subjectName].topics[topicName];

  topicTitle.textContent = `${className} - ${subjectName} - ${topicName}`;

  renderNotes(topicData.notes);
  renderMCQs(topicData.multipleChoiceQuestions);
  renderShortQuestions(topicData.shortQuestions);
  renderMediumQuestions(topicData.mediumQuestions);
  renderLongQuestions(topicData.longQuestions);
  renderAudioContent(topicData.audio);
  renderVideoContent(topicData.video);
}

function renderNotes(notes) {
  notesContent.innerHTML = "";
  if (notes && notes.length > 0) {
    notes.forEach((note) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note-item";
      noteDiv.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            `;
      notesContent.appendChild(noteDiv);
    });
  } else {
    notesContent.innerHTML =
      '<p class="info-message">No notes available for this topic.</p>';
  }
}

function renderMCQs(mcqs) {
  mcqContent.innerHTML = "";
  if (mcqs && mcqs.length > 0) {
    mcqs.forEach((item, index) => {
      const mcqDiv = document.createElement("div");
      mcqDiv.className = "mcq-item";
      mcqDiv.innerHTML = `
                <div class="mcq-question-text">
                    <p><strong>Q${index + 1}:</strong> ${item.question}</p>
                </div>
                <div class="mcq-options"> ${item.options
                      .map(
                        (option, optIndex) =>
                          `<div class="mcq-option" data-option-index="${optIndex}">${
                            optIndex + 1
                          }. ${option}</div>`
                      )
                      .join("")}
                </div>
                <p class="mcq-answer hidden">
                    <strong>Correct Answer:</strong> <span class="correct-option-text"></span><br>
                    <em>Explanation:</em> <span class="explanation-text"></span>
                </p>
            `;

      const questionTextDiv = mcqDiv.querySelector(".mcq-question-text");
      const optionsContainer = mcqDiv.querySelector(".mcq-options");
      const answerContainer = mcqDiv.querySelector(".mcq-answer");
      const correctOptionTextSpan = answerContainer.querySelector(
        ".correct-option-text"
      );
      const explanationTextSpan =
        answerContainer.querySelector(".explanation-text");

      questionTextDiv.onclick = () => {
        // optionsContainer.classList.toggle("hidden");
        // Hide answer when question text is clicked again to collapse options
        if (optionsContainer.classList.contains("hidden")) {
          // answerContainer.classList.add("hidden");
          // Reset option styles when collapsing
          mcqDiv.querySelectorAll(".mcq-option").forEach((opt) => {
            opt.classList.remove("selected", "correct", "incorrect");
          });
        }
      };

      mcqDiv.querySelectorAll(".mcq-option").forEach((optionDiv) => {
        optionDiv.onclick = (event) => {
          // Remove previous selection highlight from this MCQ item only
          mcqDiv.querySelectorAll(".mcq-option").forEach((opt) => {
            opt.classList.remove("selected", "correct", "incorrect");
          });

          const selectedOptIndex = parseInt(event.target.dataset.optionIndex);
          event.target.classList.add("selected");

          if (selectedOptIndex === item.correct) {
            event.target.classList.add("correct");
          } else {
            event.target.classList.add("incorrect");
            // Highlight correct answer
            const correctOptionDiv = mcqDiv.querySelector(`.mcq-option[data-option-index="${item.correct}"]`);
            if (correctOptionDiv) {
                 correctOptionDiv.classList.add("correct");
            }
          }

          // Display answer and explanation
          correctOptionTextSpan.textContent = item.options[item.correct];
          explanationTextSpan.textContent = item.explanation;
          answerContainer.classList.remove("hidden");
        };
      });
      mcqContent.appendChild(mcqDiv);
    });
  } else {
    mcqContent.innerHTML =
      '<p class="info-message">No multiple-choice questions available for this topic.</p>';
  }
}

function renderShortQuestions(questions) {
  questionsContent.innerHTML = "";
  if (questions && questions.length > 0) {
    questions.forEach((item) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question-item";
      questionDiv.innerHTML = `
                <p><strong>Q:</strong> ${item.question}</p>
                <p class="question-answer hidden">${item.answer}</p>
            `;
      questionDiv.onclick = () => {
        questionDiv
          .querySelector(".question-answer")
          .classList.toggle("hidden");
      };
      questionsContent.appendChild(questionDiv);
    });
  } else {
    questionsContent.innerHTML =
      '<p class="info-message">No short questions (Q&A) available for this topic.</p>';
  }
}

function renderMediumQuestions(questions) {
  mediumQuestionsContent.innerHTML = "";
  if (questions && questions.length > 0) {
    questions.forEach((item, index) => {
      const mediumQuestionDiv = document.createElement("div");
      mediumQuestionDiv.className = "medium-question-item";
      // Display answer if available, otherwise it will be an empty string or undefined
      const answerHTML = item.answer ? `<p class="info-message">${item.answer}</p>` : '<p class="info-message">Answer not provided.</p>';
      mediumQuestionDiv.innerHTML = `
                <h3>Q${index + 1}: ${item.question}</h3>
                ${answerHTML}
            `;
      mediumQuestionsContent.appendChild(mediumQuestionDiv);
    });
  } else {
    mediumQuestionsContent.innerHTML =
      '<p class="info-message">No medium questions available for this topic.</p>';
  }
}

function renderLongQuestions(questions) {
  longQuestionsContent.innerHTML = "";
  if (questions && questions.length > 0) {
    questions.forEach((item, index) => {
      const longQuestionDiv = document.createElement("div");
      longQuestionDiv.className = "long-question-item";
      // Display answer if available
      const answerHTML = item.answer ? `<p class="info-message">${item.answer}</p>` : '<p class="info-message">Answer not provided.</p>';
      longQuestionDiv.innerHTML = `
                <h3>Q${index + 1}:</h3>
                <p>${item.question}</p>
                ${answerHTML}
            `;
      longQuestionsContent.appendChild(longQuestionDiv);
    });
  } else {
    longQuestionsContent.innerHTML =
      '<p class="info-message">No long questions available for this topic.</p>';
  }
}


function renderAudioContent(audioItems) {
  audioContent.innerHTML = "";
  if (audioItems && audioItems.length > 0) {
    audioItems.forEach((audio) => {
      const audioDiv = document.createElement("div");
      audioDiv.className = "media-item";
      audioDiv.innerHTML = `
                <h4>${audio.title}</h4>
                <p>${audio.description}</p>
                ${
                  audio.src && audio.src !== "path/to/audio.mp3" // Check for placeholder
                    ? `<audio controls><source src="${audio.src}" type="audio/mpeg">Your browser does not support the audio element.</audio>`
                    : '<p class="info-message">Audio file not available or path not specified.</p>'
                }
            `;
      audioContent.appendChild(audioDiv);
    });
  } else {
    audioContent.innerHTML =
      '<p class="info-message">No audio sessions available for this topic.</p>';
  }
}

function renderVideoContent(videoItems) {
  videoContent.innerHTML = "";
  if (videoItems && videoItems.length > 0) {
    videoItems.forEach((video) => {
      const videoDiv = document.createElement("div");
      videoDiv.className = "media-item";
      videoDiv.innerHTML = `
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                ${
                  video.src && video.src !== "path/to/video.mp4" // Check for placeholder
                    ? `<video controls width="100%"><source src="${video.src}" type="video/mp4">Your browser does not support the video tag.</video>`
                    : '<p class="info-message">Video file not available or path not specified.</p>'
                }
            `;
      videoContent.appendChild(videoDiv);
    });
  } else {
    videoContent.innerHTML =
      '<p class="info-message">No video sessions available for this topic.</p>';
  }
}

// --- Quiz Functions ---
function startQuiz() {
  // Use window.quizData
  const topicQuizData =
    window.quizData[currentSubject] && window.quizData[currentSubject][currentTopic];

  if (!topicQuizData || topicQuizData.length === 0) {
    // Try to get quiz data from the multipleChoiceQuestions of the current topic if quizData is empty
    const schoolTopicData = window.schoolData[currentClass]?.[currentSubject]?.topics?.[currentTopic];
    const mcqsForQuiz = schoolTopicData?.multipleChoiceQuestions;

    if (mcqsForQuiz && mcqsForQuiz.length > 0) {
        currentQuiz = mcqsForQuiz.map(mcq => ({
            question: mcq.question,
            options: mcq.options,
            correct: mcq.correct // Ensure this is 0-indexed
        }));
    } else {
        alert("Quiz not available for this topic yet, and no MCQs found to generate a quiz.");
        return;
    }
  } else {
      currentQuiz = [...topicQuizData]; // Use spread to create a shallow copy
  }


  currentQuestionIndex = 0;
  userAnswers = [];
  selectedAnswer = null;

  document.getElementById("quiz-title").textContent = `${currentTopic} Quiz`;
  totalQuestionsSpan.textContent = currentQuiz.length;

  loadQuestion();
  showQuizPage();
  quizContentDiv.classList.remove("hidden");
  quizResultsDiv.classList.add("hidden");
  nextBtn.disabled = true; // Ensure Next button is disabled at the start of a new question
  submitBtn.disabled = true; // Ensure Submit button is disabled initially
}

function loadQuestion() {
  if (currentQuestionIndex >= currentQuiz.length) {
    showResults();
    return;
  }

  const question = currentQuiz[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  questionText.textContent = question.question;

  quizOptionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className = "quiz-option";
    optionDiv.textContent = option;
    optionDiv.onclick = () => selectQuizOption(index, optionDiv);
    quizOptionsContainer.appendChild(optionDiv);
  });

  nextBtn.disabled = true;
  submitBtn.disabled = true; // Also disable submit button until an option is selected

  if (currentQuestionIndex === currentQuiz.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
  selectedAnswer = null; // Reset selection for the new question
}

function selectQuizOption(index, optionElement) {
  document
    .querySelectorAll(".quiz-option")
    .forEach((opt) => opt.classList.remove("selected"));

  optionElement.classList.add("selected");
  selectedAnswer = index;

  // Enable the appropriate button
  if (currentQuestionIndex === currentQuiz.length - 1) {
    submitBtn.disabled = false;
  } else {
    nextBtn.disabled = false;
  }
}

function nextQuestion() {
  if (selectedAnswer === null) return; 

  userAnswers.push(selectedAnswer);
  currentQuestionIndex++;
  loadQuestion();
}

function submitQuiz() {
  if (selectedAnswer === null) return;

  userAnswers.push(selectedAnswer);
  showResults();
}

function showResults() {
  let correctAnswersCount = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === currentQuiz[i].correct) {
      correctAnswersCount++;
    }
  }

  const percentage = Math.round(
    (correctAnswersCount / currentQuiz.length) * 100
  );
  const scoreText = `${correctAnswersCount}/${currentQuiz.length} (${percentage}%)`;

  finalScoreSpan.textContent = scoreText;

  let message = "";
  if (percentage >= 90) {
    message = "Excellent work! 🌟";
  } else if (percentage >= 70) {
    message = "Good job! 👍";
  } else if (percentage >= 50) {
    message = "Not bad, keep practicing! 📚";
  } else {
    message = "Keep studying and try again! 💪";
  }

  scoreMessageP.textContent = message;

  quizContentDiv.classList.add("hidden");
  quizResultsDiv.classList.remove("hidden");
}

function restartQuiz() {
  // quizContentDiv.classList.remove("hidden"); // This is handled by startQuiz -> showQuizPage
  // quizResultsDiv.classList.add("hidden"); // This is handled by startQuiz -> showQuizPage
  startQuiz();
}
