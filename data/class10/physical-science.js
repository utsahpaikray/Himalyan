import { light } from '../science/physical/light.js'
// data/class10/physical-science.js
(function() {
    // Ensure global objects exist
    window.schoolData = window.schoolData || {};
    window.quizData = window.quizData || {};

    // Ensure class-specific object exists in schoolData
    window.schoolData["Class 10"] = window.schoolData["Class 10"] || {};

    // Assign subject data for Class 10 Physical Science
    window.schoolData["Class 10"]["Physical Science"] = {
        topics: {
            "Light - Reflection and Refraction": light['Light - Reflection and Refraction'],
            // Add other Class 10 Physical Science topics here
        }
    };

    // Ensure subject-specific object exists in quizData
    window.quizData["Physical Science"] = window.quizData["Physical Science"] || {};

    // Assign quiz data for Class 10 Physical Science topics
    window.quizData["Physical Science"]["Light - Reflection and Refraction"] = [
        { question: "According to the Law of Reflection, the angle of incidence is equal to the angle of:", options: ["Refraction", "Deviation", "Reflection", "Normal"], correct: 2 },
        { question: "The bending of light as it passes from one medium to another is known as:", options: ["Reflection", "Dispersion", "Refraction", "Diffraction"], correct: 2 },
    ];
    // Add quiz data for other Class 10 Physical Science topics here

    // Note: The original quizData had "Science" as a key which included "Light - Reflection and Refraction".
    // I'm assuming "Physical Science" is the more specific subject name for Class 10 here.
    // If "Light - Reflection and Refraction" quiz questions were under a general "Science" key in quizData,
    // you might need to adjust or ensure `currentSubject` in `script.js` correctly maps to "Physical Science"
    // when fetching quiz data for this class/subject combination.
    // For clarity, I'm putting it under "Physical Science" in quizData.
})();

