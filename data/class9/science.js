// data/class9/science.js
(function() {
    // Ensure global objects exist
    window.schoolData = window.schoolData || {};
    window.quizData = window.quizData || {};

    // Ensure class-specific object exists in schoolData
    window.schoolData["Class 9"] = window.schoolData["Class 9"] || {};

    // Assign subject data for Class 9 Science
    window.schoolData["Class 9"]["Science"] = {
        topics: {
            "Matter and Its States": {
                notes: [
                    {
                        title: "Introduction to Matter",
                        content: "Matter exists in three main states: solid, liquid, and gas. The kinetic theory explains the behavior of particles in different states. Temperature and pressure affect the state of matter.",
                    },
                    {
                        title: "Changes of State",
                        content: "Matter can change from one state to another through processes like melting, freezing, boiling, condensation, and sublimation.",
                    },
                ],
                shortQuestions: [
                    {
                        question: "What are the three states of matter?",
                        answer: "The three states of matter are solid, liquid, and gas.",
                    },
                    {
                        question: "Define melting point.",
                        answer: "The melting point is the temperature at which a solid turns into a liquid.",
                    },
                ],
                mediumQuestions: [
                    { question: "Explain why solids have a definite shape and volume." , answer: "In solids, particles are tightly packed in a fixed arrangement and can only vibrate about their mean positions. The intermolecular forces of attraction are very strong, holding the particles firmly. This strong attraction and fixed arrangement give solids a definite shape and volume."},
                    { question: "Describe the process of sublimation with an example." , answer: "Sublimation is the process where a solid directly changes into a gaseous state without passing through the liquid state, upon heating. An example is camphor or ammonium chloride, which when heated, turn directly into vapor."},
                ],
                longQuestions: [
                    { question: "Discuss the kinetic theory of matter and how it explains the properties of solids, liquids, and gases.", answer: "The kinetic theory of matter states that: 1. Matter is made up of tiny particles (atoms, molecules, or ions). 2. These particles are in constant random motion. 3. There are forces of attraction between these particles (intermolecular forces). 4. The kinetic energy of these particles increases with temperature. \n\n**Solids:** Particles are very close, arranged in a regular pattern, with strong intermolecular forces. They vibrate in fixed positions. This explains their definite shape, volume, high density, and incompressibility. \n**Liquids:** Particles are less closely packed than solids, with weaker intermolecular forces. They can move and slide past each other. This explains their definite volume but no definite shape (they take the shape of the container), lower density than solids (usually), and slight compressibility. \n**Gases:** Particles are far apart, with negligible intermolecular forces. They move randomly at high speeds. This explains why they have no definite shape or volume (they fill the container), low density, and are highly compressible." },
                    { question: "Explain the effect of temperature and pressure on the states of matter.", answer: "**Effect of Temperature:** \n*Increasing temperature* increases the kinetic energy of particles. \n- Solid to Liquid (Melting): Particles gain enough energy to overcome strong attractive forces and move more freely. \n- Liquid to Gas (Boiling/Evaporation): Particles gain enough energy to overcome attractive forces completely and escape into the gaseous state. \n*Decreasing temperature* decreases kinetic energy. \n- Gas to Liquid (Condensation): Particles lose energy, slow down, and attractive forces become significant. \n- Liquid to Solid (Freezing): Particles lose more energy, slow down further, and arrange into a fixed pattern. \n\n**Effect of Pressure:** \n*Increasing pressure* brings particles closer together. \n- Gas to Liquid (Liquefaction): High pressure can force gas particles close enough for attractive forces to cause liquefaction, especially at low temperatures. \n- It has less effect on solids and liquids as their particles are already close. \n*Decreasing pressure* allows particles to move further apart. \n- Can cause a liquid to boil at a lower temperature. \n- Has little effect on solids." },
                ],
                multipleChoiceQuestions: [
                    {
                        question: "Which state of matter has particles that are tightly packed and vibrate in fixed positions?",
                        options: ["Solid", "Liquid", "Gas", "Plasma"],
                        correct: 0,
                        explanation: "In a solid, particles are closely packed and have very limited movement, only vibrating around their fixed positions.",
                    },
                    {
                        question: "The process of a liquid changing into a gas is called:",
                        options: ["Melting", "Freezing", "Evaporation", "Condensation"],
                        correct: 2,
                        explanation: "Evaporation is the process where a liquid changes into a gas.",
                    },
                ],
                audio: [
                    {
                        title: "States of Matter",
                        description: "Audio explanation of solid, liquid, and gas states",
                        src: "path/to/states_of_matter.mp3", // Placeholder, update path
                    },
                ],
                video: [
                    {
                        title: "Phase Changes Explained",
                        description: "Visuals of melting, boiling, and other phase transitions",
                        src: "path/to/phase_changes.mp4", // Placeholder, update path
                    },
                ],
            },
            "Atoms and Molecules": {
                notes: [
                    {
                        title: "ରାସାୟନିକ ମିଶ୍ରଣର ନିୟମ (Laws of Chemical Combination)",
                        content: "ରାସାୟନିକ ବିଜ୍ଞାନର ମୌଳିକ ଭିତ୍ତି ରାସାୟନିକ ମିଶ୍ରଣର ଦୁଇଟି ନିୟମ ଉପରେ ଆଧାରିତ: \n1. **ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ (Law of Conservation of Mass):** ଏହି ନିୟମ ଅନୁଯାୟୀ, କୌଣସି ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପିଣ୍ଡ ସୃଷ୍ଟି ହୁଏ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୁଏ ନାହିଁ । ଏକ ବନ୍ଦ ସିଷ୍ଟମରେ, ପ୍ରତିକ୍ରିୟାକାରୀମାନଙ୍କର ସମୁଦାୟ ପିଣ୍ଡ ଉତ୍ପାଦଗୁଡ଼ିକର ସମୁଦାୟ ପିଣ୍ଡ ସହିତ ସମାନ ଥାଏ । \n2. **ସ୍ଥିର ଅନୁପାତ ନିୟମ (Law of Constant Proportions):** ଏହି ନିୟମ ଅନୁଯାୟୀ, ଏକ ରାସାୟନିକ ପଦାର୍ଥରେ, ଉପାଦାନ ମୌଳିକଗୁଡ଼ିକ ସର୍ବଦା ପିଣ୍ଡ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ଉପସ୍ଥିତ ଥାଆନ୍ତି । ଏହା ସେହି ପଦାର୍ଥ କେଉଁଠାରୁ ପ୍ରସ୍ତୁତ ହେଲା କିମ୍ବା କିଏ ଏହାକୁ ପ୍ରସ୍ତୁତ କଲା ତାହା ଉପରେ ନିର୍ଭର କରେ ନାହିଁ ।"
                    },
                    {
                        title: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ (Dalton’s Atomic Theory)",
                        content: "ଜନ୍ ଡାଲଟନ୍ (୧୮୦୮) ପରମାଣୁ ସମ୍ବନ୍ଧରେ ତାଙ୍କର ତତ୍ତ୍ୱ ଉପସ୍ଥାପନ କରିଥିଲେ । ଏହି ତତ୍ତ୍ୱର ମୁଖ୍ୟ ବିନ୍ଦୁଗୁଡ଼ିକ ହେଉଛି: \n1. ସମସ୍ତ ପଦାର୍ଥ ଅତି କ୍ଷୁଦ୍ର ଅବିଭାଜ୍ୟ କଣିକାମାନଙ୍କୁ ନେଇ ଗଠିତ, ଯାହାକୁ ପରମାଣୁ କୁହାଯାଏ । \n2. କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ମୌଳିକର ସମସ୍ତ ପରମାଣୁ ସମାନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ ହୋଇଥାଆନ୍ତି । \n3. ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକଗୁଡ଼ିକର ପରମାଣୁମାନଙ୍କର ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଆନ୍ତି । \n4. ପରମାଣୁମାନେ ସୃଷ୍ଟି ହୋଇପାରିବେ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୋଇପାରିବେ ନାହିଁ । ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ସେମାନେ କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଅନ୍ତି । \n5. ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକଗୁଡ଼ିକର ପରମାଣୁମାନେ ସରଳ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ ମିଶି ଯୌଗିକ ସୃଷ୍ଟି କରନ୍ତି । \n6. କୌଣସି ଯୌଗିକରେ ପରମାଣୁଗୁଡ଼ିକର ଆପେକ୍ଷିକ ସଂଖ୍ୟା ଏବଂ ପ୍ରକାର ସ୍ଥିର ଥାଏ ।"
                    },
                    {
                        title: "ପରମାଣୁ (Atom) ଓ ପ୍ରତୀକ (Symbols)",
                        content: "ପରମାଣୁ ହେଉଛି ଏକ ମୌଳିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଯାହା ଏକ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ଭାଗ ନେଇପାରେ । ଏକ ପରମାଣୁର ବ୍ୟାସ 10⁻¹⁰ ମିଟର ହୋଇଥାଏ । ମୌଳିକଗୁଡ଼ିକୁ ପ୍ରତୀକ ଦ୍ୱାରା ସୂଚିତ କରାଯାଏ, ଯାହା IUPAC ଦ୍ୱାରା ଅନୁମୋଦିତ ।"
                    },
                    {
                        title: "ପାରମାଣବିକ ପିଣ୍ଡ (Atomic Mass)",
                        content: "କାର୍ବନ-12 ସମସ୍ଥାନିକ (C-12)ର 1/12 ଭାଗକୁ ପାରମାଣବିକ ପିଣ୍ଡ ଏକକ (atomic mass unit or 'u') ଭାବରେ ବ୍ୟବହାର କରାଗଲା । କୌଣସି ମୌଳିକର ପାରମାଣବିକ ପିଣ୍ଡ ହେଉଛି, C-12 ପରମାଣୁର 1/12 ଭାଗ ପିଣ୍ଡ ତୁଳନାରେ ସେହି ମୌଳିକର ପରମାଣୁ କେତେଗୁଣରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ।"
                    },
                    {
                        title: "ଅଣୁ (Molecule)",
                        content: "ଅଣୁ ହେଉଛି ଦୁଇ କିମ୍ବା ଅଧିକ ପରମାଣୁର ସମୂହ ଯାହା ରାସାୟନିକ ଭାବରେ ଦୃଢ଼ ଭାବରେ ସଂଯୁକ୍ତ ହୋଇଥାଏ । ଏକ ମୌଳିକର ଅଣୁ ସମାନ ପ୍ରକାରର ପରମାଣୁକୁ ନେଇ ଗଠିତ (ଯଥା O₂, P₄) । ଯୌଗିକର ଅଣୁ ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକର ପରମାଣୁ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ମିଶି ଗଠିତ ହୁଏ (ଯଥା H₂O) । ଗୋଟିଏ ଅଣୁରେ ଥିବା ପରମାଣୁ ସଂଖ୍ୟାକୁ ପାରମାଣବିକତା (atomicity) କୁହାଯାଏ ।"
                    },
                    {
                        title: "ଆୟନ (Ion)",
                        content: "ଆୟନ ହେଉଛି ଏକ ଚାର୍ଜ୍‌ଯୁକ୍ତ କଣିକା । ଧନ ଚାର୍ଜ୍‌ଯୁକ୍ତ ଆୟନକୁ କ୍ୟାଟାୟନ (cation) ଏବଂ ଋଣ ଚାର୍ଜ୍‌ଯୁକ୍ତ ଆୟନକୁ ଆନାୟନ (anion) କୁହାଯାଏ । ପରମାଣୁର ଗୋଷ୍ଠୀ ଉପରେ ଚାର୍ଜ ଥିଲେ ତାହାକୁ ପଲିଆଟୋମିକ୍ ଆୟନ (polyatomic ion) କୁହାଯାଏ ।"
                    },
                    {
                        title: "ରାସାୟନିକ ଫର୍ମୁଲା ଏବଂ ଯୋଜକତା (Chemical Formula & Valency)",
                        content: "ଏକ ଯୌଗିକର ରାସାୟନିକ ଫର୍ମୁଲା ଉପାଦାନ ମୌଳିକ ଓ ପରମାଣୁ ସଂଖ୍ୟାର ପ୍ରତୀକାତ୍ମକ ପ୍ରତିନିଧିତ୍ୱ । ଯୋଜକତା (Valency) ହେଉଛି ଅନ୍ୟ ମୌଳିକ ସହିତ ମିଶିବାର କ୍ଷମତା । ରାସାୟନିକ ଫର୍ମୁଲା ଲେଖିବା ପାଇଁ ପ୍ରତୀକ, ଯୋଜକତା ଓ କ୍ରସ୍ ଓଭର୍ ନିୟମ ପାଳନ କରାଯାଏ ।"
                    },
                    {
                        title: "ଆଣବିକ ପିଣ୍ଡ ଏବଂ ମୋଲ୍ (Molecular Mass and Mole)",
                        content: "ଆଣବିକ ପିଣ୍ଡ ହେଉଛି ଅଣୁର ସମସ୍ତ ଉପାଦାନ ପରମାଣୁର ପାରମାଣବିକ ପିଣ୍ଡର ଯୋଗଫଳ ('u' ଏକକରେ) । ମୋଲ୍ ହେଉଛି 6.022 × 10²³ କଣିକାର ସମୂହ (ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା) । ମୋଲାର ପିଣ୍ଡ ହେଉଛି ଏକ ମୋଲ୍ କଣିକାର ପିଣ୍ଡ (g/mol ଏକକରେ) ।"
                    }
                ],
                shortQuestions: [
                    { question: "ରାସାୟନିକ ମିଶ୍ରଣର ଦୁଇଟି ମୁଖ୍ୟ ନିୟମ କ'ଣ?", answer: "ରାସାୟନିକ ମିଶ୍ରଣର ଦୁଇଟି ମୁଖ୍ୟ ନିୟମ ହେଉଛି ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଏବଂ ସ୍ଥିର ଅନୁପାତ ନିୟମ ।" },
                    { question: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ବୁଝାନ୍ତୁ ।", answer: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ କୁହେ ଯେ କୌଣସି ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପିଣ୍ଡ ସୃଷ୍ଟି କିମ୍ବା ନଷ୍ଟ ହୋଇପାରିବ ନାହିଁ । ମୋଟ ପିଣ୍ଡ ଅପରିବର୍ତ୍ତିତ ରୁହେ ।" },
                    { question: "ସ୍ଥିର ଅନୁପାତ ନିୟମ କ'ଣ କୁହେ?", answer: "ସ୍ଥିର ଅନୁପାତ ନିୟମ ଅନୁସାରେ, ଏକ ରାସାୟନିକ ଯୌଗିକରେ, ଉପାଦାନ ମୌଳିକମାନେ ସର୍ବଦା ପିଣ୍ଡ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ଉପସ୍ଥିତ ଥାଆନ୍ତି, ଉତ୍ସ ନିର୍ବିଶେଷରେ ।" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ ଅନୁଯାୟୀ, ସମାନ ମୌଳିକର ପରମାଣୁଗୁଡ଼ିକ କିପରି?", answer: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁଯାୟୀ, କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ମୌଳିକର ସମସ୍ତ ପରମାଣୁ ସମାନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ ହୋଇଥାଆନ୍ତି ।" },
                    { question: "ପରମାଣୁ କ'ଣ? ତାହାର ଆକାର ସମ୍ବନ୍ଧରେ ଏକ ଧାରଣା ଦିଅନ୍ତୁ ।", answer: "ପରମାଣୁ ହେଉଛି ଏକ ମୌଳିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଯାହା ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ଭାଗ ନେଇପାରେ । ଏହା ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର, ପ୍ରାୟ 10⁻¹⁰ ମିଟର ବ୍ୟାସ ବିଶିଷ୍ଟ ।" },
                    { question: "ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡ କ'ଣ? ଏହାକୁ ମାପିବା ପାଇଁ ବର୍ତ୍ତମାନ କେଉଁ ମାନକ ଏକକ ବ୍ୟବହାର କରାଯାଏ?", answer: "ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡ ହେଉଛି C-12 ପରମାଣୁର 1/12 ଭାଗ ତୁଳନାରେ ଏକ ପରମାଣୁ କେତେଗୁଣ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ । ବର୍ତ୍ତମାନ 'u' (unified atomic mass unit) ଏକକ ଭାବରେ ବ୍ୟବହୃତ ହୁଏ ।" },
                    { question: "ଅଣୁ କ'ଣ? ଏକ ମୌଳିକର ଅଣୁ ଏବଂ ଏକ ଯୌଗିକର ଅଣୁ ମଧ୍ୟରେ କି ପାର୍ଥକ୍ୟ?", answer: "ଅଣୁ ହେଉଛି ଦୁଇ ବା ଅଧିକ ପରମାଣୁର ଏକ ସମୂହ । ଏକ ମୌଳିକର ଅଣୁ ସମାନ ପ୍ରକାରର ପରମାଣୁକୁ ନେଇ ଗଠିତ, ଯୌଗିକର ଅଣୁ ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକର ପରମାଣୁକୁ ନେଇ ଗଠିତ ।" },
                    { question: "ଆୟନ କ'ଣ? କ୍ୟାଟାୟନ ଏବଂ ଆନାୟନ ମଧ୍ୟରେ କି ପାର୍ଥକ୍ୟ?", answer: "ଆୟନ ହେଉଛି ଏକ ଚାର୍ଜ୍‌ଯୁକ୍ତ କଣିକା । କ୍ୟାଟାୟନ ଧନ ଚାର୍ଜ୍‌ଯୁକ୍ତ ହୋଇଥିବା ବେଳେ, ଆନାୟନ ଋଣ ଚାର୍ଜ୍‌ଯୁକ୍ତ ହୋଇଥାଏ ।" },
                    { question: "ଯୋଜକତା କ'ଣ?", answer: "ଯୋଜକତା ହେଉଛି ଅନ୍ୟ ମୌଳିକ ସହିତ ମିଶି ଯୌଗିକ ଗଠନ କରିବାର ଏକ ମୌଳିକର କ୍ଷମତା ।" },
                    { question: "ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା କ'ଣ? ଏହାର ମୂଲ୍ୟ କେତେ?", answer: "ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା ହେଉଛି ଏକ ମୋଲ୍ କଣିକାର ସଂଖ୍ୟା । ଏହାର ମୂଲ୍ୟ 6.022 × 10²³ ଅଟେ ।" }
                ],
                mediumQuestions: [
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱର ମୁଖ୍ୟ ବିନ୍ଦୁଗୁଡ଼ିକୁ ଆଲୋଚନା କରନ୍ତୁ ।", answer: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱର ମୁଖ୍ୟ ବିନ୍ଦୁଗୁଡ଼ିକ ହେଲା: \n1. ସମସ୍ତ ପଦାର୍ଥ ଅତି କ୍ଷୁଦ୍ର ଅବିଭାଜ୍ୟ କଣିକା ପରମାଣୁରେ ଗଠିତ । \n2. ଗୋଟିଏ ମୌଳିକର ସମସ୍ତ ପରମାଣୁ ସମାନ ପିଣ୍ଡ ଓ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ । \n3. ଭିନ୍ନ ମୌଳିକର ପରମାଣୁ ଭିନ୍ନ ପିଣ୍ଡ ଓ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ । \n4. ପରମାଣୁ ଅବିନାଶୀ; ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ଏହା କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଏ । \n5. ଭିନ୍ନ ମୌଳିକର ପରମାଣୁ ସରଳ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ ମିଶି ଯୌଗିକ ସୃଷ୍ଟି କରନ୍ତି । \n6. ଏକ ଯୌଗିକରେ ପରମାଣୁର ଆପେକ୍ଷିକ ସଂଖ୍ୟା ଓ ପ୍ରକାର ସ୍ଥିର ।" },
                    { question: "ପରମାଣୁ ଏବଂ ଅଣୁ ମଧ୍ୟରେ ଥିବା ପାର୍ଥକ୍ୟକୁ ବୁଝାନ୍ତୁ ।", answer: "ପରମାଣୁ ହେଉଛି ମୌଳିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଯାହା ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ଭାଗ ନିଏ କିନ୍ତୁ ସାଧାରଣତଃ ସ୍ୱାଧୀନ ଭାବେ ରହିପାରେ ନାହିଁ (ନୋବେଲ ଗ୍ୟାସ୍ ବ୍ୟତୀତ) । ଅଣୁ ହେଉଛି ଦୁଇ ବା ଅଧିକ ପରମାଣୁର ସମାହାର ଯାହା ରାସାୟନିକ ବନ୍ଧ ଦ୍ୱାରା ସଂଯୁକ୍ତ ଏବଂ ସ୍ୱାଧୀନ ଭାବେ ରହିପାରେ ଓ ପଦାର୍ଥର ସମସ୍ତ ଗୁଣ ପ୍ରଦର୍ଶନ କରେ ।" },
                    { question: "ଆୟନ କ'ଣ? ବିଭିନ୍ନ ପ୍ରକାରର ଆୟନ ସମ୍ବନ୍ଧରେ ଆଲୋଚନା କରନ୍ତୁ ।", answer: "ଆୟନ ହେଉଛି ଏକ ଚାର୍ଜ୍‌ଯୁକ୍ତ କଣିକା । ଯେତେବେଳେ ଏକ ପରମାଣୁ କିମ୍ବା ପରମାଣୁ ସମୂହ ଇଲେକ୍ଟ୍ରୋନ୍ ହରାଏ ବା ଗ୍ରହଣ କରେ, ସେତେବେଳେ ଆୟନ ସୃଷ୍ଟି ହୁଏ । \n**କ୍ୟାଟାୟନ (Cation):** ଧନ ଚାର୍ଜ୍‌ଯୁକ୍ତ ଆୟନକୁ କ୍ୟାଟାୟନ କୁହାଯାଏ । ଏହା ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ୍ ହରାଇବା ଦ୍ୱାରା ସୃଷ୍ଟି ହୁଏ (ଯଥା: Na⁺, Ca²⁺) । \n**ଆନାୟନ (Anion):** ଋଣ ଚାର୍ଜ୍‌ଯୁକ୍ତ ଆୟନକୁ ଆନାୟନ କୁହାଯାଏ । ଏହା ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ୍ ଗ୍ରହଣ କରିବା ଦ୍ୱାରା ସୃଷ୍ଟି ହୁଏ (ଯଥା: Cl⁻, O²⁻) । \n**ପଲିଆଟୋମିକ୍ ଆୟନ (Polyatomic Ion):** ଏକାଧିକ ପରମାଣୁର ସମୂହ ଯାହା ଉପରେ ଏକ ନେଟ୍ ଚାର୍ଜ ଥାଏ, ତାହାକୁ ପଲିଆଟୋମିକ୍ ଆୟନ କୁହାଯାଏ (ଯଥା: NH₄⁺ (ଆମୋନିୟମ୍), SO₄²⁻ (ସଲଫେଟ୍)) ।" }
                ],
                longQuestions: [
                    { question: "ରାସାୟନିକ ମିଶ୍ରଣର ନିୟମଗୁଡ଼ିକୁ ଉଦାହରଣ ସହିତ ବିସ୍ତୃତ ଭାବରେ ବର୍ଣ୍ଣନା କରନ୍ତୁ ।", answer: "ରାସାୟନିକ ମିଶ୍ରଣର ଦୁଇଟି ମୁଖ୍ୟ ନିୟମ ହେଉଛି: \n1. **ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ (Law of Conservation of Mass):** ଏହି ନିୟମ ଅନୁଯାୟୀ, କୌଣସି ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ, ପ୍ରତିକ୍ରିୟାକାରୀମାନଙ୍କର ସମୁଦାୟ ପିଣ୍ଡ ଉତ୍ପାଦଗୁଡ଼ିକର ସମୁଦାୟ ପିଣ୍ଡ ସହିତ ସମାନ ରହେ । ଅର୍ଥାତ୍, ପିଣ୍ଡ ସୃଷ୍ଟି ହୁଏ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୁଏ ନାହିଁ । ଉଦାହରଣ: ଯଦି 12g କାର୍ବନ 32g ଅମ୍ଳଜାନ ସହିତ ପ୍ରତିକ୍ରିୟା କରି 44g କାର୍ବନ ଡାଇଅକ୍ସାଇଡ୍ ସୃଷ୍ଟି କରେ, ତେବେ ପ୍ରତିକ୍ରିୟାକାରୀଙ୍କ ମୋଟ ପିଣ୍ଡ (12g + 32g = 44g) ଉତ୍ପାଦର ପିଣ୍ଡ (44g) ସହିତ ସମାନ । ଏହା ଲାଭୋଇସିଅର୍‌ଙ୍କ ଦ୍ୱାରା ପ୍ରତିପାଦିତ ହୋଇଥିଲା । \n2. **ସ୍ଥିର ଅନୁପାତ ନିୟମ (Law of Constant Proportions):** ଏହି ନିୟମକୁ 'ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତ ନିୟମ' ମଧ୍ୟ କୁହାଯାଏ ଏବଂ ଏହା ପ୍ରାଉଷ୍ଟଙ୍କ ଦ୍ୱାରା ପ୍ରତିପାଦିତ ହୋଇଥିଲା । ଏହି ନିୟମ ଅନୁଯାୟୀ, ଏକ ଶୁଦ୍ଧ ରାସାୟନିକ ଯୌଗିକରେ, ଉପାଦାନ ମୌଳିକଗୁଡ଼ିକ ସର୍ବଦା ପିଣ୍ଡ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ଉପସ୍ଥିତ ଥାଆନ୍ତି, ଯୌଗିକଟି ଯେଉଁ ଉତ୍ସରୁ ମିଳୁ ବା ଯେଉଁ ପଦ୍ଧତିରେ ପ୍ରସ୍ତୁତ ହେଉନା କାହିଁକି । ଉଦାହରଣ: ଜଳ (H₂O)ରେ ସର୍ବଦା ହାଇଡ୍ରୋଜେନ ଓ ଅମ୍ଳଜାନର ପିଣ୍ଡ ଅନୁପାତ 1:8 ଥାଏ । ସେହିପରି ଆମୋନିଆ (NH₃)ରେ ନାଇଟ୍ରୋଜେନ ଓ ହାଇଡ୍ରୋଜେନର ପିଣ୍ଡ ଅନୁପାତ ସର୍ବଦା 14:3 ଥାଏ ।" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱର ମୁଖ୍ୟ ବିନ୍ଦୁଗୁଡ଼ିକୁ ଆଲୋଚନା କରନ୍ତୁ ଏବଂ ରାସାୟନିକ ମିଶ୍ରଣର ନିୟମକୁ ବୁଝାଇବାରେ ଏହାର ଭୂମିକା ସମ୍ବନ୍ଧରେ ବର୍ଣ୍ଣନା କରନ୍ତୁ ।", answer: "ଜନ୍ ଡାଲଟନ୍ ୧୮୦୮ ମସିହାରେ ତାଙ୍କର ପାରମାଣବିକ ତତ୍ତ୍ୱ ଉପସ୍ଥାପନ କରିଥିଲେ । ଏହାର ମୁଖ୍ୟ ବିନ୍ଦୁଗୁଡ଼ିକ ହେଲା:\n1.  ସମସ୍ତ ପଦାର୍ଥ ଅତି କ୍ଷୁଦ୍ର ଅବିଭାଜ୍ୟ କଣିକାମାନଙ୍କୁ ନେଇ ଗଠିତ, ଯାହାକୁ ପରମାଣୁ କୁହାଯାଏ ।\n2.  କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ମୌଳିକର ସମସ୍ତ ପରମାଣୁ ସମାନ ପିଣ୍ଡ ଏବଂ ରାସାୟନିକ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ ହୋଇଥାଆନ୍ତି ।\n3.  ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକଗୁଡ଼ିକର ପରମାଣୁମାନଙ୍କର ପିଣ୍ଡ ଏବଂ ରାସାୟନିକ ଗୁଣଧର୍ମ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାଆନ୍ତି ।\n4.  ପରମାଣୁମାନେ ସୃଷ୍ଟି ହୋଇପାରିବେ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୋଇପାରିବେ ନାହିଁ । ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ସେମାନେ କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଅନ୍ତି ।\n5.  ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକଗୁଡ଼ିକର ପରମାଣୁମାନେ ସରଳ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ ମିଶି ଯୌଗିକ ସୃଷ୍ଟି କରନ୍ତି ।\n6.  କୌଣସି ଯୌଗିକରେ ପରମାଣୁଗୁଡ଼ିକର ଆପେକ୍ଷିକ ସଂଖ୍ୟା ଏବଂ ପ୍ରକାର ସ୍ଥିର ଥାଏ ।\n\n**ରାସାୟନିକ ମିଶ୍ରଣର ନିୟମ ବୁଝାଇବାରେ ଭୂମିକା:**\n* **ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ:** ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱର ୪ର୍ଥ ବିନ୍ଦୁ (ପରମାଣୁ ଅବିନାଶୀ) ଏହି ନିୟମକୁ ସମର୍ଥନ କରେ । ଯେହେତୁ ପରମାଣୁ ସୃଷ୍ଟି ବା ନଷ୍ଟ ହୁଏ ନାହିଁ, କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଏ, ତେଣୁ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ମୋଟ ପିଣ୍ଡ ସଂରକ୍ଷିତ ରହେ ।\n* **ସ୍ଥିର ଅନୁପାତ ନିୟମ:** ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱର ୫ମ ଓ ୬ଷ୍ଠ ବିନ୍ଦୁ (ଯୌଗିକରେ ପରମାଣୁର ଆପେକ୍ଷିକ ସଂଖ୍ୟା ଓ ପ୍ରକାର ସ୍ଥିର ଏବଂ ସରଳ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ ମିଶ୍ରଣ) ଏହି ନିୟମକୁ ବୁଝାଏ । ଯେହେତୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଯୌଗିକ ସର୍ବଦା ସମାନ ପ୍ରକାରର ପରମାଣୁର ସମାନ ଆପେକ୍ଷିକ ସଂଖ୍ୟାରେ ଗଠିତ, ତେଣୁ ସେଥିରେ ଥିବା ମୌଳିକଗୁଡ଼ିକର ପିଣ୍ଡ ଅନୁପାତ ମଧ୍ୟ ସର୍ବଦା ସ୍ଥିର ରହିବ ।" },
                    { question: "ମୋଲ୍ ଧାରଣାକୁ ବୁଝାନ୍ତୁ ଏବଂ ଏହା କିପରି ପାରମାଣବିକ ପିଣ୍ଡ, ଆଣବିକ ପିଣ୍ଡ ଏବଂ ମୋଲାର ପିଣ୍ଡ ସହିତ ସମ୍ବନ୍ଧିତ ତାହା ବର୍ଣ୍ଣନା କରନ୍ତୁ । ଏହାର ବ୍ୟବହାର ସମ୍ବନ୍ଧରେ ଉଦାହରଣ ଦିଅନ୍ତୁ ।", answer: "ମୋଲ୍ ହେଉଛି ପଦାର୍ଥର ପରିମାଣ ମାପିବାର ଏକ SI ଏକକ । ଏକ ମୋଲ୍ କୌଣସି ପଦାର୍ଥର ସେତିକି ପରିମାଣକୁ ବୁଝାଏ, ଯେଉଁଥିରେ 6.022 × 10²³ ସଂଖ୍ୟକ ମୌଳିକ କଣିକା (ପରମାଣୁ, ଅଣୁ, ଆୟନ ଇତ୍ୟାଦି) ଥାଏ । ଏହି ସଂଖ୍ୟାକୁ ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା (Nᴀ) କୁହାଯାଏ । \n**ପାରମାଣବିକ ପିଣ୍ଡ (Atomic Mass):** ଏହା ଏକ ପରମାଣୁର ଆପେକ୍ଷିକ ପିଣ୍ଡ, ଯାହା 'u' (unified atomic mass unit) ଏକକରେ ପ୍ରକାଶ କରାଯାଏ । \n**ଆଣବିକ ପିଣ୍ଡ (Molecular Mass):** ଏହା ଏକ ଅଣୁରେ ଥିବା ସମସ୍ତ ପରମାଣୁର ପାରମାଣବିକ ପିଣ୍ଡର ଯୋଗଫଳ, ଏହା ମଧ୍ୟ 'u' ଏକକରେ ପ୍ରକାଶ କରାଯାଏ । \n**ମୋଲାର ପିଣ୍ଡ (Molar Mass):** ଏହା ଏକ ମୋଲ୍ ପଦାର୍ଥର ପିଣ୍ଡ, ଯାହା g/mol ଏକକରେ ପ୍ରକାଶ କରାଯାଏ । ସାଂଖ୍ୟିକ ଭାବରେ, ଏକ ମୌଳିକର ମୋଲାର ପିଣ୍ଡ (ଗ୍ରାମ୍‌ରେ) ତାହାର ପାରମାଣବିକ ପିଣ୍ଡ (u ରେ) ସହିତ ସମାନ । ସେହିପରି, ଏକ ଯୌଗିକର ମୋଲାର ପିଣ୍ଡ (ଗ୍ରାମ୍‌ରେ) ତାହାର ଆଣବିକ ପିଣ୍ଡ (u ରେ) ସହିତ ସମାନ । \n**ଉଦାହରଣ ଓ ବ୍ୟବହାର:**\n* ଅମ୍ଳଜାନ (O)ର ପାରମାଣବିକ ପିଣ୍ଡ 16u । ତେଣୁ, 1 ମୋଲ୍ ଅମ୍ଳଜାନ ପରମାଣୁର ପିଣ୍ଡ (ମୋଲାର ପିଣ୍ଡ) ହେଉଛି 16 g । ଏଥିରେ 6.022 × 10²³ ଟି ଅମ୍ଳଜାନ ପରମାଣୁ ଥାଏ ।\n* ଜଳ (H₂O)ର ଆଣବିକ ପିଣ୍ଡ (2×1 + 16) = 18u । ତେଣୁ, 1 ମୋଲ୍ ଜଳ ଅଣୁର ପିଣ୍ଡ (ମୋଲାର ପିଣ୍ଡ) ହେଉଛି 18 g । ଏଥିରେ 6.022 × 10²³ ଟି ଜଳ ଅଣୁ ଥାଏ ।\nମୋଲ୍ ଧାରଣା ରାସାୟନିକ ଗଣନାରେ ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ । ଏହାଦ୍ୱାରା ପ୍ରତିକ୍ରିୟାକାରୀ ଓ ଉତ୍ପାଦର ପରିମାଣ, କଣିକା ସଂଖ୍ୟା ଆଦି ସହଜରେ ଗଣନା କରାଯାଇପାରେ ।" }
                ],
                multipleChoiceQuestions: [
                    { question: "ରାସାୟନିକ ମିଶ୍ରଣର ମୌଳିକ ଭିତ୍ତି କେଉଁ ନିୟମ ଉପରେ ଆଧାରିତ?", options: ["କେବଳ ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ", "କେବଳ ସ୍ଥିର ଅନୁପାତ ନିୟମ", "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଏବଂ ସ୍ଥିର ଅନୁପାତ ନିୟମ", "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ"], correct: 2, explanation: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଏବଂ ସ୍ଥିର ଅନୁପାତ ନିୟମ" },
                    { question: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଅନୁଯାୟୀ, କୌଣସି ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପିଣ୍ଡର କଣ ହୁଏ?", options: ["ସୃଷ୍ଟି ହୁଏ କିମ୍ବା ନଷ୍ଟ ହୁଏ", "କେବଳ ସୃଷ୍ଟି ହୁଏ", "କେବଳ ନଷ୍ଟ ହୁଏ", "ସୃଷ୍ଟି ହୁଏ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୁଏ ନାହିଁ"], correct: 3, explanation: "ସୃଷ୍ଟି ହୁଏ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୁଏ ନାହିଁ" },
                    { question: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଅନୁଯାୟୀ, ଏକ ବନ୍ଦ ସିଷ୍ଟମରେ ପ୍ରତିକ୍ରିୟାକାରୀମାନଙ୍କର ସମୁଦାୟ ପିଣ୍ଡ କାହା ସହିତ ସମାନ ଥାଏ?", options: ["ପ୍ରତିକ୍ରିୟା ପରେ ବାୟୁମଣ୍ଡଳର ପିଣ୍ଡ ସହିତ", "ଉତ୍ପାଦଗୁଡ଼ିକର ସମୁଦାୟ ପିଣ୍ଡ ସହିତ", "ପାତ୍ରର ପିଣ୍ଡ ସହିତ", "ପ୍ରତିକ୍ରିୟାକାରୀମାନଙ୍କର ଆଣବିକ ସଂଖ୍ୟା ସହିତ"], correct: 1, explanation: "ଉତ୍ପାଦଗୁଡ଼ିକର ସମୁଦାୟ ପିଣ୍ଡ ସହିତ" },
                    { question: "ସ୍ଥିର ଅନୁପାତ ନିୟମ ଅନୁଯାୟୀ, ଏକ ରାସାୟନିକ ପଦାର୍ଥରେ ଉପାଦାନ ମୌଳିକଗୁଡ଼ିକ କିପରି ଉପସ୍ଥିତ ଥାଆନ୍ତି?", options: ["ପିଣ୍ଡ ଅନୁସାରେ କୌଣସି ଅନୁପାତରେ", "ପରିମାଣ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ", "ପିଣ୍ଡ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ", "ସର୍ବଦା ସମାନ ପିଣ୍ଡରେ"], correct: 2, explanation: "ପିଣ୍ଡ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ" },
                    { question: "ଜଳ (H₂O) ରେ ହାଇଡ୍ରୋଜେନ (H) ଏବଂ ଅମ୍ଳଜାନ (O) ର ପିଣ୍ଡ ଅନୁପାତ ସର୍ବଦା କେତେ ଥାଏ?", options: ["2:1", "1:2", "1:8", "8:1"], correct: 2, explanation: "1:8" },
                    { question: "ସ୍ଥିର ଅନୁପାତ ନିୟମକୁ ଅନ୍ୟ କେଉଁ ନାମରେ ଜଣାଯାଏ?", options: ["ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ", "ଗୁଣିତ ଅନୁପାତ ନିୟମ", "ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତ ନିୟମ (Law of Definite Proportions)", "ଆଭୋଗାଡ୍ରୋ ନିୟମ"], correct: 2, explanation: "ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତ ନିୟମ (Law of Definite Proportions)" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ କେଉଁ ବର୍ଷରେ ଉପସ୍ଥାପନ କରାଯାଇଥିଲା?", options: ["1766", "1793", "1808", "1961"], correct: 2, explanation: "1808" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ ଅନୁଯାୟୀ, ପଦାର୍ଥ କେଉଁ ଅତି କ୍ଷୁଦ୍ର ଅବିଭାଜ୍ୟ କଣିକାମାନଙ୍କୁ ନେଇ ଗଠିତ?", options: ["ଅଣୁ", "ଆୟନ", "ପରମାଣୁ", "ମୋଲ୍"], correct: 2, explanation: "ପରମାଣୁ" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଗୋଟିଏ ନିର୍ଦ୍ଦିଷ୍ଟ ମୌଳିକର ସମସ୍ତ ପରମାଣୁ କିପରି ହୋଇଥାଆନ୍ତି?", options: ["ଭିନ୍ନ ଭିନ୍ନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ", "ସମାନ ପିଣ୍ଡ କିନ୍ତୁ ଭିନ୍ନ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ", "ଭିନ୍ନ ପିଣ୍ଡ କିନ୍ତୁ ସମାନ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ", "ସମାନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ"], correct: 3, explanation: "ସମାନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକଗୁଡ଼ିକର ପରମାଣୁମାନଙ୍କର ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ କିପରି ହୋଇଥାଆନ୍ତି?", options: ["ସମାନ", "ଭିନ୍ନ ଭିନ୍ନ", "କେତେକାଂଶରେ ସମାନ", "ପିଣ୍ଡ ସମାନ କିନ୍ତୁ ଗୁଣଧର୍ମ ଭିନ୍ନ"], correct: 1, explanation: "ଭିନ୍ନ ଭିନ୍ନ" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁଯାୟୀ, ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପରମାଣୁମାନଙ୍କର କଣ ହୁଏ?", options: ["ସୃଷ୍ଟି କିମ୍ବା ବିନାଶ ହୁଏ", "କେବଳ ସୃଷ୍ଟି ହୁଏ", "କେବଳ ବିନାଶ ହୁଏ", "କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଅନ୍ତି"], correct: 3, explanation: "କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଅନ୍ତି" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକର ପରମାଣୁମାନେ ଯୌଗିକ ସୃଷ୍ଟି କରିବା ସମୟରେ କେଉଁ ଅନୁପାତରେ ମିଶନ୍ତି?", options: ["ଜଟିଳ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ", "କ୍ଷୁଦ୍ର ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ", "ଦଶମିକ ଅନୁପାତରେ", "କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ନୁହେଁ"], correct: 1, explanation: "କ୍ଷୁଦ୍ର ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, କୌଣସି ଯୌଗିକରେ ପରମାଣୁଗୁଡ଼ିକର ଆପେକ୍ଷିକ ସଂଖ୍ୟା ଏବଂ ପ୍ରକାର କିପରି ଥାଏ?", options: ["ପରିବର୍ତ୍ତନଶୀଳ", "ଅନିର୍ଦ୍ଦିଷ୍ଟ", "ସ୍ଥିର", "ଉତ୍ସ ଉପରେ ନିର୍ଭରଶୀଳ"], correct: 2, explanation: "ସ୍ଥିର" },
                    { question: "ପରମାଣୁ ହେଉଛି ଏକ ମୌଳିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଯାହା କେଉଁଥିରେ ଭାଗ ନେଇପାରେ?", options: ["କେବଳ ଭୌତିକ ପରିବର୍ତ୍ତନରେ", "କୌଣସି ପରିବର୍ତ୍ତନରେ ନୁହେଁ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ", "କେବଳ ଆୟନ ଗଠନରେ"], correct: 2, explanation: "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ" },
                    { question: "ଏକ ପରମାଣୁ କେତେ କ୍ଷୁଦ୍ର?", options: ["ସାଧାରଣ ଆଖିରେ ଦେଖିବା ସମ୍ଭବ", "ଅଣୁବୀକ୍ଷଣ ଯନ୍ତ୍ରରେ ଦେଖିବା ସମ୍ଭବ", "ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର, ଦେଖିବା ସମ୍ଭବ ନୁହେଁ", "ବଡ଼ ଅଣୁଠାରୁ ବଡ଼"], correct: 2, explanation: "ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର, ଦେଖିବା ସମ୍ଭବ ନୁହେଁ" },
                    { question: "ହାଇଡ୍ରୋଜେନ (Hydrogen) ପରମାଣୁର ବ୍ୟାସ ପ୍ରାୟ କେତେ?", options: ["10⁻⁴ m", "10⁻⁹ m", "10⁻¹⁰ m", "10⁻¹² m"], correct: 2, explanation: "10⁻¹⁰ m" },
                    { question: "ମୌଳିକଗୁଡ଼ିକୁ ସୂଚିତ କରିବା ପାଇଁ କଣ ବ୍ୟବହାର କରାଯାଏ?", options: ["ନାମ", "ସଂଖ୍ୟା", "ପ୍ରତୀକ", "ଚିତ୍ର"], correct: 2, explanation: "ପ୍ରତୀକ" },
                    { question: "ମୌଳିକ ନାମ ଏବଂ ପ୍ରତୀକକୁ କେଉଁ ଅନ୍ତର୍ଜାତୀୟ ସଂଘ ଅନୁମୋଦନ କରେ?", options: ["UNESCO", "IUPAC", "WHO", "UNICEF"], correct: 1, explanation: "IUPAC" },
                    { question: "ଯଦି ଏକ ମୌଳିକ ପ୍ରତୀକରେ ଏକରୁ ଅଧିକ ଅକ୍ଷର ଥାଏ, ତେବେ କିପରି ଲେଖାଯାଏ?", options: ["ସମସ୍ତ ଅକ୍ଷର ବଡ଼ ଅକ୍ଷରରେ", "ସମସ୍ତ ଅକ୍ଷର ଛୋଟ ଅକ୍ଷରରେ", "ପ୍ରଥମ ଅକ୍ଷର ବଡ଼ ଏବଂ ଦ୍ୱିତୀୟ ଅକ୍ଷର ଛୋଟ ଅକ୍ଷରରେ", "ପ୍ରଥମ ଅକ୍ଷର ଛୋଟ ଏବଂ ଦ୍ୱିତୀୟ ଅକ୍ଷର ବଡ଼ ଅକ୍ଷରରେ"], correct: 2, explanation: "ପ୍ରଥମ ଅକ୍ଷର ବଡ଼ ଏବଂ ଦ୍ୱିତୀୟ ଅକ୍ଷର ଛୋଟ ଅକ୍ଷରରେ" },
                    { question: "Iron (ଲୁହା) ର ଲାଟିନ୍ ନାମ କଣ, ଯେଉଁଥିରୁ ଏହାର ପ୍ରତୀକ (Fe) ଆସିଛି?", options: ["Argentum", "Natrium", "Ferrum", "Kalium"], correct: 2, explanation: "Ferrum" },
                    { question: "Sodium (ସୋଡିୟମ୍) ର ଲାଟିନ୍ ନାମ କଣ, ଯେଉଁଥିରୁ ଏହାର ପ୍ରତୀକ (Na) ଆସିଛି?", options: ["Argentum", "Natrium", "Ferrum", "Kalium"], correct: 1, explanation: "Natrium" },
                    { question: "Potassium (ପୋଟାସିୟମ୍) ର ଲାଟିନ୍ ନାମ କଣ, ଯେଉଁଥିରୁ ଏହାର ପ୍ରତୀକ (K) ଆସିଛି?", options: ["Argentum", "Natrium", "Ferrum", "Kalium"], correct: 3, explanation: "Kalium" },
                    { question: "ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡ ମାପିବା ପାଇଁ ଆରମ୍ଭରେ କେଉଁ ପରମାଣୁର 1/16 ଭାଗକୁ ମାନକ ଭାବରେ ବ୍ୟବହାର କରାଯାଉଥିଲା?", options: ["ହାଇଡ୍ରୋଜେନ", "କାର୍ବନ", "ଅମ୍ଳଜାନ", "ସଲ୍‌ଫର୍"], correct: 2, explanation: "ଅମ୍ଳଜାନ" },
                    { question: "ବର୍ତ୍ତମାନ (1961 ପରେ) ପାରମାଣବିକ ପିଣ୍ଡ ମାପିବା ପାଇଁ କେଉଁ ଆଇସୋଟୋପ୍ ର 1/12 ଭାଗକୁ ମାନକ ଭାବରେ ବ୍ୟବହାର କରାଯାଉଛି?", options: ["ଅମ୍ଳଜାନ-16", "କାର୍ବନ-12", "ହାଇଡ୍ରୋଜେନ-1", "ସଲ୍‌ଫର୍-32"], correct: 1, explanation: "କାର୍ବନ-12" },
                    { question: "ପାରମାଣବିକ ପିଣ୍ଡ ଏକକ (atomic mass unit) କୁ କେଉଁ ପ୍ରତୀକ ଦ୍ୱାରା ଦର୍ଶାଯାଏ?", options: ["amu କିମ୍ବା u", "g", "mol", "N₀"], correct: 0, explanation: "amu କିମ୍ବା u" },
                    { question: "Carbon-12 (C-12) ର ପାରମାଣବିକ ପିଣ୍ଡ କେତେ?", options: ["1 u", "12 u", "14 u", "16 u"], correct: 1, explanation: "12 u" },
                    { question: "ଅଣୁ ହେଉଛି ଦୁଇ କିମ୍ବା ଅଧିକ ପରମାଣୁର ସମୂହ ଯାହା କିପରି ସଂଯୁକ୍ତ ହୋଇଥାଏ?", options: ["ଶାରୀରିକ ଭାବରେ ମିଶି", "ରାସାୟନିକ ଭାବରେ ଦୃଢ଼ ଭାବରେ", "କୌଣସି ସଂଯୋଗରେ ନୁହେଁ", "ଆୟନିକ ବନ୍ଧନ ଦ୍ୱାରା"], correct: 1, explanation: "ରାସାୟନିକ ଭାବରେ ଦୃଢ଼ ଭାବରେ" },
                    { question: "କେଉଁଟିକୁ ଏକ ମୌଳିକ କିମ୍ବା ଯୌଗିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଭାବରେ ବିବେଚନା କରାଯାଏ ଯାହା ସ୍ୱାଧୀନ ଭାବରେ ବିଦ୍ୟମାନ ହୋଇପାରେ?", options: ["ପରମାଣୁ", "ଆୟନ", "ମୋଲ୍", "ଅଣୁ"], correct: 3, explanation: "ଅଣୁ" },
                    { question: "ଏକ ମୌଳିକର ଅଣୁ କେଉଁ ପ୍ରକାରର ପରମାଣୁକୁ ନେଇ ଗଠିତ ହୋଇଥାଏ?", options: ["ଭିନ୍ନ ଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁ", "ସମାନ ପ୍ରକାରର ପରମାଣୁ", "ଆୟନ", "କୌଣସି ପରମାଣୁ ନୁହେଁ"], correct: 1, explanation: "ସମାନ ପ୍ରକାରର ପରମାଣୁ" },
                    { question: "ଗୋଟିଏ ଅଣୁରେ ଥିବା ପରମାଣୁ ସଂଖ୍ୟାକୁ କଣ କୁହାଯାଏ?", options: ["ଯୋଜକତା", "ଆଣବିକ ପିଣ୍ଡ", "ପରମାଣୁକତା (Atomicity)", "ମୋଲାର ପିଣ୍ଡ"], correct: 2, explanation: "ପରମାଣୁକତା (Atomicity)" },
                    { question: "ଅମ୍ଳଜାନ ଅଣୁ (O₂) ର ପରମାଣୁକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 1, explanation: "2" },
                    { question: "ଓଜୋନ୍ (O₃) ଅଣୁର ପରମାଣୁକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 2, explanation: "3" },
                    { question: "କେବଳ ଗୋଟିଏ ପରମାଣୁ ଧାରଣ କରୁଥିବା ଅଣୁକୁ କଣ କୁହାଯାଏ?", options: ["ଦ୍ୱି-ପାରମାଣବିକ (Diatomic)", "ବହୁପାରମାଣବିକ (Polyatomic)", "ଏକକ ପାରମାଣବିକ (Monoatomic)", "ତ୍ରି-ପାରମାଣବିକ (Triatomic)"], correct: 2, explanation: "ଏକକ ପାରମାଣବିକ (Monoatomic)" },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଏକକ ପାରମାଣବିକ ଅଣୁର ଉଦାହରଣ?", options: ["H₂", "O₂", "Ne (Neon)", "S₈"], correct: 2, explanation: "Ne (Neon)" },
                    { question: "ଏକ ଯୌଗିକର ଅଣୁ କେଉଁ ପ୍ରକାରର ପରମାଣୁକୁ ନେଇ ଗଠିତ ହୋଇଥାଏ?", options: ["ସମାନ ପ୍ରକାରର ପରମାଣୁ", "ଭିନ୍ନ ଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ", "କେବଳ ଆୟନ", "କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟତା ନଥାଏ"], correct: 1, explanation: "ଭିନ୍ନ ଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ" },
                    { question: "ଜଳ (H₂O)ର ଏକ ଅଣୁରେ କେତୋଟି ହାଇଡ୍ରୋଜେନ ପରମାଣୁ ଏବଂ କେତୋଟି ଅମ୍ଳଜାନ ପରମାଣୁ ଥାଏ?", options: ["1 H, 2 O", "2 H, 1 O", "1 H, 1 O", "2 H, 2 O"], correct: 1, explanation: "2 H, 1 O" },
                    { question: "ଆୟନ କଣ?", options: ["ଏକ ନିରପେକ୍ଷ କଣିକା", "ଏକ ଚାର୍ଜ୍‌ଯୁକ୍ତ କଣିକା", "ଏକ ଅବିଭାଜ୍ୟ କଣିକା", "ଏକ ସ୍ୱାଧୀନ କଣିକା"], correct: 1, explanation: "ଏକ ଚାର୍ଜ୍‌ଯୁକ୍ତ କଣିକା" },
                    { question: "ଯଦି ଏକ ଆୟନ ଉପରେ ଧନ ଚାର୍ଜ ଥାଏ, ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["ଆନାୟନ (Anion)", "କ୍ୟାଟାୟନ (Cation)", "ପଲିଆଟୋମିକ୍ ଆୟନ (Polyatomic ion)", "ଅଣୁ (Molecule)"], correct: 1, explanation: "କ୍ୟାଟାୟନ (Cation)" },
                    { question: "ଯଦି ଏକ ଆୟନ ଉପରେ ଋଣ ଚାର୍ଜ ଥାଏ, ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["ଆନାୟନ (Anion)", "କ୍ୟାଟାୟନ (Cation)", "ପଲିଆଟୋମିକ୍ ଆୟନ (Polyatomic ion)", "ଅଣୁ (Molecule)"], correct: 0, explanation: "ଆନାୟନ (Anion)" },
                    { question: "ପରମାଣୁର ଏକ ଗୋଷ୍ଠୀ ଉପରେ ଚାର୍ଜ ଥିଲେ ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["କ୍ୟାଟାୟନ", "ଆନାୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ", "ଦ୍ୱି-ପାରମାଣବିକ ଅଣୁ"], correct: 2, explanation: "ପଲିଆଟୋମିକ୍ ଆୟନ" },
                    { question: "Na⁺ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["ଆନାୟନ", "କ୍ୟାଟାୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ", "ମୌଳିକର ଅଣୁ"], correct: 1, explanation: "କ୍ୟାଟାୟନ" },
                    { question: "Cl⁻ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["ଆନାୟନ", "କ୍ୟାଟାୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ", "ଯୌଗିକର ଅଣୁ"], correct: 0, explanation: "ଆନାୟନ" },
                    { question: "SO₄²⁻ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["କ୍ୟାଟାୟନ", "ଆନାୟନ", "ଏକକ ପାରମାଣବିକ ଆୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ"], correct: 3, explanation: "ପଲିଆଟୋମିକ୍ ଆୟନ" },
                    { question: "NH₄⁺ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["କ୍ୟାଟାୟନ", "ଆନାୟନ", "ଏକକ ପାରମାଣବିକ ଆୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ"], correct: 3, explanation: "ପଲିଆଟୋମିକ୍ ଆୟନ" },
                    { question: "ଏକ ଯୌଗିକର ରାସାୟନିକ ଫର୍ମୁଲା କଣ ଦର୍ଶାଏ?", options: ["କେବଳ ଯୌଗିକର ରଙ୍ଗ", "ଉପାଦାନ ମୌଳିକ ଏବଂ ପ୍ରତ୍ୟେକ ମୌଳିକର ପରମାଣୁ ସଂଖ୍ୟା", "ଯୌଗିକର ଆଣବିକ ପିଣ୍ଡ", "ଯୌଗିକର ଭୌତିକ ଅବସ୍ଥା"], correct: 1, explanation: "ଉପାଦାନ ମୌଳିକ ଏବଂ ପ୍ରତ୍ୟେକ ମୌଳିକର ପରମାଣୁ ସଂଖ୍ୟା" },
                    { question: "ଏକ ମୌଳିକର ଯୋଜକତା (Valency) କଣ?", options: ["ଏହାର ପରମାଣୁ ସଂଖ୍ୟା", "ଏହାର ପାରମାଣବିକ ପିଣ୍ଡ", "ଅନ୍ୟ ମୌଳିକ ସହିତ ମିଶିବାର ତାହାର କ୍ଷମତା", "ଏହାର ଆୟନର ଚାର୍ଜ"], correct: 2, explanation: "ଅନ୍ୟ ମୌଳିକ ସହିତ ମିଶିବାର ତାହାର କ୍ଷମତା" },
                    { question: "କିଛି ମୌଳିକ ଏକାଧିକ ଯୋଜକତା ପ୍ରଦର୍ଶନ କରନ୍ତି, ଏହାକୁ କଣ କୁହାଯାଏ?", options: ["ନିର୍ଦ୍ଦିଷ୍ଟ ଯୋଜକତା (Fixed valency)", "ପରିବର୍ତ୍ତନଶୀଳ ଯୋଜକତା (Variable valency)", "ଶୂନ୍ୟ ଯୋଜକତା (Zero valency)", "ଉଚ୍ଚ ଯୋଜକତା (High valency)"], correct: 1, explanation: "ପରିବର୍ତ୍ତନଶୀଳ ଯୋଜକତା (Variable valency)" },
                    { question: "ରାସାୟନିକ ଫର୍ମୁଲା ଲେଖିବାର ପଦ୍ଧତିରେ ଯୋଜକତାଗୁଡ଼ିକୁ କିପରି ବ୍ୟବହାର କରାଯାଏ?", options: ["ସିଧାସଳଖ ସବ୍‌ସ୍କ୍ରିପ୍ଟ ଭାବରେ ଲେଖାଯାଏ", "କେବଳ ପ୍ରତୀକ ଉପରେ ଲେଖାଯାଏ", "କ୍ରସ୍ ଓଭର୍ (Cross over) କରି ଲେଖାଯାଏ", "ବନ୍ଧନୀ ଭିତରେ ଲେଖାଯାଏ"], correct: 2, explanation: "କ୍ରସ୍ ଓଭର୍ (Cross over) କରି ଲେଖାଯାଏ" },
                    { question: "ଯେତେବେଳେ ଏକ ପଲିଆଟୋମିକ୍ ଆୟନ ଫର୍ମୁଲାରେ ଏକରୁ ଅଧିକ ଥାଏ, ତାହାକୁ କିପରି ଲେଖାଯାଏ?", options: ["ସିଧାସଳଖ ଲେଖାଯାଏ", "ବ୍ରାକେଟ୍ ଭିତରେ ରଖି ବାହାରେ ସଂଖ୍ୟା ଲେଖାଯାଏ", "ଆୟନର ନାମ ଲେଖାଯାଏ", "ଫର୍ମୁଲାରେ ଏହାକୁ ଛାଡି ଦିଆଯାଏ"], correct: 1, explanation: "ବ୍ରାକେଟ୍ ଭିତରେ ରଖି ବାହାରେ ସଂଖ୍ୟା ଲେଖାଯାଏ" },
                    { question: "NaCl ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Na ଏବଂ Cl ର ଯୋଜକତା କେତେ?", options: ["Na: 1, Cl: 1", "Na: 1, Cl: 2", "Na: 2, Cl: 1", "Na: 2, Cl: 2"], correct: 0, explanation: "Na: 1, Cl: 1" },
                    { question: "CH₄ ର ରାସାୟନିକ ଫର୍ମୁଲାରେ C ଏବଂ H ର ଯୋଜକତା କେତେ?", options: ["C: 1, H: 4", "C: 4, H: 1", "C: 2, H: 4", "C: 4, H: 2"], correct: 1, explanation: "C: 4, H: 1" },
                    { question: "CaCl₂ ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Ca ଏବଂ Cl ର ଯୋଜକତା କେତେ?", options: ["Ca: 1, Cl: 2", "Ca: 2, Cl: 1", "Ca: 2, Cl: 2", "Ca: 1, Cl: 1"], correct: 1, explanation: "Ca: 2, Cl: 1" },
                    { question: "ଆଣବିକ ପିଣ୍ଡ (Molecular Mass) କଣ?", options: ["ଗୋଟିଏ ପରମାଣୁର ପିଣ୍ଡ", "ଏକ ଅଣୁରେ ଥିବା ସମସ୍ତ ଉପାଦାନ ପରମାଣୁର ପାରମାଣବିକ ପିଣ୍ଡର ଯୋଗଫଳ", "ଗୋଟିଏ ମୋଲ୍ କଣିକାର ପିଣ୍ଡ", "ପରମାଣୁର ସଂଖ୍ୟା"], correct: 1, explanation: "ଏକ ଅଣୁରେ ଥିବା ସମସ୍ତ ଉପାଦାନ ପରମାଣୁର ପାରମାଣବିକ ପିଣ୍ଡର ଯୋଗଫଳ" },
                    { question: "ଆଣବିକ ପିଣ୍ଡ କେଉଁ ଏକକରେ ପ୍ରକାଶ କରାଯାଏ?", options: ["ଗ୍ରାମ୍ (g)", "କିଲୋଗ୍ରାମ୍ (kg)", "ମୋଲ୍ (mol)", "ଆଣବିକ ପିଣ୍ଡ ଏକକ (u)"], correct: 3, explanation: "ଆଣବିକ ପିଣ୍ଡ ଏକକ (u)" },
                    { question: "ଜଳ (H₂O) ର ଆଣବିକ ପିଣ୍ଡ କେତେ (H=1u, O=16u)?", options: ["17 u", "18 u", "19 u", "34 u"], correct: 1, explanation: "18 u" },
                    { question: "କ୍ୟାଲସିୟମ କାର୍ବୋନେଟ୍ (CaCO₃) ର ଆଣବିକ ପିଣ୍ଡ କେତେ (Ca=40u, C=12u, O=16u)?", options: ["68 u", "100 u", "112 u", "156 u"], correct: 1, explanation: "100 u" },
                    { question: "ମୋଲ୍ (Mole) ହେଉଛି କଣ?", options: ["ଏକ ପରମାଣୁର ପିଣ୍ଡ", "ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସଂଖ୍ୟକ କଣିକା (ପରମାଣୁ, ଅଣୁ, ଆୟନ)", "ଏକ ଅଣୁର ପିଣ୍ଡ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାର ଦର"], correct: 1, explanation: "ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସଂଖ୍ୟକ କଣିକା (ପରମାଣୁ, ଅଣୁ, ଆୟନ)" },
                    { question: "ଏକ ମୋଲ୍ କଣିକାର ସଂଖ୍ୟାକୁ କଣ କୁହାଯାଏ?", options: ["ଡାଲଟନ୍ ସ୍ଥିରାଙ୍କ", "ଆଭୋଗାଡ୍ରୋ ସ୍ଥିରାଙ୍କ (Avogadro constant)", "ବୋଲ୍ଟଜମାନ ସ୍ଥିରାଙ୍କ", "ମୋଲାର ସଂଖ୍ୟା"], correct: 1, explanation: "ଆଭୋଗାଡ୍ରୋ ସ୍ଥିରାଙ୍କ (Avogadro constant)" },
                    { question: "ଆଭୋଗାଡ୍ରୋ ସ୍ଥିରାଙ୍କର ମୂଲ୍ୟ କେତେ?", options: ["6.022 × 10²²", "6.022 × 10²³", "6.22 × 10²³", "6.022 × 10⁻²³"], correct: 1, explanation: "6.022 × 10²³" },
                    { question: "ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟାକୁ କେଉଁ ପ୍ରତୀକ ଦ୍ୱାରା ଦର୍ଶାଯାଏ?", options: ["M", "A", "N₀", "L"], correct: 2, explanation: "N₀" },
                    { question: "ଏକ ପଦାର୍ଥର ମୋଲାର ପିଣ୍ଡ (Molar Mass) କଣ?", options: ["ଏହାର ଏକ ଅଣୁର ପିଣ୍ଡ", "ଏହାର ଏକ ପରମାଣୁର ପିଣ୍ଡ", "ଏହାର ଏକ ମୋଲ୍ କଣିକାର ପିଣ୍ଡ", "ଏହାର ଆପେକ୍ଷିକ ପିଣ୍ଡ"], correct: 2, explanation: "ଏହାର ଏକ ମୋଲ୍ କଣିକାର ପିଣ୍ଡ" },
                    { question: "ମୋଲାର ପିଣ୍ଡ କେଉଁ ଏକକରେ ପ୍ରକାଶ କରାଯାଏ?", options: ["u", "g", "g/mol", "mol"], correct: 2, explanation: "g/mol" },
                    { question: "ନାଇଟ୍ରୋଜେନ ପରମାଣୁ (N)ର ପାରମାଣବିକ ପିଣ୍ଡ 14 u ହୋଇଥିବା ବେଳେ, ଏହାର ମୋଲାର ପିଣ୍ଡ କେତେ?", options: ["14 u", "14 g", "14 mol", "14 g/mol"], correct: 3, explanation: "14 g/mol" },
                    { question: "ଜଳ (H₂O)ର ଆଣବିକ ପିଣ୍ଡ 18 u ହୋଇଥିବା ବେଳେ, ଏହାର ମୋଲାର ପିଣ୍ଡ କେତେ?", options: ["18 u", "18 g", "18 mol", "18 g/mol"], correct: 3, explanation: "18 g/mol" },
                    { question: "1 ମୋଲ୍ ହାଇଡ୍ରୋଜେନ ପରମାଣୁ (H) ର ପିଣ୍ଡ କେତେ (H=1u)?", options: ["1 u", "1 g", "2 u", "2 g"], correct: 1, explanation: "1 g" },
                    { question: "1 ମୋଲ୍ ନାଇଟ୍ରୋଜେନ ପରମାଣୁ (N) ର ପିଣ୍ଡ କେତେ (N=14u)?", options: ["14 u", "14 g", "28 u", "28 g"], correct: 1, explanation: "14 g" },
                    { question: "1 ମୋଲ୍ ଅମ୍ଳଜାନ ପରମାଣୁ (O) ର ପିଣ୍ଡ କେତେ (O=16u)?", options: ["16 u", "16 g", "32 u", "32 g"], correct: 1, explanation: "16 g" },
                    { question: "1 ମୋଲ୍ ହାଇଡ୍ରୋଜେନ ଅଣୁ (H₂) ର ପିଣ୍ଡ କେତେ (H=1u)?", options: ["1 u", "1 g", "2 u", "2 g"], correct: 3, explanation: "2 g" },
                    { question: "0.5 ମୋଲ୍ ନାଇଟ୍ରୋଜେନ ଗ୍ୟାସ୍ (N₂) ର ପିଣ୍ଡ କେତେ (N=14u)?", options: ["14 g", "28 g", "7 g", "0.5 g"], correct: 0, explanation: "14 g (1 ମୋଲ N₂ = 2*14 = 28g, ତେଣୁ 0.5 ମୋଲ = 0.5 * 28 = 14g)" },
                    { question: "100 g CaCO₃ କୁ ଗରମ କଲେ କେତେ g CaO ଉତ୍ପନ୍ନ ହେବ (CaCO₃=100u, CaO=56u, CO₂=44u)?", options: ["100 g", "56 g", "44 g", "156 g"], correct: 1, explanation: "56 g (1 ମୋଲ CaCO₃ (100g) ବିଘଟିତ ହୋଇ 1 ମୋଲ CaO (56g) ଓ 1 ମୋଲ CO₂ (44g) ଦେଇଥାଏ। 100g CaCO₃ ହେଉଛି 1 ମୋଲ। ତେଣୁ 56g CaO ଉତ୍ପନ୍ନ ହେବ।)" },
                    { question: "କୌଣସି ମୌଳିକ ବା ଯୌଗିକର ଆଣବିକ ପିଣ୍ଡକୁ ସାଂଖ୍ୟିକ ଭାବରେ ଗ୍ରାମରେ ପ୍ରକାଶ କଲେ, ତାହା କଣ ହୁଏ?", options: ["ପାରମାଣବିକ ପିଣ୍ଡ", "ଆଣବିକ ପିଣ୍ଡ ଏକକ", "ମୋଲାର ପିଣ୍ଡ", "ପରମାଣୁକତା"], correct: 2, explanation: "ମୋଲାର ପିଣ୍ଡ" },
                    { question: "ପରମାଣୁ ସହିତ ତୁଳନା କଲେ ଅଣୁର ଆକାର କିପରି ଥାଏ?", options: ["ସମାନ", "ସର୍ବଦା ବଡ଼", "ସର୍ବଦା ଛୋଟ", "ସମାନ କିମ୍ବା ବଡ଼"], correct: 3, explanation: "ସମାନ କିମ୍ବା ବଡ଼ (ଏକକ ପାରମାଣବିକ ଅଣୁ ପରମାଣୁ ସହିତ ସମାନ, ଅନ୍ୟମାନେ ବଡ଼)" },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପଲିଆଟୋମିକ୍ ଆୟନ ନୁହେଁ?", options: ["SO₄²⁻", "NH₄⁺", "Cl⁻", "CO₃²⁻"], correct: 2, explanation: "Cl⁻ (ଏହା ଏକ ଏକକ ପାରମାଣବିକ ଆନାୟନ)" },
                    { question: "ଏକ ଦ୍ୱି-ପାରମାଣବିକ ଅଣୁ (Diatomic molecule) ର ଉଦାହରଣ କଣ?", options: ["He", "O₂", "O₃", "P₄"], correct: 1, explanation: "O₂" },
                    { question: "ଫସ୍‌ଫରସ୍ (Phosphorus) ଅଣୁ କେତୋଟି ପରମାଣୁକୁ ନେଇ ଗଠିତ?", options: ["1", "2", "4", "8"], correct: 2, explanation: "4 (P₄ ଫସ୍‌ଫରସ୍ ଅଣୁ)" },
                    { question: "ସଲ୍‌ଫର୍ (Sulphur) ଅଣୁ କେତୋଟି ପରମାଣୁକୁ ନେଇ ଗଠିତ?", options: ["1", "2", "4", "8"], correct: 3, explanation: "8 (S₈ ସଲ୍‌ଫର୍ ଅଣୁ)" },
                    { question: "MgO ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Mg ଓ O ର ଯୋଜକତା କେତେ?", options: ["Mg: 1, O: 1", "Mg: 1, O: 2", "Mg: 2, O: 1", "Mg: 2, O: 2"], correct: 3, explanation: "Mg: 2, O: 2 (କ୍ରସ୍ ଓଭର୍ କରିବା ପୂର୍ବରୁ 2+ ଓ 2- ଥାଏ, ତେଣୁ ଯୋଜକତା 2 ଓ 2। ସରଳ ଅନୁପାତରେ 1:1 ହୋଇ MgO ହୁଏ)" },
                    { question: "ଆଣବିକ ପିଣ୍ଡ ଏକକ 'u' ର ପୂରା ନାମ କଣ?", options: ["unified mass", "atomic mass unit", "unique mass", "unit mass"], correct: 0, explanation: "unified mass (କିମ୍ବା atomic mass unit)" },
                    { question: "ରାସାୟନିକ ଫର୍ମୁଲା ଲେଖିବା ସମୟରେ, କେଉଁ ଅଂଶକୁ ପ୍ରଥମେ ଲେଖାଯାଏ?", options: ["ଋଣାତ୍ମକ ଆବିଷ୍ଟ ଅଂଶ", "ଧନାତ୍ମକ ଆବିଷ୍ଟ ଅଂଶ", "ଅଧାତୁ", "ଅମ୍ଳଜାନ"], correct: 1, explanation: "ଧନାତ୍ମକ ଆବିଷ୍ଟ ଅଂଶ" },
                    { question: "କେଉଁ ଯୌଗିକଗୁଡ଼ିକ ପ୍ରାୟତଃ ଆୟନରେ ଗଠିତ ହୋଇଥାନ୍ତି?", options: ["କେବଳ ଅଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ", "କେବଳ ଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ", "ଧାତୁ ଏବଂ ଅଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ", "ଉଦ୍ଭିଦରୁ ପ୍ରାପ୍ତ ଯୌଗିକ"], correct: 2, explanation: "ଧାତୁ ଏବଂ ଅଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ" },
                    { question: "Ca(OH)₂ ରେ OH ବ୍ରାକେଟ୍ ଭିତରେ ରଖିବାର କାରଣ କଣ?", options: ["OH ଗୋଟିଏ ପରମାଣୁ", "OH ଗୋଟିଏ ଯୌଗିକ", "OH ଗୋଟିଏ ପଲିଆଟୋମିକ୍ ଆୟନ ଏବଂ ଏହା ଏକରୁ ଅଧିକ ଥାଏ", "ଏହା କେବଳ ଏକ ଲେଖିବାର ଶୈଳୀ"], correct: 2, explanation: "OH ଗୋଟିଏ ପଲିଆଟୋମିକ୍ ଆୟନ ଏବଂ ଏହା ଏକରୁ ଅଧିକ ଥାଏ" },
                    { question: "ଆଣବିକ ପିଣ୍ଡ ଏବଂ ମୋଲ୍ ଧାରଣା କେଉଁଥିରେ ଅତ୍ୟନ୍ତ ଉପଯୋଗୀ?", options: ["ଭୌତିକ ପ୍ରକ୍ରିୟା ବୁଝିବାରେ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଗଣନାରେ", "ପଦାର୍ଥର ରଙ୍ଗ ନିର୍ଦ୍ଧାରଣରେ", "ପଦାର୍ଥର ବ୍ୟାସ ମାପିବାରେ"], correct: 1, explanation: "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଗଣନାରେ" },
                    { question: "ହାଇଡ୍ରୋଜେନ (H) ର ଯୋଜକତାକୁ ପ୍ରାୟତଃ କେତେ ଭାବରେ ଗ୍ରହଣ କରାଯାଏ ଯୋଜକତା ତୁଳନା ପାଇଁ?", options: ["0", "1", "2", "4"], correct: 1, explanation: "1" },
                    { question: "ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡର ଧାରଣା କାହିଁକି ବ୍ୟବହାର କରାଯାଏ?", options: ["ପରମାଣୁର ରଙ୍ଗ ମାପିବା ପାଇଁ", "ପରମାଣୁର ଆକାର ମାପିବା ପାଇଁ", "ପରମାଣୁର ପିଣ୍ଡ ମାପିବା ଅତ୍ୟନ୍ତ କଷ୍ଟକର ହୋଇଥିବାରୁ", "ଆୟନର ଚାର୍ଜ ମାପିବା ପାଇଁ"], correct: 2, explanation: "ପରମାଣୁର ପିଣ୍ଡ ମାପିବା ଅତ୍ୟନ୍ତ କଷ୍ଟକର ହୋଇଥିବାରୁ" },
                    { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ କେଉଁ ନିୟମକୁ ବୁଝାଇବାରେ ସାହାଯ୍ୟ କଲା?", options: ["ଗୁଣିତ ଅନୁପାତ ନିୟମ", "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ଓ ସ୍ଥିର ଅନୁପାତ ନିୟମ", "ଚାପ ନିୟମ", "ଆୟତନ ନିୟମ"], correct: 1, explanation: "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ଓ ସ୍ଥିର ଅନୁପାତ ନିୟମ" },
                    { question: "କେଉଁଟି ଏକ ବହୁପାରମାଣବିକ କ୍ୟାଟାୟନର ଉଦାହରଣ?", options: ["OH⁻", "CO₃²⁻", "NH₄⁺", "PO₄³⁻"], correct: 2, explanation: "NH₄⁺" },
                    { question: "କେଉଁଟି ଏକ ବହୁପାରମାଣବିକ ଆନାୟନର ଉଦାହରଣ?", options: ["Na⁺", "K⁺", "SO₄²⁻", "Mg²⁺"], correct: 2, explanation: "SO₄²⁻" },
                    { question: "ଏକକ ପାରମାଣବିକ ଅଣୁ ସାଧାରଣତଃ କେଉଁ ମୌଳିକଗୁଡ଼ିକର ହୋଇଥାଏ?", options: ["ଧାତୁ", "ଅଧାତୁ", "ନୋବେଲ ଗ୍ୟାସ୍", "ହାଲୋଜେନ"], correct: 2, explanation: "ନୋବେଲ ଗ୍ୟାସ୍ (ଉଦାହରଣ: Helium, Neon, Argon)" },
                    { question: "କ୍ୟାଟାୟନ କିପରି ଗଠିତ ହୁଏ?", options: ["ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ହରାଇଲେ", "ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ଗ୍ରହଣ କଲେ", "ପରମାଣୁ ପ୍ରୋଟୋନ ହରାଇଲେ", "ପରମାଣୁ ନିଉଟ୍ରନ ହରାଇଲେ"], correct: 0, explanation: "ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ହରାଇଲେ" },
                    { question: "ଆନାୟନ କିପରି ଗଠିତ ହୁଏ?", options: ["ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ହରାଇଲେ", "ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ଗ୍ରହଣ କଲେ", "ପରମାଣୁ ପ୍ରୋଟୋନ ହରାଇଲେ", "ପରମାଣୁ ନିଉଟ୍ରନ ହରାଇଲେ"], correct: 1, explanation: "ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ଗ୍ରହଣ କଲେ" },
                    { question: "Chemical Formula ବା ରାସାୟନିକ ଫର୍ମୁଲା କଣ?", options: ["ମୌଳିକଗୁଡ଼ିକର ନାମ", "ଯୌଗିକରେ ଉପସ୍ଥିତ ମୌଳିକ ଓ ସେମାନଙ୍କ ସଂଖ୍ୟାର ପ୍ରତୀକାତ୍ମକ ପ୍ରତିନିଧିତ୍ୱ", "ପରମାଣୁର ପିଣ୍ଡ", "ଅଣୁର ଆକାର"], correct: 1, explanation: "ଯୌଗିକରେ ଉପସ୍ଥିତ ମୌଳିକ ଓ ସେମାନଙ୍କ ସଂଖ୍ୟାର ପ୍ରତୀକାତ୍ମକ ପ୍ରତିନିଧିତ୍ୱ" },
                    { question: "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମକୁ ପରୀକ୍ଷା କରିବା ପାଇଁ କେଉଁ ଉପକରଣ ବ୍ୟବହାର କରାଯାଇପାରେ?", options: ["ବେଞ୍ଚ ଟପ୍ ବାଲାନ୍ସ", "କୋନିକାଲ ଫ୍ଲାସ୍କ ଓ ଇଗ୍ନିସନ ଟ୍ୟୁବ୍", "ମାପିବା ସିଲିଣ୍ଡର", "ବୁରେଟ୍"], correct: 1, explanation: "କୋନିକାଲ ଫ୍ଲାସ୍କ ଓ ଇଗ୍ନିସନ ଟ୍ୟୁବ୍ (ପରୀକ୍ଷାର ବର୍ଣ୍ଣନା ଅନୁଯାୟୀ)" },
                    { question: "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ପରୀକ୍ଷାରେ Baryum chloride ଦ୍ରବଣ କାହା ସହିତ ମିଶାଯାଇଥିଲା?", options: ["Sodium chloride ଦ୍ରବଣ", "Sodium sulphate ଦ୍ରବଣ", "Potassium nitrate ଦ୍ରବଣ", "Lead nitrate ଦ୍ରବଣ"], correct: 1, explanation: "Sodium sulphate ଦ୍ରବଣ" },
                    { question: "କାର୍ବନ-୧୨ (C-12) ସମସ୍ଥାନିକ (isotope) କେଉଁ ବର୍ଷରେ ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡ ପାଇଁ ମାନକ ଭାବରେ ଗ୍ରହଣ କରାଗଲା?", options: ["1945", "1950", "1961", "1975"], correct: 2, explanation: "1961" },
                    { question: "Molar Mass ର ଏକକ କଣ?", options: ["u", "g", "g mol⁻¹", "mol"], correct: 2, explanation: "g mol⁻¹ (କିମ୍ବା g/mol)" },
                    { question: "ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା କେଉଁ ବୈଜ୍ଞାନିକଙ୍କ ନାମରେ ନାମିତ?", options: ["ଡାଲଟନ୍", "ଲିଭୋଇଜିଅର", "ପ୍ରାଉଷ୍ଟ", "ଆଭୋଗାଡ୍ରୋ"], correct: 3, explanation: "ଆଭୋଗାଡ୍ରୋ" },
                    { question: "ଆଲୁମିନିୟମ କ୍ଲୋରାଇଡ୍ (AlCl₃) ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Al ର ଯୋଜକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 2, explanation: "3 (ଯଦି Cl ର ଯୋଜକତା 1, ତେବେ AlCl₃ ପାଇଁ Al ର ଯୋଜକତା 3 ହେବ)" },
                    { question: "Sodium sulphate ର ରାସାୟନିକ ଫର୍ମୁଲା କଣ?", options: ["NaSO₄", "Na₂(SO₄)₂", "Na₂SO₄", "Na(SO₄)₂"], correct: 2, explanation: "Na₂SO₄ (Na⁺ ର ଯୋଜକତା 1+, SO₄²⁻ ର ଯୋଜକତା 2-)" },
                    { question: "Ammonium carbonate ର ରାସାୟନିକ ଫର୍ମୁଲା କଣ?", options: ["NH₄CO₃", "(NH₄)₂CO₃", "NH₄(CO₃)₂", "(NH₄)₂ (CO₃)₂"], correct: 1, explanation: "(NH₄)₂CO₃ (NH₄⁺ ର ଯୋଜକତା 1+, CO₃²⁻ ର ଯୋଜକତା 2-)" },
                    { question: "Fe₂O₃ ରେ Iron (Fe) ର ଯୋଜକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 2, explanation: "3 (O ର ଯୋଜକତା ସାଧାରଣତଃ 2-. ଦୁଇଟି Fe ପରମାଣୁ ତିନୋଟି O ପରମାଣୁ ସହିତ ମିଶିଛନ୍ତି. 2 * Fe_ଯୋଜକତା = 3 * 2. ତେଣୁ ଗୋଟିଏ Fe ର ଯୋଜକତା 3)" }
                ],
                audio: [
                    {
                        title: "Atoms and Molecules Basics",
                        description: "Fundamental concepts of atoms and molecules.",
                        src: "./atom.wav", // Placeholder
                    },
                ],
                video: [
                    {
                        title: "Dalton's Atomic Theory Explained",
                        description: "Visual explanation of Dalton's postulates.",
                        src: "path/to/daltons_theory_video.mp4", // Placeholder
                    },
                ],
            },
            "Tissue System": {
        notes: [
            {
                title: "ଉଦ୍ଭିଦ ଶରୀରରେ ତନ୍ତୁର ପ୍ରକାରଭେଦ ଏବଂ ସେମାନଙ୍କ କାର୍ଯ୍ୟ",
                content: "ଉଦ୍ଭିଦ ଶରୀରରେ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର ତନ୍ତୁ ରହିଛି: ବିଭାଜନକ୍ଷମ ବା ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ ଏବଂ ସ୍ଥାୟୀ ତନ୍ତୁ । ଏହି ତନ୍ତୁଗୁଡ଼ିକ ଉଦ୍ଭିଦର ବୃଦ୍ଧି, ସଂରଚନାଗତ ସହାୟତା ଓ ପରିବହନରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଭୂମିକା ଗ୍ରହଣ କରନ୍ତି। \n\n* **ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ (Meristematic Tissue):**\n    * ଏହି ତନ୍ତୁର କୋଷଗୁଡ଼ିକ ସକ୍ରିୟ ଭାବରେ ବିଭାଜିତ ହେଉଥିବା କୋଷଗୁଡ଼ିକ ଦ୍ୱାରା ଗଠିତ ।\n    * ଏହା ଉଦ୍ଭିଦର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ ।\n    * ଏହା ମୁଖ୍ୟତଃ ଉଦ୍ଭିଦର ବୃଦ୍ଧି ଅଞ୍ଚଳରେ ଦେଖାଯାଏ ।\n    * ଏହା ଦୁଇ ପ୍ରକାରର:\n        * **ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ (Primary Meristem):** ଏହା ଭ୍ରୂଣାବସ୍ଥାରୁ ଉତ୍ପନ୍ନ ହୁଏ । ଏହା ଉଦ୍ଭିଦର ଲମ୍ବ ବୃଦ୍ଧି (କାଣ୍ଡ ଓ ମୂଳର ଅଗ୍ରଭାଗ) ପାଇଁ ଦାୟୀ । ଉଦାହରଣ: ଶୀର୍ଷସ୍ଥ ମେରିଷ୍ଟେମ (Apical Meristem) ଯାହା କାଣ୍ଡ ଓ ଚେରର ଅଗ୍ରଭାଗରେ ଥାଏ ଏବଂ ନିବେଶିତ ମେରିଷ୍ଟେମ (Intercalary Meristem) ଯାହା ଗଣ୍ଠି ନିକଟରେ ଥାଏ ।\n        * **ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ (Secondary Meristem):** ଏହା ପ୍ରାଥମିକ ମେରିଷ୍ଟେମରୁ ଉତ୍ପନ୍ନ ହୁଏ । ଏହା ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧି (କାଣ୍ଡ ଓ ମୂଳର ବ୍ୟାସ) ପାଇଁ ଦାୟୀ । ଉଦାହରଣ: ପାର୍ଶ୍ୱସ୍ଥ ମେରିଷ୍ଟେମ (Lateral Meristem) ଯାହା କାଣ୍ଡର ପାର୍ଶ୍ୱରେ ଥାଏ, ଭାସ୍କୁଲାର କାମ୍ବିୟମ (Vascular Cambium), କର୍କ କାମ୍ବିୟମ (Cork Cambium) ।\n* **ସ୍ଥାୟୀ ତନ୍ତୁ (Permanent Tissue):**\n    * ଏହି ତନ୍ତୁ ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁରୁ ଉତ୍ପନ୍ନ ହୁଏ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକ ବିଭାଜନ କ୍ଷମତା ହରାଇଥାଏ ।\n    * ଏହା ଉଦ୍ଭିଦର ବିଭିନ୍ନ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ ଯଥା ସଂରକ୍ଷଣ, ସଂବହନ ଓ ସାହାଯ୍ୟ କରିଥାଏ ।\n    * ଏହା ଦୁଇ ପ୍ରକାରର:\n        * **ସରଳ ତନ୍ତୁ (Simple Tissue):** ଏହା ଗୋଟିଏ ପ୍ରକାରର କୋଷ ଦ୍ୱାରା ଗଠିତ ।\n            * **ପାରେନକାଇମା (Parenchyma):** ଏହାର କୋଷଗୁଡ଼ିକ ପତଳା କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ଜୀବିତ କୋଷ । ଏହା ଖାଦ୍ୟ ସଞ୍ଚୟ, ଫୋଟୋସିନ୍ଥେସିସ ଓ ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟରେ ସାହାଯ୍ୟ କରେ ।\n            * **କୋଲେନକାଇମା (Collenchyma):** ଏହାର କୋଷଗୁଡ଼ିକ କୋଣରେ ମୋଟା ହୋଇଥିବା ଜୀବିତ କୋଷ । ଏହା ଉଦ୍ଭିଦର କଅଁଳ ଅଂଶକୁ ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ ।\n            * **ସ୍କ୍ଲେରେନକାଇମା (Sclerenchyma):** ଏହାର କୋଷଗୁଡ଼ିକ ମୋଟା ଓ ଲିଗ୍ନିନଯୁକ୍ତ କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ମୃତ କୋଷ । ଏହା ଉଦ୍ଭିଦକୁ ଶକ୍ତି ଓ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ । ଉଦାହରଣ: ଫାଇବର ଓ ସ୍କ୍ଲେରିଡ ।\n        * **ଜଟିଳ ତନ୍ତୁ (Complex Tissue):** ଏହା ଏକାଧିକ ପ୍ରକାରର କୋଷ ଦ୍ୱାରା ଗଠିତ ଏବଂ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରିଥାଏ ।\n            * **ଜାଇଲେମ (Xylem):** ଏହା ଏକ ଜଟିଳ ତନ୍ତୁ । ଏହା ଟ୍ରାକିଡ, ଭେସେଲ, ଜାଇଲେମ ପାରେନକାଇମା ଏବଂ ଜାଇଲେମ ଫାଇବର ଦ୍ୱାରା ଗଠିତ । ଜାଇଲେମ ମୁଖ୍ୟତଃ ମୃତ କୋଷ ଦ୍ୱାରା ଗଠିତ ଏହାର ପ୍ରମୁଖ କାର୍ଯ୍ୟ ହେଉଛି ଉଦ୍ଭିଦରେ ଜଳ ଏବଂ ଖଣିଜ ଲବଣର ଉପରମୁହାଁ ସଂବହନ ।\n            * **ଫ୍ଲୋଏମ (Phloem):** ଏହା ଏକ ଜଟିଳ ତନ୍ତୁ । ଏହା ସିଭ ଟ୍ୟୁବ, କମ୍ପାନିଅନ ସେଲ, ଫ୍ଲୋଏମ ପାରେନକାଇମା ଏବଂ ଫ୍ଲୋଏମ ଫାଇବର ଦ୍ୱାରା ଗଠିତ । ଫ୍ଲୋଏମ ମୁଖ୍ୟତଃ ଜୀବିତ କୋଷ ଦ୍ୱାରା ଗଠିତ ଏହାର ପ୍ରମୁଖ କାର୍ଯ୍ୟ ହେଉଛି ଉଦ୍ଭିଦରେ ଖାଦ୍ୟ (ସରକରା)ର ଉପରମୁହାଁ ଓ ତଳମୁହାଁ ସଂବହନ ।\n\n**ମେରିଷ୍ଟେମାଟିକ ଓ ସ୍ଥାୟୀ ତନ୍ତୁ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ:** ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁର କୋଷଗୁଡ଼ିକ ନିରନ୍ତର ବିଭାଜନ କ୍ଷମତା ରଖିଥାନ୍ତି ଓ ଉଦ୍ଭିଦର ବୃଦ୍ଧିରେ ସାହାଯ୍ୟ କରନ୍ତି , କିନ୍ତୁ ସ୍ଥାୟୀ ତନ୍ତୁର କୋଷଗୁଡ଼ିକ ବିଭାଜନ କ୍ଷମତା ହରାଇ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରନ୍ତି । ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ ଲମ୍ବ ବୃଦ୍ଧି କରୁଥିବା ବେଳେ ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ ଚଉଡା ବୃଦ୍ଧି କରେ । ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ ଗୋଟିଏ ପ୍ରକାର କୋଷରେ ଗଠିତ ହୋଇଥିବା ବେଳେ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ ଏକାଧିକ ପ୍ରକାର କୋଷରେ ଗଠିତ ହୋଇଥାଏ ।"
            },
            {
                title: "ପ୍ରାଣୀ ଶରୀରରେ ଥିବା ମୁଖ୍ୟ ଚାରି ପ୍ରକାରର ତନ୍ତୁ",
                content: "ପ୍ରାଣୀ ଶରୀରରେ ମୁଖ୍ୟତଃ ଚାରି ପ୍ରକାରର ତନ୍ତୁ ଦେଖାଯାଏ: ଆବରଣୀ ତନ୍ତୁ (Epithelial Tissue), ସଂଯୋଜକ ତନ୍ତୁ (Connective Tissue), ମାଂସପେଶୀ ତନ୍ତୁ (Muscle Tissue) ଓ ସ୍ନାୟୁ ତନ୍ତୁ (Nervous Tissue) । ଏହି ତନ୍ତୁଗୁଡ଼ିକ ସେମାନଙ୍କ ଗଠନ, କାର୍ଯ୍ୟ ଓ ଶରୀରରେ ଅବସ୍ଥିତି ଅନୁଯାୟୀ ଭିନ୍ନ ଭିନ୍ନ ହୋଇଥାନ୍ତି ।\n\n* **ଆବରଣୀ ତନ୍ତୁ (Epithelial Tissue):**\n    * ଏହା ଶରୀରର ବାହ୍ୟ ପୃଷ୍ଠ ଏବଂ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଲାଇନିଂ ଗଠନ କରେ ।\n    * ଏହା ସୁରକ୍ଷା, ଅବଶୋଷଣ ଓ କ୍ଷରଣ ଭଳି କାର୍ଯ୍ୟରେ ସାହାଯ୍ୟ କରେ ।\n    * ଏହା ସରଳ (Simple) ଓ ସ୍ତରୀକୃତ (Stratified) ହୋଇପାରେ ।\n        * **ସରଳ ଆବରଣୀ ତନ୍ତୁ (Simple Epithelium):** ଏହା ଏକକ ସ୍ତର କୋଷ ଦ୍ୱାରା ଗଠିତ । ଉଦାହରଣ: ସ୍କ୍ଵାମସ୍ (Squamous) , କ୍ୟୁବଏଡାଲ୍ (Cuboidal) , କଲମ୍‌ନାର୍ (Columnar) , ସୁଡୋଷ୍ଟ୍ରାଟିଫାଏଡ୍ (Pseudostratified) । ସ୍କ୍ୱାମସ୍ ଏପିଥେଲିଅମ ବାଉମ୍ୟାନ୍ସ କ୍ୟାପ୍ସୁଲ, ୟୁରେଟରର ଲାଇନିଂ, ରକ୍ତନଳୀର ଭିତର ଆବରଣରେ ଥାଏ । କ୍ୟୁବଏଡାଲ୍ ଏପିଥେଲିଅମ କିଡନୀ ଟ୍ୟୁବୁଲ୍ସ, ଲାଳ ଗ୍ରନ୍ଥିରେ ଥାଏ । କଲମ୍‌ନାର୍ ଏପିଥେଲିଅମ ପାଚନ ନଳୀରେ ଥାଏ ।\n        * **ସ୍ତରୀକୃତ ଆବରଣୀ ତନ୍ତୁ (Stratified Epithelium):** ଏହା ଏକାଧିକ ସ୍ତର କୋଷ ଦ୍ୱାରା ଗଠିତ । ଉଦାହରଣ: ଚର୍ମର ବାହ୍ୟ ସ୍ତର (Epidermis) । ଏହା ପାଚନ ନଳୀ, ମୂତ୍ରାଶୟର ଲାଇନିଂ, ଗ୍ରନ୍ଥି, ଜର୍ମିନାଲ ଏପିଥେଲିଅମରେ ମଧ୍ୟ ଥାଏ ।\n* **ସଂଯୋଜକ ତନ୍ତୁ (Connective Tissue):**\n    * ଏହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶକୁ ସଂଯୋଗ, ସାହାଯ୍ୟ ଓ ସଂରକ୍ଷଣ କରେ ।\n    * ଏହା ଏକ ମାଟ୍ରିକ୍ସରେ ଥିବା କୋଷ ଏବଂ ଫାଇବର ଦ୍ୱାରା ଗଠିତ । ଏଥିରେ ପ୍ରଚୁର ପରିମାଣରେ ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ ଥାଏ।\n    * ଉଦାହରଣ: ରକ୍ତ (Blood), ହାଡ଼ (Bone), ତରୁଣାସ୍ଥି (Cartilage), ଯୋଜକ ତନ୍ତୁ (Areolar), ବସା ତନ୍ତୁ (Adipose) ।\n* **ମାଂସପେଶୀ ତନ୍ତୁ (Muscle Tissue):**\n    * ଏହା ସଂକୋଚନ ଓ ପ୍ରସାରଣ ଦ୍ୱାରା ଶରୀରର ଚଳାଚଳରେ ସାହାଯ୍ୟ କରେ ।\n    * ଏହା ରେଖାଯୁକ୍ତ (Striated), ଅରେଖାଯୁକ୍ତ (Unstriated) ଏବଂ ହୃତପିଣ୍ଡୀୟ (Cardiac) ହୋଇପାରେ ।\n* **ସ୍ନାୟୁ ତନ୍ତୁ (Nervous Tissue):**\n    * ଏହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶ ମଧ୍ୟରେ ବାର୍ତ୍ତା ପରିବହନ କରେ ।\n    * ଏହା ସ୍ନାୟୁକୋଷ (Neuron) ଓ ନିଉରୋଗ୍ଲିଆ (Neuroglia) ଦ୍ୱାରା ଗଠିତ ।"
            },
            {
                title: "ସଂଯୋଜକ ତନ୍ତୁର ବିବିଧତା",
                content: "ସଂଯୋଜକ ତନ୍ତୁ (Connective Tissue) ପ୍ରାଣୀ ଶରୀରର ଏକ ମୁଖ୍ୟ ତନ୍ତୁ । ଏହା ଶରୀରରେ ପ୍ରଚୁର ପରିମାଣରେ ଦେଖିବାକୁ ମିଳେ। ଏହାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ହେଉଛି ଶରୀରର ବିଭିନ୍ନ ଟିସୁ ଓ ଅଙ୍ଗଗୁଡିକୁ ପରସ୍ପର ସହିତ ସଂଯୋଗ କରିବା, ଏବଂ ଅନ୍ୟ ଟିସୁଗୁଡିକୁ ସହାୟତା ଓ ସୁରକ୍ଷା ପ୍ରଦାନ କରିବା। ଆଡିପୋଜ ଟିସୁ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗଗୁଡିକୁ ସହାୟତା ଦେଇଥାଏ ଏବଂ ଯୋଜକ ଟିସୁ ଯାନ୍ତ୍ରିକ ଶକ୍ତି (Mechanical Strength) ମଧ୍ୟ ପ୍ରଦାନ କରେ ।\n\nସଂଯୋଜକ ତନ୍ତୁର ଏକ ପ୍ରମୁଖ ବିଶେଷତ୍ୱ ହେଉଛି ଏଥିରେ ପ୍ରଚୁର ପରିମାଣରେ ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ (Intercellular Matrix) ଥାଏ। ଏହି ମାଟ୍ରିକ୍ସ ଜେଲି ଭଳି, କଠିନ ବା ତରଳ ଅବସ୍ଥାରେ ରହିପାରେ । ପ୍ରୋଟିନ୍ ଫାଇବର ମଧ୍ୟ ଯୋଜକ ଟିସୁର ଏକ ଉପାଦାନ । କୋଷଗୁଡିକ ଏହି ମାଟ୍ରିକ୍ସରେ ବାସ କରନ୍ତି।\n\nସ୍ରୋତଗୁଡିକ ନିମ୍ନଲିଖିତ ଯୋଜକ ଟିସୁ ପ୍ରକାରଗୁଡିକୁ ଉଲ୍ଲେଖ କରିଛନ୍ତି: ପ୍ରକୃତ ଯୋଜକ ଟିସୁ, ଅସ୍ଥି (Bone), ତରୁଣାସ୍ଥି (Cartilage), ରକ୍ତ (Blood), ଆଡିପୋଜ ଟିସୁ (Adipose Tissue) ।\n\n* **ରକ୍ତ (Blood):** ଏହା ଏକ ତରଳ ସଂଯୋଜକ ତନ୍ତୁ । ଏହାର ମାଟ୍ରିକ୍ସ ତରଳ ଅଟେ ଯାହାକୁ ପ୍ଲାଜ୍ମା (Plasma) କୁହାଯାଏ । ପ୍ଲାଜ୍ମା ରକ୍ତର ୯୦-୯୨% ତରଳ ଅଂଶ । ରକ୍ତରେ ତିନୋଟି ମୁଖ୍ୟ କଣିକା ଥାଏ:\n    * **ଲୋହିତ ରକ୍ତ କଣିକା (Red Blood Corpuscle/RBC):** ଏହା ଦ୍ୱି-ଅବତଳ (biconcave) ଆକୃତିର । ଏହାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ହେଉଛି ଶରୀରରେ ଅମ୍ଳଜାନ ପରିବହନ କରିବା । ଏହାର ଆୟୁଷ ପ୍ରାୟ ୧୨୦ ଦିନ ।\n    * **ଶ୍ୱେତ ରକ୍ତ କଣିକା (White Blood Corpuscle/WBC):** ଏହାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ହେଉଛି ଶରୀରକୁ ରୋଗରୁ ରକ୍ଷା କରିବା ବା ରୋଗ ପ୍ରତିରୋଧ କରିବା । ଏହା ବିଭିନ୍ନ ପ୍ରକାରର ହୋଇଥାଏ ଯଥା ଲିମ୍ଫୋସାଇଟ୍, ନ୍ୟୁଟ୍ରୋଫିଲ୍, ଇଓସିନୋଫିଲ୍ ଇତ୍ୟାଦି ।\n    * **ପ୍ଲାଟେଲେଟ୍ (Platelet):** ଏହା ରକ୍ତରେ ଥିବା କ୍ଷୁଦ୍ର କଣିକା । ଏହା ରକ୍ତ ଜମାଟ ବାନ୍ଧିବାରେ ସାହାଯ୍ୟ କରେ ।\n* **ହାଡ଼ (Bone):** ଏହା ଏକ କଠିନ ସଂଯୋଜକ ତନ୍ତୁ । ଏହା ଶରୀରକୁ ଆକୃତି ଓ ସହାୟତା ପ୍ରଦାନ କରେ । ଏହା ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗକୁ ସୁରକ୍ଷା ଦିଏ ଓ ଚଳାଚଳରେ ସାହାଯ୍ୟ କରେ । ଏହା ଅସ୍ଥିକୋଷ (Osteocyte) ଦ୍ୱାରା ଗଠିତ ।\n* **ତରୁଣାସ୍ଥି (Cartilage):** ଏହା ଏକ ନରମ ସଂଯୋଜକ ତନ୍ତୁ । ଏହା ଅସ୍ଥି ସନ୍ଧିରେ ମିଳିଥାଏ ଏବଂ ଅନ୍ୟାନ୍ୟ ଅଙ୍ଗକୁ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ । ଏହା କୋଣ୍ଡ୍ରୋସାଇଟ (Chondrocyte) ଦ୍ୱାରା ଗଠିତ । ନାସାପଟଳ (Nasal Septum), ବାହ୍ୟ କର୍ଣ୍ଣ (External Ear), ସ୍ୱରଯନ୍ତ୍ର (Larynx) ଇତ୍ୟାଦିରେ ତରୁଣାସ୍ଥି ଥାଏ ।\n* **ଆଡିପୋଜ ଟିସୁ (Adipose Tissue):** ଏହା ମଧ୍ୟ ଏକ ପ୍ରକାର ଯୋଜକ ଟିସୁ । ଏହାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ହେଉଛି ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗଗୁଡିକୁ ସହାୟତା ପ୍ରଦାନ କରିବା ଓ ଯାନ୍ତ୍ରିକ ଶକ୍ତି ଦେବା । ଏହା ବସା କୋଷ (Fat Globule) ଧାରଣ କରିଥାଏ । ଏହା ଏକ ତାପର କୁପରିବାହୀ (Insulator) ଭାବରେ କାର୍ଯ୍ୟ କରେ ।\n\nଏହା ବ୍ୟତୀତ ଆରେଓଲାର ଯୋଜକ ତନ୍ତୁ (Areolar Connective Tissue) ଏବଂ ଯୋଜକ ଟିସୁର ଉଦାହରଣ ଭାବରେ ଲିଗାମେଣ୍ଟ ଓ ଟେଣ୍ଡନ୍ (ଯାହା ଫାଇବରସ୍ ଟିସୁର ଅନ୍ତର୍ଗତ) ବିଷୟରେ ମଧ୍ୟ ଉଲ୍ଲେଖ ଅଛି । ଲିଗାମେଣ୍ଟ ହାଡ଼କୁ ହାଡ଼ ସହିତ ଯୋଡେ ଏବଂ ଟେଣ୍ଡନ୍ ହାଡ଼କୁ ମାଂସପେଶୀ ସହିତ ଯୋଡେ।"
            },
            {
                title: "ମାଂସପେଶୀ ତନ୍ତୁର ଗଠନ ଏବଂ କାର୍ଯ୍ୟକାରିତା",
                content: "ମାଂସପେଶୀ ତନ୍ତୁ (Muscle Tissue) ପ୍ରାଣୀ ଶରୀରର ଅନ୍ୟତମ ପ୍ରମୁଖ ତନ୍ତୁ । ଏହା ଶରୀରର ଚଳନ ଓ ସଂକୋଚନ (Contraction) ଓ ପ୍ରସାରଣ (Relaxation) ରେ ସାହାଯ୍ୟ କରେ । ମାଂସପେଶୀ ତନ୍ତୁ ତିନି ପ୍ରକାରର: ରେଖାଯୁକ୍ତ, ଅରେଖାଯୁକ୍ତ ଏବଂ ହୃତପିଣ୍ଡୀୟ ।\n\n* **ରେଖାଯୁକ୍ତ ମାଂସପେଶୀ (Striated Muscle):**\n    * ଏହାକୁ ଐଚ୍ଛିକ ମାଂସପେଶୀ (Voluntary Muscle) ମଧ୍ୟ କୁହାଯାଏ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକ ଲମ୍ବା, ଚିକ୍କଣ, ଶାଖାବିହୀନ ଏବଂ ବହୁ-ନ୍ୟୁକ୍ଲିୟସ୍ (Multinucleate) ବିଶିଷ୍ଟ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକରେ ହାଲୁକା (Light Band) ଓ ଗାଢ (Dark Band) ରେଖା ବା ଷ୍ଟ୍ରିଏସନ୍ (Striation) ଦେଖାଯାଏ । ଏଥିରେ ଥିବା ମାୟୋଫାଇବ୍ରିଲ୍ (Myofibril) ମଧ୍ୟ ରେଖାଯୁକ୍ତ ଦେଖାଯାଏ।\n    * ଏହା ମୁଖ୍ୟତଃ ହାଡ଼ ସହ ଯୋଡ଼ି ହୋଇଥାଏ ।\n    * କାର୍ଯ୍ୟ: ଏହି ପେଶୀ ଆମ ଇଚ୍ଛା ଅନୁଯାୟୀ କାର୍ଯ୍ୟ କରେ । ଏହା ଶରୀରର ଐଚ୍ଛିକ ଚଳନ (Voluntary Movement) ପାଇଁ ଦାୟୀ ।\n* **ଅରେଖାଯୁକ୍ତ ମାଂସପେଶୀ (Unstriated Muscle):**\n    * ଏହାକୁ ଅନୈଚ୍ଛିକ ମାଂସପେଶୀ (Involuntary Muscle) ମଧ୍ୟ କୁହାଯାଏ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକ ଲମ୍ବା, ମାଛପରି ଦୁଇ ମୁଣ୍ଡ ପଟୁ ଗୋଡ଼ିଆ (spindle-shaped) ଏବଂ ଏକକ ନ୍ୟୁକ୍ଲିୟସ୍ (single nucleus) ବିଶିଷ୍ଟ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକରେ କୌଣସି ରେଖା (striations) ଦେଖାଯାଏ ନାହିଁ ।\n    * ଏହା ମୁଖ୍ୟତଃ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗରେ ଥାଏ । ଉଦାହରଣ: ପାକସ୍ଥଳୀ, ଆନ୍ତ୍ର, ରକ୍ତନଳୀ, ଆଖିର ଆଇରିସ୍ (Iris) ଆଦି ।\n    * କାର୍ଯ୍ୟ: ଏହି ପେଶୀ ଆମ ଇଚ୍ଛା ଅନୁଯାୟୀ କାର୍ଯ୍ୟ କରେ ନାହିଁ । ଏହା ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଅନୈଚ୍ଛିକ ଗତି (Involuntary Movement) ପାଇଁ ଦାୟୀ ।\n* **ହୃତପିଣ୍ଡୀୟ ମାଂସପେଶୀ (Cardiac Muscle):**\n    * ଏହି ପେଶୀ କେବଳ ହୃତପିଣ୍ଡରେ ଥାଏ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକ ଶାଖାଯୁକ୍ତ, ଚିକ୍କଣ, ରେଖାଯୁକ୍ତ ଏବଂ ସାଧାରଣତଃ ଏକକ ନ୍ୟୁକ୍ଲିୟସ୍ (sometimes two) ବିଶିଷ୍ଟ ।\n    * ଏହାର କୋଷଗୁଡ଼ିକ ଇଣ୍ଟରକାଲେଟେଡ ଡିସ୍କ (Intercalated Disc) ଦ୍ୱାରା ପରସ୍ପର ସହ ଯୋଡ଼ି ହୋଇଥାନ୍ତି ।\n    * କାର୍ଯ୍ୟ: ଏହି ପେଶୀ ଅନୈଚ୍ଛିକ ଭାବରେ ଜୀବନବ୍ୟାପୀ ଲୟବଦ୍ଧ (rhythmic) ସଂକୋଚନ ଓ ପ୍ରସାରଣ କରେ । ଏହା ହୃତପିଣ୍ଡର ସ୍ପନ୍ଦନ (Heart Beat) ପାଇଁ ଦାୟୀ ।\n    * **ଇଣ୍ଟରକାଲେଟେଡ ଡିସ୍କ (Intercalated Disc):** ଏଗୁଡ଼ିକ ହୃତପିଣ୍ଡୀୟ ମାଂସପେଶୀ କୋଷ ମଧ୍ୟରେ ଥିବା ଯୋଗାଯୋଗ ସ୍ଥଳ । ଏହା ସୂଚନା ବା ନିର୍ଦ୍ଦେଶର ଦ୍ରୁତ ପରିବହନରେ ସାହାଯ୍ୟ କରେ, ଯାହା ହୃତପିଣ୍ଡର କୋଷଗୁଡ଼ିକର ସମନ୍ୱିତ ସଂକୋଚନ ପାଇଁ ଆବଶ୍ୟକ ।"
            },
            {
                title: "ସ୍ନାୟୁ ତନ୍ତୁର ଗଠନ ଏବଂ ଏହାର ସୂଚନା ପରିବହନ ପ୍ରଣାଳୀ",
                content: "ସ୍ନାୟୁ ତନ୍ତୁ (Nervous Tissue) ପ୍ରାଣୀ ଶରୀରର ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତନ୍ତୁ ଯାହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶ ମଧ୍ୟରେ ବାର୍ତ୍ତା ପରିବହନ କରିବାରେ ସାହାଯ୍ୟ କରେ । ଏହା ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାର କୋଷ ଦ୍ୱାରା ଗଠିତ: ସ୍ନାୟୁକୋଷ (Neuron) ଏବଂ ନିଉରୋଗ୍ଲିଆ (Neuroglia) ।\n\n* **ସ୍ନାୟୁକୋଷ (Neuron):**\n    * ଏହା ସ୍ନାୟୁ ତନ୍ତୁର ମୌଳିକ ବା ଏକକ କୋଷ ।\n    * ଏହା ବୈଦ୍ୟୁତିକ ଓ ରାସାୟନିକ ସଂକେତ ରୂପରେ ବାର୍ତ୍ତା ପ୍ରେରଣ ଓ ଗ୍ରହଣ କରେ । ଏହା ଶରୀରର ଏକ ଅଂଶରୁ ଅନ୍ୟ ଅଂଶକୁ ସୂଚନା ପଠାଏ ଓ ଗ୍ରହଣ କରେ ।\n    * ଏହା ଶରୀରର ସବୁଠାରୁ ଲମ୍ବା କୋଷ ।\n    * ଏହାର ମୁଖ୍ୟ ଅଂଶଗୁଡ଼ିକ ହେଉଛି:\n        * **କୋଷ ଶରୀର (Cell Body / Cyton):** ଏଥିରେ ନ୍ୟୁକ୍ଲିୟସ୍ (Nucleus) ଏବଂ କୋଷରସ (Cytoplasm) ଥାଏ, ଯାହାକୁ ନିଉରୋପ୍ଲାଜ୍ମ (Neuroplasm) ମଧ୍ୟ କୁହାଯାଏ ।\n        * **ଡେଣ୍ଡ୍ରନ (Dendron) ଓ ଡେଣ୍ଡ୍ରାଇଟ୍ସ (Dendrites):** ଏଗୁଡ଼ିକ କୋଷ ଶରୀରରୁ ବାହାରିଥିବା କ୍ଷୁଦ୍ର ଶାଖା । ଏଗୁଡ଼ିକ ଅନ୍ୟ ନିଉରନ ବା ସଂବେଦୀ ଗ୍ରାହକମାନଙ୍କଠାରୁ ବାର୍ତ୍ତା ଗ୍ରହଣ କରନ୍ତି ।\n        * **ଏକଜନ (Axon):** ଏହା କୋଷ ଶରୀରରୁ ବାହାରିଥିବା ଏକ ଲମ୍ବା ପ୍ରୋଜେକ୍ସନ । ଏହା ବାର୍ତ୍ତାକୁ କୋଷ ଶରୀରରୁ ଦୂରକୁ ପରିବହନ କରେ । ଏକଜନର ଶେଷ ମୁଣ୍ଡ ବିଭିନ୍ନ ଶାଖାରେ ବିଭକ୍ତ ହୋଇଥାଏ ଯାହାକୁ ଟେଲୋଡେଣ୍ଡ୍ରିଆ (Telodendria) କୁହାଯାଏ ।\n* **ନିଉରୋଗ୍ଲିଆ (Neuroglia):**\n    * ଏଗୁଡ଼ିକ ସ୍ନାୟୁ ତନ୍ତୁରେ ଥିବା ସହାୟକ କୋଷ।\n    * ଏମାନଙ୍କର କାର୍ଯ୍ୟ ହେଉଛି ସ୍ନାୟୁକୋଷକୁ ସାହାଯ୍ୟ ଓ ସୁରକ୍ଷା ପ୍ରଦାନ କରିବା। ଏହା ବାର୍ତ୍ତା ପରିବହନରେ ମଧ୍ୟ ସାହାଯ୍ୟ କରେ।\n* **ମାୟେଲିନେଟେଡ (Myelinated) ଓ ନନ-ମାୟେଲିନେଟେଡ (Non-myelinated) ନିଉରନ:**\n    * **ମାୟେଲିନେଟେଡ ନିଉରନ (Myelinated Neuron):** ଏହି ପ୍ରକାର ନିଉରନର ଏକଜନ ମାୟେଲିନ ସ୍ତର (Myelin layer) ଦ୍ୱାରା ଆବୃତ ଥାଏ । ଏହି ମାୟେଲିନ ସ୍ତରରେ କିଛି କିଛି ସ୍ଥାନରେ ଫାଙ୍କ ଥାଏ ଯାହାକୁ ରାନଭିୟର ପର୍ବ (Node of Ranvier) କୁହାଯାଏ । ମାୟେଲିନ ସ୍ତର ଥିବାରୁ ବାର୍ତ୍ତା ଅତି ଦ୍ରୁତ ଗତିରେ ପରିବହନ ହୁଏ ।\n    * **ନନ-ମାୟେଲିନେଟେଡ ନିଉରନ (Non-myelinated Neuron):** ଏହି ପ୍ରକାର ନିଉରନର ଏକଜନ ମାୟେଲିନ ସ୍ତର ଦ୍ୱାରା ଆବୃତ ହୋଇନଥାଏ । ଏଥିରେ ବାର୍ତ୍ତା ପରିବହନ ମାୟେଲିନେଟେଡ ନିଉରନ ଅପେକ୍ଷା ଧୀର ଗତିରେ ହୁଏ ।\n\nସ୍ନାୟୁ ତନ୍ତୁର କାର୍ଯ୍ୟ ହେଉଛି ସଂବେଦୀ ଅଙ୍ଗମାନଙ୍କରୁ ବାର୍ତ୍ତା (ଉତ୍ତେଜନା) ଗ୍ରହଣ କରି ମସ୍ତିଷ୍କ ବା ମେରୁଦଣ୍ଡକୁ ପଠାଇବା ଏବଂ ମସ୍ତିଷ୍କ ବା ମେରୁଦଣ୍ଡରୁ ନିର୍ଦ୍ଦେଶ ଗ୍ରହଣ କରି ସମ୍ବନ୍ଧିତ ଅଙ୍ଗ ବା ମାଂସପେଶୀକୁ ପଠାଇବା । ଏହି ବାର୍ତ୍ତା ବୈଦ୍ୟୁତିକ ସଂକେତ ଭାବରେ ପରିବହନ ହୁଏ ।"
            }
        ],
        shortQuestions: [
            {
                question: "ଉଦ୍ଭିଦ ଶରୀରରେ ମୁଖ୍ୟତଃ କେତେ ପ୍ରକାରର ତନ୍ତୁ ରହିଛି?",
                answer: "ଉଦ୍ଭିଦ ଶରୀରରେ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର ତନ୍ତୁ ରହିଛି: ବିଭାଜନକ୍ଷମ ବା ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ ଏବଂ ସ୍ଥାୟୀ ତନ୍ତୁ ।"
            },
            {
                question: "ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ଉଦ୍ଭିଦର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ ।"
            },
            {
                question: "ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ କେଉଁ ପ୍ରକାର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ?",
                answer: "ଏହା ଉଦ୍ଭିଦର ଲମ୍ବ ବୃଦ୍ଧି (କାଣ୍ଡ ଓ ମୂଳର ଅଗ୍ରଭାଗ) ପାଇଁ ଦାୟୀ ।"
            },
            {
                question: "ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ କେଉଁ ପ୍ରକାର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ?",
                answer: "ଏହା ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧି (କାଣ୍ଡ ଓ ମୂଳର ବ୍ୟାସ) ପାଇଁ ଦାୟୀ ।"
            },
            {
                question: "ସ୍ଥାୟୀ ତନ୍ତୁ କେଉଁଠାରୁ ଉତ୍ପନ୍ନ ହୁଏ?",
                answer: "ଏହି ତନ୍ତୁ ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁରୁ ଉତ୍ପନ୍ନ ହୁଏ ।"
            },
            {
                question: "ପାରେନକାଇମାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ଖାଦ୍ୟ ସଞ୍ଚୟ, ଫୋଟୋସିନ୍ଥେସିସ ଓ ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "କୋଲେନକାଇମାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ଉଦ୍ଭିଦର କଅଁଳ ଅଂଶକୁ ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ସ୍କ୍ଲେରେନକାଇମାର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ଉଦ୍ଭିଦକୁ ଶକ୍ତି ଓ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ଜାଇଲେମର ପ୍ରମୁଖ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଉଦ୍ଭିଦରେ ଜଳ ଏବଂ ଖଣିଜ ଲବଣର ଉପରମୁହାଁ ସଂବହନ ।"
            },
            {
                question: "ଫ୍ଲୋଏମର ପ୍ରମୁଖ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଉଦ୍ଭିଦରେ ଖାଦ୍ୟ (ସରକରା)ର ଉପରମୁହାଁ ଓ ତଳମୁହାଁ ସଂବହନ ।"
            },
            {
                question: "ପ୍ରାଣୀ ଶରୀରରେ ଥିବା ମୁଖ୍ୟ ଚାରି ପ୍ରକାରର ତନ୍ତୁ କେଉଁଗୁଡ଼ିକ?",
                answer: "ଆବରଣୀ ତନ୍ତୁ (Epithelial Tissue), ସଂଯୋଜକ ତନ୍ତୁ (Connective Tissue), ମାଂସପେଶୀ ତନ୍ତୁ (Muscle Tissue) ଓ ସ୍ନାୟୁ ତନ୍ତୁ (Nervous Tissue) ।"
            },
            {
                question: "ଆବରଣୀ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ସୁରକ୍ଷା, ଅବଶୋଷଣ ଓ କ୍ଷରଣ ଭଳି କାର୍ଯ୍ୟରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "ସଂଯୋଜକ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶକୁ ସଂଯୋଗ, ସାହାଯ୍ୟ ଓ ସଂରକ୍ଷଣ କରେ ।"
            },
            {
                question: "ମାଂସପେଶୀ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ସଂକୋଚନ ଓ ପ୍ରସାରଣ ଦ୍ୱାରା ଶରୀରର ଚଳାଚଳରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "ସ୍ନାୟୁ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ'ଣ?",
                answer: "ଏହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶ ମଧ୍ୟରେ ବାର୍ତ୍ତା ପରିବହନ କରେ ।"
            }
        ],
        mediumQuestions: [
            {
                question: "ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ ଏବଂ ସ୍ଥାୟୀ ତନ୍ତୁ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ କ'ଣ?",
                answer: "ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁର କୋଷଗୁଡ଼ିକ ନିରନ୍ତର ବିଭାଜନ କ୍ଷମତା ରଖିଥାନ୍ତି ଓ ଉଦ୍ଭିଦର ବୃଦ୍ଧିରେ ସାହାଯ୍ୟ କରନ୍ତି, କିନ୍ତୁ ସ୍ଥାୟୀ ତନ୍ତୁର କୋଷଗୁଡ଼ିକ ବିଭାଜନ କ୍ଷମତା ହରାଇ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରନ୍ତି । ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ ଲମ୍ବ ବୃଦ୍ଧି କରୁଥିବା ବେଳେ ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ ଚଉଡା ବୃଦ୍ଧି କରେ । ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ ଗୋଟିଏ ପ୍ରକାର କୋଷରେ ଗଠିତ ହୋଇଥିବା ବେଳେ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ ଏକାଧିକ ପ୍ରକାର କୋଷରେ ଗଠିତ ହୋଇଥାଏ ।"
            },
            {
                question: "ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁର ବିଭିନ୍ନ ପ୍ରକାର ଓ ସେମାନଙ୍କ କାର୍ଯ୍ୟ ବର୍ଣ୍ଣନା କର ।",
                answer: "ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ ତିନି ପ୍ରକାରର: \n1. **ପାରେନକାଇମା (Parenchyma):** ଏହାର କୋଷଗୁଡ଼ିକ ପତଳା କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ଜୀବିତ କୋଷ । ଏହା ଖାଦ୍ୟ ସଞ୍ଚୟ, ଫୋଟୋସିନ୍ଥେସିସ ଓ ଅନ୍ୟାନ୍ୟ କାର୍ଯ୍ୟରେ ସାହାଯ୍ୟ କରେ ।\n2. **କୋଲେନକାଇମା (Collenchyma):** ଏହାର କୋଷଗୁଡ଼ିକ କୋଣରେ ମୋଟା ହୋଇଥିବା ଜୀବିତ କୋଷ । ଏହା ଉଦ୍ଭିଦର କଅଁଳ ଅଂଶକୁ ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ ।\n3. **ସ୍କ୍ଲେରେନକାଇମା (Sclerenchyma):** ଏହାର କୋଷଗୁଡ଼ିକ ମୋଟା ଓ ଲିଗ୍ନିନଯୁକ୍ତ କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ମୃତ କୋଷ । ଏହା ଉଦ୍ଭିଦକୁ ଶକ୍ତି ଓ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ । ଉଦାହରଣ: ଫାଇବର ଓ ସ୍କ୍ଲେରିଡ ।"
            },
            {
                question: "ରକ୍ତକୁ ଏକ ସଂଯୋଜକ ତନ୍ତୁ କାହିଁକି କୁହାଯାଏ? ଏହାର ବିଭିନ୍ନ ଉପାଦାନ ଓ କାର୍ଯ୍ୟ ଲେଖ ।",
                answer: "ରକ୍ତ ଏକ ତରଳ ସଂଯୋଜକ ତନ୍ତୁ । ଏହାର ମାଟ୍ରିକ୍ସ ତରଳ ଅଟେ ଯାହାକୁ ପ୍ଲାଜ୍ମା କୁହାଯାଏ । ପ୍ଲାଜ୍ମା ରକ୍ତର ୯୦-୯୨% ତରଳ ଅଂଶ । ରକ୍ତରେ ତିନୋଟି ମୁଖ୍ୟ କଣିକା ଥାଏ:\n* **ଲୋହିତ ରକ୍ତ କଣିକା (RBC):** ଅମ୍ଳଜାନ ପରିବହନ କରେ ।\n* **ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC):** ଶରୀରକୁ ରୋଗରୁ ରକ୍ଷା କରେ ।\n* **ପ୍ଲାଟେଲେଟ୍ (Platelet):** ରକ୍ତ ଜମାଟ ବାନ୍ଧିବାରେ ସାହାଯ୍ୟ କରେ । \nଏହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶକୁ ପୋଷକ ତତ୍ତ୍ଵ, ଅମ୍ଳଜାନ, ହରମୋନ୍ ଆଦି ପରିବହନ କରି ସଂଯୋଗ ସ୍ଥାପନ କରୁଥିବାରୁ ଏହାକୁ ସଂଯୋଜକ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ରେଖାଯୁକ୍ତ, ଅରେଖାଯୁକ୍ତ ଏବଂ ହୃତପିଣ୍ଡୀୟ ମାଂସପେଶୀ ମଧ୍ୟରେ ଗଠନ ଓ କାର୍ଯ୍ୟଗତ ପାର୍ଥକ୍ୟ ଦର୍ଶାଅ ।",
                answer: "**ରେଖାଯୁକ୍ତ ମାଂସପେଶୀ:** ଐଚ୍ଛିକ, ଲମ୍ବା, ଶାଖାବିହୀନ, ବହୁ-ନ୍ୟୁକ୍ଲିୟସ୍, ରେଖାଯୁକ୍ତ, ହାଡ଼ ସହ ସଂଲଗ୍ନ, ଐଚ୍ଛିକ ଚଳନ କରାଏ ।\n**ଅରେଖାଯୁକ୍ତ ମାଂସପେଶୀ:** ଅନୈଚ୍ଛିକ, ମାଛପରି ଆକାର, ଏକକ ନ୍ୟୁକ୍ଲିୟସ୍, ରେଖାବିହୀନ, ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗରେ ଥାଏ, ଅନୈଚ୍ଛିକ ଗତି କରାଏ ।\n**ହୃତପିଣ୍ଡୀୟ ମାଂସପେଶୀ:** ଅନୈଚ୍ଛିକ, ଶାଖାଯୁକ୍ତ, ଏକକ ନ୍ୟୁକ୍ଲିୟସ୍ (ସାଧାରଣତଃ), ରେଖାଯୁକ୍ତ, କେବଳ ହୃତପିଣ୍ଡରେ ଥାଏ, ଇଣ୍ଟରକାଲେଟେଡ ଡିସ୍କ ଥାଏ, ଲୟବଦ୍ଧ ସଂକୋଚନ କରେ ।"
            },
            {
                question: "ଏକ ସ୍ନାୟୁକୋଷର ଗଠନ ବର୍ଣ୍ଣନା କର ଏବଂ ଏହା କିପରି ସୂଚନା ପରିବହନ କରେ ବୁଝାଅ ।",
                answer: "ସ୍ନାୟୁକୋଷ (Neuron) ସ୍ନାୟୁ ତନ୍ତୁର ମୌଳିକ ଏକକ । ଏହାର ମୁଖ୍ୟ ଅଂଶଗୁଡ଼ିକ ହେଲା: \n* **କୋଷ ଶରୀର (Cell Body / Cyton):** ଏଥିରେ ନ୍ୟୁକ୍ଲିୟସ୍ ଓ କୋଷରସ ଥାଏ ।\n* **ଡେଣ୍ଡ୍ରନ ଓ ଡେଣ୍ଡ୍ରାଇଟ୍ସ (Dendrites):** କୋଷ ଶରୀରରୁ ବାହାରିଥିବା କ୍ଷୁଦ୍ର ଶାଖା, ଯାହା ବାର୍ତ୍ତା ଗ୍ରହଣ କରେ ।\n* **ଏକଜନ (Axon):** କୋଷ ଶରୀରରୁ ବାହାରିଥିବା ଲମ୍ବା ପ୍ରୋଜେକ୍ସନ, ଯାହା ବାର୍ତ୍ତାକୁ ଦୂରକୁ ପରିବହନ କରେ ।\nସ୍ନାୟୁକୋଷ ବୈଦ୍ୟୁତିକ ଓ ରାସାୟନିକ ସଂକେତ ମାଧ୍ୟମରେ ସୂଚନା ପରିବହନ କରେ । ମାୟେଲିନେଟେଡ ନିଉରନରେ ମାୟେଲିନ ସ୍ତର ଯୋଗୁଁ ବାର୍ତ୍ତା ଦ୍ରୁତ ଗତିରେ ପରିବହନ ହୁଏ (ରାନଭିୟର ପର୍ବ ଦେଇ ଡେଇଁ ଡେଇଁ) ।"
            }
        ],
        longQuestions: [
            {
                question: "ଉଦ୍ଭିଦ ଶରୀରରେ ଥିବା ବିଭିନ୍ନ ପ୍ରକାରର ତନ୍ତୁ, ସେମାନଙ୍କର ଗଠନ ଓ କାର୍ଯ୍ୟ ବିଷୟରେ ବିସ୍ତୃତ ଆଲୋଚନା କର ।",
                answer: "ଉଦ୍ଭିଦ ଶରୀରରେ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର ତନ୍ତୁ ରହିଛି: ବିଭାଜନକ୍ଷମ ବା ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ ଏବଂ ସ୍ଥାୟୀ ତନ୍ତୁ । \n\n**ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ (Meristematic Tissue):**\nଏହି ତନ୍ତୁର କୋଷଗୁଡ଼ିକ ସକ୍ରିୟ ଭାବରେ ବିଭାଜିତ ହେଉଥିବା କୋଷ ଦ୍ୱାରା ଗଠିତ ଓ ଉଦ୍ଭିଦର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ । ଏହା ଦୁଇ ପ୍ରକାରର:\n* **ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ (Primary Meristem):** ଭ୍ରୂଣାବସ୍ଥାରୁ ଉତ୍ପନ୍ନ ହୋଇ ଉଦ୍ଭିଦର ଲମ୍ବ ବୃଦ୍ଧି କରାଏ (ଯଥା: ଶୀର୍ଷସ୍ଥ ମେରିଷ୍ଟେମ, ନିବେଶିତ ମେରିଷ୍ଟେମ) ।\n* **ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ (Secondary Meristem):** ପ୍ରାଥମିକ ମେରିଷ୍ଟେମରୁ ଉତ୍ପନ୍ନ ହୋଇ ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧି କରାଏ (ଯଥା: ପାର୍ଶ୍ୱସ୍ଥ ମେରିଷ୍ଟେମ, ଭାସ୍କୁଲାର କାମ୍ବିୟମ, କର୍କ କାମ୍ବିୟମ) ।\n\n**ସ୍ଥାୟୀ ତନ୍ତୁ (Permanent Tissue):**\nଏହି ତନ୍ତୁ ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁରୁ ଉତ୍ପନ୍ନ ହୁଏ ଓ କୋଷଗୁଡ଼ିକ ବିଭାଜନ କ୍ଷମତା ହରାଇଥାନ୍ତି । ଏହା ଦୁଇ ପ୍ରକାରର:\n* **ସରଳ ତନ୍ତୁ (Simple Tissue):** ଗୋଟିଏ ପ୍ରକାରର କୋଷ ଦ୍ୱାରା ଗଠିତ ।\n    * **ପାରେନକାଇମା (Parenchyma):** ପତଳା କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ଜୀବିତ କୋଷ, ଖାଦ୍ୟ ସଞ୍ଚୟ ଓ ଫୋଟୋସିନ୍ଥେସିସ କରେ ।\n    * **କୋଲେନକାଇମା (Collenchyma):** କୋଣରେ ମୋଟା ହୋଇଥିବା ଜୀବିତ କୋଷ, ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ ।\n    * **ସ୍କ୍ଲେରେନକାଇମା (Sclerenchyma):** ମୋଟା ଓ ଲିଗ୍ନିନଯୁକ୍ତ କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ମୃତ କୋଷ, ଶକ୍ତି ଓ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ (ଯଥା: ଫାଇବର, ସ୍କ୍ଲେରିଡ) ।\n* **ଜଟିଳ ତନ୍ତୁ (Complex Tissue):** ଏକାଧିକ ପ୍ରକାରର କୋଷ ଦ୍ୱାରା ଗଠିତ ।\n    * **ଜାଇଲେମ (Xylem):** ଟ୍ରାକିଡ, ଭେସେଲ, ଜାଇଲେମ ପାରେନକାଇମା, ଜାଇଲେମ ଫାଇବର ଦ୍ୱାରା ଗଠିତ; ମୁଖ୍ୟତଃ ମୃତ କୋଷ; ଜଳ ଓ ଖଣିଜ ଲବଣର ଉପରମୁହାଁ ସଂବହନ କରେ ।\n    * **ଫ୍ଲୋଏମ (Phloem):** ସିଭ ଟ୍ୟୁବ, କମ୍ପାନିଅନ ସେଲ, ଫ୍ଲୋଏମ ପାରେନକାଇମା, ଫ୍ଲୋଏମ ଫାଇବର ଦ୍ୱାରା ଗଠିତ; ମୁଖ୍ୟତଃ ଜୀବିତ କୋଷ; ଖାଦ୍ୟ (ସରକରା)ର ଉପରମୁହାଁ ଓ ତଳମୁହାଁ ସଂବହନ କରେ ।"
            },
            {
                question: "ପ୍ରାଣୀ ଶରୀରରେ ଥିବା ମୁଖ୍ୟ ଚାରି ପ୍ରକାରର ତନ୍ତୁ କ’ଣ? ପ୍ରତ୍ୟେକର ଗଠନ, ଅବସ୍ଥିତି ଓ କାର୍ଯ୍ୟ ସମ୍ବନ୍ଧରେ ଆଲୋକପାତ କର ।",
                answer: "ପ୍ରାଣୀ ଶରୀରରେ ମୁଖ୍ୟତଃ ଚାରି ପ୍ରକାରର ତନ୍ତୁ ଦେଖାଯାଏ:\n\n1.  **ଆବରଣୀ ତନ୍ତୁ (Epithelial Tissue):**\n    * **ଗଠନ ଓ ଅବସ୍ଥିତି:** ଶରୀରର ବାହ୍ୟ ପୃଷ୍ଠ ଏବଂ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଲାଇନିଂ ଗଠନ କରେ । କୋଷଗୁଡ଼ିକ ପରସ୍ପର ସହ ଘନ ଭାବେ ସଂଲଗ୍ନ । ଏହା ସରଳ (ଏକକ ସ୍ତର) ବା ସ୍ତରୀକୃତ (ଏକାଧିକ ସ୍ତର) ହୋଇପାରେ । ଉଦାହରଣ: ଚର୍ମ, ପାଚନ ନଳୀର ଆବରଣ, ରକ୍ତନଳୀର ଆବରଣ ।\n    * **କାର୍ଯ୍ୟ:** ସୁରକ୍ଷା, ଅବଶୋଷଣ, କ୍ଷରଣ, ସଂବେଦନ ଗ୍ରହଣ ।\n\n2.  **ସଂଯୋଜକ ତନ୍ତୁ (Connective Tissue):**\n    * **ଗଠନ ଓ ଅବସ୍ଥିତି:** କୋଷଗୁଡ଼ିକ ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସରେ ବିଛାଡ଼ି ହୋଇ ରହିଥାନ୍ତି । ମାଟ୍ରିକ୍ସ ତରଳ, ଜେଲି ପରି ବା କଠିନ ହୋଇପାରେ । ଏହା ଶରୀରର ବିଭିନ୍ନ ଅଂଶକୁ ସଂଯୋଗ କରେ । ଉଦାହରଣ: ରକ୍ତ, ହାଡ଼, ତରୁଣାସ୍ଥି, ଆଡିପୋଜ ଟିସୁ, ଏରିଓଲାର ଟିସୁ ।\n    * **କାର୍ଯ୍ୟ:** ସଂଯୋଗ, ସାହାଯ୍ୟ, ସଂରକ୍ଷଣ, ପରିବହନ, ତାପ ନିୟନ୍ତ୍ରଣ । (ବିସ୍ତୃତ ବିବରଣୀ ପାଇଁ ତୃତୀୟ ନୋଟ୍ ଦେଖନ୍ତୁ)\n\n3.  **ମାଂସପେଶୀ ତନ୍ତୁ (Muscle Tissue):**\n    * **ଗଠନ ଓ ଅବସ୍ଥିତି:** ସଂକୋଚନଶୀଳ କୋଷ (ମାଂସପେଶୀ ଫାଇବର) ଦ୍ୱାରା ଗଠିତ । ତିନି ପ୍ରକାର: ରେଖାଯୁକ୍ତ (ହାଡ଼ ସହ ସଂଲଗ୍ନ), ଅରେଖାଯୁକ୍ତ (ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗ), ହୃତପିଣ୍ଡୀୟ (ହୃତପିଣ୍ଡ) ।\n    * **କାର୍ଯ୍ୟ:** ଶରୀରର ଚଳନ, ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗର ଗତି, ହୃତପିଣ୍ଡ ସ୍ପନ୍ଦନ । (ବିସ୍ତୃତ ବିବରଣୀ ପାଇଁ ଚତୁର୍ଥ ନୋଟ୍ ଦେଖନ୍ତୁ)\n\n4.  **ସ୍ନାୟୁ ତନ୍ତୁ (Nervous Tissue):**\n    * **ଗଠନ ଓ ଅବସ୍ଥିତି:** ସ୍ନାୟୁକୋଷ (Neuron) ଓ ନିଉରୋଗ୍ଲିଆ ଦ୍ୱାରା ଗଠିତ । ମସ୍ତିଷ୍କ, ମେରୁଦଣ୍ଡ ଓ ସ୍ନାୟୁରେ ଦେଖାଯାଏ ।\n    * **କାର୍ଯ୍ୟ:** ଶରୀରର ବିଭିନ୍ନ ଅଂଶ ମଧ୍ୟରେ ବୈଦ୍ୟୁତିକ ଓ ରାସାୟନିକ ସଂକେତ ମାଧ୍ୟମରେ ଦ୍ରୁତ ବାର୍ତ୍ତା ପରିବହନ ଓ ସମନ୍ୱୟ ରକ୍ଷା । (ବିସ୍ତୃତ ବିବରଣୀ ପାଇଁ ପଞ୍ଚମ ନୋଟ୍ ଦେଖନ୍ତୁ)"
            }
        ],
        multipleChoiceQuestions: [
            {
                question: "ସମାନ ଗଠନ ଏବଂ କାର୍ଯ୍ୟ କରୁଥିବା କୋଷର ସମୂହକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ଅଙ୍ଗ", "ଅଙ୍ଗ ପ୍ରଣାଳୀ", "ତନ୍ତୁ", "କୋଷିକା"],
                correct: 2,
                explanation: "ସମାନ ଗଠନ ଓ କାର୍ଯ୍ୟ କରୁଥିବା କୋଷର ସମୂହକୁ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ବିଭିନ୍ନ ପ୍ରକାରର ତନ୍ତୁ ମିଳିତ ହୋଇ କ’ଣ ଗଠନ କରନ୍ତି?",
                options: ["କୋଷ ସମୂହ", "ଟିସୁ ସିଷ୍ଟମ", "ଅଙ୍ଗ", "ପ୍ରଣାଳୀ"],
                correct: 2,
                explanation: "ବିଭିନ୍ନ ପ୍ରକାରର ତନ୍ତୁ ମିଳିତ ହୋଇ ଅଙ୍ଗ ଗଠନ କରନ୍ତି ।"
            },
            {
                question: "ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଶାରୀରିକ କାର୍ଯ୍ୟ ସମ୍ପାଦନ କରିବା ପାଇଁ ଏକତ୍ର କାର୍ଯ୍ୟ କରୁଥିବା ଅଙ୍ଗଗୁଡ଼ିକର ସମୂହକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ତନ୍ତୁ ସିଷ୍ଟମ", "ଅଙ୍ଗ ସମୂହ", "ଅଙ୍ଗ ପ୍ରଣାଳୀ", "କୋଷିକା ସମୂହ"],
                correct: 2,
                explanation: "ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଶାରୀରିକ କାର୍ଯ୍ୟ ସମ୍ପାଦନ ପାଇଁ ଏକତ୍ର କାର୍ଯ୍ୟ କରୁଥିବା ଅଙ୍ଗ ସମୂହକୁ ଅଙ୍ଗ ପ୍ରଣାଳୀ କୁହାଯାଏ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଅଙ୍ଗ ପ୍ରଣାଳୀର ଉଦାହରଣ?",
                options: ["ଚର୍ମ", "ହୃତପିଣ୍ଡ", "ମାଂସପେଶୀ", "ପାଚନ ପ୍ରଣାଳୀ"],
                correct: 3,
                explanation: "ପାଚନ ପ୍ରଣାଳୀ ଏକ ଅଙ୍ଗ ପ୍ରଣାଳୀର ଉଦାହରଣ ଅଟେ ।"
            },
            {
                question: "ଉଦ୍ଭିଦ ତନ୍ତୁ ମୁଖ୍ୟତଃ କେତେ ପ୍ରକାରର?",
                options: ["୧", "୨", "୩", "୪"],
                correct: 1,
                explanation: "ଉଦ୍ଭିଦ ତନ୍ତୁ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର: ମେରିଷ୍ଟେମାଟିକ ଓ ସ୍ଥାୟୀ ତନ୍ତୁ ।"
            },
            {
                question: "ଉଦ୍ଭିଦର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ ବିଭାଜନକ୍ଷମ କୋଷ ଥିବା ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ସ୍ଥାୟୀ ତନ୍ତୁ", "ଜଟିଳ ତନ୍ତୁ", "ସରଳ ତନ୍ତୁ", "ବିଭାଜନକ୍ଷମ ତନ୍ତୁ"],
                correct: 3,
                explanation: "ଉଦ୍ଭିଦର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ ବିଭାଜନକ୍ଷମ କୋଷ ଥିବା ତନ୍ତୁକୁ ବିଭାଜନକ୍ଷମ ତନ୍ତୁ ବା ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ବିଭାଜନ କ୍ଷମତା ହରାଇ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରୁଥିବା ଉଦ୍ଭିଦ ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ବିଭାଜନକ୍ଷମ ତନ୍ତୁ", "ସ୍ଥାୟୀ ତନ୍ତୁ", "ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ", "ଭାସ୍କୁଲାର ଟିସୁ"],
                correct: 1,
                explanation: "ବିଭାଜନ କ୍ଷମତା ହରାଇ ନିର୍ଦ୍ଦିଷ୍ଟ କାର୍ଯ୍ୟ କରୁଥିବା ଉଦ୍ଭିଦ ତନ୍ତୁକୁ ସ୍ଥାୟୀ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ଶୀର୍ଷସ୍ଥ (Apical) ବିଭାଜନକ୍ଷମ ତନ୍ତୁ ଉଦ୍ଭିଦର କେଉଁଠାରେ ଦେଖାଯାଏ?",
                options: ["କାଣ୍ଡର ପାର୍ଶ୍ଵରେ", "କାଣ୍ଡ ଓ ଚେରର ଅଗ୍ରଭାଗରେ", "ଗଣ୍ଠି (Node) ନିକଟରେ", "ପତ୍ରରେ"],
                correct: 1,
                explanation: "ଶୀର୍ଷସ୍ଥ ବିଭାଜନକ୍ଷମ ତନ୍ତୁ ଉଦ୍ଭିଦର କାଣ୍ଡ ଓ ଚେରର ଅଗ୍ରଭାଗରେ ଦେଖାଯାଏ ।"
            },
            {
                question: "ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧି (ବ୍ୟାସ) ପାଇଁ କେଉଁ ବିଭାଜନକ୍ଷମ ତନ୍ତୁ ଦାୟୀ?",
                options: ["ଶୀର୍ଷସ୍ଥ ମେରିଷ୍ଟେମ", "ନିବେଶିତ ମେରିଷ୍ଟେମ", "ପାର୍ଶ୍ଵସ୍ଥ ମେରିଷ୍ଟେମ", "ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ"],
                correct: 2,
                explanation: "ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧି ପାଇଁ ପାର୍ଶ୍ଵସ୍ଥ ମେରିଷ୍ଟେମ ଦାୟୀ ।"
            },
            {
                question: "ଗୋଟିଏ ପ୍ରକାର କୋଷରେ ଗଠିତ ସ୍ଥାୟୀ ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ", "ବିଶେଷଜ୍ଞ ତନ୍ତୁ", "ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ", "ମେରିଷ୍ଟେମାଟିକ ତନ୍ତୁ"],
                correct: 2,
                explanation: "ଗୋଟିଏ ପ୍ରକାର କୋଷରେ ଗଠିତ ସ୍ଥାୟୀ ତନ୍ତୁକୁ ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ଏକାଧିକ ପ୍ରକାର କୋଷରେ ଗଠିତ ସ୍ଥାୟୀ ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ", "ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ", "ବିଭାଜନକ୍ଷମ ତନ୍ତୁ", "ଯାନ୍ତ୍ରିକ ତନ୍ତୁ"],
                correct: 1,
                explanation: "ଏକାଧିକ ପ୍ରକାର କୋଷରେ ଗଠିତ ସ୍ଥାୟୀ ତନ୍ତୁକୁ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ ନୁହେଁ?",
                options: ["ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ଜାଇଲେମ୍"],
                correct: 3,
                explanation: "ଜାଇଲେମ୍ ଏକ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ, ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ ନୁହେଁ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ?",
                options: ["ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ଫ୍ଲୋଏମ୍"],
                correct: 3,
                explanation: "ଫ୍ଲୋଏମ୍ ଏକ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ ।"
            },
            {
                question: "ଉଦ୍ଭିଦରେ ଜଳ ଏବଂ ଖଣିଜ ଲବଣର ଉପରମୁହାଁ ସଂବହନ ପାଇଁ କେଉଁ ତନ୍ତୁ ଦାୟୀ?",
                options: ["ଫ୍ଲୋଏମ୍", "ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ଜାଇଲେମ୍"],
                correct: 3,
                explanation: "ଉଦ୍ଭିଦରେ ଜଳ ଓ ଖଣିଜ ଲବଣର ଉପରମୁହାଁ ସଂବହନ ପାଇଁ ଜାଇଲେମ୍ ଦାୟୀ ।"
            },
            {
                question: "ଉଦ୍ଭିଦରେ ଖାଦ୍ୟ (ସରକରା) ପରିବହନ ପାଇଁ କେଉଁ ତନ୍ତୁ ଦାୟୀ?",
                options: ["ଜାଇଲେମ୍", "ଫ୍ଲୋଏମ୍", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ମେରିଷ୍ଟେମ"],
                correct: 1,
                explanation: "ଉଦ୍ଭିଦରେ ଖାଦ୍ୟ ପରିବହନ ପାଇଁ ଫ୍ଲୋଏମ୍ ଦାୟୀ ।"
            },
            {
                question: "ପତଳା କୋଷ ଭିତ୍ତି ଏବଂ ପ୍ରଚୁର ଆନ୍ତଃକୋଷୀୟ ସ୍ଥାନ (Intercellular Spaces) ଥିବା ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["କୋଲେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ପ୍ୟାରେନ୍‌କାଇମା", "ଫ୍ଲୋଏମ୍"],
                correct: 2,
                explanation: "ପ୍ୟାରେନ୍‌କାଇମା ପତଳା କୋଷ ଭିତ୍ତି ଓ ପ୍ରଚୁର ଆନ୍ତଃକୋଷୀୟ ସ୍ଥାନ ଥିବା ସରଳ ସ୍ଥାୟୀ ତନ୍ତୁ ।"
            },
            {
                question: "ଉଦ୍ଭିଦର କଅଁଳ ଅଂଶକୁ ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ ପ୍ରଦାନ କରୁଥିବା, ମୋଟା କୋଣ ବିଶିଷ୍ଟ ଜୀବିତ କୋଷ ଦ୍ୱାରା ଗଠିତ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ପ୍ୟାରେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ଜାଇଲେମ୍"],
                correct: 2,
                explanation: "କୋଲେନ୍‌କାଇମା ଉଦ୍ଭିଦର କଅଁଳ ଅଂଶକୁ ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ମୋଟା ଓ ଲିଗ୍ନିନଯୁକ୍ତ କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ମୃତ କୋଷ ଦ୍ୱାରା ଗଠିତ ସରଳ ତନ୍ତୁ କେଉଁଟି, ଯାହା ଉଦ୍ଭିଦକୁ ଶକ୍ତି ଓ ସାହାଯ୍ୟ ପ୍ରଦାନ କରେ?",
                options: ["ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ଫ୍ଲୋଏମ୍"],
                correct: 2,
                explanation: "ସ୍କ୍ଲେରେନ୍‌କାଇମା ମୋଟା ଓ ଲିଗ୍ନିନଯୁକ୍ତ କୋଷ ଭିତ୍ତି ବିଶିଷ୍ଟ ମୃତ କୋଷ ଦ୍ୱାରା ଗଠିତ ଓ ଉଦ୍ଭିଦକୁ ଶକ୍ତି ଦିଏ ।"
            },
            {
                question: "ଜାଇଲେମରେ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଦେଖାଯାଏ?",
                options: ["ସିଭ ଟ୍ୟୁବ", "କମ୍ପାନିଅନ ସେଲ", "ଫ୍ଲୋଏମ ପ୍ୟାରେନ୍‌କାଇମା", "ଟ୍ରାକିଡ"],
                correct: 3,
                explanation: "ଟ୍ରାକିଡ ଜାଇଲେମର ଏକ ଉପାଦାନ ।"
            },
            {
                question: "ଫ୍ଲୋଏମରେ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଦେଖାଯାଏ?",
                options: ["ଭେସେଲ", "ଜାଇଲେମ ଫାଇବର", "ସିଭ ଟ୍ୟୁବ", "ଟ୍ରାକିଡ"],
                correct: 2,
                explanation: "ସିଭ ଟ୍ୟୁବ ଫ୍ଲୋଏମର ଏକ ଉପାଦାନ ।"
            },
            {
                question: "ଜାଇଲେମ ମୁଖ୍ୟତଃ କେଉଁ ପ୍ରକାର କୋଷ ଦ୍ୱାରା ଗଠିତ?",
                options: ["ଜୀବିତ କୋଷ", "ମୃତ କୋଷ", "ବିଭାଜନକ୍ଷମ କୋଷ", "ସ୍ଥାୟୀ କୋଷ"],
                correct: 1,
                explanation: "ଜାଇଲେମ ମୁଖ୍ୟତଃ ମୃତ କୋଷ ଦ୍ୱାରା ଗଠିତ (ଟ୍ରାକିଡ ଓ ଭେସେଲ) ।"
            },
            {
                question: "ଫ୍ଲୋଏମ ମୁଖ୍ୟତଃ କେଉଁ ପ୍ରକାର କୋଷ ଦ୍ୱାରା ଗଠିତ?",
                options: ["ଜୀବିତ କୋଷ", "ମୃତ କୋଷ", "ବିଭାଜନକ୍ଷମ କୋଷ", "ସରଳ କୋଷ"],
                correct: 0,
                explanation: "ଫ୍ଲୋଏମ ମୁଖ୍ୟତଃ ଜୀବିତ କୋଷ ଦ୍ୱାରା ଗଠିତ (ସିଭ ଟ୍ୟୁବ, କମ୍ପାନିଅନ ସେଲ, ଫ୍ଲୋଏମ ପାରେନକାଇମା) ।"
            },
            {
                question: "ପ୍ରାଣୀ ଶରୀରର ମୁଖ୍ୟତଃ କେତେ ପ୍ରକାରର ତନ୍ତୁ ଥାଏ?",
                options: ["୨", "୩", "୪", "୫"],
                correct: 2,
                explanation: "ପ୍ରାଣୀ ଶରୀରର ମୁଖ୍ୟତଃ ଚାରି ପ୍ରକାରର ତନ୍ତୁ ଥାଏ ।"
            },
            {
                question: "ଶରୀରର ବାହ୍ୟ ପୃଷ୍ଠ ଏବଂ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଲାଇନିଂ ଗଠନ କରୁଥିବା ପ୍ରାଣୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ସଂଯୋଜକ ତନ୍ତୁ", "ପେଶୀ ତନ୍ତୁ", "ସ୍ନାୟୁ ତନ୍ତୁ", "ଆବରଣୀ ତନ୍ତୁ"],
                correct: 3,
                explanation: "ଆବରଣୀ ତନ୍ତୁ ଶରୀରର ବାହ୍ୟ ପୃଷ୍ଠ ଓ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଲାଇନିଂ ଗଠନ କରେ ।"
            },
            {
                question: "ଶରୀରର ବିଭିନ୍ନ ଅଂଶକୁ ସଂଯୋଗ, ସାହାଯ୍ୟ ଓ ସଂରକ୍ଷଣ କରୁଥିବା ପ୍ରାଣୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ଆବରଣୀ ତନ୍ତୁ", "ପେଶୀ ତନ୍ତୁ", "ସ୍ନାୟୁ ତନ୍ତୁ", "ସଂଯୋଜକ ତନ୍ତୁ"],
                correct: 3,
                explanation: "ସଂଯୋଜକ ତନ୍ତୁ ଶରୀରର ବିଭିନ୍ନ ଅଂଶକୁ ସଂଯୋଗ, ସାହାଯ୍ୟ ଓ ସଂରକ୍ଷଣ କରେ ।"
            },
            {
                question: "ଶରୀରର ଚଳନ ଓ ସଂକୋଚନରେ ସାହାଯ୍ୟ କରୁଥିବା ପ୍ରାଣୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ଆବରଣୀ ତନ୍ତୁ", "ସଂଯୋଜକ ତନ୍ତୁ", "ସ୍ନାୟୁ ତନ୍ତୁ", "ପେଶୀ ତନ୍ତୁ"],
                correct: 3,
                explanation: "ପେଶୀ ତନ୍ତୁ ଶରୀରର ଚଳନ ଓ ସଂକୋଚନରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "ଶରୀରର ବିଭିନ୍ନ ଅଂଶ ମଧ୍ୟରେ ବାର୍ତ୍ତା ପରିବହନ କରୁଥିବା ପ୍ରାଣୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ଆବରଣୀ ତନ୍ତୁ", "ସଂଯୋଜକ ତନ୍ତୁ", "ପେଶୀ ତନ୍ତୁ", "ସ୍ନାୟୁ ତନ୍ତୁ"],
                correct: 3,
                explanation: "ସ୍ନାୟୁ ତନ୍ତୁ ଶରୀରର ବିଭିନ୍ନ ଅଂଶ ମଧ୍ୟରେ ବାର୍ତ୍ତା ପରିବହନ କରେ ।"
            },
            {
                question: "ଆବରଣୀ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି?",
                options: ["ସଂକୋଚନ", "ସୂଚନା ପରିବହନ", "ରକ୍ତ ସଞ୍ଚାଳନ", "ସୁରକ୍ଷା, ଅବଶୋଷଣ, କ୍ଷରଣ"],
                correct: 3,
                explanation: "ଆବରଣୀ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ହେଉଛି ସୁରକ୍ଷା, ଅବଶୋଷଣ ଓ କ୍ଷରଣ ।"
            },
            {
                question: "ଆବରଣୀ ତନ୍ତୁ କେତେ ମୁଖ୍ୟ ପ୍ରକାରର ହୋଇପାରେ?",
                options: ["୧", "୨", "୩", "୪"],
                correct: 1,
                explanation: "ଆବରଣୀ ତନ୍ତୁ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର: ସରଳ ଓ ସ୍ତରୀକୃତ ।"
            },
            {
                question: "ଶରୀର ପୃଷ୍ଠକୁ ଆବୃତ କରୁଥିବା ଆବରଣୀ ତନ୍ତୁର ଉଦାହରଣ କେଉଁଟି?",
                options: ["ରକ୍ତ", "ହାଡ଼", "ମାଂସପେଶୀ", "ଏପିଡର୍ମିସ (ଚର୍ମ)"],
                correct: 3,
                explanation: "ଚର୍ମର ବାହ୍ୟ ସ୍ତର ଏପିଡର୍ମିସ ଏକ ଆବରଣୀ ତନ୍ତୁ ।"
            },
            {
                question: "ସଂଯୋଜକ ତନ୍ତୁର ଏକ ପ୍ରମୁଖ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?",
                options: ["ସକ୍ରିୟ କୋଷ ବିଭାଜନ", "କୋଷ ମଧ୍ୟରେ ସ୍ୱଳ୍ପ ସ୍ଥାନ", "ପ୍ରଚୁର ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ", "ମାୟୋଫାଇବ୍ରିଲ ଉପସ୍ଥିତି"],
                correct: 2,
                explanation: "ସଂଯୋଜକ ତନ୍ତୁରେ ପ୍ରଚୁର ପରିମାଣରେ ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ ଥାଏ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ତରଳ ସଂଯୋଜକ ତନ୍ତୁ?",
                options: ["ହାଡ଼", "ତରୁଣାସ୍ଥି", "ଆଡିପୋଜ ଟିସୁ", "ରକ୍ତ"],
                correct: 3,
                explanation: "ରକ୍ତ ଏକ ତରଳ ସଂଯୋଜକ ତନ୍ତୁ ।"
            },
            {
                question: "ରକ୍ତରେ ଥିବା ମାଟ୍ରିକ୍ସକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ଲିମ୍ଫ", "ପ୍ଲାଜ୍ମା", "ସେରମ", "ମାଟ୍ରିକ୍ସ ଫାଇବର"],
                correct: 1,
                explanation: "ରକ୍ତରେ ଥିବା ତରଳ ମାଟ୍ରିକ୍ସକୁ ପ୍ଲାଜ୍ମା କୁହାଯାଏ ।"
            },
            {
                question: "ଶରୀରରେ ଅମ୍ଳଜାନ ପରିବହନ ପାଇଁ ରକ୍ତର କେଉଁ ଉପାଦାନ ଦାୟୀ?",
                options: ["ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC)", "ପ୍ଲାଟେଲେଟ", "ଲୋହିତ ରକ୍ତ କଣିକା (RBC)", "ପ୍ଲାଜ୍ମା"],
                correct: 2,
                explanation: "ଲୋହିତ ରକ୍ତ କଣିକା (RBC) ଶରୀରରେ ଅମ୍ଳଜାନ ପରିବହନ କରେ ।"
            },
            {
                question: "ଶରୀରକୁ ରୋଗରୁ ରକ୍ଷା କରୁଥିବା ରକ୍ତର ଉପାଦାନ କେଉଁଟି?",
                options: ["ଲୋହିତ ରକ୍ତ କଣିକା (RBC)", "ପ୍ଲାଟେଲେଟ", "ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC)", "ପ୍ଲାଜ୍ମା"],
                correct: 2,
                explanation: "ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC) ଶରୀରକୁ ରୋଗରୁ ରକ୍ଷା କରେ ।"
            },
            {
                question: "ରକ୍ତ ଜମାଟ ବାନ୍ଧିବାରେ ସାହାଯ୍ୟ କରୁଥିବା ରକ୍ତର ଉପାଦାନ କେଉଁଟି?",
                options: ["ଲୋହିତ ରକ୍ତ କଣିକା (RBC)", "ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC)", "ପ୍ଲାଜ୍ମା", "ପ୍ଲାଟେଲେଟ"],
                correct: 3,
                explanation: "ପ୍ଲାଟେଲେଟ ରକ୍ତ ଜମାଟ ବାନ୍ଧିବାରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "ଶରୀରକୁ ଆକୃତି ପ୍ରଦାନ କରୁଥିବା ଏକ କଠିନ ସଂଯୋଜକ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ତରୁଣାସ୍ଥି", "ଯୋଜକ ଟିସୁ", "ହାଡ଼", "ଆଡିପୋଜ ଟିସୁ"],
                correct: 2,
                explanation: "ହାଡ଼ ଏକ କଠିନ ସଂଯୋଜକ ତନ୍ତୁ ଯାହା ଶରୀରକୁ ଆକୃତି ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ହାଡ଼ ତନ୍ତୁରେ ଥିବା କୋଷକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["କୋଣ୍ଡ୍ରୋସାଇଟ", "ନିଉରନ", "ଓଷ୍ଟିଓସାଇଟ", "ମାୟୋସାଇଟ"],
                correct: 2,
                explanation: "ହାଡ଼ ତନ୍ତୁରେ ଥିବା କୋଷକୁ ଓଷ୍ଟିଓସାଇଟ କୁହାଯାଏ ।"
            },
            {
                question: "ଅସ୍ଥି ସନ୍ଧିରେ ମିଳୁଥିବା ଏକ ନରମ ସଂଯୋଜକ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ହାଡ଼", "ରକ୍ତ", "ଆଡିପୋଜ ଟିସୁ", "ତରୁଣାସ୍ଥି"],
                correct: 3,
                explanation: "ତରୁଣାସ୍ଥି ଏକ ନରମ ସଂଯୋଜକ ତନ୍ତୁ ଯାହା ଅସ୍ଥି ସନ୍ଧିରେ ମିଳେ ।"
            },
            {
                question: "ତରୁଣାସ୍ଥି ତନ୍ତୁରେ ଥିବା କୋଷକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ଓଷ୍ଟିଓସାଇଟ", "ଫାଇବ୍ରୋସାଇଟ", "କୋଣ୍ଡ୍ରୋସାଇଟ", "ଆଡିପୋସାଇଟ"],
                correct: 2,
                explanation: "ତରୁଣାସ୍ଥି ତନ୍ତୁରେ ଥିବା କୋଷକୁ କୋଣ୍ଡ୍ରୋସାଇଟ କୁହାଯାଏ ।"
            },
            {
                question: "ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗଗୁଡିକୁ ସହାୟତା ଓ ଯାନ୍ତ୍ରିକ ଶକ୍ତି ପ୍ରଦାନ କରୁଥିବା ଯୋଜକ ଟିସୁ କେଉଁଟି?",
                options: ["ରକ୍ତ", "ହାଡ଼", "ତରୁଣାସ୍ଥି", "ଆଡିପୋଜ ଟିସୁ"],
                correct: 3,
                explanation: "ଆଡିପୋଜ ଟିସୁ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗଗୁଡିକୁ ସହାୟତା ଓ ଯାନ୍ତ୍ରିକ ଶକ୍ତି ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ଶରୀରର ଐଚ୍ଛିକ (Voluntary) ଚଳନ ପାଇଁ ଦାୟୀ ପେଶୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ଅରେଖାଙ୍କିତ ପେଶୀ", "ହୃତ୍ ପେଶୀ", "ରେଖାଙ୍କିତ ପେଶୀ", "ସ୍ନାୟୁ ପେଶୀ"],
                correct: 2,
                explanation: "ରେଖାଙ୍କିତ ପେଶୀ ଶରୀରର ଐଚ୍ଛିକ ଚଳନ ପାଇଁ ଦାୟୀ ।"
            },
            {
                question: "ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗରେ (ଯଥା: ଅନ୍ତନଳୀ) ଥିବା, ଅନୈଚ୍ଛିକ (Involuntary) ସଂକୋଚନ ପାଇଁ ଦାୟୀ ପେଶୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ରେଖାଙ୍କିତ ପେଶୀ", "ହୃତ୍ ପେଶୀ", "ଅରେଖାଙ୍କିତ ପେଶୀ", "କାର୍ଡିଆକ ପେଶୀ"],
                correct: 2,
                explanation: "ଅରେଖାଙ୍କିତ ପେଶୀ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଅନୈଚ୍ଛିକ ସଂକୋଚନ ପାଇଁ ଦାୟୀ ।"
            },
            {
                question: "କେବଳ ହୃତପିଣ୍ଡରେ ମିଳୁଥିବା ବିଶେଷ ପ୍ରକାରର ପେଶୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ରେଖାଙ୍କିତ ପେଶୀ", "ଅରେଖାଙ୍କିତ ପେଶୀ", "ହୃତ୍ ପେଶୀ", "ଇଚ୍ଛାଧୀନ ପେଶୀ"],
                correct: 2,
                explanation: "ହୃତ୍ ପେଶୀ କେବଳ ହୃତପିଣ୍ଡରେ ମିଳୁଥାଏ ।"
            },
            {
                question: "ପେଶୀ କୋଷରେ ଥିବା ସଂକୁଚନଶୀଳ ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ନିଉରୋଫାଇବ୍ରିଲ", "ମାୟୋଫାଇବ୍ରିଲ", "କୋଣ୍ଡ୍ରୋଫାଇବ୍ରିଲ", "ଓଷ୍ଟିଓଫାଇବ୍ରିଲ"],
                correct: 1,
                explanation: "ପେଶୀ କୋଷରେ ଥିବା ସଂକୁଚନଶୀଳ ତନ୍ତୁକୁ ମାୟୋଫାଇବ୍ରିଲ କୁହାଯାଏ ।"
            },
            {
                question: "ହୃତ୍ ପେଶୀ କୋଷ ମଧ୍ୟରେ ଥିବା ଯୋଗାଯୋଗ ସ୍ଥଳକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ସାଇନାପ୍ସ", "ଇଣ୍ଟରକାଲେଟେଡ ଡିସ୍କ", "ନୋଡ ଅଫ୍ ରାନଭିୟର", "ଗ୍ଲିଆଲ ସେଲ"],
                correct: 1,
                explanation: "ହୃତ୍ ପେଶୀ କୋଷ ମଧ୍ୟରେ ଥିବା ଯୋଗାଯୋଗ ସ୍ଥଳକୁ ଇଣ୍ଟରକାଲେଟେଡ ଡିସ୍କ କୁହାଯାଏ ।"
            },
            {
                question: "ସ୍ନାୟୁ ତନ୍ତୁର ମୌଳିକ କୋଷ କେଉଁଟି?",
                options: ["ନିଉରୋଗ୍ଲିଆ", "ମାୟୋସାଇଟ", "ଓଷ୍ଟିଓସାଇଟ", "ସ୍ନାୟୁକୋଷ (Neuron)"],
                correct: 3,
                explanation: "ସ୍ନାୟୁକୋଷ (Neuron) ସ୍ନାୟୁ ତନ୍ତୁର ମୌଳିକ କୋଷ ।"
            },
            {
                question: "ସ୍ନାୟୁକୋଷର କେଉଁ ଅଂଶ ଶରୀରର ସବୁଠାରୁ ଲମ୍ବା କୋଷ ଭାବରେ ପରିଗଣିତ ହୋଇପାରେ?",
                options: ["କୋଷ ଶରୀର", "ଡେଣ୍ଡ୍ରନ", "ଏକଜନ", "ସାଇନାପ୍ସ"],
                correct: 2,
                explanation: "ସ୍ନାୟୁକୋଷର ଏକଜନ ଶରୀରର ସବୁଠାରୁ ଲମ୍ବା କୋଷ ହୋଇପାରେ ।"
            },
            {
                question: "ସ୍ନାୟୁ ତନ୍ତୁରେ ସ୍ନାୟୁକୋଷକୁ ସାହାଯ୍ୟ ଓ ସୁରକ୍ଷା ପ୍ରଦାନ କରୁଥିବା କୋଷ କେଉଁଟି?",
                options: ["ନିଉରନ", "ମାୟୋସାଇଟ", "ନିଉରୋଗ୍ଲିଆ", "ଓଷ୍ଟିଓସାଇଟ"],
                correct: 2,
                explanation: "ନିଉରୋଗ୍ଲିଆ ସ୍ନାୟୁକୋଷକୁ ସାହାଯ୍ୟ ଓ ସୁରକ୍ଷା ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ଏକଜନ ଚାରିପଟେ ମାୟେଲିନ ସ୍ତର ଥିବା ସ୍ନାୟୁକୋଷକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ନନ-ମାୟେଲିନେଟେଡ ନିଉରନ", "ମାୟେଲିନେଟେଡ ନିଉରନ", "ନିଉରୋଗ୍ଲିଆ", "ଇଣ୍ଟରକାଲେଟେଡ ନିଉରନ"],
                correct: 1,
                explanation: "ଏକଜନ ଚାରିପଟେ ମାୟେଲିନ ସ୍ତର ଥିବା ସ୍ନାୟୁକୋଷକୁ ମାୟେଲିନେଟେଡ ନିଉରନ କୁହାଯାଏ ।"
            },
            {
                question: "ଉଦ୍ଭିଦର ପ୍ରାଥମିକ ବୃଦ୍ଧି (ଲମ୍ବ) ପାଇଁ କେଉଁ ମେରିଷ୍ଟେମ ଦାୟୀ?",
                options: ["ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ", "ପାର୍ଶ୍ଵସ୍ଥ ମେରିଷ୍ଟେମ", "ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ", "ଇଣ୍ଟରକାଲେରୀ ମେରିଷ୍ଟେମ"],
                correct: 2,
                explanation: "ଉଦ୍ଭିଦର ପ୍ରାଥମିକ ବୃଦ୍ଧି (ଲମ୍ବ) ପାଇଁ ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ ଦାୟୀ ।"
            },
            {
                question: "ପ୍ରାଥମିକ ମେରିଷ୍ଟେମରୁ ଉତ୍ପନ୍ନ ହୋଇ ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧିରେ ସାହାଯ୍ୟ କରୁଥିବା ମେରିଷ୍ଟେମ କେଉଁଟି?",
                options: ["ଏପିକାଲ ମେରିଷ୍ଟେମ", "ଇଣ୍ଟରକାଲେରୀ ମେରିଷ୍ଟେମ", "ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ", "ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ"],
                correct: 3,
                explanation: "ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ ପ୍ରାଥମିକ ମେରିଷ୍ଟେମରୁ ଉତ୍ପନ୍ନ ହୋଇ ଉଦ୍ଭିଦର ଚଉଡା ବୃଦ୍ଧିରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "ଭାସ୍କୁଲାର କାମ୍ବିୟମ କେଉଁ ପ୍ରକାରର ବିଭାଜନକ୍ଷମ ତନ୍ତୁ?",
                options: ["ପ୍ରାଥମିକ ମେରିଷ୍ଟେମ", "ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ", "ଶୀର୍ଷସ୍ଥ ମେରିଷ୍ଟେମ", "ନିବେଶିତ ମେରିଷ୍ଟେମ"],
                correct: 1,
                explanation: "ଭାସ୍କୁଲାର କାମ୍ବିୟମ ଏକ ସେକେଣ୍ଡାରୀ ମେରିଷ୍ଟେମ ।"
            },
            {
                question: "ପାରେନ୍‌କାଇମା ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ’ଣ?",
                options: ["ଯାନ୍ତ୍ରିକ ସାହାଯ୍ୟ", "ଶକ୍ତି ପ୍ରଦାନ", "ଜଳ ଓ ଖଣିଜ ପରିବହନ", "ଖାଦ୍ୟ ସଞ୍ଚୟ ଓ ଫୋଟୋସିନ୍ଥେସିସ"],
                correct: 3,
                explanation: "ପାରେନ୍‌କାଇମା ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ଖାଦ୍ୟ ସଞ୍ଚୟ ଓ ଫୋଟୋସିନ୍ଥେସିସ ।"
            },
            {
                question: "ଜଳାଭାବ ଅଞ୍ଚଳରେ ଥିବା ଉଦ୍ଭିଦ (Xerophytes) ରେ ଦେଖାଯାଉଥିବା ବିଶେଷ ପ୍ୟାରେନ୍‌କାଇମା ଯାହା ଜଳ ସଞ୍ଚୟ କରେ ତାକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ଆରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ସ୍କୁଲେଣ୍ଟ ପ୍ୟାରେନ୍‌କାଇମା", "କ୍ଲୋରେନ୍‌କାଇମା"],
                correct: 2,
                explanation: "ଜଳାଭାବ ଅଞ୍ଚଳର ଉଦ୍ଭିଦରେ ଜଳ ସଞ୍ଚୟ କରୁଥିବା ପ୍ୟାରେନ୍‌କାଇମାକୁ ସ୍କୁଲେଣ୍ଟ ପ୍ୟାରେନ୍‌କାଇମା କୁହାଯାଏ ।"
            },
            {
                question: "ଜଳୀୟ ଉଦ୍ଭିଦରେ ଭାସିବା ପାଇଁ ସାହାଯ୍ୟ କରୁଥିବା ବାୟୁପୂର୍ଣ୍ଣ ଗହ୍ୱର ଥିବା ପ୍ୟାରେନ୍‌କାଇମାକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["କ୍ଲୋରେନ୍‌କାଇମା", "ସ୍କୁଲେଣ୍ଟ ପ୍ୟାରେନ୍‌କାଇମା", "ଆରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା"],
                correct: 2,
                explanation: "ଜଳୀୟ ଉଦ୍ଭିଦରେ ଭାସିବାରେ ସାହାଯ୍ୟ କରୁଥିବା ବାୟୁପୂର୍ଣ୍ଣ ପ୍ୟାରେନ୍‌କାଇମାକୁ ଆରେନ୍‌କାଇମା କୁହାଯାଏ ।"
            },
            {
                question: "କୋଲେନ୍‌କାଇମା ମୁଖ୍ୟତଃ ଉଦ୍ଭିଦର କେଉଁ ଅଂଶରେ ଦେଖାଯାଏ?",
                options: ["ପୁରୁଣା କାଣ୍ଡ", "ଚେର", "କଅଁଳ କାଣ୍ଡ ଓ ପତ୍ର ବୃନ୍ତ", "ମୂଳ ଟୋପି"],
                correct: 2,
                explanation: "କୋଲେନ୍‌କାଇମା ମୁଖ୍ୟତଃ ଉଦ୍ଭିଦର କଅଁଳ କାଣ୍ଡ ଓ ପତ୍ର ବୃନ୍ତରେ ଦେଖାଯାଏ ।"
            },
            {
                question: "ସ୍କ୍ଲେରେନ୍‌କାଇମାର କେଉଁ ଉପାଦାନ ଉଦ୍ଭିଦକୁ ଦୃଢ଼ତା ପ୍ରଦାନ କରେ?",
                options: ["ସେଲ୍ୟୁଲୋଜ", "ପେକ୍ଟିନ", "ଲିଗ୍ନିନ", "ସୁବେରିନ"],
                correct: 2,
                explanation: "ସ୍କ୍ଲେରେନ୍‌କାଇମାର ଲିଗ୍ନିନ ଉପାଦାନ ଉଦ୍ଭିଦକୁ ଦୃଢ଼ତା ପ୍ରଦାନ କରେ ।"
            },
            {
                question: "ନଡ଼ିଆ କତା (Coir) କେଉଁ ଟିସୁରୁ ତିଆରି?",
                options: ["ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ଫ୍ଲୋଏମ୍"],
                correct: 2,
                explanation: "ନଡ଼ିଆ କତା ସ୍କ୍ଲେରେନ୍‌କାଇମା ଟିସୁରୁ ତିଆରି ।"
            },
            {
                question: "ଜାଇଲେମର କେଉଁ ଉପାଦାନ ମୁଖ୍ୟତଃ ଜଳ ପରିବହନରେ ସାହାଯ୍ୟ କରେ?",
                options: ["ଜାଇଲେମ ପ୍ୟାରେନ୍‌କାଇମା", "ଜାଇଲେମ ଫାଇବର", "ଟ୍ରାକିଡ ଓ ଭେସେଲ", "ସିଭ ଟ୍ୟୁବ"],
                correct: 2,
                explanation: "ଜାଇଲେମର ଟ୍ରାକିଡ ଓ ଭେସେଲ ମୁଖ୍ୟତଃ ଜଳ ପରିବହନରେ ସାହାଯ୍ୟ କରନ୍ତି ।"
            },
            {
                question: "ଫ୍ଲୋଏମର କେଉଁ ଉପାଦାନ ଶର୍କରା (ଖାଦ୍ୟ) ପରିବହନ କରେ?",
                options: ["କମ୍ପାନିଅନ ସେଲ", "ଫ୍ଲୋଏମ ପ୍ୟାରେନ୍‌କାଇମା", "ସିଭ ଟ୍ୟୁବ", "ଫ୍ଲୋଏମ ଫାଇବର"],
                correct: 2,
                explanation: "ଫ୍ଲୋଏମର ସିଭ ଟ୍ୟୁବ ଶର୍କରା (ଖାଦ୍ୟ) ପରିବହନ କରେ ।"
            },
            {
                question: "ଉଦ୍ଭିଦରେ ଖାଦ୍ୟ ସଞ୍ଚୟ ଓ ପାର୍ଶ୍ଵବର୍ତ୍ତୀ ପରିବହନରେ ସାହାଯ୍ୟ କରୁଥିବା ଜାଇଲେମ ଉପାଦାନ କେଉଁଟି?",
                options: ["ଟ୍ରାକିଡ", "ଭେସେଲ", "ଜାଇଲେମ ଫାଇବର", "ଜାଇଲେମ ପ୍ୟାରେନ୍‌କାଇମା"],
                correct: 3,
                explanation: "ଜାଇଲେମ ପ୍ୟାରେନ୍‌କାଇମା ଖାଦ୍ୟ ସଞ୍ଚୟ ଓ ପାର୍ଶ୍ଵବର୍ତ୍ତୀ ପରିବହନରେ ସାହାଯ୍ୟ କରେ ।"
            },
            {
                question: "ଆବରଣୀ ତନ୍ତୁ ତଳେ ଥିବା ସଂଯୋଜକ ତନ୍ତୁରୁ କେଉଁ ସ୍ତର ଦ୍ୱାରା ଅଲଗା ହୋଇଥାଏ?",
                options: ["ପ୍ଲାଜ୍ମା ମେମ୍ବ୍ରେନ", "କୋଷ ଭିତ୍ତି", "ବେସମେଣ୍ଟ ମେମ୍ବ୍ରେନ", "ଇଣ୍ଟରସେଲ୍ୟୁଲାର ମାଟ୍ରିକ୍ସ"],
                correct: 2,
                explanation: "ଆବରଣୀ ତନ୍ତୁ ବେସମେଣ୍ଟ ମେମ୍ବ୍ରେନ ଦ୍ୱାରା ସଂଯୋଜକ ତନ୍ତୁରୁ ଅଲଗା ହୋଇଥାଏ ।"
            },
            {
                question: "ଗୋଟିଏ ସ୍ତର କୋଷ ଦ୍ୱାରା ଗଠିତ ଆବରଣୀ ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ସ୍ତରୀକୃତ ଆବରଣୀ ତନ୍ତୁ", "ସରଳ ଆବରଣୀ ତନ୍ତୁ", "ସୁଡୋଷ୍ଟ୍ରାଟିଫାଏଡ ଆବରଣୀ ତନ୍ତୁ", "ଯୋଜକ ଆବରଣୀ ତନ୍ତୁ"],
                correct: 1,
                explanation: "ଗୋଟିଏ ସ୍ତର କୋଷ ଦ୍ୱାରା ଗଠିତ ଆବରଣୀ ତନ୍ତୁକୁ ସରଳ ଆବରଣୀ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ଏକାଧିକ ସ୍ତର କୋଷ ଦ୍ୱାରା ଗଠିତ ଆବରଣୀ ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ସରଳ ଆବରଣୀ ତନ୍ତୁ", "ସ୍ତରୀକୃତ ଆବରଣୀ ତନ୍ତୁ", "କଲମ୍‌ନାର ଆବରଣୀ ତନ୍ତୁ", "କ୍ୟୁବଏଡାଲ ଆବରଣୀ ତନ୍ତୁ"],
                correct: 1,
                explanation: "ଏକାଧିକ ସ୍ତର କୋଷ ଦ୍ୱାରା ଗଠିତ ଆବରଣୀ ତନ୍ତୁକୁ ସ୍ତରୀକୃତ ଆବରଣୀ ତନ୍ତୁ କୁହାଯାଏ ।"
            },
            {
                question: "ଫୁସଫୁସର ଆଲଭିଓଲି (Alveoli) ରେ କେଉଁ ପ୍ରକାରର ସରଳ ଆବରଣୀ ତନ୍ତୁ ଦେଖାଯାଏ, ଯାହା ଅତି ପତଳା ଓ ଗ୍ୟାସ ବିନିମୟରେ ସାହାଯ୍ୟ କରେ?",
                options: ["କ୍ୟୁବଏଡାଲ ଏପିଥେଲିୟମ", "କଲମ୍‌ନାର ଏପିଥେଲିୟମ", "ସ୍କ୍ୱାମସ୍ ଏପିଥେଲିୟମ", "ସିଲିଏଟେଡ ଏପିଥେଲିୟମ"],
                correct: 2,
                explanation: "ଫୁସଫୁସର ଆଲଭିଓଲିରେ ସ୍କ୍ୱାମସ୍ ଏପିଥେଲିୟମ ଦେଖାଯାଏ ।"
            },
            {
                question: "ବୃକ୍କର ରେନାଲ ଟ୍ୟୁବୁଲ୍ (Renal Tubule) ରେ ଦେଖାଯାଉଥିବା, ଅବଶୋଷଣ ଓ କ୍ଷରଣରେ ସାହାଯ୍ୟ କରୁଥିବା ସରଳ ଆବରଣୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ସ୍କ୍ୱାମସ୍ ଏପିଥେଲିୟମ", "କଲମ୍‌ନାର ଏପିଥେଲିୟମ", "ସିଲିଏଟେଡ ଏପିଥେଲିୟମ", "କ୍ୟୁବଏଡାଲ ଏପିଥେଲିୟମ"],
                correct: 3,
                explanation: "ବୃକ୍କର ରେନାଲ ଟ୍ୟୁବୁଲ୍‌ରେ କ୍ୟୁବଏଡାଲ ଏପିଥେଲିୟମ ଦେଖାଯାଏ ।"
            },
            {
                question: "ଅନ୍ତନଳୀର ଆଭ୍ୟନ୍ତରୀଣ ସ୍ତରରେ ଦେଖାଯାଉଥିବା, ଅବଶୋଷଣରେ ସାହାଯ୍ୟ କରୁଥିବା ଲମ୍ବା କୋଷ ବିଶିଷ୍ଟ ସରଳ ଆବରଣୀ ତନ୍ତୁ କେଉଁଟି?",
                options: ["ସ୍କ୍ୱାମସ୍ ଏପିଥେଲିୟମ", "କ୍ୟୁବଏଡାଲ ଏପିଥେଲିୟମ", "କଲମ୍‌ନାର ଏପିଥେଲିୟମ", "ସୁଡୋଷ୍ଟ୍ରାଟିଫାଏଡ ଏପିଥେଲିୟମ"],
                correct: 2,
                explanation: "ଅନ୍ତନଳୀର ଆଭ୍ୟନ୍ତରୀଣ ସ୍ତରରେ କଲମ୍‌ନାର ଏପିଥେଲିୟମ ଦେଖାଯାଏ ।"
            },
            {
                question: "ଶ୍ୱାସନଳୀ (Trachea) ରେ ଦେଖାଯାଉଥିବା, ସିଲିଆ (Cilia) ଥିବା ଆବରଣୀ ତନ୍ତୁ ଯାହା ଧୂଳି ଓ ଅନ୍ୟାନ୍ୟ କଣିକାକୁ ବାହାର କରିବାରେ ସାହାଯ୍ୟ କରେ, ତାକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["କଲମ୍‌ନାର ଏପିଥେଲିୟମ", "ସ୍ତରୀକୃତ ଏପିଥେଲିୟମ", "ସିଲିଏଟେଡ କଲମ୍‌ନାର ଏପିଥେଲିୟମ", "କ୍ୟୁବଏଡାଲ ଏପିଥେଲିୟମ"],
                correct: 2,
                explanation: "ଶ୍ୱାସନଳୀରେ ସିଲିଏଟେଡ କଲମ୍‌ନାର ଏପିଥେଲିୟମ ଦେଖାଯାଏ ।"
            },
            {
                question: "ଯୋଜକ ଟିସୁର ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ କେଉଁ ଅବସ୍ଥାରେ ରହିପାରେ?",
                options: ["କେବଳ କଠିନ", "କେବଳ ତରଳ", "କେବଳ ଜେଲି ଭଳି", "ଜେଲି ଭଳି, କଠିନ ବା ତରଳ"],
                correct: 3,
                explanation: "ଯୋଜକ ଟିସୁର ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ ଜେଲି ଭଳି, କଠିନ ବା ତରଳ ଅବସ୍ଥାରେ ରହିପାରେ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଯୋଜକ ଟିସୁର ଉଦାହରଣ ନୁହେଁ?",
                options: ["ରକ୍ତ", "ହାଡ଼", "ତରୁଣାସ୍ଥି", "ସ୍ନାୟୁ ତନ୍ତୁ"],
                correct: 3,
                explanation: "ସ୍ନାୟୁ ତନ୍ତୁ ଏକ ଯୋଜକ ଟିସୁ ନୁହେଁ, ଏହା ଏକ ସ୍ୱତନ୍ତ୍ର ପ୍ରକାରର ତନ୍ତୁ ।"
            },
            {
                question: "ରକ୍ତ ରସ (Plasma) ରେ ପ୍ରାୟ କେତେ ପ୍ରତିଶତ ଜଳ ଥାଏ?",
                options: ["50-60%", "70-80%", "90-92%", "95-98%"],
                correct: 2,
                explanation: "ରକ୍ତ ରସ (ପ୍ଲାଜ୍ମା) ରେ ପ୍ରାୟ ୯୦-୯୨% ଜଳ ଥାଏ ।"
            },
            {
                question: "ଲୋହିତ ରକ୍ତ କଣିକା (RBC) ର ଆକୃତି କିପରି?",
                options: ["ଗୋଲାକାର", "ଚେପ୍ଟା", "ଦ୍ୱି-ଅବତଳ (biconcave)", "ଅନିୟମିତ"],
                correct: 2,
                explanation: "ଲୋହିତ ରକ୍ତ କଣିକା (RBC) ର ଆକୃତି ଦ୍ୱି-ଅବତଳ (biconcave) ।"
            },
            {
                question: "ଲୋହିତ ରକ୍ତ କଣିକା (RBC) ର ଆୟୁଷ ପ୍ରାୟ କେତେ ଦିନ?",
                options: ["୬୦ ଦିନ", "୯୦ ଦିନ", "୧୨୦ ଦିନ", "୧୮୦ ଦିନ"],
                correct: 2,
                explanation: "ଲୋହିତ ରକ୍ତ କଣିକା (RBC) ର ଆୟୁଷ ପ୍ରାୟ ୧୨୦ ଦିନ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC) ନୁହେଁ?",
                options: ["ଲିମ୍ଫୋସାଇଟ", "ନ୍ୟୁଟ୍ରୋଫିଲ", "ଇଓସିନୋଫିଲ", "ଓଷ୍ଟିଓସାଇଟ"],
                correct: 3,
                explanation: "ଓଷ୍ଟିଓସାଇଟ ହାଡ଼ର କୋଷ, ଶ୍ୱେତ ରକ୍ତ କଣିକା ନୁହେଁ ।"
            },
            {
                question: "ମାଂସପେଶୀ ତନ୍ତୁର ସଂକୋଚନଶୀଳତା (Contractility) ଗୁଣ ଯୋଗୁଁ କ’ଣ ସମ୍ଭବ ହୁଏ?",
                options: ["ରକ୍ତ ସଞ୍ଚାଳନ", "ସୂଚନା ପ୍ରେରଣ", "ଚଳନ ଓ ବିଭିନ୍ନ କାର୍ଯ୍ୟ", "ଖାଦ୍ୟ ସଞ୍ଚୟ"],
                correct: 2,
                explanation: "ମାଂସପେଶୀ ତନ୍ତୁର ସଂକୋଚନଶୀଳତା ଗୁଣ ଯୋଗୁଁ ଚଳନ ଓ ବିଭିନ୍ନ କାର୍ଯ୍ୟ ସମ୍ଭବ ହୁଏ ।"
            },
            {
                question: "ଯୋଜକ ତନ୍ତୁ (Ligament) ଓ କଣ୍ଡରା (Tendon) କେଉଁ ପ୍ରକାର ଯୋଜକ ଟିସୁର ଉଦାହରଣ?",
                options: ["ତରଳ ଯୋଜକ ଟିସୁ", "କଠିନ ଯୋଜକ ଟିସୁ", "ପ୍ରକୃତ ଯୋଜକ ଟିସୁ", "ଆଡିପୋଜ ଟିସୁ"],
                correct: 2,
                explanation: "ଲିଗାମେଣ୍ଟ ଓ ଟେଣ୍ଡନ୍ ପ୍ରକୃତ ଯୋଜକ ଟିସୁ (ଫାଇବରସ୍ ଟିସୁ) ର ଉଦାହରଣ ।"
            },
            {
                question: "ସ୍ନାୟୁକୋଷର କେଉଁ ଅଂଶ ଅନ୍ୟ ସ୍ନାୟୁକୋଷରୁ ସୂଚନା ଗ୍ରହଣ କରେ?",
                options: ["ଏକଜନ", "କୋଷ ଶରୀର", "ଡେଣ୍ଡ୍ରନ", "ସାଇନାପ୍ସ"],
                correct: 2,
                explanation: "ସ୍ନାୟୁକୋଷର ଡେଣ୍ଡ୍ରନ (ଓ ଡେଣ୍ଡ୍ରାଇଟ୍ସ) ଅନ୍ୟ ସ୍ନାୟୁକୋଷରୁ ସୂଚନା ଗ୍ରହଣ କରେ ।"
            },
            {
                question: "ସ୍ନାୟୁକୋଷର କେଉଁ ଅଂଶ ସୂଚନାକୁ କୋଷ ଶରୀରଠାରୁ ଦୂରକୁ ପ୍ରେରଣ କରେ?",
                options: ["ଡେଣ୍ଡ୍ରନ", "କୋଷ ଶରୀର", "ସାଇନାପ୍ସ", "ଏକଜନ"],
                correct: 3,
                explanation: "ସ୍ନାୟୁକୋଷର ଏକଜନ ସୂଚନାକୁ କୋଷ ଶରୀରଠାରୁ ଦୂରକୁ ପ୍ରେରଣ କରେ ।"
            },
            {
                question: "ମାୟେଲିନ ସ୍ତର ସ୍ନାୟୁକୋଷର କେଉଁ ଅଂଶକୁ ଆବୃତ କରିଥାଏ?",
                options: ["କୋଷ ଶରୀର", "ଡେଣ୍ଡ୍ରନ", "ଏକଜନ", "ସାଇନାପ୍ସ"],
                correct: 2,
                explanation: "ମାୟେଲିନ ସ୍ତର ସ୍ନାୟୁକୋଷର ଏକଜନକୁ ଆବୃତ କରିଥାଏ ।"
            },
            {
                question: "ଏକଜନ ଉପରେ ଥିବା ମାୟେଲିନ ସ୍ତରର ଅନ୍ତରାଳରେ ଥିବା ସ୍ଥାନକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ସାଇନାପ୍ସ", "ଇଣ୍ଟରକାଲେଟେଡ ଡିସ୍କ", "ନୋଡ ଅଫ୍ ରାନଭିୟର", "ଗ୍ଲିଆଲ ଗ୍ୟାପ"],
                correct: 2,
                explanation: "ମାୟେଲିନ ସ୍ତରର ଅନ୍ତରାଳରେ ଥିବା ସ୍ଥାନକୁ ନୋଡ ଅଫ୍ ରାନଭିୟର କୁହାଯାଏ ।"
            },
            {
                question: "ତନ୍ତୁ ପୁନଃ ନିର୍ମାଣ ହେବାର କ୍ଷମତାକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ବିଭାଜନ", "ବିଭେଦୀକରଣ (Differentiation)", "ପ୍ରତ୍ୟୁତ୍ପାଦନ (Regeneration)", "ସଂକୋଚନ"],
                correct: 2,
                explanation: "ତନ୍ତୁ ପୁନଃ ନିର୍ମାଣ ହେବାର କ୍ଷମତାକୁ ପ୍ରତ୍ୟୁତ୍ପାଦନ (Regeneration) କୁହାଯାଏ ।"
            },
            {
                question: "ଉଦ୍ଭିଦ ତନ୍ତୁ ଓ ପ୍ରାଣୀ ତନ୍ତୁ ମଧ୍ୟରେ ଏକ ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ କ’ଣ?",
                options: ["କୋଷ ଉପସ୍ଥିତି", "କୋଷ ଭିତ୍ତି ଉପସ୍ଥିତି/ଅନୁପସ୍ଥିତି", "ଚଳନ କ୍ଷମତା", "ଉପରୋକ୍ତ ସମସ୍ତ (ଉଦ୍ଭିଦରେ କୋଷ ଭିତ୍ତି ଥାଏ, ଚଳନ ସୀମିତ)"],
                correct: 3,
                explanation: "ଉଦ୍ଭିଦ ତନ୍ତୁରେ କୋଷ ଭିତ୍ତି ଥାଏ, ପ୍ରାଣୀ ତନ୍ତୁରେ ନଥାଏ; ଉଦ୍ଭିଦର ଚଳନ ସୀମିତ । ତେଣୁ ସମସ୍ତ ବିକଳ୍ପ ପାର୍ଥକ୍ୟ ସୂଚାଏ ।"
            },
            {
                question: "ପ୍ୟାରେନ୍‌କାଇମା କୋଷ ମଧ୍ୟରେ ଥିବା ବାୟୁପୂର୍ଣ୍ଣ ସ୍ଥାନକୁ କ’ଣ କୁହାଯାଏ?",
                options: ["ମାଟ୍ରିକ୍ସ", "ଲୁମେନ", "ଇଣ୍ଟରସେଲ୍ୟୁଲାର ସ୍ପେସ", "ଭାକ୍ୟୁଓଲ"],
                correct: 2,
                explanation: "ପ୍ୟାରେନ୍‌କାଇମା କୋଷ ମଧ୍ୟରେ ଥିବା ବାୟୁପୂର୍ଣ୍ଣ ସ୍ଥାନକୁ ଇଣ୍ଟରସେଲ୍ୟୁଲାର ସ୍ପେସ କୁହାଯାଏ ।"
            },
            {
                question: "ଜାଇଲେମ ଓ ଫ୍ଲୋଏମ ଏକାଠି ମିଶି କ’ଣ ଗଠନ କରନ୍ତି?",
                options: ["ଗ୍ରାଉଣ୍ଡ ଟିସୁ", "ଏପିଡର୍ମିସ", "ମେରିଷ୍ଟେମାଟିକ ଟିସୁ", "ଭାସ୍କୁଲାର ବଣ୍ଡଲ"],
                correct: 3,
                explanation: "ଜାଇଲେମ ଓ ଫ୍ଲୋଏମ ଏକାଠି ମିଶି ଭାସ୍କୁଲାର ବଣ୍ଡଲ ଗଠନ କରନ୍ତି ।"
            },
            {
                question: "ପ୍ରାଣୀ ଶରୀରରେ ତନ୍ତୁର ଅନୁପସ୍ଥିତି କେଉଁ କ୍ଷେତ୍ରରେ ଦେଖାଯାଏ?",
                options: ["ବହୁକୋଷୀ ଜୀବ", "ଏକକୋଷୀ ଜୀବ (ଯଥା: ଆମିବା)", "ଉଦ୍ଭିଦ", "ଫିଙ୍ଗସ୍"],
                correct: 1,
                explanation: "ଏକକୋଷୀ ଜୀବମାନଙ୍କ ଶରୀରରେ ତନ୍ତୁ ଗଠନ ହୋଇନଥାଏ ।"
            },
            {
                question: "ଚର୍ମ (Skin) କେଉଁ ପ୍ରକାରର ପ୍ରାଣୀ ତନ୍ତୁ ଦ୍ୱାରା ଗଠିତ?",
                options: ["ଯୋଜକ ତନ୍ତୁ", "ପେଶୀ ତନ୍ତୁ", "ସ୍ନାୟୁ ତନ୍ତୁ", "ଆବରଣୀ ତନ୍ତୁ (ଏପିଥେଲିଆଲ)"],
                correct: 3,
                explanation: "ଚର୍ମ ମୁଖ୍ୟତଃ ଆବରଣୀ ତନ୍ତୁ (ଏପିଡର୍ମିସ) ଓ ତା ତଳେ ସଂଯୋଜକ ତନ୍ତୁ (ଡର୍ମିସ) ଦ୍ୱାରା ଗଠିତ । ପ୍ରାଥମିକ ଭାବେ ଏହା ଆବରଣୀ ତନ୍ତୁର ଉଦାହରଣ ।"
            },
            {
                question: "ନିବେଶିତ ବିଭାଜନକ୍ଷମ ତନ୍ତୁ (Intercalary Meristem) ଉଦ୍ଭିଦର କେଉଁଠାରେ ମିଳିଥାଏ?",
                options: ["କାଣ୍ଡ ଅଗ୍ରଭାଗ", "ଚେର ଅଗ୍ରଭାଗ", "ପତ୍ର ମୂଳ ବା ଗଣ୍ଠି ନିକଟରେ", "କାଣ୍ଡ ଓ ଚେରର ବ୍ୟାସରେ"],
                correct: 2,
                explanation: "ନିବେଶିତ ବିଭାଜନକ୍ଷମ ତନ୍ତୁ ଉଦ୍ଭିଦର ପତ୍ର ମୂଳ ବା ଗଣ୍ଠି ନିକଟରେ ମିଳିଥାଏ ।"
            },
            {
                question: "ସରଳ ଆବରଣୀ ତନ୍ତୁର ଏକ ଉଦାହରଣ କେଉଁଟି?",
                options: ["ଚର୍ମର ଏପିଡର୍ମିସ", "ପାକସ୍ଥଳୀର ଆଭ୍ୟନ୍ତରୀଣ ସ୍ତର (କଲମ୍‌ନାର)", "ତରୁଣାସ୍ଥି", "ହାଡ଼"],
                correct: 1,
                explanation: "ପାକସ୍ଥଳୀର ଆଭ୍ୟନ୍ତରୀଣ ସ୍ତର କଲମ୍‌ନାର ସରଳ ଆବରଣୀ ତନ୍ତୁ ଦ୍ୱାରା ଗଠିତ । ଚର୍ମର ଏପିଡର୍ମିସ ସ୍ତରୀକୃତ ।"
            },
            {
                question: "ସ୍ତରୀକୃତ ଆବରଣୀ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ କ’ଣ?",
                options: ["ଅବଶୋଷଣ", "କ୍ଷରଣ", "ପରିବହନ", "ସୁରକ୍ଷା"],
                correct: 3,
                explanation: "ସ୍ତରୀକୃତ ଆବରଣୀ ତନ୍ତୁର ମୁଖ୍ୟ କାର୍ଯ୍ୟ ହେଉଛି ସୁରକ୍ଷା ପ୍ରଦାନ କରିବା ।"
            },
            {
                question: "ରକ୍ତର pH ମୂଲ୍ୟ ପ୍ରାୟ କେତେ?",
                options: ["୬.୪", "୭.୦", "୭.୪", "୮.୦"],
                correct: 2,
                explanation: "ରକ୍ତର pH ମୂଲ୍ୟ ପ୍ରାୟ ୭.୪ (ଈଷତ କ୍ଷାରୀୟ) ।"
            },
            {
                question: "କଣ୍ଡରା (Tendon) କେଉଁ ଦୁଇଟି ଜିନିଷକୁ ଯୋଡିଥାଏ?",
                options: ["ହାଡ଼କୁ ହାଡ଼", "ମାଂସପେଶୀକୁ ମାଂସପେଶୀ", "ମାଂସପେଶୀକୁ ହାଡ଼", "ଚର୍ମକୁ ମାଂସପେଶୀ"],
                correct: 2,
                explanation: "କଣ୍ଡରା (Tendon) ମାଂସପେଶୀକୁ ହାଡ଼ ସହିତ ଯୋଡିଥାଏ ।"
            },
            {
                question: "ଯୋଜକ ତନ୍ତୁ (Ligament) କେଉଁ ଦୁଇଟି ଜିନିଷକୁ ଯୋଡିଥାଏ?",
                options: ["ମାଂସପେଶୀକୁ ହାଡ଼", "ହାଡ଼କୁ ହାଡ଼", "ତରୁଣାସ୍ଥିକୁ ହାଡ଼", "ମାଂସପେଶୀକୁ ମାଂସପେଶୀ"],
                correct: 1,
                explanation: "ଯୋଜକ ତନ୍ତୁ (Ligament) ହାଡ଼କୁ ହାଡ଼ ସହିତ ଯୋଡିଥାଏ ।"
            },
            {
                question: "ପେଶୀ ତନ୍ତୁର ଗୁଣ ଯାହା ଏହାକୁ ଛୋଟ କରିଦିଏ?",
                options: ["ପ୍ରସାରଣଶୀଳତା (Extensibility)", "ଲଚକଦାରତା (Elasticity)", "ଉତ୍ତେଜନାଶୀଳତା (Excitability)", "ସଂକୋଚନଶୀଳତା (Contractility)"],
                correct: 3,
                explanation: "ସଂକୋଚନଶୀଳତା (Contractility) ପେଶୀ ତନ୍ତୁର ସେହି ଗୁଣ ଯାହାଦ୍ୱାରା ଏହା ଛୋଟ ହୋଇପାରେ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ରେଖାଙ୍କିତ ପେଶୀର ଉଦାହରଣ?",
                options: ["ଅନ୍ତନଳୀର ପେଶୀ", "ରକ୍ତନଳୀର ପେଶୀ", "ହାତ ଗୋଡ଼ର ପେଶୀ", "ହୃତପିଣ୍ଡ ପେଶୀ"],
                correct: 2,
                explanation: "ହାତ ଗୋଡ଼ର ପେଶୀ ରେଖାଙ୍କିତ (ଐଚ୍ଛିକ) ପେଶୀର ଉଦାହରଣ ।"
            },
            {
                question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଅରେଖାଙ୍କିତ ପେଶୀର ଉଦାହରଣ?",
                options: ["ଦ୍ୱିଶିରୀ ପେଶୀ (Biceps)", "ହୃତପିଣ୍ଡ ପେଶୀ", "ଆଇରିସ୍ (Iris)", "ଜଙ୍ଘର ପେଶୀ"],
                correct: 2,
                explanation: "ଆଖିର ଆଇରିସ୍‌ରେ ଥିବା ପେଶୀ ଅରେଖାଙ୍କିତ (ଅନୈଚ୍ଛିକ) ପେଶୀର ଉଦାହରଣ ।"
            },
            {
                question: "ସ୍ନାୟୁକୋଷର କୋଷ ଶରୀରରେ କ’ଣ ଥାଏ?",
                options: ["ମାୟୋଫାଇବ୍ରିଲ", "ଆନ୍ତଃକୋଷୀୟ ମାଟ୍ରିକ୍ସ", "ନ୍ୟୁକ୍ଲିୟସ ଓ ସାଇଟୋପ୍ଲାଜମ (ନ୍ୟୁରୋପ୍ଲାଜମ)", "କୋଣ୍ଡ୍ରୋସାଇଟ"],
                correct: 2,
                explanation: "ସ୍ନାୟୁକୋଷର କୋଷ ଶରୀରରେ ନ୍ୟୁକ୍ଲିୟସ ଓ ସାଇଟୋପ୍ଲାଜମ (ନ୍ୟୁରୋପ୍ଲାଜମ) ଥାଏ ।"
            },
            {
                question: "ନନ-ମାୟେଲିନେଟେଡ ନିଉରନ ତୁଳନାରେ ମାୟେଲିନେଟେଡ ନିଉରନ ବାର୍ତ୍ତାକୁ କିପରି ପରିବହନ କରେ?",
                options: ["ଧୀରେ ଧୀରେ", "ସମାନ ଗତିରେ", "ଦ୍ରୁତ ଗତିରେ", "ପରିବହନ କରେ ନାହିଁ"],
                correct: 2,
                explanation: "ମାୟେଲିନେଟେଡ ନିଉରନ ବାର୍ତ୍ତାକୁ ନନ-ମାୟେଲିନେଟେଡ ନିଉରନ ତୁଳନାରେ ଦ୍ରୁତ ଗତିରେ ପରିବହନ କରେ ।"
            },
            {
                question: "ତନ୍ତୁ ପ୍ରଣାଳୀ ଅଧ୍ୟୟନ ପୁସ୍ତିକାରେ କ’ଣ ଅନ୍ତର୍ଭୁକ୍ତ?",
                options: ["କେବଳ ପ୍ରଶ୍ନୋତ୍ତର", "କେବଳ ପରିଭାଷା", "କେବଳ ନିବନ୍ଧ ପ୍ରଶ୍ନ", "କୀ ସଂକେତ, ପରିଭାଷା, କ୍ୱିଜ ଓ ନିବନ୍ଧ ପ୍ରଶ୍ନ"],
                correct: 3,
                explanation: "ପ୍ରଦତ୍ତ ଫାଇଲଟି ଏକ ଅଧ୍ୟୟନ ପୁସ୍ତିକାର ଅଂଶ ଭଳି, ଯେଉଁଥିରେ ବିଭିନ୍ନ ପ୍ରକାରର ତଥ୍ୟ ଓ ପ୍ରଶ୍ନ ରହିଛି ।"
            },
            {
                question: "\"ରକ୍ତ ଏକ ତରଳ ସଂଯୋଜକ ତନ୍ତୁ\" ଏହି ତଥ୍ୟ କେଉଁ ସ୍ରୋତରେ ଉଲ୍ଲେଖ ଅଛି?",
                options: ["sc3.pdf", "ଜୀବ ବିଜ୍ଞାନ: ତନ୍ତୁ ପ୍ରଣାଳୀ ଅଧ୍ୟୟନ ପୁସ୍ତିକା", "ଯୋଜକ ଟିସୁ ବିବରଣୀ", "ଉପରୋକ୍ତ ସମସ୍ତ (ପ୍ରତ୍ୟକ୍ଷ ବା ପରୋକ୍ଷ ଭାବରେ)"],
                correct: 3,
                explanation: "ପ୍ରଦତ୍ତ ଫାଇଲରେ ଏହି ତଥ୍ୟ ସ୍ପଷ୍ଟ ଭାବେ ଉଲ୍ଲେଖ ଅଛି, ଯାହା ଏକ ଅଧ୍ୟୟନ ପୁସ୍ତିକାର ଅଂଶ ।"
            }
        ],
        audio: [
            {
                title: "Introduction to Tissue Systems",
                description: "Audio explanation of plant and animal tissue systems.",
                src: "./tissue-system.wav", // Placeholder
            },
            {
                title: "Types of Plant Tissues",
                description: "Detailed audio on meristematic and permanent tissues.",
                src: "path/to/plant_tissues.mp3", // Placeholder
            },
            {
                title: "Animal Tissues Overview",
                description: "Audio guide to epithelial, connective, muscle, and nervous tissues.",
                src: "path/to/animal_tissues.mp3", // Placeholder
            }
        ],
        video: [
            {
                title: "Visualizing Plant and Animal Tissues",
                description: "Video showing different types of tissues and their structures.",
                src: "path/to/tissue_visualization.mp4", // Placeholder
            },
            {
                title: "Working of Muscle Tissues",
                description: "Animation explaining muscle contraction.",
                src: "path/to/muscle_working.mp4", // Placeholder
            },
            {
                title: "Nerve Impulse Transmission",
                description: "Video explaining how neurons transmit signals.",
                src: "path/to/nerve_impulse.mp4", // Placeholder
            }
        ],
            },
            "ପଦାର୍ଥ ଓ ଏହାର ଗୁଣ": {
                notes: [
                    {
                    "title": "ପଦାର୍ଥ ଓ ଏହାର ବର୍ଗୀକରଣ",
                    "content": "\n•   **ପଦାର୍ଥ:** ଯେକୌଣସି ବସ୍ତୁର ମାସ (mass) ଥାଏ ଏବଂ ତାହା ସ୍ଥାନ ଅଧିକାର କରେ।\n•   **ଶୁଦ୍ଧ ପଦାର୍ଥ:** ଏହା ଗୋଟିଏ ପ୍ରକାର କଣିକାରେ ଗଠିତ। ଉଦାହରଣ: ମୌଳିକ (Elements) ଓ ଯୌଗିକ (Compounds)।\n•   **ମିଶ୍ରଣ (Mixture):** ଏହା ଏକାଧିକ ଶୁଦ୍ଧ ପଦାର୍ଥର ମିଶ୍ରଣ, ଯେଉଁଗୁଡ଼ିକ ରାସାୟନିକ ଭାବରେ ସଂଯୁକ୍ତ ହୋଇନଥାନ୍ତି। ମିଶ୍ରଣର ଉପାଦାନଗୁଡ଼ିକ ସେମାନଙ୍କର ମୂଳ ଗୁଣ ବଜାୟ ରଖନ୍ତି।\n"
                    
                    },
                    {
                    "title": "ମିଶ୍ରଣର ପ୍ରକାରଭେଦ",
                    "content": "\nମିଶ୍ରଣ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର:\n•   **ସମଜାତୀୟ ମିଶ୍ରଣ (Homogeneous Mixture):**\n    ◦   ଉପାଦାନଗୁଡ଼ିକ ସମାନ ଭାବରେ ମିଶିଥାନ୍ତି ଏବଂ ସମଗ୍ର ମିଶ୍ରଣରେ ଏକ ସମାନ ଗଠନ (uniform composition) ଥାଏ।\n    ◦   ଉପାଦାନଗୁଡ଼ିକୁ ଅଲଗା ଭାବରେ ଦେଖି ହୁଏନାହିଁ।\n    ◦   ଉଦାହରଣ: ଚିନି ଦ୍ରବଣ, ଲୁଣ ଦ୍ରବଣ, ବାୟୁ। ଦ୍ରବଣ (Solutions) ହେଉଛି ସମଜାତୀୟ ମିଶ୍ରଣର ଏକ ଉଦାହରଣ।\n•   **ବିସମଜାତୀୟ ମିଶ୍ରଣ (Heterogeneous Mixture):**\n    ◦   ଉପାଦାନଗୁଡ଼ିକ ଅସମାନ ଭାବରେ ମିଶିଥାନ୍ତି ଏବଂ ବିଭିନ୍ନ ଅଂଶରେ ଭିନ୍ନ ଭିନ୍ନ ଗଠନ ଦେଖାଯାଏ।\n    ◦   ଉପାଦାନଗୁଡ଼ିକୁ ଅଲଗା ଭାବରେ ଦେଖି ହୁଏ।\n    ◦   ଉଦାହରଣ: ବାଲି ଓ ଲୁଣ ମିଶ୍ରଣ, ତେଲ ଓ ପାଣି ମିଶ୍ରଣ। ନିଲମ୍ବନ (Suspensions) ଓ କଲଏଡ୍ (Colloids) ହେଉଛି ବିସମଜାତୀୟ ମିଶ୍ରଣର ଉଦାହରଣ।\n"
                    },
                    {
                    "title": "ଦ୍ରବଣ (Solution)",
                    "content": "\n•   **ସଂଜ୍ଞା:** ଦୁଇ ବା ଅଧିକ ପଦାର୍ଥର ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ।\n•   **ଉପାଦାନ:**\n    ◦   **ଦ୍ରାବକ (Solvent):** ଯେଉଁଥିରେ ଅନ୍ୟ ପଦାର୍ଥ ଘୋଳାଯାଏ (ଅଧିକ ପରିମାଣରେ ଥାଏ)।\n    ◦   **ଦ୍ରାବ୍ୟ (Solute):** ଯେଉଁ ପଦାର୍ଥ ଘୋଳାଯାଏ (କମ୍ ପରିମାଣରେ ଥାଏ)。\n•   **ଦ୍ରବଣର ଧର୍ମ:**\n    ◦   ଏହା ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ।\n    ◦   କଣିକାଗୁଡ଼ିକର ଆକାର ୧ nm ରୁ କମ୍।\n    ◦   ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ପାରନ୍ତି ନାହିଁ (ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ଦେଖାଯାଏ ନାହିଁ)।\n    ◦   ଏହା ସ୍ଥିର (stable), କଣିକାଗୁଡ଼ିକ ଅଲଗା ହୁଅନ୍ତି ନାହିଁ ବା ତଳେ ବସିଯାଆନ୍ତି ନାହିଁ।\n•   **ଦ୍ରବଣର ସାନ୍ଦ୍ରତା (Concentration):** ଦ୍ରାବଣରେ ଥିବା ଦ୍ରାବ୍ୟର ପରିମାଣ।\n    ◦   ସାନ୍ଦ୍ରତା = $(ଦ୍ରାବ୍ୟର ଭର/ଦ୍ରବଣର ଭର) \\times 100$\n    ◦   ସାନ୍ଦ୍ରତା = $(ଦ୍ରାବ୍ୟର ଭର/ଦ୍ରାବକର ଭର) \\times 100$\n•   **ସନ୍ତୃପ୍ତ ଦ୍ରବଣ (Saturated Solution):** ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ଆଉ ଅଧିକ ଦ୍ରାବ୍ୟ ଘୋଳାଯାଇ ପାରିବ ନାହିଁ।\n•   **ଅସନ୍ତୃପ୍ତ ଦ୍ରବଣ (Unsaturated Solution):** ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ଆହୁରି ଅଧିକ ଦ୍ରାବ୍ୟ ଘୋଳାଯାଇ ପାରିବ।\n•   **ଦ୍ରାବ୍ୟତା (Solubility):** ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ୧୦୦ ଗ୍ରାମ ଦ୍ରାବକରେ ଘୋଳି ହେଉଥିବା ଦ୍ରାବ୍ୟର ସର୍ବାଧିକ ପରିମାଣ。\n"
                    },
                    {
                    "title": "ନିଲମ୍ବନ (Suspension)",
                    "content": "\n•   **ସଂଜ୍ଞା:** ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ ଯେଉଁଥିରେ ଦ୍ରାବ୍ୟ କଣିକାଗୁଡ଼ିକ ଦ୍ରାବକରେ ବିଛାଡ଼ି ହୋଇ ରହିଥାନ୍ତି କିନ୍ତୁ ଘୋଳନ୍ତି ନାହିଁ। ସେଗୁଡ଼ିକୁ ଖାଲି ଆଖିରେ ଦେଖିହୁଏ।\n•   **ଧର୍ମ:**\n    ◦   ଏହା ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ।\n    ◦   କଣିକାଗୁଡ଼ିକର ଆକାର ୧୦୦ nm ରୁ ଅଧିକ।\n    ◦   ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ପାରନ୍ତି (ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ଦେଖାଯାଏ)。\n    ◦   ଏହା ଅସ୍ଥିର (unstable), କଣିକାଗୁଡ଼ିକ ତଳେ ବସିଯାଆନ୍ତି。\n"
                    },
                    {
                    "title": "କଲଏଡ୍ ଦ୍ରବଣ (Colloidal Solution)",
                    "content": "\n•   **ସଂଜ୍ଞା:** ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ ଯାହା ସମଜାତୀୟ ଦେଖାଯାଏ, ଏଥିରେ କଣିକାଗୁଡ଼ିକ ଦ୍ରବଣ ଓ ନିଲମ୍ବନ ମଝିରେ ଥାଆନ୍ତି।\n•   **ଧର୍ମ:**\n    ◦   ବିସମଜାତୀୟ ମିଶ୍ରଣ କିନ୍ତୁ ସମଜାତୀୟ ଦେଖାଯାଏ।\n    ◦   କଣିକାଗୁଡ଼ିକ ଦ୍ରବଣରୁ ବଡ଼ କିନ୍ତୁ ନିଲମ୍ବନରୁ ସାନ (୧ nm ରୁ ୧୦୦ nm ମଧ୍ୟରେ)。\n    ◦   ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ପାରନ୍ତି (ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ଦେଖାଯାଏ)。\n    ◦   ଏହା ସ୍ଥିର (stable), କଣିକାଗୁଡ଼ିକ ତଳେ ବସିଯାଆନ୍ତି ନାହିଁ।\n•   **ଉପାଦାନ:**\n    ◦   **ବିଛାଡ଼ିତ ପ୍ରାବସ୍ଥା (Dispersed Phase):** ଦ୍ରାବ୍ୟ ପରି କଣିକା।\n    ◦   **ବିଛାଡ଼ିତ ମାଧ୍ୟମ (Dispersion Medium):** ଦ୍ରାବକ ପରି ମାଧ୍ୟମ।\n•   **ସାଧାରଣ ଉଦାହରଣ:** କ୍ଷୀର (ତରଳରେ ଚର୍ବି), ଧୂଆଁ (ବାୟୁରେ କଠିନ), ମେଘ (ବାୟୁରେ ତରଳ)。\n•   **ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ (Tyndall Effect):** କଲଏଡ୍ କଣିକା କିମ୍ବା ସସପେନସନରେ ଥିବା କ୍ଷୁଦ୍ର କଣିକା ଦ୍ୱାରା ଆଲୋକ ରଶ୍ମିର ବିଛାଡ଼ି ହେବା। ଏହା ଦେଖାଯିବା ପାଇଁ, ଆଲୋକର ତରଙ୍ଗଦୈର୍ଘ୍ୟ (wavelength) ବିଛାଡ଼ୁଥିବା କଣିକାଗୁଡ଼ିକର ଆକାର ତୁଳନାରେ ଅଧିକ ବା ସମାନ ହେବା ଆବଶ୍ୟକ。\n"
                    },
                    {
                    "title": "ମିଶ୍ରଣର ଉପାଦାନଗୁଡ଼ିକୁ ପୃଥକ କରିବା",
                    "content": "\nମିଶ୍ରଣର ଉପାଦାନଗୁଡ଼ିକର ଭିନ୍ନ ଭିନ୍ନ ଭୌତିକ ଧର୍ମ ଉପରେ ଆଧାର କରି ବିଭିନ୍ନ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ।\n•   **ବାଷ୍ପୀକରଣ (Evaporation):** ତରଳ ଦ୍ରାବକରୁ କଠିନ ଦ୍ରାବ୍ୟକୁ ଅଲଗା କରିବା (ଯଥା: ନୀଳ/କଳା କାଳିରୁ ରଙ୍ଗ)。\n•   **କେନ୍ଦ୍ରାପସାରଣ (Centrifugation):** ଘନତା ଉପରେ ଆଧାର କରି କଣିକାଗୁଡ଼ିକୁ ପୃଥକ କରିବା (ଯଥା: କ୍ଷୀରରୁ ସର)。\n•   **ପୃଥକୀକରଣ ଫନେଲ୍ (Separating Funnel):** ପରସ୍ପର ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥକୁ ଅଲଗା କରିବା (ଯଥା: ତେଲ ଓ ପାଣି)。\n•   **ଉର୍ଦ୍ଧ୍ୱପାତନ (Sublimation):** ଉର୍ଦ୍ଧ୍ୱପାତିତ ହେଉଥିବା କଠିନକୁ ଅନ୍ୟ କଠିନରୁ ଅଲଗା କରିବା (ଯଥା: ଆମୋନିୟମ୍ କ୍ଲୋରାଇଡ୍ ଓ ଲୁଣ)。\n•   **କ୍ରୋମାଟୋଗ୍ରାଫି (Chromatography):** ରଙ୍ଗୀନ ଉପାଦାନ କିମ୍ବା ଗୋଟିଏ ଦ୍ରାବକରେ ଘୋଳି ହୋଇଥିବା ବିଭିନ୍ନ ଦ୍ରାବ୍ୟକୁ ଅଲଗା କରିବା (ଯଥା: କାଳିରୁ ରଙ୍ଗ)。\n•   **ପାତନ (Distillation):** ପରସ୍ପର ମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥକୁ ଅଲଗା କରିବା, ଯେଉଁମାନଙ୍କର ସ୍ଫୁଟନାଙ୍କ ମଧ୍ୟରେ ଯଥେଷ୍ଟ ପାର୍ଥକ୍ୟ ଥାଏ (୨୫K ରୁ ଅଧିକ) (ଯଥା: ଏସିଟୋନ୍ ଓ ପାଣି)。\n•   **ଆଂଶିକ ପାତନ (Fractional Distillation):** ଯେଉଁ ମିଶ୍ରଣର ଉପାଦାନଗୁଡ଼ିକର ସ୍ଫୁଟନାଙ୍କ ପାର୍ଥକ୍ୟ 25K ରୁ କମ୍ ଥାଏ, ସେମାନଙ୍କୁ ପୃଥକ କରିବା (ଯଥା: ବାୟୁରୁ ବିଭିନ୍ନ ଗ୍ୟାସ୍)。\n•   **ସ୍ଫଟିକୀକରଣ (Crystallisation):** ଅଶୁଦ୍ଧ କଠିନରୁ ଶୁଦ୍ଧ ସ୍ଫଟିକ ପାଇବା ପାଇଁ (ଯଥା: ଅଶୁଦ୍ଧ କପର ସଲଫେଟ୍)。\n"
                    },
                    {
                    "title": "ଭୌତିକ ଓ ରାସାୟନିକ ପରିବର୍ତ୍ତନ",
                    "content": "\n•   **ଭୌତିକ ପରିବର୍ତ୍ତନ (Physical Change):** ପଦାର୍ଥର ରାସାୟନିକ ସଂରଚନାରେ କୌଣସି ପରିବର୍ତ୍ତନ ହୁଏନାହିଁ। ଏକ ଅସ୍ଥାୟୀ ପରିବର୍ତ୍ତନ, ଯାହାକୁ ପୁନର୍ବାର ମୂଳ ଅବସ୍ଥାକୁ ଫେରାଇ ଆଣି ହୁଏ। ଉଦାହରଣ: ବରଫ ତରଳିବା, ଜଳ ଫୁଟିବା, କାଚ ଭାଙ୍ଗିବା。\n•   **ରାସାୟନିକ ପରିବର୍ତ୍ତନ (Chemical Change):** ପଦାର୍ଥର ରାସାୟନିକ ସଂରଚନା ବଦଳିଯାଏ, ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ। ଏକ ସ୍ଥାୟୀ ପରିବର୍ତ୍ତନ, ଯାହାକୁ ସାଧାରଣତଃ ପୁନର୍ବାର ମୂଳ ଅବସ୍ଥାକୁ ଫେରାଇ ଆଣି ହୁଏନାହିଁ। ଉଦାହରଣ: କାଠ ଜଳିବା, ଲୁହା କଳଙ୍କି ଧରିବା, ଖାଦ୍ୟ ହଜମ ହେବା。\n"
                    },
                    {
                    "title": "ଶୁଦ୍ଧ ପଦାର୍ଥର ପ୍ରକାରଭେଦ",
                    "content": "\nଶୁଦ୍ଧ ପଦାର୍ଥ ମୁଖ୍ୟତଃ ଦୁଇ ପ୍ରକାରର:\n•   **ମୌଳିକ (Elements):** ଏକମାତ୍ର ପ୍ରକାରର ପରମାଣୁରେ ଗଠିତ। ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଦ୍ୱାରା ଅଧିକ ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ ହୋଇପାରିବ ନାହିଁ। ଉଦାହରଣ: ଲୁହା, ତମ୍ବା, ଅମ୍ଳଜାନ, ହାଇଡ୍ରୋଜେନ୍。\n    ◦   **ଧାତୁ:** ଚକଚକିଆ, ତାପ ଓ ବିଦ୍ୟୁତର ସୁପରିବାହୀ, ତାର କିମ୍ବା ଚାଦରରେ ପରିଣତ ହୋଇପାରନ୍ତି, ଶବ୍ଦକାରୀ。\n    ◦   **ଅଧାତୁ:** ଧାତୁର ବିପରୀତ ଗୁଣ ଥାଏ。\n    ◦   **ଉପଧାତୁ:** ଧାତୁ ଓ ଅଧାତୁ ଉଭୟର ଧର୍ମ ଦେଖାନ୍ତି。\n•   **ଯୌଗିକ (Compounds):** ଦୁଇ ବା ଅଧିକ ମୌଳିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ରାସାୟନିକ ଭାବରେ ସଂଯୁକ୍ତ ହୋଇ ଗଠିତ। ଏହାର ଉପାଦାନଗୁଡ଼ିକର ଧର୍ମଠାରୁ ଭିନ୍ନ ଧର୍ମ ପ୍ରଦର୍ଶନ କରେ। ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଦ୍ୱାରା ଉପାଦାନଗୁଡ଼ିକୁ ଅଲଗା କରି ହୁଏ। ଉଦାହରଣ: ଜଳ ($H_2O$), କାର୍ବନ୍ ଡାଇଅକ୍ସାଇଡ୍ ($CO_2$), ଚିନି ($C_{12}H_{22}O_{11}$)。\n"
                    },
                    {
                    "title": "ମୌଳିକ ଓ ଯୌଗିକ ମଧ୍ୟରେ ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ",
                    "content": "| ବୈଶିଷ୍ଟ୍ୟ | ମୌଳିକ (Elements) | ଯୌଗିକ (Compounds) |\n|---|---|---|\n| ସଂଜ୍ଞା | ଏକ ପ୍ରକାରର ପରମାଣୁରେ ଗଠିତ ଶୁଦ୍ଧ ପଦାର୍ଥ | ଦୁଇ ବା ଅଧିକ ମୌଳିକର ରାସାୟନିକ ସଂଯୋଗରୁ ସୃଷ୍ଟ ଶୁଦ୍ଧ ପଦାର୍ଥ |\n| ବିଭାଜନ | ରାସାୟନିକ ଭାବରେ ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ ହୋଇପାରିବ ନାହିଁ | ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଦ୍ୱାରା ଏହାର ଉପାଦାନ ମୌଳିକରେ ବିଭାଜିତ ହୋଇପାରିବ |\n| ଗଠନ | କେବଳ ଗୋଟିଏ ପ୍ରକାରର ପରମାଣୁ ଥାଏ | ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ମିଶିଥିବା ବିଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁ ଥାଏ |\n| ଗୁଣ | ନିଜସ୍ୱ ଗୁଣ ରଖେ | ଉପାଦାନ ମୌଳିକଠାରୁ ସମ୍ପୂର୍ଣ୍ଣ ଭିନ୍ନ ନୂତନ ଗୁଣ ପ୍ରଦର୍ଶନ କରେ |\n| ଉଦାହରଣ | ଅମ୍ଳଜାନ (O), ହାଇଡ୍ରୋଜେନ୍ (H), ଲୁହା (Fe) | ଜଳ ($H_2O$), କାର୍ବନ ଡାଇଅକ୍ସାଇଡ୍ ($CO_2$), ସୋଡିୟମ୍ କ୍ଲୋରାଇଡ୍ (NaCl) |\n"
                    }
                ],
                longQuestions: [
                    {
                    "question": "ଦ୍ରବଣ, ନିଲମ୍ବନ ଏବଂ କଲଏଡ୍ ମଧ୍ୟରେ ଥିବା ମୁଖ୍ୟ ପାର୍ଥକ୍ୟଗୁଡ଼ିକୁ ସେମାନଙ୍କର କଣିକା ଆକାର, ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ଏବଂ ସ୍ଥିରତା ଦୃଷ୍ଟିରୁ ତୁଳନାତ୍ମକ ଭାବେ ବର୍ଣ୍ଣନା କର। ପ୍ରତ୍ୟେକରୁ ଦୁଇଟି ଲେଖାଏଁ ଉଦାହରଣ ଦିଅ।",
                    "answer": "\n**ଦ୍ରବଣ (Solution):**\n*   **କଣିକା ଆକାର:** ୧ nm ରୁ କମ୍।\n*   **ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ:** ଦେଖାଯାଏ ନାହିଁ।\n*   **ସ୍ଥିରତା:** ସ୍ଥିର (stable), କଣିକା ତଳେ ବସନ୍ତି ନାହିଁ।\n*   **ଉଦାହରଣ:** ଚିନି ଦ୍ରବଣ, ଲୁଣ ଦ୍ରବଣ。\n\n**ନିଲମ୍ବନ (Suspension):**\n*   **କଣିକା ଆକାର:** ୧୦୦ nm ରୁ ଅଧିକ।\n*   **ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ:** ଦେଖାଯାଏ।\n*   **ସ୍ଥିରତା:** ଅସ୍ଥିର (unstable), କଣିକା ତଳେ ବସିଯାଆନ୍ତି。\n*   **ଉଦାହରଣ:** ବାଲି ଓ ପାଣି ମିଶ୍ରଣ, ଚକ ଓ ପାଣି ମିଶ୍ରଣ。\n\n**କଲଏଡ୍ ଦ୍ରବଣ (Colloidal Solution):**\n*   **କଣିକା ଆକାର:** ୧ nm ରୁ ୧୦୦ nm ମଧ୍ୟରେ।\n*   **ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ:** ଦେଖାଯାଏ।\n*   **ସ୍ଥିରତା:** ସ୍ଥିର (stable), କଣିକା ତଳେ ବସନ୍ତି ନାହିଁ।\n*   **ଉଦାହରଣ:** କ୍ଷୀର, ଧୂଆଁ。\n"
                    },
                    {
                    "question": "ବାୟୁରୁ ଏହାର ବିଭିନ୍ନ ଉପାଦାନ (ଯଥା: ଅମ୍ଳଜାନ, ନାଇଟ୍ରୋଜେନ୍, ଆର୍ଗନ୍) କିପରି ଅଲଗା କରାଯାଏ? ଏହି ପ୍ରକ୍ରିୟାରେ ବ୍ୟବହୃତ ମୁଖ୍ୟ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ଏବଂ ଏହାର ପଦକ୍ଷେପଗୁଡ଼ିକୁ ବିସ୍ତୃତ ଭାବେ ବର୍ଣ୍ଣନା କର।",
                    "answer": "\nବାୟୁରୁ ଏହାର ବିଭିନ୍ନ ଉପାଦାନକୁ ଅଲଗା କରିବା ପାଇଁ **ଆଂଶିକ ପାତନ (Fractional Distillation)** ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ। ଏହି ପ୍ରକ୍ରିୟାର ପଦକ୍ଷେପଗୁଡ଼ିକ ନିମ୍ନରେ ବର୍ଣ୍ଣନା କରାଗଲା:\n\n1.  **ବାୟୁକୁ ସଙ୍କୁଚିତ କରିବା ଓ ଥଣ୍ଡା କରିବା:** ପ୍ରଥମେ ବାୟୁକୁ ଉଚ୍ଚ ଚାପରେ ସଙ୍କୁଚିତ କରାଯାଏ ଏବଂ ତାପମାତ୍ରା କମାଇ ଥଣ୍ଡା କରାଯାଏ। ଏହାଦ୍ୱାରା ବାୟୁ ତରଳ ଅବସ୍ଥାକୁ ଆସେ।\n2.  **ତରଳ ବାୟୁକୁ ଉତ୍ତାପ ଦେବା:** ତରଳ ବାୟୁକୁ ଧୀରେ ଧୀରେ ଉତ୍ତାପ ଦିଆଯାଏ। ବିଭିନ୍ନ ଉପାଦାନର ସ୍ଫୁଟନାଙ୍କ (boiling points) ଭିନ୍ନ ଭିନ୍ନ ଥିବାରୁ, ଯାହାର ସ୍ଫୁଟନାଙ୍କ କମ୍, ତାହା ପ୍ରଥମେ ବାଷ୍ପୀଭୂତ ହୁଏ।\n    *   ନାଇଟ୍ରୋଜେନ୍ ($-196^\\circ C$)\n    *   ଆର୍ଗନ୍ ($-186^\\circ C$)\n    *   ଅମ୍ଳଜାନ ($-183^\\circ C$)\n3.  **ପୃଥକୀକରଣ:** ବାଷ୍ପୀଭୂତ ହୋଇଥିବା ଗ୍ୟାସଗୁଡ଼ିକୁ ଅଲଗା ଅଲଗା ସ୍ତମ୍ଭରେ ସଂଗ୍ରହ କରାଯାଏ। ଏହିପରି ଭାବରେ, ନାଇଟ୍ରୋଜେନ୍, ଆର୍ଗନ୍ ଏବଂ ଅମ୍ଳଜାନକୁ ବାୟୁରୁ ପୃଥକ କରାଯାଇଥାଏ。\n\nଏହି ପ୍ରଣାଳୀରେ, ଉପାଦାନଗୁଡ଼ିକର ସ୍ଫୁଟନାଙ୍କ ମଧ୍ୟରେ ଥିବା ସାମାନ୍ୟ ପାର୍ଥକ୍ୟକୁ ବ୍ୟବହାର କରି ସେମାନଙ୍କୁ ଅଲଗା କରାଯାଏ。\n"
                    },
                    {
                    "question": "କ୍ରୋମାଟୋଗ୍ରାଫି ପ୍ରଣାଳୀ କ'ଣ? ଏହାର କାର୍ଯ୍ୟପ୍ରଣାଳୀକୁ ଚିତ୍ର ସହିତ ବୁଝାଅ। କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣକୁ ପୃଥକ କରିବା ପାଇଁ ଏହି ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?",
                    "answer": "\n**କ୍ରୋମାଟୋଗ୍ରାଫି (Chromatography):**\nକ୍ରୋମାଟୋଗ୍ରାଫି ହେଉଛି ଏକ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ଯାହା ଗୋଟିଏ ଦ୍ରାବକରେ ଦ୍ରବୀଭୂତ ହୋଇଥିବା ବିଭିନ୍ନ ରଙ୍ଗର ପିଗମେଣ୍ଟ (pigments) ବା ଅନ୍ୟ ପଦାର୍ଥକୁ ଅଲଗା କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ। ଏହା ବିଭିନ୍ନ ଉପାଦାନର ସ୍ଥିର (stationary) ଏବଂ ଚଳନ୍ତି (mobile) ପ୍ରାବସ୍ଥାରେ ଭିନ୍ନ ଭିନ୍ନ ଦ୍ରାବ୍ୟତା ଉପରେ ଆଧାରିତ।\n\n**କାର୍ଯ୍ୟପ୍ରଣାଳୀ (କାଗଜ କ୍ରୋମାଟୋଗ୍ରାଫି ଉଦାହରଣ):**\n1.  **କାଗଜ ପ୍ରସ୍ତୁତି:** ଏକ ଫିଲ୍ଟର କାଗଜର ତଳ ଭାଗରୁ ପ୍ରାୟ ୩-୪ cm ଉପରେ ଏକ ପେନ୍ସିଲ୍ ରେଖା ଟଣାଯାଏ।\n2.  **ନମୁନା ପ୍ରୟୋଗ:** ଏହି ରେଖାର ମଝିରେ କଳା ଇଙ୍କର ଏକ ଛୋଟ ଟୋପା ରଖାଯାଏ।\n3.  **ଦ୍ରାବକରେ ବୁଡ଼ାଇବା:** କାଗଜକୁ ଏକ ବିକର ବା ଟେଷ୍ଟ ଟ୍ୟୁବରେ ରଖାଯାଏ ଯେପରି ଇଙ୍କ ଟୋପା ରେଖା ଦ୍ରାବକ (ଯଥା: ଜଳ) ସ୍ତରରୁ ଉପରେ ରହିବ।\n4.  **ପୃଥକୀକରଣ:** ଦ୍ରାବକ କାଗଜରେ ଉପରକୁ ଉଠିବା ଆରମ୍ଭ କରେ। କଳା ଇଙ୍କରେ ଥିବା ବିଭିନ୍ନ ରଙ୍ଗର ଉପାଦାନଗୁଡ଼ିକ ଦ୍ରାବକରେ ଭିନ୍ନ ଭିନ୍ନ ଦ୍ରବଣଶୀଳତା ଥିବାରୁ, ସେମାନେ କାଗଜରେ ଭିନ୍ନ ଭିନ୍ନ ଗତିରେ ଚଳାଚଳ କରନ୍ତି ଏବଂ ଅଲଗା ଅଲଗା ସ୍ଥାନରେ ଦେଖାଯାଆନ୍ତି। ଯେଉଁ ରଙ୍ଗ ଅଧିକ ଦ୍ରବଣଶୀଳ, ତାହା ଅଧିକ ଉପରକୁ ଯାଏ।\n\n**ଚିତ୍ର "
                    }
                ],
                shortQuestions: [
                        { question: "ସମଜାତୀୟ ମିଶ୍ରଣ ଓ ବିସମଜାତୀୟ ମିଶ୍ରଣ ମଧ୍ୟରେ ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ କ'ଣ? ଉଦାହରଣ ଦିଅ।", answer: "ସମଜାତୀୟ ମିଶ୍ରଣରେ ଉପାଦାନଗୁଡ଼ିକ ସମାନ ଭାବରେ ମିଶିଥାନ୍ତି ଏବଂ ଅଲଗା ଭାବରେ ଦେଖି ହୁଏନାହିଁ (ଯଥା: ଚିନି ଦ୍ରବଣ)। ବିସମଜାତୀୟ ମିଶ୍ରଣରେ ଉପାଦାନଗୁଡ଼ିକ ଅସମାନ ଭାବରେ ମିଶିଥାନ୍ତି ଏବଂ ସେମାନଙ୍କୁ ଅଲଗା ଭାବରେ ଦେଖି ହୁଏ (ଯଥା: ବାଲି ଓ ଲୁଣ ମିଶ୍ରଣ)।" 
                        }, 
                        { question: "ଦ୍ରାବଣରେ ଦ୍ରାବ୍ୟ ଓ ଦ୍ରାବକ କାହାକୁ କୁହାଯାଏ? ଏକ ଉଦାହରଣ ଦେଇ ବୁଝାଅ।", answer: "ଦ୍ରାବଣରେ, ଯେଉଁ ପଦାର୍ଥ କମ୍ ପରିମାଣରେ ଥାଏ ଓ ଘୋଳି ହୋଇଯାଏ ତାହାକୁ ଦ୍ରାବ୍ୟ କୁହାଯାଏ। ଯେଉଁ ପଦାର୍ଥ ଅଧିକ ପରିମାଣରେ ଥାଏ ଓ ଯେଉଁଥିରେ ଦ୍ରାବ୍ୟ ଘୋଳି ହୁଏ ତାହାକୁ ଦ୍ରାବକ କୁହାଯାଏ। ଉଦାହରଣ ସ୍ୱରୂପ, ଲୁଣ ଦ୍ରବଣରେ ଲୁଣ ହେଉଛି ଦ୍ରାବ୍ୟ ଏବଂ ପାଣି ହେଉଛି ଦ୍ରାବକ।" 
                        },
                        { question: "ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ କ'ଣ? ଏହା ଦ୍ରବଣ, ନିଲମ୍ବନ ଓ କଲଏଡ୍ ମଧ୍ୟରୁ କେଉଁମାନଙ୍କରେ ଦେଖାଯାଏ?", answer: "ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ ହେଉଛି ଆଲୋକ ରଶ୍ମିର ବିଛାଡ଼ି ହେବା ଯେତେବେଳେ ଏହା ଏକ ମାଧ୍ୟମ ଦେଇ ଗତି କରେ ଯେଉଁଥିରେ ସୂକ୍ଷ୍ମ କଣିକା ଥାଏ। ଏହା ନିଲମ୍ବନ ଓ କଲଏଡ୍ ଦ୍ରବଣରେ ଦେଖାଯାଏ, କିନ୍ତୁ ପ୍ରକୃତ ଦ୍ରବଣରେ ଦେଖାଯାଏ ନାହିଁ କାରଣ ସେମାନଙ୍କ କଣିକାଗୁଡ଼ିକ ବହୁତ ଛୋଟ ଥାଏ।" 
                        }, 
                        { question: "ସନ୍ତୃପ୍ତ ଦ୍ରବଣର ସଂଜ୍ଞା କ'ଣ? ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ଏହା କିପରି ଭିନ୍ନ ଅଟେ?", answer: "ସନ୍ତୃପ୍ତ ଦ୍ରବଣ ହେଉଛି ଏକ ଦ୍ରବଣ ଯେଉଁଥିରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ଆଉ ଅଧିକ ଦ୍ରାବ୍ୟ ଘୋଳାଯାଇ ପାରିବ ନାହିଁ। ଏହାର ଅର୍ଥ ହେଉଛି, ଏହା ଏହାର ସର୍ବାଧିକ ଦ୍ରାବ୍ୟତା ସ୍ତରରେ ପହଞ୍ଚିଛି ଏବଂ କୌଣସି ଅତିରିକ୍ତ ଦ୍ରାବ୍ୟ ଘୋଳି ହେବା ପରିବର୍ତ୍ତେ ତଳେ ବସିଯିବ।" 
                        }, 
                        { question: "କ୍ଷୀରରୁ ସର ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ? ଏହାର କାର୍ଯ୍ୟପ୍ରଣାଳୀ ସଂକ୍ଷେପରେ ବୁଝାଅ।", answer: "କ୍ଷୀରରୁ ସର ଅଲଗା କରିବା ପାଇଁ କେନ୍ଦ୍ରାପସାରଣ (Centrifugation) ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ। ଏହି ପ୍ରଣାଳୀରେ, କ୍ଷୀରକୁ ଅତି ଦ୍ରୁତ ଗତିରେ ଘୂରାଯାଏ, ଯାହା ଫଳରେ ହାଲୁକା ସର କଣିକାଗୁଡ଼ିକ ଉପରକୁ ଭାସିଆସେ ଓ ଭାରି ଚର୍ବିମୁକ୍ତ କ୍ଷୀର ତଳକୁ ଯାଏ।" 
                        }, 
                        { question: "ପାତନ ଓ ଆଂଶିକ ପାତନ ମଧ୍ୟରେ ପ୍ରଭେଦ କ'ଣ? କେଉଁ ପରିସ୍ଥିତିରେ ପ୍ରତ୍ୟେକଟି ବ୍ୟବହୃତ ହୁଏ?", answer: "ପାତନ ପରସ୍ପର ମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥକୁ ଅଲଗା କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ ଯେଉଁମାନଙ୍କର ସ୍ଫୁଟନାଙ୍କ ମଧ୍ୟରେ ଯଥେଷ୍ଟ ପାର୍ଥକ୍ୟ ଥାଏ (25K ରୁ ଅଧିକ)। ଆଂଶିକ ପାତନ ସେତେବେଳେ ବ୍ୟବହୃତ ହୁଏ ଯେତେବେଳେ ସ୍ଫୁଟନାଙ୍କ ମଧ୍ୟରେ ପାର୍ଥକ୍ୟ କମ୍ (25K ରୁ କମ୍) ଥାଏ, ଯାହା ଅଧିକ ସଠିକ ପୃଥକୀକରଣ ପାଇଁ ଅନେକ ବାଷ୍ପୀକରଣ-ଘନୀଭବନ ଚକ୍ର ଆବଶ୍ୟକ କରେ।" 
                        },
                        { question: "ରାସାୟନିକ ପରିବର୍ତ୍ତନ ଓ ଭୌତିକ ପରିବର୍ତ୍ତନ ମଧ୍ୟରେ ଦୁଇଟି ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ ଲେଖ।", answer: "ରାସାୟନିକ ପରିବର୍ତ୍ତନରେ ପଦାର୍ଥର ରାସାୟନିକ ସଂରଚନାରେ ପରିବର୍ତ୍ତନ ହୁଏ ଏବଂ ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ (ଯଥା: କାଗଜ ଜଳିବା)। ଅନ୍ୟପକ୍ଷରେ, ଭୌତିକ ପରିବର୍ତ୍ତନରେ ପଦାର୍ଥର ରାସାୟନିକ ସଂରଚନା ଅପରିବର୍ତ୍ତିତ ରୁହେ ଏବଂ କୌଣସି ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏନାହିଁ (ଯଥା: ବରଫ ତରଳିବା)।" 
                        },
                        { question: "ମୌଳିକ କାହାକୁ କୁହାଯାଏ? ଦୁଇଟି ମୌଳିକର ଉଦାହରଣ ଦିଅ ଯାହା ଧାତୁ ଅଟନ୍ତି।", answer: "ମୌଳିକ ହେଉଛି ଶୁଦ୍ଧ ପଦାର୍ଥ ଯାହାକୁ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଦ୍ୱାରା ଅଧିକ ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ କରାଯାଇ ପାରିବ ନାହିଁ। ଦୁଇଟି ଧାତୁ ମୌଳିକର ଉଦାହରଣ ହେଉଛି ଲୁହା (Iron) ଓ ତମ୍ବା (Copper)।" 
                        },
                        { question: "ଯୌଗିକ କିପରି ଗଠିତ ହୁଏ? ଏହାର ଗଠନରେ ଉପାଦାନଗୁଡ଼ିକର ଧର୍ମ କିପରି ବଦଳିଯାଏ?", answer: "ଯୌଗିକ ଦୁଇ ବା ଅଧିକ ମୌଳିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ରାସାୟନିକ ଭାବରେ ସଂଯୁକ୍ତ ହୋଇ ଗଠିତ ହୁଏ। ଏହାର ଗଠନ ପରେ, ଯୌଗିକର ଧର୍ମ ତାହାର ଉପାଦାନ ମୌଳିକର ଧର୍ମ ଠାରୁ ସମ୍ପୂର୍ଣ୍ଣ ଭିନ୍ନ ହୋଇଥାଏ, କାରଣ ଏକ ନୂଆ ରାସାୟନିକ ବନ୍ଧନ ସୃଷ୍ଟି ହୋଇଥାଏ।" 
                        },
                        { question: "ସ୍ଫଟିକୀକରଣ ପ୍ରଣାଳୀର ଦୁଇଟି ଲାଭ କ'ଣ?", answer: "ସ୍ଫଟିକୀକରଣ ପ୍ରଣାଳୀର ଦୁଇଟି ଲାଭ ହେଉଛି: (୧) ଏହା ଦ୍ୱାରା ଅଶୁଦ୍ଧ କଠିନ ପଦାର୍ଥରୁ ଅତି ଶୁଦ୍ଧ ସ୍ଫଟିକ ପ୍ରାପ୍ତ ହୁଏ, ଏବଂ (୨) ଏହା ଉତ୍ତାପ ପ୍ରତି ସମ୍ବେଦନଶୀଳ ପଦାର୍ଥ (ଯାହା ବାଷ୍ପୀକରଣ ଦ୍ୱାରା ନଷ୍ଟ ହୋଇପାରେ) ପାଇଁ ଅଧିକ ଉପଯୋଗୀ।" } 
                 ],
                 multipleChoiceQuestions: [ 
                    { question: "ପଦାର୍ଥର ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?", options: ['ଏହାର ଆକାର ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ।','ଏହାର ମାସ (mass) ଥାଏ ଓ ସେ ସ୍ଥାନ ଅଧିକାର କରେ।','ଏହା କେବଳ ତରଳ ଅବସ୍ଥାରେ ରହିଥାଏ।','ଏହା ଆଲୋକ ବିଛାଡ଼ି ପାରେ।'], correct: 1, 
                    },
                    { question: "ଶୁଦ୍ଧ ପଦାର୍ଥ କେଉଁ ପ୍ରକାରର କଣିକାରେ ଗଠିତ?", options: ['ଅନେକ ପ୍ରକାରର କଣିକା।','ଦୁଇ ପ୍ରକାରର କଣିକା।','ଗୋଟିଏ ପ୍ରକାର କଣିକା।','ଏହା କଣିକାରେ ଗଠିତ ନୁହେଁ।'], correct: 2, 
                    },
                    { question: "ମିଶ୍ରଣର ସଂଜ୍ଞା କ’ଣ?", options: ['କେବଳ ଗୋଟିଏ ଶୁଦ୍ଧ ପଦାର୍ଥ।','ଏକାଧିକ ଶୁଦ୍ଧ ପଦାର୍ଥର ରାସାୟନିକ ସଂଯୋଗ।','ଏକାଧିକ ଶୁଦ୍ଧ ପଦାର୍ଥର ମିଶ୍ରଣ (ଯେଉଁଗୁଡ଼ିକ ରାସାୟନିକ ଭାବେ ସଂଯୁକ୍ତ ହୋଇନଥାନ୍ତି)।','ଏକମାତ୍ର ପ୍ରକାରର ପରମାଣୁ।'], correct: 2, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ସମଜାତୀୟ ମିଶ୍ରଣର ଉଦାହରଣ?", options: ['ବାଲି ଓ ଲୁଣ ମିଶ୍ରଣ।','ତେଲ ଓ ପାଣି ମିଶ୍ରଣ।','ଚିନି ଦ୍ରବଣ।','ଧୂଆଁ।'], correct: 2, 
                    },
                    { question: "ବିସମଜାତୀୟ ମିଶ୍ରଣରେ ଉପାଦାନଗୁଡ଼ିକ କିପରି ଥାଆନ୍ତି?", options: ['ସମାନ ଭାବରେ ମିଶିଥାନ୍ତି।','ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଦ୍ରବୀଭୂତ ହୋଇଥାନ୍ତି।','ଅସମାନ ଭାବରେ ମିଶିଥାନ୍ତି ଓ ଅଲଗା ଭାବରେ ଦେଖି ହୁଏ।','କେବଳ ଗୋଟିଏ ଅବସ୍ଥାରେ ଥାଆନ୍ତି।'], correct: 2, 
                    },
                    { question: "ଦ୍ରବଣର ସଂଜ୍ଞା କ’ଣ?", options: ['ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ।','ଏକାଧିକ କଠିନ ପଦାର୍ଥର ମିଶ୍ରଣ।','ଦୁଇ ବା ଅଧିକ ପଦାର୍ଥର ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ।','ଏକ ଶୁଦ୍ଧ ପଦାର୍ଥ।'], correct: 2, 
                    },
                    { question: "ଦ୍ରାବଣରେ ଯେଉଁ ପଦାର୍ଥ କମ୍ ପରିମାଣରେ ଥାଏ ଓ ଘୋଳି ହୋଇଯାଏ, ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ଦ୍ରାବକ।','ଦ୍ରାବ୍ୟ।','କଲଏଡ୍।','ନିଲମ୍ବନ।'], correct: 1, 
                    },
                    { question: "ଲୁଣ ଦ୍ରବଣରେ 'ପାଣି' କ’ଣ ଅଟେ?", options: ['ଦ୍ରାବ୍ୟ।','ଦ୍ରାବକ।','ମିଶ୍ରଣ।','ଉପଧାତୁ।'], correct: 1, 
                    },
                    { question: "ଏକ ଦ୍ରବଣରେ ଦ୍ରାବ୍ୟ କଣିକାଗୁଡ଼ିକର ଆକାର ସାଧାରଣତଃ କେତେ ଥାଏ?", options: ['100 nm ରୁ ଅଧିକ।','1 nm ରୁ କମ୍।','1 nm ରୁ 100 nm ମଧ୍ୟରେ।','ଏହାର କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ଆକାର ନାହିଁ।'], correct: 1, 
                    },
                    { question: "ଦ୍ରବଣର ଗୋଟିଏ ଗୁଣ ହେଉଛି ଏହା କଣିକାଗୁଡ଼ିକ ତଳେ ବସିଯାଆନ୍ତି ନାହିଁ। ଏହାର ଅର୍ଥ କ’ଣ?", options: ['ଏହା ଅସ୍ଥିର।','ଏହା ଅସନ୍ତୃପ୍ତ।','ଏହା ସ୍ଥିର (stable)।','ଏହା ବିସମଜାତୀୟ।'], correct: 2, 
                    },
                    { question: "ଦ୍ରବଣର ସାନ୍ଦ୍ରତା ଗଣନା କରିବାର ଗୋଟିଏ ସୂତ୍ର କ’ଣ?", options: ['(ଦ୍ରାବକର ଭର/ଦ୍ରାବ୍ୟର ଭର) × 100','(ଦ୍ରବଣର ଭର/ଦ୍ରାବ୍ୟର ଭର) × 100','(ଦ୍ରାବ୍ୟର ଭର/ଦ୍ରବଣର ଭର) × 100','(ଦ୍ରାବ୍ୟର ଭର + ଦ୍ରାବକର ଭର) × 100'], correct: 2, 
                    },
                    { question: "ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ଯେଉଁ ଦ୍ରବଣରେ ଆଉ ଅଧିକ ଦ୍ରାବ୍ୟ ଘୋଳାଯାଇ ପାରିବ ନାହିଁ, ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ଅସନ୍ତୃପ୍ତ ଦ୍ରବଣ।','ଅତିସନ୍ତୃପ୍ତ ଦ୍ରବଣ।','ସନ୍ତୃପ୍ତ ଦ୍ରବଣ।','କଲଏଡ୍ ଦ୍ରବଣ।'], correct: 2, 
                    },
                    { question: "ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ 100 ଗ୍ରାମ ଦ୍ରାବକରେ ଘୋଳି ହେଉଥିବା ଦ୍ରାବ୍ୟର ସର୍ବାଧିକ ପରିମାଣକୁ କ’ଣ କୁହାଯାଏ?", options: ['ସାନ୍ଦ୍ରତା।','ବିଛାଡ଼ିତ ପ୍ରାବସ୍ଥା।','ଦ୍ରାବ୍ୟତା।','ସ୍ଥିରତା।'], correct: 2, 
                    },
                    { question: "ନିଲମ୍ବନର ସଂଜ୍ଞା କ’ଣ?", options: ['ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ ଯେଉଁଥିରେ କଣିକା ସମ୍ପୂର୍ଣ୍ଣ ଦ୍ରବୀଭୂତ।','ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ ଯେଉଁଥିରେ ଦ୍ରାବ୍ୟ କଣିକାଗୁଡ଼ିକ ଦ୍ରାବକରେ ବିଛାଡ଼ି ହୋଇ ରହିଥାନ୍ତି କିନ୍ତୁ ଘୋଳନ୍ତି ନାହିଁ।','ଏକ ଶୁଦ୍ଧ ପଦାର୍ଥ।','ଦୁଇଟି ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥ।'], correct: 1, 
                    },
                    { question: "ନିଲମ୍ବନରେ କଣିକାଗୁଡ଼ିକର ଆକାର ସାଧାରଣତଃ କେତେ ଥାଏ?", options: ['1 nm ରୁ କମ୍।','1 nm ରୁ 100 nm ମଧ୍ୟରେ।','100 nm ରୁ ଅଧିକ।','ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର, ଖାଲି ଆଖିରେ ଦେଖି ହୁଏ ନାହିଁ।'], correct: 2, 
                    },
                    { question: "କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣରେ ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ପାରିବାର କ୍ଷମତା ଥାଏ ଏବଂ କଣିକାଗୁଡ଼ିକ ଅସ୍ଥିର ହୋଇ ତଳେ ବସିଯାଆନ୍ତି?", options: ['ଦ୍ରବଣ।','କଲଏଡ୍ ଦ୍ରବଣ।','ନିଲମ୍ବନ।','ଶୁଦ୍ଧ ପଦାର୍ଥ।'], correct: 2, 
                    },
                    { question: "କଲଏଡ୍ ଦ୍ରବଣ କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣ?", options: ['ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ।','ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ ଯାହା ସମଜାତୀୟ ଦେଖାଯାଏ।','ଏକ ସାଧାରଣ ଯୌଗିକ।','ଏକ ମୌଳିକ।'], correct: 1, 
                    },
                    { question: "ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ କେଉଁମାନଙ୍କରେ ଦେଖାଯାଏ?", options: ['କେବଳ ଦ୍ରବଣରେ।','କେବଳ ଶୁଦ୍ଧ ପଦାର୍ଥରେ।','ନିଲମ୍ବନ ଓ କଲଏଡ୍ ଦ୍ରବଣରେ।','କେବଳ ଯୌଗିକରେ।'], correct: 2, 
                    },
                    { question: "କଲଏଡ୍ରେ ଥିବା ଦ୍ରାବ୍ୟ ପରି କଣିକାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ଦ୍ରାବକ।','ଦ୍ରାବ୍ୟ।','ବିଛାଡ଼ିତ ପ୍ରାବସ୍ଥା (Dispersed Phase)।','ବିଛାଡ଼ିତ ମାଧ୍ୟମ (Dispersion Medium)।'], correct: 2, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି କଲଏଡ୍ର ଏକ ଉଦାହରଣ?", options: ['ଚିନି ଦ୍ରବଣ।','ବାଲି ଓ ପାଣି ମିଶ୍ରଣ।','କ୍ଷୀର।','ଲୁଣ ଦ୍ରବଣ।'], correct: 2, 
                    },
                    { question: "ତରଳ ଦ୍ରାବକରୁ କଠିନ ଦ୍ରାବ୍ୟକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ, ଯେପରିକି ନୀଳ/କଳା କାଳିରୁ ରଙ୍ଗ ପାଇବା?", options: ['ପାତନ।','ବାଷ୍ପୀକରଣ।','କେନ୍ଦ୍ରାପସାରଣ।','ସ୍ଫଟିକୀକରଣ।'], correct: 1, 
                    },
                    { question: "କ୍ଷୀରରୁ ସର ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?", options: ['ବାଷ୍ପୀକରଣ।','ଉର୍ଦ୍ଧ୍ୱପାତନ।','କେନ୍ଦ୍ରାପସାରଣ (Centrifugation)।','କ୍ରୋମାଟୋଗ୍ରାଫି।'], correct: 2, 
                    },
                    { question: "ତେଲ ଓ ପାଣିର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ଉପକରଣ ବ୍ୟବହୃତ ହୁଏ?", options: ['ଡିଷ୍ଟିଲେସନ ଫ୍ଲାସ୍କ।','କ୍ରୋମାଟୋଗ୍ରାଫି କାଗଜ।','ପୃଥକୀକରଣ ଫନେଲ୍ (Separating Funnel)。','ଫିଲ୍ଟର ପେପର।'], correct: 2, 
                    },
                    { question: "ଆମୋନିୟମ୍ କ୍ଲୋରାଇଡ୍ (Ammonium chloride) ଓ ଲୁଣର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ଉପଯୁକ୍ତ?", options: ['ପାତନ।','ସ୍ଫଟିକୀକରଣ।','ଉର୍ଦ୍ଧ୍ୱପାତନ (Sublimation)。','ବାଷ୍ପୀକରଣ।'], correct: 2, 
                    },
                    { question: "କ୍ରୋମାଟୋଗ୍ରାଫି ପ୍ରଣାଳୀ ମୁଖ୍ୟତଃ କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣକୁ ପୃଥକ କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ['ପରସ୍ପର ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥ।','ଉର୍ଦ୍ଧ୍ୱପାତିତ ହେଉଥିବା କଠିନ ପଦାର୍ଥ।','ଗୋଟିଏ ଦ୍ରାବକରେ ଘୋଳି ହୋଇଥିବା ବିଭିନ୍ନ ରଙ୍ଗୀନ ଉପାଦାନ।','ଦୁଇ ବା ଅଧିକ ଗ୍ୟାସ୍।'], correct: 2, 
                    },
                    { question: "କାଳିରୁ ରଙ୍ଗ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?", options: ['ବାଷ୍ପୀକରଣ।','କେନ୍ଦ୍ରାପସାରଣ।','କ୍ରୋମାଟୋଗ୍ରାଫି।','ପାତନ।'], correct: 2, 
                    },
                    { question: "ଏସିଟୋନ୍ ଓ ପାଣିର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ, ଯେହେତୁ ସେମାନଙ୍କ ସ୍ଫୁଟନାଙ୍କରେ ଯଥେଷ୍ଟ ପାର୍ଥକ୍ୟ ଥାଏ?", options: ['ଆଂଶିକ ପାତନ।','ପାତନ (Distillation)。','ଉର୍ଦ୍ଧ୍ୱପାତନ।','ସ୍ଫଟିକୀକରଣ।'], correct: 1, 
                    },
                    { question: "ବାୟୁରୁ ଏହାର ବିଭିନ୍ନ ଉପାଦାନ (ଯଥା: ଅମ୍ଳଜାନ, ନାଇଟ୍ରୋଜେନ୍) କିପରି ଅଲଗା କରାଯାଏ?", options: ['ବାଷ୍ପୀକରଣ।','ପୃଥକୀକରଣ ଫନେଲ୍।','ଆଂଶିକ ପାତନ (Fractional Distillation)。','କ୍ରୋମାଟୋଗ୍ରାଫି।'], correct: 2, 
                    },
                    { question: "ଆଂଶିକ ପାତନ କେଉଁ ପରିସ୍ଥିତିରେ ବ୍ୟବହୃତ ହୁଏ?", options: ['ଯେତେବେଳେ ସ୍ଫୁଟନାଙ୍କ ପାର୍ଥକ୍ୟ 25K ରୁ ଅଧିକ ଥାଏ।','ଯେତେବେଳେ ମିଶ୍ରଣର ଉପାଦାନଗୁଡ଼ିକର ସ୍ଫୁଟନାଙ୍କ ପାର୍ଥକ୍ୟ 25K ରୁ କମ୍ ଥାଏ।','ଯେତେବେଳେ ଉପାଦାନଗୁଡ଼ିକ ଅମିଶ୍ରଣୀୟ ହୁଅନ୍ତି।','ଯେତେବେଳେ ଗୋଟିଏ ଉପାଦାନ ଉର୍ଦ୍ଧ୍ୱପାତିତ ହୁଏ।'], correct: 1, 
                    },
                    { question: "ଅଶୁଦ୍ଧ କଠିନରୁ ଶୁଦ୍ଧ ସ୍ଫଟିକ ପାଇବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?", options: ['ପାତନ।','କେନ୍ଦ୍ରାପସାରଣ।','ସ୍ଫଟିକୀକରଣ (Crystallisation)。','ବାଷ୍ପୀକରଣ।'], correct: 2, 
                    },
                    { question: "ସ୍ଫଟିକୀକରଣ ପ୍ରଣାଳୀର ଦୁଇଟି ଲାଭ କ’ଣ?", options: ['ଏହା କେବଳ ତରଳ ପଦାର୍ଥ ପାଇଁ ଉପଯୋଗୀ।','ଏହା ଅଶୁଦ୍ଧ କଠିନ ପଦାର୍ଥରୁ ଅତି ଶୁଦ୍ଧ ସ୍ଫଟିକ ପ୍ରାପ୍ତ କରେ ଏବଂ ଉତ୍ତାପ ପ୍ରତି ସମ୍ବେଦନଶୀଳ ପଦାର୍ଥ ପାଇଁ ଉପଯୋଗୀ।','ଏହା କେବଳ ଗ୍ୟାସୀୟ ପଦାର୍ଥକୁ ଅଲଗା କରେ।','ଏହା ଅତ୍ୟନ୍ତ ଦ୍ରୁତ ପ୍ରକ୍ରିୟା।'], correct: 1, 
                    },
                    { question: "ଭୌତିକ ପରିବର୍ତ୍ତନରେ ପଦାର୍ଥର କେଉଁ ଗୁଣ ବଦଳିଯାଏ?", options: ['ରାସାୟନିକ ସଂରଚନା।','ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ।','ଭୌତିକ ଗୁଣ (ଯଥା: ଆକାର, ରଙ୍ଗ, ଅବସ୍ଥା)।','ଏହା ଏକ ସ୍ଥାୟୀ ପରିବର୍ତ୍ତନ।'], correct: 2, 
                    },
                    { question: "କାଗଜ ଜଳିବା କେଉଁ ପ୍ରକାରର ପରିବର୍ତ୍ତନର ଉଦାହରଣ?", options: ['ଭୌତିକ ପରିବର୍ତ୍ତନ।','ରାସାୟନିକ ପରିବର୍ତ୍ତନ।','ଉର୍ଦ୍ଧ୍ୱପାତନ।','ବାଷ୍ପୀକରଣ।'], correct: 1, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଭୌତିକ ପରିବର୍ତ୍ତନର ଉଦାହରଣ?", options: ['ଲୁହା କଳଙ୍କି ଧରିବା।','ଖାଦ୍ୟ ହଜମ ହେବା।','ବରଫ ତରଳି ପାଣି ହେବା।','କାଠ ପୋଡ଼ି ପାଉଁଶ ହେବା।'], correct: 2, 
                    },
                    { question: "ରାସାୟନିକ ପରିବର୍ତ୍ତନର ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?", options: ['ପଦାର୍ଥର ରାସାୟନିକ ସଂରଚନାରେ ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ।','ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ।','ଏହା ଏକ ଅସ୍ଥାୟୀ ପରିବର୍ତ୍ତନ।','ଏହାକୁ ପୁନର୍ବାର ମୂଳ ଅବସ୍ଥାକୁ ଫେରାଇ ଆଣି ହୁଏ।'], correct: 1, 
                    },
                    { question: "ମୌଳିକର ସଂଜ୍ଞା କ’ଣ?", options: ['ଦୁଇ ବା ଅଧିକ ପଦାର୍ଥର ମିଶ୍ରଣ।','ଦୁଇ ବା ଅଧିକ ମୌଳିକର ରାସାୟନିକ ସଂଯୋଗରୁ ଗଠିତ ପଦାର୍ଥ।','ଏକ ଶୁଦ୍ଧ ପଦାର୍ଥ ଯାହାକୁ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଦ୍ୱାରା ଅଧିକ ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ କରାଯାଇ ପାରିବ ନାହିଁ।','ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ।'], correct: 2, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଧାତୁ ମୌଳିକର ଉଦାହରଣ?", options: ['ଅମ୍ଳଜାନ (Oxygen)。','ଲୁହା (Iron)。','ସଲଫର (Sulphur)。','କାର୍ବନ (Carbon)。'], correct: 1, 
                    },
                    { question: "ଧାତୁର ଏକ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?", options: ['ତାପ ଓ ବିଦ୍ୟୁତର କୁପରିବାହୀ।','ଚକଚକିଆ ନୁହେଁ।','ତାର କିମ୍ବା ଚାଦରରେ ପରିଣତ ହୋଇପାରନ୍ତି (ଡକ୍ଟାଇଲ୍/ମାଲିଏବଲ୍)。','ଭଙ୍ଗୁର।'], correct: 2, 
                    },
                    { question: "ଉପଧାତୁ (Metalloids) କାହାକୁ କୁହାଯାଏ?", options: ['କେବଳ ଧାତୁର ଧର୍ମ ଦେଖାନ୍ତି।','କେବଳ ଅଧାତୁର ଧର୍ମ ଦେଖାନ୍ତି।','ଧାତୁ ଓ ଅଧାତୁ ଉଭୟର ଧର୍ମ ଦେଖାନ୍ତି।','କୌଣସି ଧର୍ମ ଦେଖାନ୍ତି ନାହିଁ।'], correct: 2, 
                    },
                    { question: "ଯୌଗିକ କିପରି ଗଠିତ ହୁଏ?", options: ['ଦୁଇ ବା ଅଧିକ ମୌଳିକ ଯେକୌଣସି ଅନୁପାତରେ ମିଶି।','ଦୁଇ ବା ଅଧିକ ମୌଳିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ରାସାୟନିକ ଭାବରେ ସଂଯୁକ୍ତ ହୋଇ।','କେବଳ ଗୋଟିଏ ପ୍ରକାରର ପରମାଣୁ ଦ୍ୱାରା।','ଫିଲ୍ଟରେସନ ଦ୍ୱାରା।'], correct: 1, 
                    },
                    { question: "ଯୌଗିକର ଗୁଣ ତାହାର ଉପାଦାନ ମୌଳିକର ଗୁଣଠାରୁ କିପରି ହୋଇଥାଏ?", options: ['ସମ୍ପୂର୍ଣ୍ଣ ସମାନ।','ଆଂଶିକ ସମାନ।','ସମ୍ପୂର୍ଣ୍ଣ ଭିନ୍ନ।','ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱାଧୀନ।'], correct: 2, 
                    },
                    { question: "ମୌଳିକକୁ ରାସାୟନିକ ଭାବରେ ବିଭାଜନ କରିହୁଏ କି?", options: ['ହଁ, ସହଜରେ ବିଭାଜିତ ହୋଇପାରିବ।','ନାହିଁ, ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ ହୋଇପାରିବ ନାହିଁ।','କେବଳ ଉତ୍ତାପ ଦ୍ୱାରା।','କେବଳ ଭୌତିକ ପଦ୍ଧତିରେ।'], correct: 1, 
                    },
                    { question: "ଯୌଗିକକୁ ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଦ୍ୱାରା ଏହାର ଉପାଦାନ ମୌଳିକରେ ବିଭାଜିତ କରିହୁଏ କି?", options: ['ନାହିଁ, କେବେ ବି ନୁହେଁ।','ହଁ, ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଦ୍ୱାରା ହୋଇପାରିବ।','କେବଳ ଭୌତିକ ପଦ୍ଧତିରେ।','ଏହା ଅସମ୍ଭବ।'], correct: 1, 
                    },
                    { question: "ଜଳ ($H_2O$) କେଉଁ ପ୍ରକାରର ଶୁଦ୍ଧ ପଦାର୍ଥ?", options: ['ମୌଳିକ।','ମିଶ୍ରଣ।','ଯୌଗିକ।','ନିଲମ୍ବନ।'], correct: 2, 
                    },
                    { question: "ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ କାହିଁକି ଦେଖାଯାଏ?", options: ['କଣିକାଗୁଡ଼ିକ ଅତ୍ୟନ୍ତ ଛୋଟ ଥିବାରୁ।','କଣିକାଗୁଡ଼ିକ ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ଦେଉଥିବାରୁ।','ଆଲୋକ ରଶ୍ମି ସିଧାସଳଖ ଗତି କରୁଥିବାରୁ।','ଦ୍ରାବକରେ କଣିକା ଦ୍ରବୀଭୂତ ହେଉଥିବାରୁ।'], correct: 1, 
                    },
                    { question: "ଘଞ୍ଚ ଜଙ୍ଗଲରେ ଗଛର କାନୋପି (canopy) ମଧ୍ୟ ଦେଇ ଆଲୋକ ଆସିବା ସମୟରେ କେଉଁ ପ୍ରଭାବ ଦେଖାଯାଏ?", options: ['ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା।','ବାଷ୍ପୀକରଣ।','ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ।','ସ୍ଫଟିକୀକରଣ।'], correct: 2, 
                    },
                    { question: "ଆଲୋକର ବିଛାଡ଼ିବା ପ୍ରକ୍ରିୟା ଯାହା କଲଏଡ୍ କଣିକା କିମ୍ବା ସସପେନସନରେ ଥିବା କ୍ଷୁଦ୍ର କଣିକା ଦ୍ୱାରା ଘଟିଥାଏ, ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ପାତନ।','ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ।','ଉର୍ଦ୍ଧ୍ୱପାତନ।','ବ୍ରାଉନିଆନ୍ ଗତି।'], correct: 1, 
                    },
                    { question: "ମୌଳିକ ଓ ଯୌଗିକ ମଧ୍ୟରେ ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ କ’ଣ?", options: ['ମୌଳିକ ଏକ ପ୍ରକାରର ପରମାଣୁରେ ଗଠିତ, କିନ୍ତୁ ଯୌଗିକ ବିଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁରେ ଗଠିତ।','ମୌଳିକକୁ ରାସାୟନିକ ଭାବେ ବିଭାଜିତ କରିହୁଏ, କିନ୍ତୁ ଯୌଗିକକୁ ନୁହେଁ।','ଯୌଗିକର ନିଜସ୍ୱ ଗୁଣ ଥାଏ, କିନ୍ତୁ ମୌଳିକର ନାହିଁ।','ମୌଳିକ ଏକ ଅସ୍ଥାୟୀ ପଦାର୍ଥ, କିନ୍ତୁ ଯୌଗିକ ସ୍ଥାୟୀ।'], correct: 0, 
                    },
                    { question: "ଏକ ଦ୍ରବଣରେ ଆଲୋକ ରଶ୍ମି ବିଛାଡ଼ି ହୁଏ ନାହିଁ କାହିଁକି?", options: ['ଦ୍ରବଣର କଣିକା ବହୁତ ବଡ଼ ଥିବାରୁ।','ଦ୍ରବଣରେ କଣିକା ନଥିବାରୁ।','ଦ୍ରବଣରେ କଣିକାଗୁଡ଼ିକର ଆକାର 1 nm ରୁ କମ୍ ଥିବାରୁ।','ଦ୍ରବଣ ଅସ୍ଥିର ଥିବାରୁ।'], correct: 2, 
                    },
                    { question: "ପୃଥକୀକରଣ ଫନେଲ୍ କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ['ସମଜାତୀୟ ତରଳ।','କଠିନ ଓ ତରଳ ମିଶ୍ରଣ।','ପରସ୍ପର ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥ।','ଗ୍ୟାସ୍ ମିଶ୍ରଣ।'], correct: 2, } 
                ],
                audio: [
                    {
                        title: "ଆମ ଚତୁପାର୍ଶ୍ଵରେ ଥିବା ପଦାର୍ଥ ଶୁଦ୍ଧ କି",
                        description: "ଆମ ଚତୁପାର୍ଶ୍ଵରେ ଥିବା ପଦାର୍ଥ ଶୁଦ୍ଧ କି",
                        src: "./ଆମ ଚତୁପାର୍ଶ୍ଵରେ ଥିବା ପଦାର୍ଥ ଶୁଦ୍ଧ କି_.wav", // Placeholder, update path
                    },
                ],
                video: [
                    {
                        title: "Phase Changes Explained",
                        description: "Visuals of melting, boiling, and other phase transitions",
                        src: "path/to/phase_changes.mp4", // Placeholder, update path
                    },
                ],
            // Add other Class 9 Science topics here
            }
    }
}

    // Ensure subject-specific object exists in quizData
    window.quizData["Science"] = window.quizData["Science"] || {};

    // Assign quiz data for Class 9 Science topics
    window.quizData["Science"]["Matter and Its States"] = [
        { question: "Which state of matter has no definite shape or volume?", options: ["Solid", "Liquid", "Gas", "Plasma"], correct: 2 },
        { question: "The process of a gas directly turning into a solid is called:", options: ["Melting", "Evaporation", "Sublimation", "Deposition"], correct: 3 },
    ];
    window.quizData["Science"]["Atoms and Molecules"] = [ // Updated with all 100 MCQs
        { question: "ରାସାୟନିକ ମିଶ୍ରଣର ମୌଳିକ ଭିତ୍ତି କେଉଁ ନିୟମ ଉପରେ ଆଧାରିତ?", options: ["କେବଳ ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ", "କେବଳ ସ୍ଥିର ଅନୁପାତ ନିୟମ", "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଏବଂ ସ୍ଥିର ଅନୁପାତ ନିୟମ", "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ"], correct: 2 },
        { question: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଅନୁଯାୟୀ, କୌଣସି ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପିଣ୍ଡର କଣ ହୁଏ?", options: ["ସୃଷ୍ଟି ହୁଏ କିମ୍ବା ନଷ୍ଟ ହୁଏ", "କେବଳ ସୃଷ୍ଟି ହୁଏ", "କେବଳ ନଷ୍ଟ ହୁଏ", "ସୃଷ୍ଟି ହୁଏ ନାହିଁ କିମ୍ବା ନଷ୍ଟ ହୁଏ ନାହିଁ"], correct: 3 },
        { question: "ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ ଅନୁଯାୟୀ, ଏକ ବନ୍ଦ ସିଷ୍ଟମରେ ପ୍ରତିକ୍ରିୟାକାରୀମାନଙ୍କର ସମୁଦାୟ ପିଣ୍ଡ କାହା ସହିତ ସମାନ ଥାଏ?", options: ["ପ୍ରତିକ୍ରିୟା ପରେ ବାୟୁମଣ୍ଡଳର ପିଣ୍ଡ ସହିତ", "ଉତ୍ପାଦଗୁଡ଼ିକର ସମୁଦାୟ ପିଣ୍ଡ ସହିତ", "ପାତ୍ରର ପିଣ୍ଡ ସହିତ", "ପ୍ରତିକ୍ରିୟାକାରୀମାନଙ୍କର ଆଣବିକ ସଂଖ୍ୟା ସହିତ"], correct: 1 },
        { question: "ସ୍ଥିର ଅନୁପାତ ନିୟମ ଅନୁଯାୟୀ, ଏକ ରାସାୟନିକ ପଦାର୍ଥରେ ଉପାଦାନ ମୌଳିକଗୁଡ଼ିକ କିପରି ଉପସ୍ଥିତ ଥାଆନ୍ତି?", options: ["ପିଣ୍ଡ ଅନୁସାରେ କୌଣସି ଅନୁପାତରେ", "ପରିମାଣ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ", "ପିଣ୍ଡ ଅନୁସାରେ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ", "ସର୍ବଦା ସମାନ ପିଣ୍ଡରେ"], correct: 2 },
        { question: "ଜଳ (H₂O) ରେ ହାଇଡ୍ରୋଜେନ (H) ଏବଂ ଅମ୍ଳଜାନ (O) ର ପିଣ୍ଡ ଅନୁପାତ ସର୍ବଦା କେତେ ଥାଏ?", options: ["2:1", "1:2", "1:8", "8:1"], correct: 2 },
        { question: "ସ୍ଥିର ଅନୁପାତ ନିୟମକୁ ଅନ୍ୟ କେଉଁ ନାମରେ ଜଣାଯାଏ?", options: ["ପିଣ୍ଡ ସଂରକ୍ଷଣ ନିୟମ", "ଗୁଣିତ ଅନୁପାତ ନିୟମ", "ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତ ନିୟମ (Law of Definite Proportions)", "ଆଭୋଗାଡ୍ରୋ ନିୟମ"], correct: 2 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ କେଉଁ ବର୍ଷରେ ଉପସ୍ଥାପନ କରାଯାଇଥିଲା?", options: ["1766", "1793", "1808", "1961"], correct: 2 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ପାରମାଣବିକ ତତ୍ତ୍ୱ ଅନୁଯାୟୀ, ପଦାର୍ଥ କେଉଁ ଅତି କ୍ଷୁଦ୍ର ଅବିଭାଜ୍ୟ କଣିକାମାନଙ୍କୁ ନେଇ ଗଠିତ?", options: ["ଅଣୁ", "ଆୟନ", "ପରମାଣୁ", "ମୋଲ୍"], correct: 2 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଗୋଟିଏ ନିର୍ଦ୍ଦିଷ୍ଟ ମୌଳିକର ସମସ୍ତ ପରମାଣୁ କିପରି ହୋଇଥାଆନ୍ତି?", options: ["ଭିନ୍ନ ଭିନ୍ନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ", "ସମାନ ପିଣ୍ଡ କିନ୍ତୁ ଭିନ୍ନ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ", "ଭିନ୍ନ ପିଣ୍ଡ କିନ୍ତୁ ସମାନ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ", "ସମାନ ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ ବିଶିଷ୍ଟ"], correct: 3 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକଗୁଡ଼ିକର ପରମାଣୁମାନଙ୍କର ପିଣ୍ଡ ଏବଂ ଗୁଣଧର୍ମ କିପରି ହୋଇଥାଆନ୍ତି?", options: ["ସମାନ", "ଭିନ୍ନ ଭିନ୍ନ", "କେତେକାଂଶରେ ସମାନ", "ପିଣ୍ଡ ସମାନ କିନ୍ତୁ ଗୁଣଧର୍ମ ଭିନ୍ନ"], correct: 1 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁଯାୟୀ, ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ ପରମାଣୁମାନଙ୍କର କଣ ହୁଏ?", options: ["ସୃଷ୍ଟି କିମ୍ବା ବିନାଶ ହୁଏ", "କେବଳ ସୃଷ୍ଟି ହୁଏ", "କେବଳ ବିନାଶ ହୁଏ", "କେବଳ ପୁନର୍ବିନ୍ୟାସିତ ହୁଅନ୍ତି"], correct: 3 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, ଭିନ୍ନ ଭିନ୍ନ ମୌଳିକର ପରମାଣୁମାନେ ଯୌଗିକ ସୃଷ୍ଟି କରିବା ସମୟରେ କେଉଁ ଅନୁପାତରେ ମିଶନ୍ତି?", options: ["ଜଟିଳ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ", "କ୍ଷୁଦ୍ର ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ଅନୁପାତରେ", "ଦଶମିକ ଅନୁପାତରେ", "କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ନୁହେଁ"], correct: 1 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ ଅନୁସାରେ, କୌଣସି ଯୌଗିକରେ ପରମାଣୁଗୁଡ଼ିକର ଆପେକ୍ଷିକ ସଂଖ୍ୟା ଏବଂ ପ୍ରକାର କିପରି ଥାଏ?", options: ["ପରିବର୍ତ୍ତନଶୀଳ", "ଅନିର୍ଦ୍ଦିଷ୍ଟ", "ସ୍ଥିର", "ଉତ୍ସ ଉପରେ ନିର୍ଭରଶୀଳ"], correct: 2 },
        { question: "ପରମାଣୁ ହେଉଛି ଏକ ମୌଳିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଯାହା କେଉଁଥିରେ ଭାଗ ନେଇପାରେ?", options: ["କେବଳ ଭୌତିକ ପରିବର୍ତ୍ତନରେ", "କୌଣସି ପରିବର୍ତ୍ତନରେ ନୁହେଁ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାରେ", "କେବଳ ଆୟନ ଗଠନରେ"], correct: 2 },
        { question: "ଏକ ପରମାଣୁ କେତେ କ୍ଷୁଦ୍ର?", options: ["ସାଧାରଣ ଆଖିରେ ଦେଖିବା ସମ୍ଭବ", "ଅଣୁବୀକ୍ଷଣ ଯନ୍ତ୍ରରେ ଦେଖିବା ସମ୍ଭବ", "ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର, ଦେଖିବା ସମ୍ଭବ ନୁହେଁ", "ବଡ଼ ଅଣୁଠାରୁ ବଡ଼"], correct: 2 },
        { question: "ହାଇଡ୍ରୋଜେନ (Hydrogen) ପରମାଣୁର ବ୍ୟାସ ପ୍ରାୟ କେତେ?", options: ["10⁻⁴ m", "10⁻⁹ m", "10⁻¹⁰ m", "10⁻¹² m"], correct: 2 },
        { question: "ମୌଳିକଗୁଡ଼ିକୁ ସୂଚିତ କରିବା ପାଇଁ କଣ ବ୍ୟବହାର କରାଯାଏ?", options: ["ନାମ", "ସଂଖ୍ୟା", "ପ୍ରତୀକ", "ଚିତ୍ର"], correct: 2 },
        { question: "ମୌଳିକ ନାମ ଏବଂ ପ୍ରତୀକକୁ କେଉଁ ଅନ୍ତର୍ଜାତୀୟ ସଂଘ ଅନୁମୋଦନ କରେ?", options: ["UNESCO", "IUPAC", "WHO", "UNICEF"], correct: 1 },
        { question: "ଯଦି ଏକ ମୌଳିକ ପ୍ରତୀକରେ ଏକରୁ ଅଧିକ ଅକ୍ଷର ଥାଏ, ତେବେ କିପରି ଲେଖାଯାଏ?", options: ["ସମସ୍ତ ଅକ୍ଷର ବଡ଼ ଅକ୍ଷରରେ", "ସମସ୍ତ ଅକ୍ଷର ଛୋଟ ଅକ୍ଷରରେ", "ପ୍ରଥମ ଅକ୍ଷର ବଡ଼ ଏବଂ ଦ୍ୱିତୀୟ ଅକ୍ଷର ଛୋଟ ଅକ୍ଷରରେ", "ପ୍ରଥମ ଅକ୍ଷର ଛୋଟ ଏବଂ ଦ୍ୱିତୀୟ ଅକ୍ଷର ବଡ଼ ଅକ୍ଷରରେ"], correct: 2 },
        { question: "Iron (ଲୁହା) ର ଲାଟିନ୍ ନାମ କଣ, ଯେଉଁଥିରୁ ଏହାର ପ୍ରତୀକ (Fe) ଆସିଛି?", options: ["Argentum", "Natrium", "Ferrum", "Kalium"], correct: 2 },
        { question: "Sodium (ସୋଡିୟମ୍) ର ଲାଟିନ୍ ନାମ କଣ, ଯେଉଁଥିରୁ ଏହାର ପ୍ରତୀକ (Na) ଆସିଛି?", options: ["Argentum", "Natrium", "Ferrum", "Kalium"], correct: 1 },
        { question: "Potassium (ପୋଟାସିୟମ୍) ର ଲାଟିନ୍ ନାମ କଣ, ଯେଉଁଥିରୁ ଏହାର ପ୍ରତୀକ (K) ଆସିଛି?", options: ["Argentum", "Natrium", "Ferrum", "Kalium"], correct: 3 },
        { question: "ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡ ମାପିବା ପାଇଁ ଆରମ୍ଭରେ କେଉଁ ପରମାଣୁର 1/16 ଭାଗକୁ ମାନକ ଭାବରେ ବ୍ୟବହାର କରାଯାଉଥିଲା?", options: ["ହାଇଡ୍ରୋଜେନ", "କାର୍ବନ", "ଅମ୍ଳଜାନ", "ସଲ୍‌ଫର୍"], correct: 2 },
        { question: "ବର୍ତ୍ତମାନ (1961 ପରେ) ପାରମାଣବିକ ପିଣ୍ଡ ମାପିବା ପାଇଁ କେଉଁ ଆଇସୋଟୋପ୍ ର 1/12 ଭାଗକୁ ମାନକ ଭାବରେ ବ୍ୟବହାର କରାଯାଉଛି?", options: ["ଅମ୍ଳଜାନ-16", "କାର୍ବନ-12", "ହାଇଡ୍ରୋଜେନ-1", "ସଲ୍‌ଫର୍-32"], correct: 1 },
        { question: "ପାରମାଣବିକ ପିଣ୍ଡ ଏକକ (atomic mass unit) କୁ କେଉଁ ପ୍ରତୀକ ଦ୍ୱାରା ଦର୍ଶାଯାଏ?", options: ["amu କିମ୍ବା u", "g", "mol", "N₀"], correct: 0 },
        { question: "Carbon-12 (C-12) ର ପାରମାଣବିକ ପିଣ୍ଡ କେତେ?", options: ["1 u", "12 u", "14 u", "16 u"], correct: 1 },
        { question: "ଅଣୁ ହେଉଛି ଦୁଇ କିମ୍ବା ଅଧିକ ପରମାଣୁର ସମୂହ ଯାହା କିପରି ସଂଯୁକ୍ତ ହୋଇଥାଏ?", options: ["ଶାରୀରିକ ଭାବରେ ମିଶି", "ରାସାୟନିକ ଭାବରେ ଦୃଢ଼ ଭାବରେ", "କୌଣସି ସଂଯୋଗରେ ନୁହେଁ", "ଆୟନିକ ବନ୍ଧନ ଦ୍ୱାରା"], correct: 1 },
        { question: "କେଉଁଟିକୁ ଏକ ମୌଳିକ କିମ୍ବା ଯୌଗିକର କ୍ଷୁଦ୍ରତମ କଣିକା ଭାବରେ ବିବେଚନା କରାଯାଏ ଯାହା ସ୍ୱାଧୀନ ଭାବରେ ବିଦ୍ୟମାନ ହୋଇପାରେ?", options: ["ପରମାଣୁ", "ଆୟନ", "ମୋଲ୍", "ଅଣୁ"], correct: 3 },
        { question: "ଏକ ମୌଳିକର ଅଣୁ କେଉଁ ପ୍ରକାରର ପରମାଣୁକୁ ନେଇ ଗଠିତ ହୋଇଥାଏ?", options: ["ଭିନ୍ନ ଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁ", "ସମାନ ପ୍ରକାରର ପରମାଣୁ", "ଆୟନ", "କୌଣସି ପରମାଣୁ ନୁହେଁ"], correct: 1 },
        { question: "ଗୋଟିଏ ଅଣୁରେ ଥିବା ପରମାଣୁ ସଂଖ୍ୟାକୁ କଣ କୁହାଯାଏ?", options: ["ଯୋଜକତା", "ଆଣବିକ ପିଣ୍ଡ", "ପରମାଣୁକତା (Atomicity)", "ମୋଲାର ପିଣ୍ଡ"], correct: 2 },
        { question: "ଅମ୍ଳଜାନ ଅଣୁ (O₂) ର ପରମାଣୁକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 1 },
        { question: "ଓଜୋନ୍ (O₃) ଅଣୁର ପରମାଣୁକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 2 },
        { question: "କେବଳ ଗୋଟିଏ ପରମାଣୁ ଧାରଣ କରୁଥିବା ଅଣୁକୁ କଣ କୁହାଯାଏ?", options: ["ଦ୍ୱି-ପାରମାଣବିକ (Diatomic)", "ବହୁପାରମାଣବିକ (Polyatomic)", "ଏକକ ପାରମାଣବିକ (Monoatomic)", "ତ୍ରି-ପାରମାଣବିକ (Triatomic)"], correct: 2 },
        { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଏକକ ପାରମାଣବିକ ଅଣୁର ଉଦାହରଣ?", options: ["H₂", "O₂", "Ne (Neon)", "S₈"], correct: 2 },
        { question: "ଏକ ଯୌଗିକର ଅଣୁ କେଉଁ ପ୍ରକାରର ପରମାଣୁକୁ ନେଇ ଗଠିତ ହୋଇଥାଏ?", options: ["ସମାନ ପ୍ରକାରର ପରମାଣୁ", "ଭିନ୍ନ ଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ", "କେବଳ ଆୟନ", "କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟତା ନଥାଏ"], correct: 1 },
        { question: "ଜଳ (H₂O)ର ଏକ ଅଣୁରେ କେତୋଟି ହାଇଡ୍ରୋଜେନ ପରମାଣୁ ଏବଂ କେତୋଟି ଅମ୍ଳଜାନ ପରମାଣୁ ଥାଏ?", options: ["1 H, 2 O", "2 H, 1 O", "1 H, 1 O", "2 H, 2 O"], correct: 1 },
        { question: "ଆୟନ କଣ?", options: ["ଏକ ନିରପେକ୍ଷ କଣିକା", "ଏକ ଚାର୍ଜ୍‌ଯୁକ୍ତ କଣିକା", "ଏକ ଅବିଭାଜ୍ୟ କଣିକା", "ଏକ ସ୍ୱାଧୀନ କଣିକା"], correct: 1 },
        { question: "ଯଦି ଏକ ଆୟନ ଉପରେ ଧନ ଚାର୍ଜ ଥାଏ, ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["ଆନାୟନ (Anion)", "କ୍ୟାଟାୟନ (Cation)", "ପଲିଆଟୋମିକ୍ ଆୟନ (Polyatomic ion)", "ଅଣୁ (Molecule)"], correct: 1 },
        { question: "ଯଦି ଏକ ଆୟନ ଉପରେ ଋଣ ଚାର୍ଜ ଥାଏ, ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["ଆନାୟନ (Anion)", "କ୍ୟାଟାୟନ (Cation)", "ପଲିଆଟୋମିକ୍ ଆୟନ (Polyatomic ion)", "ଅଣୁ (Molecule)"], correct: 0 },
        { question: "ପରମାଣୁର ଏକ ଗୋଷ୍ଠୀ ଉପରେ ଚାର୍ଜ ଥିଲେ ତାହାକୁ କଣ କୁହାଯାଏ?", options: ["କ୍ୟାଟାୟନ", "ଆନାୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ", "ଦ୍ୱି-ପାରମାଣବିକ ଅଣୁ"], correct: 2 },
        { question: "Na⁺ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["ଆନାୟନ", "କ୍ୟାଟାୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ", "ମୌଳିକର ଅଣୁ"], correct: 1 },
        { question: "Cl⁻ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["ଆନାୟନ", "କ୍ୟାଟାୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ", "ଯୌଗିକର ଅଣୁ"], correct: 0 },
        { question: "SO₄²⁻ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["କ୍ୟାଟାୟନ", "ଆନାୟନ", "ଏକକ ପାରମାଣବିକ ଆୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ"], correct: 3 },
        { question: "NH₄⁺ କେଉଁ ପ୍ରକାରର ଆୟନର ଉଦାହରଣ?", options: ["କ୍ୟାଟାୟନ", "ଆନାୟନ", "ଏକକ ପାରମାଣବିକ ଆୟନ", "ପଲିଆଟୋମିକ୍ ଆୟନ"], correct: 3 },
        { question: "ଏକ ଯୌଗିକର ରାସାୟନିକ ଫର୍ମୁଲା କଣ ଦର୍ଶାଏ?", options: ["କେବଳ ଯୌଗିକର ରଙ୍ଗ", "ଉପାଦାନ ମୌଳିକ ଏବଂ ପ୍ରତ୍ୟେକ ମୌଳିକର ପରମାଣୁ ସଂଖ୍ୟା", "ଯୌଗିକର ଆଣବିକ ପିଣ୍ଡ", "ଯୌଗିକର ଭୌତିକ ଅବସ୍ଥା"], correct: 1 },
        { question: "ଏକ ମୌଳିକର ଯୋଜକତା (Valency) କଣ?", options: ["ଏହାର ପରମାଣୁ ସଂଖ୍ୟା", "ଏହାର ପାରମାଣବିକ ପିଣ୍ଡ", "ଅନ୍ୟ ମୌଳିକ ସହିତ ମିଶିବାର ତାହାର କ୍ଷମତା", "ଏହାର ଆୟନର ଚାର୍ଜ"], correct: 2 },
        { question: "କିଛି ମୌଳିକ ଏକାଧିକ ଯୋଜକତା ପ୍ରଦର୍ଶନ କରନ୍ତି, ଏହାକୁ କଣ କୁହାଯାଏ?", options: ["ନିର୍ଦ୍ଦିଷ୍ଟ ଯୋଜକତା (Fixed valency)", "ପରିବର୍ତ୍ତନଶୀଳ ଯୋଜକତା (Variable valency)", "ଶୂନ୍ୟ ଯୋଜକତା (Zero valency)", "ଉଚ୍ଚ ଯୋଜକତା (High valency)"], correct: 1 },
        { question: "ରାସାୟନିକ ଫର୍ମୁଲା ଲେଖିବାର ପଦ୍ଧତିରେ ଯୋଜକତାଗୁଡ଼ିକୁ କିପରି ବ୍ୟବହାର କରାଯାଏ?", options: ["ସିଧାସଳଖ ସବ୍‌ସ୍କ୍ରିପ୍ଟ ଭାବରେ ଲେଖାଯାଏ", "କେବଳ ପ୍ରତୀକ ଉପରେ ଲେଖାଯାଏ", "କ୍ରସ୍ ଓଭର୍ (Cross over) କରି ଲେଖାଯାଏ", "ବନ୍ଧନୀ ଭିତରେ ଲେଖାଯାଏ"], correct: 2 },
        { question: "ଯେତେବେଳେ ଏକ ପଲିଆଟୋମିକ୍ ଆୟନ ଫର୍ମୁଲାରେ ଏକରୁ ଅଧିକ ଥାଏ, ତାହାକୁ କିପରି ଲେଖାଯାଏ?", options: ["ସିଧାସଳଖ ଲେଖାଯାଏ", "ବ୍ରାକେଟ୍ ଭିତରେ ରଖି ବାହାରେ ସଂଖ୍ୟା ଲେଖାଯାଏ", "ଆୟନର ନାମ ଲେଖାଯାଏ", "ଫର୍ମୁଲାରେ ଏହାକୁ ଛାଡି ଦିଆଯାଏ"], correct: 1 },
        { question: "NaCl ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Na ଏବଂ Cl ର ଯୋଜକତା କେତେ?", options: ["Na: 1, Cl: 1", "Na: 1, Cl: 2", "Na: 2, Cl: 1", "Na: 2, Cl: 2"], correct: 0 },
        { question: "CH₄ ର ରାସାୟନିକ ଫର୍ମୁଲାରେ C ଏବଂ H ର ଯୋଜକତା କେତେ?", options: ["C: 1, H: 4", "C: 4, H: 1", "C: 2, H: 4", "C: 4, H: 2"], correct: 1 },
        { question: "CaCl₂ ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Ca ଏବଂ Cl ର ଯୋଜକତା କେତେ?", options: ["Ca: 1, Cl: 2", "Ca: 2, Cl: 1", "Ca: 2, Cl: 2", "Ca: 1, Cl: 1"], correct: 1 },
        { question: "ଆଣବିକ ପିଣ୍ଡ (Molecular Mass) କଣ?", options: ["ଗୋଟିଏ ପରମାଣୁର ପିଣ୍ଡ", "ଏକ ଅଣୁରେ ଥିବା ସମସ୍ତ ଉପାଦାନ ପରମାଣୁର ପାରମାଣବିକ ପିଣ୍ଡର ଯୋଗଫଳ", "ଗୋଟିଏ ମୋଲ୍ କଣିକାର ପିଣ୍ଡ", "ପରମାଣୁର ସଂଖ୍ୟା"], correct: 1 },
        { question: "ଆଣବିକ ପିଣ୍ଡ କେଉଁ ଏକକରେ ପ୍ରକାଶ କରାଯାଏ?", options: ["ଗ୍ରାମ୍ (g)", "କିଲୋଗ୍ରାମ୍ (kg)", "ମୋଲ୍ (mol)", "ଆଣବିକ ପିଣ୍ଡ ଏକକ (u)"], correct: 3 },
        { question: "ଜଳ (H₂O) ର ଆଣବିକ ପିଣ୍ଡ କେତେ (H=1u, O=16u)?", options: ["17 u", "18 u", "19 u", "34 u"], correct: 1 },
        { question: "କ୍ୟାଲସିୟମ କାର୍ବୋନେଟ୍ (CaCO₃) ର ଆଣବିକ ପିଣ୍ଡ କେତେ (Ca=40u, C=12u, O=16u)?", options: ["68 u", "100 u", "112 u", "156 u"], correct: 1 },
        { question: "ମୋଲ୍ (Mole) ହେଉଛି କଣ?", options: ["ଏକ ପରମାଣୁର ପିଣ୍ଡ", "ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ସଂଖ୍ୟକ କଣିକା (ପରମାଣୁ, ଅଣୁ, ଆୟନ)", "ଏକ ଅଣୁର ପିଣ୍ଡ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟାର ଦର"], correct: 1 },
        { question: "ଏକ ମୋଲ୍ କଣିକାର ସଂଖ୍ୟାକୁ କଣ କୁହାଯାଏ?", options: ["ଡାଲଟନ୍ ସ୍ଥିରାଙ୍କ", "ଆଭୋଗାଡ୍ରୋ ସ୍ଥିରାଙ୍କ (Avogadro constant)", "ବୋଲ୍ଟଜମାନ ସ୍ଥିରାଙ୍କ", "ମୋଲାର ସଂଖ୍ୟା"], correct: 1 },
        { question: "ଆଭୋଗାଡ୍ରୋ ସ୍ଥିରାଙ୍କର ମୂଲ୍ୟ କେତେ?", options: ["6.022 × 10²²", "6.022 × 10²³", "6.22 × 10²³", "6.022 × 10⁻²³"], correct: 1 },
        { question: "ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟାକୁ କେଉଁ ପ୍ରତୀକ ଦ୍ୱାରା ଦର୍ଶାଯାଏ?", options: ["M", "A", "N₀", "L"], correct: 2 },
        { question: "ଏକ ପଦାର୍ଥର ମୋଲାର ପିଣ୍ଡ (Molar Mass) କଣ?", options: ["ଏହାର ଏକ ଅଣୁର ପିଣ୍ଡ", "ଏହାର ଏକ ପରମାଣୁର ପିଣ୍ଡ", "ଏହାର ଏକ ମୋଲ୍ କଣିକାର ପିଣ୍ଡ", "ଏହାର ଆପେକ୍ଷିକ ପିଣ୍ଡ"], correct: 2 },
        { question: "ମୋଲାର ପିଣ୍ଡ କେଉଁ ଏକକରେ ପ୍ରକାଶ କରାଯାଏ?", options: ["u", "g", "g/mol", "mol"], correct: 2 },
        { question: "ନାଇଟ୍ରୋଜେନ ପରମାଣୁ (N)ର ପାରମାଣବିକ ପିଣ୍ଡ 14 u ହୋଇଥିବା ବେଳେ, ଏହାର ମୋଲାର ପିଣ୍ଡ କେତେ?", options: ["14 u", "14 g", "14 mol", "14 g/mol"], correct: 3 },
        { question: "ଜଳ (H₂O)ର ଆଣବିକ ପିଣ୍ଡ 18 u ହୋଇଥିବା ବେଳେ, ଏହାର ମୋଲାର ପିଣ୍ଡ କେତେ?", options: ["18 u", "18 g", "18 mol", "18 g/mol"], correct: 3 },
        { question: "1 ମୋଲ୍ ହାଇଡ୍ରୋଜେନ ପରମାଣୁ (H) ର ପିଣ୍ଡ କେତେ (H=1u)?", options: ["1 u", "1 g", "2 u", "2 g"], correct: 1 },
        { question: "1 ମୋଲ୍ ନାଇଟ୍ରୋଜେନ ପରମାଣୁ (N) ର ପିଣ୍ଡ କେତେ (N=14u)?", options: ["14 u", "14 g", "28 u", "28 g"], correct: 1 },
        { question: "1 ମୋଲ୍ ଅମ୍ଳଜାନ ପରମାଣୁ (O) ର ପିଣ୍ଡ କେତେ (O=16u)?", options: ["16 u", "16 g", "32 u", "32 g"], correct: 1 },
        { question: "1 ମୋଲ୍ ହାଇଡ୍ରୋଜେନ ଅଣୁ (H₂) ର ପିଣ୍ଡ କେତେ (H=1u)?", options: ["1 u", "1 g", "2 u", "2 g"], correct: 3 },
        { question: "0.5 ମୋଲ୍ ନାଇଟ୍ରୋଜେନ ଗ୍ୟାସ୍ (N₂) ର ପିଣ୍ଡ କେତେ (N=14u)?", options: ["14 g", "28 g", "7 g", "0.5 g"], correct: 0 },
        { question: "100 g CaCO₃ କୁ ଗରମ କଲେ କେତେ g CaO ଉତ୍ପନ୍ନ ହେବ (CaCO₃=100u, CaO=56u, CO₂=44u)?", options: ["100 g", "56 g", "44 g", "156 g"], correct: 1 },
        { question: "କୌଣସି ମୌଳିକ ବା ଯୌଗିକର ଆଣବିକ ପିଣ୍ଡକୁ ସାଂଖ୍ୟିକ ଭାବରେ ଗ୍ରାମରେ ପ୍ରକାଶ କଲେ, ତାହା କଣ ହୁଏ?", options: ["ପାରମାଣବିକ ପିଣ୍ଡ", "ଆଣବିକ ପିଣ୍ଡ ଏକକ", "ମୋଲାର ପିଣ୍ଡ", "ପରମାଣୁକତା"], correct: 2 },
        { question: "ପରମାଣୁ ସହିତ ତୁଳନା କଲେ ଅଣୁର ଆକାର କିପରି ଥାଏ?", options: ["ସମାନ", "ସର୍ବଦା ବଡ଼", "ସର୍ବଦା ଛୋଟ", "ସମାନ କିମ୍ବା ବଡ଼"], correct: 3 },
        { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ପଲିଆଟୋମିକ୍ ଆୟନ ନୁହେଁ?", options: ["SO₄²⁻", "NH₄⁺", "Cl⁻", "CO₃²⁻"], correct: 2 },
        { question: "ଏକ ଦ୍ୱି-ପାରମାଣବିକ ଅଣୁ (Diatomic molecule) ର ଉଦାହରଣ କଣ?", options: ["He", "O₂", "O₃", "P₄"], correct: 1 },
        { question: "ଫସ୍‌ଫରସ୍ (Phosphorus) ଅଣୁ କେତୋଟି ପରମାଣୁକୁ ନେଇ ଗଠିତ?", options: ["1", "2", "4", "8"], correct: 2 },
        { question: "ସଲ୍‌ଫର୍ (Sulphur) ଅଣୁ କେତୋଟି ପରମାଣୁକୁ ନେଇ ଗଠିତ?", options: ["1", "2", "4", "8"], correct: 3 },
        { question: "MgO ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Mg ଓ O ର ଯୋଜକତା କେତେ?", options: ["Mg: 1, O: 1", "Mg: 1, O: 2", "Mg: 2, O: 1", "Mg: 2, O: 2"], correct: 3 },
        { question: "ଆଣବିକ ପିଣ୍ଡ ଏକକ 'u' ର ପୂରା ନାମ କଣ?", options: ["unified mass", "atomic mass unit", "unique mass", "unit mass"], correct: 0 },
        { question: "ରାସାୟନିକ ଫର୍ମୁଲା ଲେଖିବା ସମୟରେ, କେଉଁ ଅଂଶକୁ ପ୍ରଥମେ ଲେଖାଯାଏ?", options: ["ଋଣାତ୍ମକ ଆବିଷ୍ଟ ଅଂଶ", "ଧନାତ୍ମକ ଆବିଷ୍ଟ ଅଂଶ", "ଅଧାତୁ", "ଅମ୍ଳଜାନ"], correct: 1 },
        { question: "କେଉଁ ଯୌଗିକଗୁଡ଼ିକ ପ୍ରାୟତଃ ଆୟନରେ ଗଠିତ ହୋଇଥାନ୍ତି?", options: ["କେବଳ ଅଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ", "କେବଳ ଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ", "ଧାତୁ ଏବଂ ଅଧାତୁକୁ ନେଇ ଗଠିତ ଯୌଗିକ", "ଉଦ୍ଭିଦରୁ ପ୍ରାପ୍ତ ଯୌଗିକ"], correct: 2 },
        { question: "Ca(OH)₂ ରେ OH ବ୍ରାକେଟ୍ ଭିତରେ ରଖିବାର କାରଣ କଣ?", options: ["OH ଗୋଟିଏ ପରମାଣୁ", "OH ଗୋଟିଏ ଯୌଗିକ", "OH ଗୋଟିଏ ପଲିଆଟୋମିକ୍ ଆୟନ ଏବଂ ଏହା ଏକରୁ ଅଧିକ ଥାଏ", "ଏହା କେବଳ ଏକ ଲେଖିବାର ଶୈଳୀ"], correct: 2 },
        { question: "ଆଣବିକ ପିଣ୍ଡ ଏବଂ ମୋଲ୍ ଧାରଣା କେଉଁଥିରେ ଅତ୍ୟନ୍ତ ଉପଯୋଗୀ?", options: ["ଭୌତିକ ପ୍ରକ୍ରିୟା ବୁଝିବାରେ", "ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଗଣନାରେ", "ପଦାର୍ଥର ରଙ୍ଗ ନିର୍ଦ୍ଧାରଣରେ", "ପଦାର୍ଥର ବ୍ୟାସ ମାପିବାରେ"], correct: 1 },
        { question: "ହାଇଡ୍ରୋଜେନ (H) ର ଯୋଜକତାକୁ ପ୍ରାୟତଃ କେତେ ଭାବରେ ଗ୍ରହଣ କରାଯାଏ ଯୋଜକତା ତୁଳନା ପାଇଁ?", options: ["0", "1", "2", "4"], correct: 1 },
        { question: "ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡର ଧାରଣା କାହିଁକି ବ୍ୟବହାର କରାଯାଏ?", options: ["ପରମାଣୁର ରଙ୍ଗ ମାପିବା ପାଇଁ", "ପରମାଣୁର ଆକାର ମାପିବା ପାଇଁ", "ପରମାଣୁର ପିଣ୍ଡ ମାପିବା ଅତ୍ୟନ୍ତ କଷ୍ଟକର ହୋଇଥିବାରୁ", "ଆୟନର ଚାର୍ଜ ମାପିବା ପାଇଁ"], correct: 2 },
        { question: "ଡାଲଟନ୍‌ଙ୍କ ତତ୍ତ୍ୱ କେଉଁ ନିୟମକୁ ବୁଝାଇବାରେ ସାହାଯ୍ୟ କଲା?", options: ["ଗୁଣିତ ଅନୁପାତ ନିୟମ", "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ଓ ସ୍ଥିର ଅନୁପାତ ନିୟମ", "ଚାପ ନିୟମ", "ଆୟତନ ନିୟମ"], correct: 1 },
        { question: "କେଉଁଟି ଏକ ବହୁପାରମାଣବିକ କ୍ୟାଟାୟନର ଉଦାହରଣ?", options: ["OH⁻", "CO₃²⁻", "NH₄⁺", "PO₄³⁻"], correct: 2 },
        { question: "କେଉଁଟି ଏକ ବହୁପାରମାଣବିକ ଆନାୟନର ଉଦାହରଣ?", options: ["Na⁺", "K⁺", "SO₄²⁻", "Mg²⁺"], correct: 2 },
        { question: "ଏକକ ପାରମାଣବିକ ଅଣୁ ସାଧାରଣତଃ କେଉଁ ମୌଳିକଗୁଡ଼ିକର ହୋଇଥାଏ?", options: ["ଧାତୁ", "ଅଧାତୁ", "ନୋବେଲ ଗ୍ୟାସ୍", "ହାଲୋଜେନ"], correct: 2 },
        { question: "କ୍ୟାଟାୟନ କିପରି ଗଠିତ ହୁଏ?", options: ["ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ହରାଇଲେ", "ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ଗ୍ରହଣ କଲେ", "ପରମାଣୁ ପ୍ରୋଟୋନ ହରାଇଲେ", "ପରମାଣୁ ନିଉଟ୍ରନ ହରାଇଲେ"], correct: 0 },
        { question: "ଆନାୟନ କିପରି ଗଠିତ ହୁଏ?", options: ["ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ହରାଇଲେ", "ପରମାଣୁ ଇଲେକ୍ଟ୍ରୋନ ଗ୍ରହଣ କଲେ", "ପରମାଣୁ ପ୍ରୋଟୋନ ହରାଇଲେ", "ପରମାଣୁ ନିଉଟ୍ରନ ହରାଇଲେ"], correct: 1 },
        { question: "Chemical Formula ବା ରାସାୟନିକ ଫର୍ମୁଲା କଣ?", options: ["ମୌଳିକଗୁଡ଼ିକର ନାମ", "ଯୌଗିକରେ ଉପସ୍ଥିତ ମୌଳିକ ଓ ସେମାନଙ୍କ ସଂଖ୍ୟାର ପ୍ରତୀକାତ୍ମକ ପ୍ରତିନିଧିତ୍ୱ", "ପରମାଣୁର ପିଣ୍ଡ", "ଅଣୁର ଆକାର"], correct: 1 },
        { question: "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମକୁ ପରୀକ୍ଷା କରିବା ପାଇଁ କେଉଁ ଉପକରଣ ବ୍ୟବହାର କରାଯାଇପାରେ?", options: ["ବେଞ୍ଚ ଟପ୍ ବାଲାନ୍ସ", "କୋନିକାଲ ଫ୍ଲାସ୍କ ଓ ଇଗ୍ନିସନ ଟ୍ୟୁବ୍", "ମାପିବା ସିଲିଣ୍ଡର", "ବୁରେଟ୍"], correct: 1 },
        { question: "ବସ୍ତୁତ୍ୱ ସଂରକ୍ଷଣ ନିୟମ ପରୀକ୍ଷାରେ Baryum chloride ଦ୍ରବଣ କାହା ସହିତ ମିଶାଯାଇଥିଲା?", options: ["Sodium chloride ଦ୍ରବଣ", "Sodium sulphate ଦ୍ରବଣ", "Potassium nitrate ଦ୍ରବଣ", "Lead nitrate ଦ୍ରବଣ"], correct: 1 },
        { question: "କାର୍ବନ-୧୨ (C-12) ସମସ୍ଥାନିକ (isotope) କେଉଁ ବର୍ଷରେ ଆପେକ୍ଷିକ ପାରମାଣବିକ ପିଣ୍ଡ ପାଇଁ ମାନକ ଭାବରେ ଗ୍ରହଣ କରାଗଲା?", options: ["1945", "1950", "1961", "1975"], correct: 2 },
        { question: "Molar Mass ର ଏକକ କଣ?", options: ["u", "g", "g mol⁻¹", "mol"], correct: 2 },
        { question: "ଆଭୋଗାଡ୍ରୋ ସଂଖ୍ୟା କେଉଁ ବୈଜ୍ଞାନିକଙ୍କ ନାମରେ ନାମିତ?", options: ["ଡାଲଟନ୍", "ଲିଭୋଇଜିଅର", "ପ୍ରାଉଷ୍ଟ", "ଆଭୋଗାଡ୍ରୋ"], correct: 3 },
        { question: "ଆଲୁମିନିୟମ କ୍ଲୋରାଇଡ୍ (AlCl₃) ର ରାସାୟନିକ ଫର୍ମୁଲାରେ Al ର ଯୋଜକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 2 },
        { question: "Sodium sulphate ର ରାସାୟନିକ ଫର୍ମୁଲା କଣ?", options: ["NaSO₄", "Na₂(SO₄)₂", "Na₂SO₄", "Na(SO₄)₂"], correct: 2 },
        { question: "Ammonium carbonate ର ରାସାୟନିକ ଫର୍ମୁଲା କଣ?", options: ["NH₄CO₃", "(NH₄)₂CO₃", "NH₄(CO₃)₂", "(NH₄)₂ (CO₃)₂"], correct: 1 },
        { question: "Fe₂O₃ ରେ Iron (Fe) ର ଯୋଜକତା କେତେ?", options: ["1", "2", "3", "4"], correct: 2 }
    ];
      window.quizData["Science"]["Tissue System"] = [
        {
            question: "ଉଦ୍ଭିଦର ବୃଦ୍ଧି ପାଇଁ ଦାୟୀ ବିଭାଜନକ୍ଷମ କୋଷ ଥିବା ତନ୍ତୁକୁ କ’ଣ କୁହାଯାଏ?",
            options: ["ସ୍ଥାୟୀ ତନ୍ତୁ", "ଜଟିଳ ତନ୍ତୁ", "ସରଳ ତନ୍ତୁ", "ବିଭାଜନକ୍ଷମ ତନ୍ତୁ"],
            correct: 3
        },
        {
            question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଜଟିଳ ସ୍ଥାୟୀ ତନ୍ତୁ?",
            options: ["ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ସ୍କ୍ଲେରେନ୍‌କାଇମା", "ଫ୍ଲୋଏମ୍"],
            correct: 3
        },
        {
            question: "ଶରୀରର ବାହ୍ୟ ପୃଷ୍ଠ ଏବଂ ଆଭ୍ୟନ୍ତରୀଣ ଅଙ୍ଗର ଲାଇନିଂ ଗଠନ କରୁଥିବା ପ୍ରାଣୀ ତନ୍ତୁ କେଉଁଟି?",
            options: ["ସଂଯୋଜକ ତନ୍ତୁ", "ପେଶୀ ତନ୍ତୁ", "ସ୍ନାୟୁ ତନ୍ତୁ", "ଆବରଣୀ ତନ୍ତୁ"],
            correct: 3
        },
        {
            question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ତରଳ ସଂଯୋଜକ ତନ୍ତୁ?",
            options: ["ହାଡ଼", "ତରୁଣାସ୍ଥି", "ଆଡିପୋଜ ଟିସୁ", "ରକ୍ତ"],
            correct: 3
        },
        {
            question: "କେବଳ ହୃତପିଣ୍ଡରେ ମିଳୁଥିବା ବିଶେଷ ପ୍ରକାରର ପେଶୀ ତନ୍ତୁ କେଉଁଟି?",
            options: ["ରେଖାଙ୍କିତ ପେଶୀ", "ଅରେଖାଙ୍କିତ ପେଶୀ", "ହୃତ୍ ପେଶୀ", "ଇଚ୍ଛାଧୀନ ପେଶୀ"],
            correct: 2
        },
        {
            question: "ସ୍ନାୟୁ ତନ୍ତୁର ମୌଳିକ କୋଷ କେଉଁଟି?",
            options: ["ନିଉରୋଗ୍ଲିଆ", "ମାୟୋସାଇଟ", "ଓଷ୍ଟିଓସାଇଟ", "ସ୍ନାୟୁକୋଷ (Neuron)"],
            correct: 3
        },
        {
            question: "ଉଦ୍ଭିଦରେ ଜଳ ଏବଂ ଖଣିଜ ଲବଣର ଉପରମୁହାଁ ସଂବହନ ପାଇଁ କେଉଁ ତନ୍ତୁ ଦାୟୀ?",
            options: ["ଫ୍ଲୋଏମ୍", "ପ୍ୟାରେନ୍‌କାଇମା", "କୋଲେନ୍‌କାଇମା", "ଜାଇଲେମ୍"],
            correct: 3
        },
        {
            question: "ରକ୍ତ ଜମାଟ ବାନ୍ଧିବାରେ ସାହାଯ୍ୟ କରୁଥିବା ରକ୍ତର ଉପାଦାନ କେଉଁଟି?",
            options: ["ଲୋହିତ ରକ୍ତ କଣିକା (RBC)", "ଶ୍ୱେତ ରକ୍ତ କଣିକା (WBC)", "ପ୍ଲାଜ୍ମା", "ପ୍ଲାଟେଲେଟ"],
            correct: 3
        },
        {
            question: "କଣ୍ଡରା (Tendon) କେଉଁ ଦୁଇଟି ଜିନିଷକୁ ଯୋଡିଥାଏ?",
            options: ["ହାଡ଼କୁ ହାଡ଼", "ମାଂସପେଶୀକୁ ମାଂସପେଶୀ", "ମାଂସପେଶୀକୁ ହାଡ଼", "ଚର୍ମକୁ ମାଂସପେଶୀ"],
            correct: 2
        },
        {
            question: "ମାୟେଲିନ ସ୍ତର ସ୍ନାୟୁକୋଷର କେଉଁ ଅଂଶକୁ ଆବୃତ କରିଥାଏ?",
            options: ["କୋଷ ଶରୀର", "ଡେଣ୍ଡ୍ରନ", "ଏକଜନ", "ସାଇନାପ୍ସ"],
            correct: 2
        }
    ];
     window.quizData["Science"]["ପଦାର୍ଥ ଓ ଏହାର ଗୁଣ"] = [
                    { question: "ପଦାର୍ଥର ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?", options: ['ଏହାର ଆକାର ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ।','ଏହାର ମାସ (mass) ଥାଏ ଓ ସେ ସ୍ଥାନ ଅଧିକାର କରେ।','ଏହା କେବଳ ତରଳ ଅବସ୍ଥାରେ ରହିଥାଏ।','ଏହା ଆଲୋକ ବିଛାଡ଼ି ପାରେ।'], correct: 1, 
                    },
                    { question: "ଶୁଦ୍ଧ ପଦାର୍ଥ କେଉଁ ପ୍ରକାରର କଣିକାରେ ଗଠିତ?", options: ['ଅନେକ ପ୍ରକାରର କଣିକା।','ଦୁଇ ପ୍ରକାରର କଣିକା।','ଗୋଟିଏ ପ୍ରକାର କଣିକା।','ଏହା କଣିକାରେ ଗଠିତ ନୁହେଁ।'], correct: 2, 
                    },
                    { question: "ମିଶ୍ରଣର ସଂଜ୍ଞା କ’ଣ?", options: ['କେବଳ ଗୋଟିଏ ଶୁଦ୍ଧ ପଦାର୍ଥ।','ଏକାଧିକ ଶୁଦ୍ଧ ପଦାର୍ଥର ରାସାୟନିକ ସଂଯୋଗ।','ଏକାଧିକ ଶୁଦ୍ଧ ପଦାର୍ଥର ମିଶ୍ରଣ (ଯେଉଁଗୁଡ଼ିକ ରାସାୟନିକ ଭାବେ ସଂଯୁକ୍ତ ହୋଇନଥାନ୍ତି)।','ଏକମାତ୍ର ପ୍ରକାରର ପରମାଣୁ।'], correct: 2, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ସମଜାତୀୟ ମିଶ୍ରଣର ଉଦାହରଣ?", options: ['ବାଲି ଓ ଲୁଣ ମିଶ୍ରଣ।','ତେଲ ଓ ପାଣି ମିଶ୍ରଣ।','ଚିନି ଦ୍ରବଣ।','ଧୂଆଁ।'], correct: 2, 
                    },
                    { question: "ବିସମଜାତୀୟ ମିଶ୍ରଣରେ ଉପାଦାନଗୁଡ଼ିକ କିପରି ଥାଆନ୍ତି?", options: ['ସମାନ ଭାବରେ ମିଶିଥାନ୍ତି।','ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଦ୍ରବୀଭୂତ ହୋଇଥାନ୍ତି।','ଅସମାନ ଭାବରେ ମିଶିଥାନ୍ତି ଓ ଅଲଗା ଭାବରେ ଦେଖି ହୁଏ।','କେବଳ ଗୋଟିଏ ଅବସ୍ଥାରେ ଥାଆନ୍ତି।'], correct: 2, 
                    },
                    { question: "ଦ୍ରବଣର ସଂଜ୍ଞା କ’ଣ?", options: ['ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ।','ଏକାଧିକ କଠିନ ପଦାର୍ଥର ମିଶ୍ରଣ।','ଦୁଇ ବା ଅଧିକ ପଦାର୍ଥର ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ।','ଏକ ଶୁଦ୍ଧ ପଦାର୍ଥ।'], correct: 2, 
                    },
                    { question: "ଦ୍ରାବଣରେ ଯେଉଁ ପଦାର୍ଥ କମ୍ ପରିମାଣରେ ଥାଏ ଓ ଘୋଳି ହୋଇଯାଏ, ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ଦ୍ରାବକ।','ଦ୍ରାବ୍ୟ।','କଲଏଡ୍।','ନିଲମ୍ବନ।'], correct: 1, 
                    },
                    { question: "ଲୁଣ ଦ୍ରବଣରେ 'ପାଣି' କ’ଣ ଅଟେ?", options: ['ଦ୍ରାବ୍ୟ।','ଦ୍ରାବକ।','ମିଶ୍ରଣ।','ଉପଧାତୁ।'], correct: 1, 
                    },
                    { question: "ଏକ ଦ୍ରବଣରେ ଦ୍ରାବ୍ୟ କଣିକାଗୁଡ଼ିକର ଆକାର ସାଧାରଣତଃ କେତେ ଥାଏ?", options: ['100 nm ରୁ ଅଧିକ।','1 nm ରୁ କମ୍।','1 nm ରୁ 100 nm ମଧ୍ୟରେ।','ଏହାର କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ଆକାର ନାହିଁ।'], correct: 1, 
                    },
                    { question: "ଦ୍ରବଣର ଗୋଟିଏ ଗୁଣ ହେଉଛି ଏହା କଣିକାଗୁଡ଼ିକ ତଳେ ବସିଯାଆନ୍ତି ନାହିଁ। ଏହାର ଅର୍ଥ କ’ଣ?", options: ['ଏହା ଅସ୍ଥିର।','ଏହା ଅସନ୍ତୃପ୍ତ।','ଏହା ସ୍ଥିର (stable)。','ଏହା ବିସମଜାତୀୟ।'], correct: 2, 
                    },
                    { question: "ଦ୍ରବଣର ସାନ୍ଦ୍ରତା ଗଣନା କରିବାର ଗୋଟିଏ ସୂତ୍ର କ’ଣ?", options: ['(ଦ୍ରାବକର ଭର/ଦ୍ରାବ୍ୟର ଭର) × 100','(ଦ୍ରବଣର ଭର/ଦ୍ରାବ୍ୟର ଭର) × 100','(ଦ୍ରାବ୍ୟର ଭର/ଦ୍ରବଣର ଭର) × 100','(ଦ୍ରାବ୍ୟର ଭର + ଦ୍ରାବକର ଭର) × 100'], correct: 2, 
                    },
                    { question: "ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ ଯେଉଁ ଦ୍ରବଣରେ ଆଉ ଅଧିକ ଦ୍ରାବ୍ୟ ଘୋଳାଯାଇ ପାରିବ ନାହିଁ, ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ଅସନ୍ତୃପ୍ତ ଦ୍ରବଣ।','ଅତିସନ୍ତୃପ୍ତ ଦ୍ରବଣ।','ସନ୍ତୃପ୍ତ ଦ୍ରବଣ।','କଲଏଡ୍ ଦ୍ରବଣ।'], correct: 2, 
                    },
                    { question: "ନିର୍ଦ୍ଦିଷ୍ଟ ତାପମାତ୍ରାରେ 100 ଗ୍ରାମ ଦ୍ରାବକରେ ଘୋଳି ହେଉଥିବା ଦ୍ରାବ୍ୟର ସର୍ବାଧିକ ପରିମାଣକୁ କ’ଣ କୁହାଯାଏ?", options: ['ସାନ୍ଦ୍ରତା।','ବିଛାଡ଼ିତ ପ୍ରାବସ୍ଥା।','ଦ୍ରାବ୍ୟତା।','ସ୍ଥିରତା।'], correct: 2, 
                    },
                    { question: "ନିଲମ୍ବନର ସଂଜ୍ଞା କ’ଣ?", options: ['ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ ଯେଉଁଥିରେ କଣିକା ସମ୍ପୂର୍ଣ୍ଣ ଦ୍ରବୀଭୂତ।','ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ ଯେଉଁଥିରେ ଦ୍ରାବ୍ୟ କଣିକାଗୁଡ଼ିକ ଦ୍ରାବକରେ ବିଛାଡ଼ି ହୋଇ ରହିଥାନ୍ତି କିନ୍ତୁ ଘୋଳନ୍ତି ନାହିଁ।','ଏକ ଶୁଦ୍ଧ ପଦାର୍ଥ।','ଦୁଇଟି ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥ।'], correct: 1, 
                    },
                    { question: "ନିଲମ୍ବନରେ କଣିକାଗୁଡ଼ିକର ଆକାର ସାଧାରଣତଃ କେତେ ଥାଏ?", options: ['1 nm ରୁ କମ୍।','1 nm ରୁ 100 nm ମଧ୍ୟରେ।','100 nm ରୁ ଅଧିକ।','ଅତ୍ୟନ୍ତ କ୍ଷୁଦ୍ର, ଖାଲି ଆଖିରେ ଦେଖି ହୁଏ ନାହିଁ।'], correct: 2, 
                    },
                    { question: "କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣରେ ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ପାରିବାର କ୍ଷମତା ଥାଏ ଏବଂ କଣିକାଗୁଡ଼ିକ ଅସ୍ଥିର ହୋଇ ତଳେ ବସିଯାଆନ୍ତି?", options: ['ଦ୍ରବଣ।','କଲଏଡ୍ ଦ୍ରବଣ।','ନିଲମ୍ବନ।','ଶୁଦ୍ଧ ପଦାର୍ଥ।'], correct: 2, 
                    },
                    { question: "କଲଏଡ୍ ଦ୍ରବଣ କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣ?", options: ['ଏକ ସମଜାତୀୟ ମିଶ୍ରଣ।','ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ ଯାହା ସମଜାତୀୟ ଦେଖାଯାଏ।','ଏକ ସାଧାରଣ ଯୌଗିକ।','ଏକ ମୌଳିକ।'], correct: 1, 
                    },
                    { question: "ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ କେଉଁମାନଙ୍କରେ ଦେଖାଯାଏ?", options: ['କେବଳ ଦ୍ରବଣରେ।','କେବଳ ଶୁଦ୍ଧ ପଦାର୍ଥରେ।','ନିଲମ୍ବନ ଓ କଲଏଡ୍ ଦ୍ରବଣରେ।','କେବଳ ଯୌଗିକରେ।'], correct: 2, 
                    },
                    { question: "କଲଏଡ୍ରେ ଥିବା ଦ୍ରାବ୍ୟ ପରି କଣିକାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ଦ୍ରାବକ।','ଦ୍ରାବ୍ୟ।','ବିଛାଡ଼ିତ ପ୍ରାବସ୍ଥା (Dispersed Phase)。','ବିଛାଡ଼ିତ ମାଧ୍ୟମ (Dispersion Medium)。'], correct: 2, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି କଲଏଡ୍ର ଏକ ଉଦାହରଣ?", options: ['ଚିନି ଦ୍ରବଣ।','ବାଲି ଓ ପାଣି ମିଶ୍ରଣ।','କ୍ଷୀର।','ଲୁଣ ଦ୍ରବଣ।'], correct: 2, 
                    },
                    { question: "ତରଳ ଦ୍ରାବକରୁ କଠିନ ଦ୍ରାବ୍ୟକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ, ଯେପରିକି ନୀଳ/କଳା କାଳିରୁ ରଙ୍ଗ ପାଇବା?", options: ['ପାତନ।','ବାଷ୍ପୀକରଣ।','କେନ୍ଦ୍ରାପସାରଣ।','ସ୍ଫଟିକୀକରଣ।'], correct: 1, 
                    },
                    { question: "କ୍ଷୀରରୁ ସର ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?", options: ['ବାଷ୍ପୀକରଣ।','ଉର୍ଦ୍ଧ୍ୱପାତନ।','କେନ୍ଦ୍ରାପସାରଣ (Centrifugation)。','କ୍ରୋମାଟୋଗ୍ରାଫି।'], correct: 2, 
                    },
                    { question: "ତେଲ ଓ ପାଣିର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ଉପକରଣ ବ୍ୟବହୃତ ହୁଏ?", options: ['ଡିଷ୍ଟିଲେସନ ଫ୍ଲାସ୍କ।','କ୍ରୋମାଟୋଗ୍ରାଫି କାଗଜ।','ପୃଥକୀକରଣ ଫନେଲ୍ (Separating Funnel)。','ଫିଲ୍ଟର ପେପର।'], correct: 2, 
                    },
                    { question: "ଆମୋନିୟମ୍ କ୍ଲୋରାଇଡ୍ (Ammonium chloride) ଓ ଲୁଣର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ଉପଯୁକ୍ତ?", options: ['ପାତନ।','ସ୍ଫଟିକୀକରଣ।','ଉର୍ଦ୍ଧ୍ୱପାତନ (Sublimation)。','ବାଷ୍ପୀକରଣ।'], correct: 2, 
                    },
                    { question: "କ୍ରୋମାଟୋଗ୍ରାଫି ପ୍ରଣାଳୀ ମୁଖ୍ୟତଃ କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣକୁ ପୃଥକ କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ['ପରସ୍ପର ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥ।','ଉର୍ଦ୍ଧ୍ୱପାତିତ ହେଉଥିବା କଠିନ ପଦାର୍ଥ।','ଗୋଟିଏ ଦ୍ରାବକରେ ଘୋଳି ହୋଇଥିବା ବିଭିନ୍ନ ରଙ୍ଗୀନ ଉପାଦାନ।','ଦୁଇ ବା ଅଧିକ ଗ୍ୟାସ୍।'], correct: 2, 
                    },
                    { question: "କାଳିରୁ ରଙ୍ଗ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?", options: ['ବାଷ୍ପୀକରଣ।','କେନ୍ଦ୍ରାପସାରଣ।','କ୍ରୋମାଟୋଗ୍ରାଫି।','ପାତନ।'], correct: 2, 
                    },
                    { question: "ଏସିଟୋନ୍ ଓ ପାଣିର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ କେଉଁ ପୃଥକୀକରଣ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ, ଯେହେତୁ ସେମାନଙ୍କ ସ୍ଫୁଟନାଙ୍କରେ ଯଥେଷ୍ଟ ପାର୍ଥକ୍ୟ ଥାଏ?", options: ['ଆଂଶିକ ପାତନ।','ପାତନ (Distillation)。','ଉର୍ଦ୍ଧ୍ୱପାତନ।','ସ୍ଫଟିକୀକରଣ।'], correct: 1, 
                    },
                    { question: "ବାୟୁରୁ ଏହାର ବିଭିନ୍ନ ଉପାଦାନ (ଯଥା: ଅମ୍ଳଜାନ, ନାଇଟ୍ରୋଜେନ୍) କିପରି ଅଲଗା କରାଯାଏ?", options: ['ବାଷ୍ପୀକରଣ।','ପୃଥକୀକରଣ ଫନେଲ୍।','ଆଂଶିକ ପାତନ (Fractional Distillation)。','କ୍ରୋମାଟୋଗ୍ରାଫି।'], correct: 2, 
                    },
                    { question: "ଆଂଶିକ ପାତନ କେଉଁ ପରିସ୍ଥିତିରେ ବ୍ୟବହୃତ ହୁଏ?", options: ['ଯେତେବେଳେ ସ୍ଫୁଟନାଙ୍କ ପାର୍ଥକ୍ୟ 25K ରୁ ଅଧିକ ଥାଏ。','ଯେତେବେଳେ ମିଶ୍ରଣର ଉପାଦାନଗୁଡ଼ିକର ସ୍ଫୁଟନାଙ୍କ ପାର୍ଥକ୍ୟ 25K ରୁ କମ୍ ଥାଏ।','ଯେତେବେଳେ ଉପାଦାନଗୁଡ଼ିକ ଅମିଶ୍ରଣୀୟ ହୁଅନ୍ତି।','ଯେତେବେଳେ ଗୋଟିଏ ଉପାଦାନ ଉର୍ଦ୍ଧ୍ୱପାତିତ ହୁଏ।'], correct: 1, 
                    },
                    { question: "ଅଶୁଦ୍ଧ କଠିନରୁ ଶୁଦ୍ଧ ସ୍ଫଟିକ ପାଇବା ପାଇଁ କେଉଁ ପ୍ରଣାଳୀ ବ୍ୟବହୃତ ହୁଏ?", options: ['ପାତନ।','କେନ୍ଦ୍ରାପସାରଣ।','ସ୍ଫଟିକୀକରଣ (Crystallisation)。','ବାଷ୍ପୀକରଣ।'], correct: 2, 
                    },
                    { question: "ସ୍ଫଟିକୀକରଣ ପ୍ରଣାଳୀର ଦୁଇଟି ଲାଭ କ’ଣ?", options: ['ଏହା କେବଳ ତରଳ ପଦାର୍ଥ ପାଇଁ ଉପଯୋଗୀ।','ଏହା ଅଶୁଦ୍ଧ କଠିନ ପଦାର୍ଥରୁ ଅତି ଶୁଦ୍ଧ ସ୍ଫଟିକ ପ୍ରାପ୍ତ କରେ ଏବଂ ଉତ୍ତାପ ପ୍ରତି ସମ୍ବେଦନଶୀଳ ପଦାର୍ଥ ପାଇଁ ଉପଯୋଗୀ।','ଏହା କେବଳ ଗ୍ୟାସୀୟ ପଦାର୍ଥକୁ ଅଲଗା କରେ।','ଏହା ଅତ୍ୟନ୍ତ ଦ୍ରୁତ ପ୍ରକ୍ରିୟା।'], correct: 1, 
                    },
                    { question: "ଭୌତିକ ପରିବର୍ତ୍ତନରେ ପଦାର୍ଥର କେଉଁ ଗୁଣ ବଦଳିଯାଏ?", options: ['ରାସାୟନିକ ସଂରଚନା।','ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ।','ଭୌତିକ ଗୁଣ (ଯଥା: ଆକାର, ରଙ୍ଗ, ଅବସ୍ଥା)。','ଏହା ଏକ ସ୍ଥାୟୀ ପରିବର୍ତ୍ତନ।'], correct: 2, 
                    },
                    { question: "କାଗଜ ଜଳିବା କେଉଁ ପ୍ରକାରର ପରିବର୍ତ୍ତନର ଉଦାହରଣ?", options: ['ଭୌତିକ ପରିବର୍ତ୍ତନ।','ରାସାୟନିକ ପରିବର୍ତ୍ତନ।','ଉର୍ଦ୍ଧ୍ୱପାତନ।','ବାଷ୍ପୀକରଣ।'], correct: 1, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଏକ ଭୌତିକ ପରିବର୍ତ୍ତନର ଉଦାହରଣ?", options: ['ଲୁହା କଳଙ୍କି ଧରିବା।','ଖାଦ୍ୟ ହଜମ ହେବା।','ବରଫ ତରଳି ପାଣି ହେବା।','କାଠ ପୋଡ଼ି ପାଉଁଶ ହେବା।'], correct: 2, 
                    },
                    { question: "ରାସାୟନିକ ପରିବର୍ତ୍ତନର ମୁଖ୍ୟ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?", options: ['ପଦାର୍ଥର ରାସାୟନିକ ସଂରଚନାରେ ପରିବର୍ତ୍ତନ ହୁଏ ନାହିଁ।','ନୂଆ ପଦାର୍ଥ ସୃଷ୍ଟି ହୁଏ।','ଏହା ଏକ ଅସ୍ଥାୟୀ ପରିବର୍ତ୍ତନ।','ଏହାକୁ ପୁନର୍ବାର ମୂଳ ଅବସ୍ଥାକୁ ଫେରାଇ ଆଣି ହୁଏ।'], correct: 1, 
                    },
                    { question: "ମୌଳିକର ସଂଜ୍ଞା କ’ଣ?", options: ['ଦୁଇ ବା ଅଧିକ ପଦାର୍ଥର ମିଶ୍ରଣ।','ଦୁଇ ବା ଅଧିକ ମୌଳିକର ରାସାୟନିକ ସଂଯୋଗରୁ ଗଠିତ ପଦାର୍ଥ।','ଏକ ଶୁଦ୍ଧ ପଦାର୍ଥ ଯାହାକୁ ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା ଦ୍ୱାରା ଅଧିକ ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ କରାଯାଇ ପାରିବ ନାହିଁ।','ଏକ ବିସମଜାତୀୟ ମିଶ୍ରଣ।'], correct: 2, 
                    },
                    { question: "ନିମ୍ନଲିଖିତ ମଧ୍ୟରୁ କେଉଁଟି ଧାତୁ ମୌଳିକର ଉଦାହରଣ?", options: ['ଅମ୍ଳଜାନ (Oxygen)。','ଲୁହା (Iron)。','ସଲଫର (Sulphur)。','କାର୍ବନ (Carbon)。'], correct: 1, 
                    },
                    { question: "ଧାତୁର ଏକ ବୈଶିଷ୍ଟ୍ୟ କ’ଣ?", options: ['ତାପ ଓ ବିଦ୍ୟୁତର କୁପରିବାହୀ।','ଚକଚକିଆ ନୁହେଁ।','ତାର କିମ୍ବା ଚାଦରରେ ପରିଣତ ହୋଇପାରନ୍ତି (ଡକ୍ଟାଇଲ୍/ମାଲିଏବଲ୍)。','ଭଙ୍ଗୁର।'], correct: 2, 
                    },
                    { question: "ଉପଧାତୁ (Metalloids) କାହାକୁ କୁହାଯାଏ?", options: ['କେବଳ ଧାତୁର ଧର୍ମ ଦେଖାନ୍ତି।','କେବଳ ଅଧାତୁର ଧର୍ମ ଦେଖାନ୍ତି।','ଧାତୁ ଓ ଅଧାତୁ ଉଭୟର ଧର୍ମ ଦେଖାନ୍ତି।','କୌଣସି ଧର୍ମ ଦେଖାନ୍ତି ନାହିଁ।'], correct: 2, 
                    },
                    { question: "ଯୌଗିକ କିପରି ଗଠିତ ହୁଏ?", options: ['ଦୁଇ ବା ଅଧିକ ମୌଳିକ ଯେକୌଣସି ଅନୁପାତରେ ମିଶି।','ଦୁଇ ବା ଅଧିକ ମୌଳିକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅନୁପାତରେ ରାସାୟନିକ ଭାବରେ ସଂଯୁକ୍ତ ହୋଇ।','କେବଳ ଗୋଟିଏ ପ୍ରକାରର ପରମାଣୁ ଦ୍ୱାରା।','ଫିଲ୍ଟରେସନ ଦ୍ୱାରା।'], correct: 1, 
                    },
                    { question: "ଯୌଗିକର ଗୁଣ ତାହାର ଉପାଦାନ ମୌଳିକର ଗୁଣଠାରୁ କିପରି ହୋଇଥାଏ?", options: ['ସମ୍ପୂର୍ଣ୍ଣ ସମାନ।','ଆଂଶିକ ସମାନ।','ସମ୍ପୂର୍ଣ୍ଣ ଭିନ୍ନ।','ସମ୍ପୂର୍ଣ୍ଣ ସ୍ୱାଧୀନ।'], correct: 2, 
                    },
                    { question: "ମୌଳିକକୁ ରାସାୟନିକ ଭାବରେ ବିଭାଜନ କରିହୁଏ କି?", options: ['ହଁ, ସହଜରେ ବିଭାଜିତ ହୋଇପାରିବ।','ନାହିଁ, ସରଳ ପଦାର୍ଥରେ ବିଭାଜିତ ହୋଇପାରିବ ନାହିଁ।','କେବଳ ଉତ୍ତାପ ଦ୍ୱାରା।','କେବଳ ଭୌତିକ ପଦ୍ଧତିରେ।'], correct: 1, 
                    },
                    { question: "ଯୌଗିକକୁ ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଦ୍ୱାରା ଏହାର ଉପାଦାନ ମୌଳିକରେ ବିଭାଜିତ କରିହୁଏ କି?", options: ['ନାହିଁ, କେବେ ବି ନୁହେଁ।','ହଁ, ରାସାୟନିକ ପ୍ରକ୍ରିୟା ଦ୍ୱାରା ହୋଇପାରିବ।','କେବଳ ଭୌତିକ ପଦ୍ଧତିରେ।','ଏହା ଅସମ୍ଭବ।'], correct: 1, 
                    },
                    { question: "ଜଳ ($H_2O$) କେଉଁ ପ୍ରକାରର ଶୁଦ୍ଧ ପଦାର୍ଥ?", options: ['ମୌଳିକ।','ମିଶ୍ରଣ।','ଯୌଗିକ।','ନିଲମ୍ବନ।'], correct: 2, 
                    },
                    { question: "ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ କାହିଁକି ଦେଖାଯାଏ?", options: ['କଣିକାଗୁଡ଼ିକ ଅତ୍ୟନ୍ତ ଛୋଟ ଥିବାରୁ।','କଣିକାଗୁଡ଼ିକ ଆଲୋକ ରଶ୍ମିକୁ ବିଛାଡ଼ି ଦେଉଥିବାରୁ।','ଆଲୋକ ରଶ୍ମି ସିଧାସଳଖ ଗତି କରୁଥିବାରୁ।','ଦ୍ରାବକରେ କଣିକା ଦ୍ରବୀଭୂତ ହେଉଥିବାରୁ।'], correct: 1, 
                    },
                    { question: "ଘଞ୍ଚ ଜଙ୍ଗଲରେ ଗଛର କାନୋପି (canopy) ମଧ୍ୟ ଦେଇ ଆଲୋକ ଆସିବା ସମୟରେ କେଉଁ ପ୍ରଭାବ ଦେଖାଯାଏ?", options: ['ରାସାୟନିକ ପ୍ରତିକ୍ରିୟା।','ବାଷ୍ପୀକରଣ।','ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ।','ସ୍ଫଟିକୀକରଣ।'], correct: 2, 
                    },
                    { question: "ଆଲୋକର ବିଛାଡ଼ିବା ପ୍ରକ୍ରିୟା ଯାହା କଲଏଡ୍ କଣିକା କିମ୍ବା ସସପେନସନରେ ଥିବା କ୍ଷୁଦ୍ର କଣିକା ଦ୍ୱାରା ଘଟିଥାଏ, ତାହାକୁ କ’ଣ କୁହାଯାଏ?", options: ['ପାତନ।','ଟିଣ୍ଡାଲ୍ ପ୍ରଭାବ।','ଉର୍ଦ୍ଧ୍ୱପାତନ।','ବ୍ରାଉନିଆନ୍ ଗତି।'], correct: 1, 
                    },
                    { question: "ମୌଳିକ ଓ ଯୌଗିକ ମଧ୍ୟରେ ମୁଖ୍ୟ ପାର୍ଥକ୍ୟ କ’ଣ?", options: ['ମୌଳିକ ଏକ ପ୍ରକାରର ପରମାଣୁରେ ଗଠିତ, କିନ୍ତୁ ଯୌଗିକ ବିଭିନ୍ନ ପ୍ରକାରର ପରମାଣୁରେ ଗଠିତ।','ମୌଳିକକୁ ରାସାୟନିକ ଭାବେ ବିଭାଜିତ କରିହୁଏ, କିନ୍ତୁ ଯୌଗିକକୁ ନୁହେଁ।','ଯୌଗିକର ନିଜସ୍ୱ ଗୁଣ ଥାଏ, କିନ୍ତୁ ମୌଳିକର ନାହିଁ।','ମୌଳିକ ଏକ ଅସ୍ଥାୟୀ ପଦାର୍ଥ, କିନ୍ତୁ ଯୌଗିକ ସ୍ଥାୟୀ।'], correct: 0, 
                    },
                    { question: "ଏକ ଦ୍ରବଣରେ ଆଲୋକ ରଶ୍ମି ବିଛାଡ଼ି ହୁଏ ନାହିଁ କାହିଁକି?", options: ['ଦ୍ରବଣର କଣିକା ବହୁତ ବଡ଼ ଥିବାରୁ।','ଦ୍ରବଣରେ କଣିକା ନଥିବାରୁ।','ଦ୍ରବଣରେ କଣିକାଗୁଡ଼ିକର ଆକାର 1 nm ରୁ କମ୍ ଥିବାରୁ।','ଦ୍ରବଣ ଅସ୍ଥିର ଥିବାରୁ।'], correct: 2, 
                    },
                    { question: "ପୃଥକୀକରଣ ଫନେଲ୍ କେଉଁ ପ୍ରକାରର ମିଶ୍ରଣକୁ ଅଲଗା କରିବା ପାଇଁ ବ୍ୟବହୃତ ହୁଏ?", options: ['ସମଜାତୀୟ ତରଳ।','କଠିନ ଓ ତରଳ ମିଶ୍ରଣ।','ପରସ୍ପର ଅମିଶ୍ରଣୀୟ ତରଳ ପଦାର୍ଥ।','ଗ୍ୟାସ୍ ମିଶ୍ରଣ।'], correct: 2, } 
    ]
                

    // Add quiz data for other Class 9 Science topics here
})();
