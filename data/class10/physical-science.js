
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
            "Light - Reflection and Refraction": {
                notes: [
                    {
                        title: "Laws of Reflection",
                        content: "Light travels in straight lines. Reflection occurs when light bounces off a surface. The angle of incidence equals the angle of reflection, and the incident ray, reflected ray, and normal all lie in the same plane.",
                    },
                    {
                        title: "Refraction of Light",
                        content: "Refraction is the bending of light when it passes from one medium to another. Snell's Law describes the relationship between the angles of incidence and refraction and the refractive indices of the two media.",
                    },
                    { title: "Total Internal Reflection", content: "Total internal reflection occurs when light travels from a denser medium to a less dense medium at an angle greater than the critical angle. It is used in fiber optics and periscopes." },
                    { title: "Refraction through a Prism", content: "A prism refracts light to disperse it into its constituent colors, creating a rainbow effect. This is used in prisms, telescopes, and spectrometers." },
                    { title: "Image Formation by Spherical Mirrors", content: "Spherical mirrors form images based on the position of the object. Concave mirrors form real and inverted images, while convex mirrors form virtual and erect images." },
                    { title: "Image Formation by Spherical Lenses", content: "Spherical lenses form images based on the position of the object. Concave lenses form real and inverted images, while convex lenses form virtual and erect images." },
                    { title: "Power of a Lens", content: "The power of a lens is the reciprocal of its focal length in meters. A converging lens has positive power, while a diverging lens has negative power." },
                    { title: "Magnification", content: "Magnification is the ratio of the size of the image to the size of the object. It is given by the formula M = -v/u, where v is the image distance and u is the object distance." },
                    { title: "Lens Formula", content: "The lens formula is given by 1/f = 1/v - 1/u, where f is the focal length, v is the image distance, and u is the object distance." },
                ],
                shortQuestions: [
                    {
                        question: "State the law of reflection.",
                        answer: "The angle of incidence equals the angle of reflection, and both rays lie in the same plane as the normal to the surface at the point of incidence.",
                    },
                    {
                        question: "What is refraction?",
                        answer: "Refraction is the bending of light when it passes from one medium to another due to a change in its speed.",
                    },
                ],
                mediumQuestions: [
                    { question: "Differentiate between real and virtual images." },
                    { question: "Explain why a stick appears bent when partially immersed in water." },
                ],
                longQuestions: [
                    { question: "Derive the mirror formula for a concave mirror." },
                    { question: "Explain the phenomenon of total internal reflection with its conditions and applications." },
                ],
                multipleChoiceQuestions: [
                    {
                        question: "The image formed by a plane mirror is:",
                        options: ["Real and inverted", "Virtual and inverted", "Real and erect", "Virtual and erect"],
                        correct: 3,
                        explanation: "A plane mirror always forms a virtual, erect, and laterally inverted image of the same size as the object.",
                    },
                    {
                        question: "The refractive index of diamond is 2.42. What is the meaning of this statement?",
                        options: [
                            "Light travels 2.42 times faster in diamond than in vacuum.",
                            "Light travels 2.42 times slower in diamond than in vacuum.",
                            "The critical angle for diamond is 2.42 degrees.",
                            "Diamond absorbs 2.42% of light.",
                        ],
                        correct: 1,
                        explanation: "The refractive index is the ratio of the speed of light in vacuum to the speed of light in the medium. A higher refractive index means light travels slower in that medium.",
                    },
                    { question: "What is the power of a lens with a focal length of 20 cm?", options: ["5 diopters", "20 diopters", "-5 diopters", "-20 diopters"], correct: 0, explanation: "The power of a lens is given by 1/f, where f is the focal length in meters. For a converging lens, the power is positive, and for a diverging lens, the power is negative." },
                    { question: "What is the magnification of a lens with an object distance of 10 cm and an image distance of 20 cm?", options: ["-2", "-1", "1", "2"], correct: 0, explanation: "Magnification is given by M = -v/u, where v is the image distance and u is the object distance. For a converging lens, the magnification is positive, and for a diverging lens, the magnification is negative." },
                    { question: "What is the focal length of a lens with a power of -5 diopters?", options: ["-0.2 m", "-0.5 m", "0.2 m", "0.5 m"], correct: 1, explanation: "The focal length is given by f = 1/P, where P is the power in diopters. For a diverging lens, the focal length is negative." },
                ],
                audio: [
                    {
                        title: "Optics Fundamentals",
                        description: "Understanding light, reflection, and refraction",
                        src: "path/to/optics_fundamentals.mp3", // Placeholder, update path
                    },
                ],
                video: [
                    {
                        title: "Snell's Law Demonstration",
                        description: "Practical demonstration of light refraction",
                        src: "path/to/snell_law.mp4", // Placeholder, update path
                    },
                ],
            },
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

