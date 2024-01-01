// Points towards Stand User outcome
var standUserCount = 0; 

 // Points towards regular civilian outcome
var regCivilianCount = 0;

// number of questions answered by user
var questionCount = 0;

// store HTML elements using DOM
var result = document.getElementById("result");

// store restart button
var restartButton = document.getElementById("restartButton"); 

// Variables to store value of each answer button using DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");


// Listener for user's click and calls funcs
q1a1.addEventListener("click", standUser);
q1a2.addEventListener("click", regCivilian);

q2a1.addEventListener("click", regCivilian);
q2a2.addEventListener("click", standUser);

q3a1.addEventListener("click", standUser);
q3a2.addEventListener("click", regCivilian);

// Event Listener for restart Button
restartButton.addEventListener("click", restart);


// if Stand User option is selected:
  // increment standUserCount & questionCount, run result function
function standUser() {
  standUserCount+=1;
  questionCount+=1;

  console.log("questionCount = " + questionCount + " standUserCount = " + standUserCount);
  if (questionCount == 3) {
    console.log("The quiz is done!")

    getResult();
  }
}

// if regular civilian option is selected:
  // increment regCivilian & questionCount, run result function
function regCivilian() {
  regCivilianCount+=1;
  questionCount+=1;

  console.log("questionCount = " + questionCount + " regCivilianCount = " + regCivilianCount);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    getResult();
  }
}

// check answers to print result
function getResult() {
  if (standUserCount >= 2) {
    result.innerHTML = "Aha! You're a Stand User";
    console.log("Aha! You're a Stand User");
  } else if (regCivilianCount >= 2) {
    result.innerHTML = "You're a regular civilian!";
    console.log("You're a regular civilian!");
  }
}

// Restart the Quiz
function restart() {
  // update H2 content
  result.innerHTML = "Your result is...";

  // set values of 3 tracking variables to 0
  standUserCount = 0;
  regCivilianCount = 0;
  questionCount = 0;

  // print the 3 lines above to the console
  console.log("standUserCount = " + standUserCount);
  console.log("regCivilianCount = " + regCivilianCount);
  console.log("questionCount = " + questionCount);
  
}
