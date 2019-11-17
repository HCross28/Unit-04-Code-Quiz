var openingQuestion = document.getElementById("question-space");
var mngAnswerSpace = document.getElementById("answer-space");
var mngScoreScreen = document.getElementById("high-scores")
var mngYesNo = document.getElementById("yesno");
var answerA = document.getElementById("answer-a");
var answerB = document.getElementById("answer-b");
var answerC = document.getElementById("answer-c");
var answerD = document.getElementById("answer-d");
var score = 0;


//Score Screen Button Functionality
document.getElementById("score").addEventListener("click", scoreScreen);



//This will call the first function into play
openingPage()

//Functions listed below are a step by step course through the quiz site. One function leads to the next, upon answering a question
function openingPage(){
    
    openingQuestion.querySelector("#question-text").innerHTML = "Are You Ready to Begin the Coding Quiz?";
    openingQuestion.querySelector("#question-text").style.textAlign = "center";

    mngAnswerSpace.style.display = "none";
    mngScoreScreen.style.display = "none";

    document.getElementById("yes-btn").addEventListener("click", quizInit);
};


function quizInit(){
    
    openingQuestion.querySelector("#question-text").innerHTML = "Question 1. What is a String?";

    mngYesNo.style.display = "none";

    mngAnswerSpace.style.display = "block";

    answerA.textContent = "green";
    answerB.textContent = "stores a series of characters like \"John Doe\"";
    answerC.textContent = "a number value";
    answerD.textContent = "a list of items";

    document.getElementById("a-btn").addEventListener("click", questionTwo);
    document.getElementById("b-btn").addEventListener("click", questionOneCorrect);
    document.getElementById("c-btn").addEventListener("click", questionTwo);
    document.getElementById("d-btn").addEventListener("click", questionTwo);


    //Here is the timer! Since this function begins when the quiz is started, this function also begins. 
    var timeleft = 75;
    var countDownTimer = setInterval(function(){
      document.getElementById("timer").innerHTML = timeleft + " seconds remaining";
      timeleft --;
      if(timeleft === 0){
        clearInterval(countDownTimer);
        document.getElementById("timer").innerHTML = "Game Over";
    
        scoreScreen();
    
      }

    }, 1000);



};


function questionOneCorrect(){
    score++;
    console.log(score);
    questionTwo();
};



function questionTwo() {
    openingQuestion.querySelector("#question-text").innerHTML = "Question 2. What is a Boolean?";


    answerA.textContent = "stores a series of characters like \"John Doe\"";
    answerB.textContent = "the additive result of two numbers";
    answerC.textContent = "a true or false value";
    answerD.textContent = "gold or silver in bulk before coining, or valued by weight";

    document.getElementById("a-btn").addEventListener("click", questionThree);
    document.getElementById("b-btn").addEventListener("click", questionThree);
    document.getElementById("c-btn").addEventListener("click", questionTwoCorrect);
    document.getElementById("d-btn").addEventListener("click", questionThree);

};

function questionTwoCorrect(){
    score++;
    console.log(score);
    questionThree();
};


function questionThree() {
    openingQuestion.querySelector("#question-text").innerHTML = "Question 3. What Case Type Will You Use While Coding JavaScript?";

    answerA.textContent = "CamelCase";
    answerB.textContent = "dash-spacing";
    answerC.textContent = "UPPERCASE";
    answerD.textContent = "lowercase";

    document.getElementById("a-btn").addEventListener("click", questionThreeCorrect);
    document.getElementById("b-btn").addEventListener("click", questionFour);
    document.getElementById("c-btn").addEventListener("click", questionFour);
    document.getElementById("d-btn").addEventListener("click", questionFour);


};

function questionThreeCorrect(){
    score++;
    console.log(score);
    questionFour();
};


function questionFour() {
    openingQuestion.querySelector("#question-text").innerHTML = "Question 4. What is an Array?";

    answerA.textContent = "A True or False Value";
    answerB.textContent = "Trick Question! It's an HTML Element";
    answerC.textContent = "A List of Values";
    answerD.textContent = "A Gun That Zaps People";

    document.getElementById("a-btn").addEventListener("click", questionFive);
    document.getElementById("b-btn").addEventListener("click", questionFive);
    document.getElementById("c-btn").addEventListener("click", questionFourCorrect);
    document.getElementById("d-btn").addEventListener("click", questionFive);


};

// For some reason the "score++;" adds itself twice resulting in 4 and 5 in the console... No Idea why it does this?
function questionFourCorrect(){
    score++;
    console.log(score);
    questionFive();
};

function questionFive() {
    openingQuestion.querySelector("#question-text").innerHTML = "Question 5. What is Your Favorite Color?";


    answerA.textContent = "Blue... No... YEEeellllloooooooooooooooooooooooooow";
    answerB.textContent = "Red";
    answerC.textContent = "Lavender";
    answerD.textContent = "Purple";

    document.getElementById("a-btn").addEventListener("click", questionFiveCorrect);
    document.getElementById("b-btn").addEventListener("click", scoreScreen);
    document.getElementById("c-btn").addEventListener("click", scoreScreen);
    document.getElementById("d-btn").addEventListener("click", scoreScreen);


};

//This is even weirder. The console shows 6 then a 7 and then another 7? This makes no sense why its doing this. 
//Hopefully you can give me extra credit for the Monty Python Reference :D 

function questionFiveCorrect(){
    score++;
    console.log(score);
    scoreScreen();
};


function scoreScreen() {
    openingQuestion.querySelector("#question-text").innerHTML = "High Scores";
    mngScoreScreen.style.display = "block";
    mngScoreScreen.style.textAlign = "center";

    mngAnswerSpace.style.display = "none";
    mngYesNo.style.display = "none";

    document.getElementById("timer").style.display = "none";

    console.log(score);

};





/* Landing page: First page shows the opening question w/ "Are you Ready to Begin the Coding Quiz?"
        below this shows the buttons for yes/no (yes and no will be re-purposed A and B choices... Will require JS to temporarily remove C and D options),
        top right high score button will permanently stay which will link to the page that shows the locally stored high scores
        Event listener put in place under Yes button to start event. 
    Once Yes is clicked timer begins countdown from 75 to 0
        New Question and Answer choices populate in their respective IDs
        eventlisteners put in place under a, b, c, and d buttons to correspond with the answer choices
        Correct answer shows an alert telling the user the answer was correct and then switches to Q/A #2
        incorrect answer does the same, just showing an alert for incorrect 
            Points added to score accordingly
    Continue this process for the duration of 5 questions
    After completion of 5 Qs text elements are repopulated showing your score 
        at this score screen user has option to save initials with the score. 
        score is then saved into local storage */
