// script.js

const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperTool Markup Language", "HyperText Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      answer: 1,
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "None of the above"],
      answer: 0,
    },
    {
      question: "What does JS stand for?",
      options: ["JavaScript", "JavaSource", "JustScript", "None of the above"],
      answer: 0,
    },
    {
      question: "What is the capital of India?",
      options: ["Kolkata", "Mumbai", "New Delhi", "Bangalore"],
      answer: 2,
    },
    {
      question: "What is (2+2)*2/8?",
      options: ["0", "8", "16", "1"],
      answer: 3,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const startTestButton = document.getElementById("startTest");
  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const answersElement = document.getElementById("answers");
  const nextButton = document.getElementById("nextButton");
  const resultContainer = document.getElementById("resultContainer");
  const scoreElement = document.getElementById("score");
  const restartTestButton = document.getElementById("restartTest");
  
  startTestButton.addEventListener("click", () => {
    startTestButton.style.display = "none";
    quizContainer.classList.remove("hidden");
    showQuestion();
  });
  
  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) {
      alert("Please select an answer!");
      return;
    }
  
    const answerIndex = parseInt(selectedOption.value);
    if (answerIndex === questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  restartTestButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
  });
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    answersElement.innerHTML = "";
    question.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<label><input type="radio" name="answer" value="${index}"> ${option}</label>`;
      answersElement.appendChild(li);
    });
  }
  
  function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = score;
  }
  