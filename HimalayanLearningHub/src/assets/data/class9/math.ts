export const math = {
  topics: {
    'Number Systems': {
      notes: [
        {
          title: 'Introduction to Number Systems',
          content:
            'Real numbers include rational and irrational numbers. Rational numbers can be expressed as fractions, while irrational numbers cannot be expressed as simple fractions. Examples of irrational numbers include π, √2, and e.',
        },
        {
          title: 'Properties of Real Numbers',
          content:
            'Real numbers have properties like commutativity, associativity, and distributivity under addition and multiplication. They can be represented on a number line.',
        },
      ],
      shortQuestions: [
        {
          question: 'What is a rational number?',
          answer:
            'A rational number is any number that can be expressed as the quotient or fraction p/q of two integers, where q ≠ 0.',
        },
        {
          question: 'Give an example of an irrational number.',
          answer: '√2, π, e are examples of irrational numbers.',
        },
      ],
      mediumQuestions: [
        { question: "Use Euclid's algorithm to find the HCF of 135 and 225." },
        {
          question:
            'Explain the difference between rational and irrational numbers with examples.',
        },
        { question: 'How can you locate √5 on a number line?' },
      ],
      longQuestions: [
        { question: 'Prove that √2 is an irrational number.' },
        {
          question:
            'Discuss the properties of real numbers under addition and multiplication.',
        },
      ],
      multipleChoiceQuestions: [
        {
          question: 'Which of the following is an irrational number?',
          options: ['2/3', '0.5', '√9', '√7'],
          correct: 3,
          explanation:
            '√7 cannot be expressed as a simple fraction, unlike 2/3, 0.5 (1/2), and √9 (3).',
        },
        {
          question: 'The decimal expansion of a rational number is always:',
          options: [
            'Terminating',
            'Non-terminating recurring',
            'Non-terminating non-recurring',
            'Either terminating or non-terminating recurring',
          ],
          correct: 3,
          explanation:
            'Rational numbers have decimal expansions that either terminate or are non-terminating and repeating.',
        },
      ],
      audio: [
        {
          title: 'Number Systems Explained',
          description:
            'Comprehensive audio lesson on rational and irrational numbers',
          src: './heredity.wav', // Placeholder, update path if needed
        },
      ],
      video: [
        {
          title: 'Visualizing Irrational Numbers',
          description:
            'Visual explanation of representing irrational numbers on a number line',
          src: 'path/to/irrational_video.mp4', // Placeholder, update path
        },
      ],
      quizData: [
        {
          question: 'Which of the following is a rational number?',
          options: ['π', '√3', '0.333...', '√2'],
          correct: 2,
        },
        {
          question: 'The decimal representation of an irrational number is:',
          options: [
            'Terminating',
            'Non-terminating recurring',
            'Non-terminating non-recurring',
            'Terminating and recurring',
          ],
          correct: 2,
        },
      ],
    },
    Polynomials: {
      notes: [
        {
          title: 'Introduction to Polynomials',
          content:
            'A polynomial is an expression consisting of variables and coefficients. The degree of a polynomial is the highest power of the variable. Linear polynomials have degree 1, quadratic polynomials have degree 2, and cubic polynomials have degree 3.',
        },
        {
          title: 'Zeros of a Polynomial',
          content:
            "A real number 'a' is a zero of a polynomial p(x) if p(a) = 0. A polynomial of degree 'n' can have at most 'n' zeros.",
        },
      ],
      shortQuestions: [
        {
          question: 'Define polynomial.',
          answer:
            'A polynomial is an expression consisting of variables and coefficients, involving operations of addition, subtraction, multiplication, and non-negative integer exponents.',
        },
        {
          question: 'What is the degree of a linear polynomial?',
          answer: 'The degree of a linear polynomial is 1.',
        },
      ],
      mediumQuestions: [
        { question: 'Find the zeros of the polynomial P(x) = x² - 2x - 8.' },
        { question: 'State the Remainder Theorem.' },
      ],
      longQuestions: [
        {
          question:
            'Explain the Factor Theorem and its application with an example.',
        },
        { question: 'Divide 3x⁴ - 4x³ - 3x - 1 by x - 1 using long division.' },
      ],
      multipleChoiceQuestions: [
        {
          question: 'The degree of the polynomial 5x³ + 4x² + 7x is:',
          options: ['1', '2', '3', '4'],
          correct: 2,
          explanation:
            'The highest power of the variable x in the polynomial is 3, so its degree is 3.',
        },
        {
          question: 'If P(x) = x + 3, then P(-3) is:',
          options: ['0', '1', '3', '-3'],
          correct: 0,
          explanation:
            'P(-3) = -3 + 3 = 0. Therefore, -3 is a zero of the polynomial.',
        },
      ],
      audio: [
        {
          title: 'Polynomial Basics',
          description: 'Introduction to polynomials and their properties',
          src: 'path/to/polynomial_basics.mp3', // Placeholder, update path
        },
      ],
      video: [
        {
          title: 'Factor Theorem Explained',
          description: 'Step-by-step guide to applying the Factor Theorem',
          src: 'path/to/factor_theorem.mp4', // Placeholder, update path
        },
      ],
      quizData: [
        {
          question: 'What is the degree of the polynomial 4x² + 2x - 1?',
          options: ['1', '2', '3', '0'],
          correct: 1,
        },
        {
          question: 'If P(x) = x - 5, what is the zero of the polynomial?',
          options: ['-5', '5', '0', '1'],
          correct: 1,
        },
      ],
    },
  },
};
