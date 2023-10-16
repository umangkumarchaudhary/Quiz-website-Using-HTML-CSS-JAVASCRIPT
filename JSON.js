//JSON array containing all questions
let questions = [
    {
      question: "What is the capital of France?",
      answers: ["Rome", "Paris", "Madrid", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the highest mountain in the world?",
      answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "Who is the current President of the United States?",
      answers: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
      correctAnswer: "Joe Biden",
    },
    {
      question: "Which of the following is not a type of bird?",
      answers: ["Pigeon", "Sparrow", "Eagle", "Whale"],
      correctAnswer: "Whale",
    },
    {
      question: "Which of the following is not a type of fish?",
      answers: ["Salmon", "Tuna", "Trout", "Penguin"],
      correctAnswer: "Penguin",
    },
    {
      question: "What is the currency of Japan?",
      answers: ["Yen", "Dollar", "Euro", "Pound"],
      correctAnswer: "Yen",
    },
    {
      question: "Which of the following is not a type of reptile?",
      answers: ["Lizard", "Turtle", "Crocodile", "Penguin"],
      correctAnswer: "Penguin",
    },
    {
      question: "What is the capital of Australia?",
      answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
      correctAnswer: "Canberra",
    },
    {
      question: "Who invented the telephone?",
      answers: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      correctAnswer: "Alexander Graham Bell",
    },
    {
      question: "Which of the following is not a type of mammal?",
      answers: ["Dog", "Cat", "Horse", "Fish"],
      correctAnswer: "Fish",
    },
    {
      question: "What is the square root of 289?",
      answers: ["14", "17", "19", "13"],
      correctAnswer: "17",
    },
    {
      question:
        "Which of the following elements is not in the same group as the others?",
      answers: ["Sodium", "Potassium", "Chlorine", "Helium"],
      correctAnswer: "Helium",
    },
    {
      question: "Which of the following is not a type of triangle?",
      answers: ["Equilateral", "Isosceles", "Scalene", "Rectangular"],
      correctAnswer: "Rectangular",
    },
    {
      question: "In what year was the Declaration of Independence signed?",
      answers: ["1776", "1787", "1789", "1793"],
      correctAnswer: "1776",
    },
    {
      question: "Which of the following is not a planet in our solar system?",
      answers: ["Earth", "Mars", "Pluto", "Jupiter"],
      correctAnswer: "Pluto",
    },
    {
      question: "What is the capital of Canada?",
      answers: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
      correctAnswer: "Ottawa",
    },
    {
      question: "Which of the following is not a noble gas?",
      answers: ["Helium", "Neon", "Argon", "Krypton"],
      correctAnswer: "Krypton",
    },
    {
      question: "What is the capital of Brazil?",
      answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
      correctAnswer: "Brasília",
    },
    {
      question: "What is the capital of Italy?",
      answers: ["Rome", "Milan", "Naples", "Turin"],
      correctAnswer: "Rome",
    },
    {
      question: "Which of the following is not a type of vertebrate?",
      answers: ["Fish", "Amphibian", "Reptile", "Insect"],
      correctAnswer: "Insect",
    },
  ];


  //JSON array containing all questions
let medium_questions = [
  {
    question: "What is the highest mountain in the world?",
    answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
  {
    question: "Who is the current President of the United States?",
    answers: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
    correctAnswer: "Joe Biden",
  },
  {
    question: "Which of the following is not a type of bird?",
    answers: ["Pigeon", "Sparrow", "Eagle", "Whale"],
    correctAnswer: "Whale",
  },
  {
    question: "Which of the following is not a type of fish?",
    answers: ["Salmon", "Tuna", "Trout", "Penguin"],
    correctAnswer: "Penguin",
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yen", "Dollar", "Euro", "Pound"],
    correctAnswer: "Yen",
  },
  {
    question: "Which of the following is not a type of reptile?",
    answers: ["Lizard", "Turtle", "Crocodile", "Penguin"],
    correctAnswer: "Penguin",
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question: "Who invented the telephone?",
    answers: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "Which of the following is not a type of mammal?",
    answers: ["Dog", "Cat", "Horse", "Fish"],
    correctAnswer: "Fish",
  },
  {
    question: "What is the square root of 289?",
    answers: ["14", "17", "19", "13"],
    correctAnswer: "17",
  },
  {
    question:
      "Which of the following elements is not in the same group as the others?",
    answers: ["Sodium", "Potassium", "Chlorine", "Helium"],
    correctAnswer: "Helium",
  },
  {
    question: "Which of the following is not a type of triangle?",
    answers: ["Equilateral", "Isosceles", "Scalene", "Rectangular"],
    correctAnswer: "Rectangular",
  },
  {
    question: "In what year was the Declaration of Independence signed?",
    answers: ["1776", "1787", "1789", "1793"],
    correctAnswer: "1776",
  },
  {
    question: "Which of the following is not a planet in our solar system?",
    answers: ["Earth", "Mars", "Pluto", "Jupiter"],
    correctAnswer: "Pluto",
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Which of the following is not a noble gas?",
    answers: ["Helium", "Neon", "Argon", "Krypton"],
    correctAnswer: "Krypton",
  },
  {
    question: "What is the capital of Brazil?",
    answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
    correctAnswer: "Brasília",
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Rome", "Milan", "Naples", "Turin"],
    correctAnswer: "Rome",
  },
  {
    question: "Which of the following is not a type of vertebrate?",
    answers: ["Fish", "Amphibian", "Reptile", "Insect"],
    correctAnswer: "Insect",
  },
];

//JSON array containing all questions
let hard_questions = [
  {
    question: "Who is the current President of the United States?",
    answers: ["Joe Biden", "Donald Trump", "Barack Obama", "George W. Bush"],
    correctAnswer: "Joe Biden",
  },
  {
    question: "Which of the following is not a type of bird?",
    answers: ["Pigeon", "Sparrow", "Eagle", "Whale"],
    correctAnswer: "Whale",
  },
  {
    question: "Which of the following is not a type of fish?",
    answers: ["Salmon", "Tuna", "Trout", "Penguin"],
    correctAnswer: "Penguin",
  },
  {
    question: "What is the currency of Japan?",
    answers: ["Yen", "Dollar", "Euro", "Pound"],
    correctAnswer: "Yen",
  },
  {
    question: "Which of the following is not a type of reptile?",
    answers: ["Lizard", "Turtle", "Crocodile", "Penguin"],
    correctAnswer: "Penguin",
  },
  {
    question: "What is the capital of Australia?",
    answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    correctAnswer: "Canberra",
  },
  {
    question: "Who invented the telephone?",
    answers: [
      "Thomas Edison",
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Guglielmo Marconi",
    ],
    correctAnswer: "Alexander Graham Bell",
  },
  {
    question: "Which of the following is not a type of mammal?",
    answers: ["Dog", "Cat", "Horse", "Fish"],
    correctAnswer: "Fish",
  },
  {
    question: "What is the square root of 289?",
    answers: ["14", "17", "19", "13"],
    correctAnswer: "17",
  },
  {
    question:
      "Which of the following elements is not in the same group as the others?",
    answers: ["Sodium", "Potassium", "Chlorine", "Helium"],
    correctAnswer: "Helium",
  },
  {
    question: "Which of the following is not a type of triangle?",
    answers: ["Equilateral", "Isosceles", "Scalene", "Rectangular"],
    correctAnswer: "Rectangular",
  },
  {
    question: "In what year was the Declaration of Independence signed?",
    answers: ["1776", "1787", "1789", "1793"],
    correctAnswer: "1776",
  },
  {
    question: "Which of the following is not a planet in our solar system?",
    answers: ["Earth", "Mars", "Pluto", "Jupiter"],
    correctAnswer: "Pluto",
  },
  {
    question: "What is the capital of Canada?",
    answers: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
    correctAnswer: "Ottawa",
  },
  {
    question: "Which of the following is not a noble gas?",
    answers: ["Helium", "Neon", "Argon", "Krypton"],
    correctAnswer: "Krypton",
  },
  {
    question: "What is the capital of Brazil?",
    answers: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
    correctAnswer: "Brasília",
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Rome", "Milan", "Naples", "Turin"],
    correctAnswer: "Rome",
  },
  {
    question: "Which of the following is not a type of vertebrate?",
    answers: ["Fish", "Amphibian", "Reptile", "Insect"],
    correctAnswer: "Insect",
  },
];