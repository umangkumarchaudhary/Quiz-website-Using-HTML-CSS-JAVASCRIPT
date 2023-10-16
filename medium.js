/*
helper functions
*/
//get element
function getElement(id) {
    return document.getElementById(id);
  }
  
  //script variables
  let currentQuestionNumber = getElement("current-question");
  let numberOfQuestions = getElement("number-of-questions");
  let medium_question = getElement("medium_questions ");
  let options = document.getElementsByClassName("option");
  let button = getElement("button");
  let counter = 0;
  let correctAnswers = 0;
  let quizEnd = false;
  let progressBar= document.getElementsByClassName('progress-bar')[0];
  let audioRight= new Audio('right.mp3');
  let audioWrong= new Audio('wrong.mp3');
  
  /* 
  main functions 
  */
  
  //render everything on page load
  function init() {
      renderQuestions(counter);
    }
  
  //add event listener to every answer to check if right or wrong on click
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      checkAnswer(counter, i);
    });
  }
  
  //add event listener to next question button
  button.addEventListener("click", function () {
    nextQuestion();
  });
  
  
  // render question plus its answer options
  function renderQuestions(counter) {
    currentQuestionNumber.innerHTML = counter + 1;
    numberOfQuestions.innerHTML = questions.length;
    question.innerHTML = questions[counter].question;
    progressBar.innerHTML= `${(counter+1) *5} %`
    progressBar.style.width= `${(counter+1) *5}%`
    for (let i = 0; i < questions[counter].answers.length; i++) {
      options[i].innerHTML = questions[counter].answers[i];
    }
    if (currentQuestionNumber.innerHTML == numberOfQuestions.innerHTML) {
      button.innerHTML = "End Quiz";
      quizEnd = true;
    }
  }
  
  //check if answer is correct
  function checkAnswer(counter, index) {
    button.disabled = false;
    disableClickEvents();
    if (questions[counter].answers[index] == questions[counter].correctAnswer) {
      options[index].classList.add("bg-success");
      correctAnswers++;
      audioRight.play();
    } else {
      audioWrong.play();
      options[index].classList.add("bg-danger");
      let position = questions[counter].answers.findIndex(function (match) {
        return match == questions[counter].correctAnswer;
      });
      options[position].classList.add("bg-success");
    }
  }
  
  //disable click events on other answers when one answer has already been clicked
  function disableClickEvents() {
      for (let i = 0; i < options.length; i++) {
          options[i].classList.add("disabled");
        }
  }
  
  //go to next question
  function nextQuestion() {
    if (quizEnd) {
      let questionContainer = getElement("question-container");
      questionContainer.innerHTML = "";
      questionContainer.innerHTML += endScreenHTML();
    } else {
      counter++;
      renderQuestions(counter);
      button.disabled = true;
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("bg-danger");
        options[i].classList.remove("bg-success");
        options[i].classList.remove("disabled");
      }
    }
  }
  
  //HTML for end screen
  function endScreenHTML() {
      return /*html*/ `  
      <div class="success">
  
          <img src="images/trophy.png">
          <div>
              <h5 class="card-title">Hurray!</h5>
              <p class="card-text">You answered ${correctAnswers} of ${questions.length} questions correctly!</p>
              <button type="button" class="btn btn-warning restart" onClick="window.location.reload();">Restart</button>
          </div>
      
      </div>
  `;
  }