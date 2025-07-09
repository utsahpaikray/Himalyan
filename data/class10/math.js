// data/class10/math.js
(function() {
    // Ensure global objects exist
    window.schoolData = window.schoolData || {};
    window.quizData = window.quizData || {};

    // Ensure class-specific object exists in schoolData
    window.schoolData["Class 10"] = window.schoolData["Class 10"] || {};

    // Assign subject data for Class 10 Mathematics
    window.schoolData["Class 10"]["Mathematics"] = {
        topics: {
            "Real Numbers": {
                notes: [
                    {
                        title: "Euclid's Division Lemma",
                        content: "For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b. This lemma is used to find the HCF of two numbers.",
                    },
                    {
                        title: "Fundamental Theorem of Arithmetic",
                        content: "Every composite number can be expressed (factorized) as a product of primes, and this factorization is unique, apart from the order in which the prime factors occur.",
                    },
                ],
                shortQuestions: [
                    {
                        question: "State Euclid's Division Lemma.",
                        answer: "For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 ≤ r < b.",
                    },
                    {
                        question: "What is a composite number?",
                        answer: "A composite number is a natural number greater than 1 that is not a prime number (i.e., it has divisors other than 1 and itself).",
                    },
                ],
                mediumQuestions: [
                    { question: "Use Euclid's algorithm to find the HCF of 135 and 225." },
                    { question: "Explain why 7 × 11 × 13 + 13 is a composite number." },
                ],
                longQuestions: [
                    { question: "Prove that √5 is an irrational number." },
                    { question: "Explain the Fundamental Theorem of Arithmetic with suitable examples." },
                ],
                multipleChoiceQuestions: [
                    {
                        question: "The HCF of 96 and 404 is:",
                        options: ["4", "96", "101", "404"],
                        correct: 0,
                        explanation: "Using prime factorization, 96 = 2^5 × 3, 404 = 2^2 × 101. HCF = 2^2 = 4.",
                    },
                    {
                        question: "If two positive integers p and q are written as p = a²b³ and q = a³b, where a and b are prime numbers, then LCM(p, q) is:",
                        options: ["ab", "a²b", "a³b³", "a⁵b⁴"],
                        correct: 2,
                        explanation: "LCM is the product of the highest power of each common and uncommon prime factor. So, LCM(p,q) = a³b³.",
                    },
                ],
                audio: [
                    {
                        title: "Euclid's Lemma Explained",
                        description: "Audio lesson on applying Euclid's Division Lemma",
                        src: "path/to/euclid_lemma.mp3", // Placeholder, update path
                    },
                ],
                video: [
                    {
                        title: "Proof of Irrationality",
                        description: "Video demonstrating the proof of √2 as irrational",
                        src: "path/to/proof_irrationality.mp4", // Placeholder, update path
                    },
                ],
            },
            // Add other Class 10 Mathematics topics here
        }
    };

    // Ensure subject-specific object exists in quizData
    // Note: quizData is structured by Subject -> Topic.
    // Since "Mathematics" key might be shared with Class 9, ensure topics are distinct or handled appropriately.
    // For this example, we assume Class 10 Math topics are added to the same "Mathematics" subject key in quizData.
    window.quizData["Mathematics"] = window.quizData["Mathematics"] || {};

    // Assign quiz data for Class 10 Mathematics topics
    // Example: (Assuming "Real Numbers" is a distinct topic name or you handle potential name clashes)
    window.quizData["Mathematics"]["Real Numbers"] = window.quizData["Mathematics"]["Real Numbers"] || []; // Initialize if not present from Class 9
    // Add Class 10 Real Numbers quiz questions here if different from Class 9 or manage distinct topic names
    // For now, let's assume the existing quizData structure is sufficient and no new quiz questions are added here for "Real Numbers"
    // If you have specific quizzes for "Class 10 - Real Numbers", they should be added here.
    // For example:
    // window.quizData["Mathematics"]["Real Numbers C10"] = [ ... ];

    // If there are other Class 10 Math topics with quizzes, add them:
    // window.quizData["Mathematics"]["Topic X C10"] = [ ... ];

})();