var openingQuestion;
var openingAnswers;



//function openingPage(){
var openingQuestion = document.getElementById("question-space");
openingQuestion.querySelector("#question-text").innerHTML = "Are You Ready to Begin the Coding Quiz?";

var openingAnswers = document.getElemtentById("answer-list");
openingAnswers.querySelector("#a-btn").innerHTML = "Yes!";
//}





console.log ("Hello");


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
