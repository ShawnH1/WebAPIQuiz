//get our timer element, set a timer for 60 seconds
var timerEl = document.querySelector("#timer")
var secondsLeft = 60
//get our start button
var start = document.querySelector("#startBtn")
// get our questionbox
var quizEl = document.querySelector("#questionBox")

// get our answerbox
var answersEl = document.querySelector("#answers")
//get our startbox
var introEl = document.querySelector("#startBox")

//used to select the next questions and answers when cycling through 
var currentIndex = 0;

var correctanswers = 0;
//set our array of object questions

//highscores element
var highScoresEl = document.querySelector("#highScores")
//var containerEl = document.querySelector("container")
//use .question to pull first question and put in question div.

//use .answers pull from array set 0 to button 1 using a for loop, currentindex.length, create a button inside (only one as it repeats itself)
//add attributes to "class" "buttons", button.setAttribute data- in HTML puts value on an element 
//button.setAttribute create, set, append, to changing innerHTML to answers
//get data-blue is data-blue 
//get the data attribute (like a class or id), addEventListeners that send over the data and then compare that to the correct answer
//for (let i = 0; i < array.length; i++) {
//  const element = array[i];

//}

//this is the array of questions and answers
var questionArray = [
    {
        //this is the first question
        question: 'What color is the sky?',
        //these are the possible answers for the first question
        answers: ['red ', 'green ', 'blue ', 'yellow '],
        //this is the correct answer for the first question
        correctanswer: 'blue ',
    },

    {
        //this is the second question
        question: "Whats the dog's name?",
        //these are the possible answers for the second question 
        answers: ['red2 ', 'Charlie ', 'blue2 ', ' yellow2'],
        //this is the correct answer for the second question
        correctanswer: 'Charlie ',
    },

    {
        //this is the third question
        question: 'What color are bananas?',
        //these are the possible answers for the third question
        answers: ['red3 ', 'green3 ', 'blue3 ', 'yellow3'],
        //this is the correct answer for the third question
        correctanswer: 'yellow3',
    },

    {
        //this is the fourth question
        question: 'What color are apples?',
        //these are the possible answers for the fourth question
        answers: ['red4 ', 'green4 ', 'blue4 ', ' yellow4 '],
        //this is the correct answer for the fourth question
        correctanswer: 'red4 ',
    }
]

//used to test a concept for a better understanding
//var random = ["red", "white", "blue"]
//for (let i = 0; i < random.length; i++) {
  //  const element = random[i];
    //console.log("element",)
//}

//adds an event listener to the "Start quiz button" which activates the "startQuiz" function
start.addEventListener("click", startQuiz)

//This function starts the quiz.  That means...
function startQuiz() {
    //The startBox with the instructions disappears
    introEl.setAttribute("class", "hide")
    //The questionBox with the questions and answers appears
    quizEl.removeAttribute("class", "hide")
    //The timer function is started
    time();
    //The setQuestions function is started at the currentIndex
    setQuestions(currentIndex)
}

//This function controls the number part of the timer 
function time() {
    //sets the number part of the timer to countdown at a certain interval
    var timer = setInterval(() => {
        //this is the actual number part losing 1 number 
        secondsLeft--
        //this displays the numbers on the page
        timerEl.innerHTML = secondsLeft
        //if time runs out...
        if (secondsLeft <= 0) {
            //this stops the countdown by clearing it instead of it going into the negative
            clearInterval(timer)
        }
        //this sets the speed of the countdown so that a number is removed from the count every second.
    }, 1000);

}

//Use console logs like this to test every step along the way. console.log ("pay attention" , timer)

//add to wrong/right answer tally
//when question is answered, remove it and replace it with a new one

//}
//}

//When the user clicks on "High Scores"
highScoresEl.addEventListener("click", function() {
    
    //they are brought to the "High Scores" page
  window.location.href = "highscores.html"
})
    

//this is the function to display and cycle through the questions
function setQuestions(question) {

    //this targets the question element
    var questionEl = document.querySelector("#questions")
    
    //this sets the current question to the corresponding one in the array
    var currentQuestion = questionArray[currentIndex].question;

    //this attaches it to the page in the "question" div
    questionEl.innerHTML = currentQuestion

    //this cycles to the next question in the array every time that the function is run.
    //Note: the function needs to be run again for this to work.  It does not automatically cycle to the next question.
    //Above note was added because for loops can be a headache if one runs with the assumption that they work automatically
    //without repeating the entire function itself over again.
    for (let i = 0; i < questionArray[currentIndex].answers.length; i++) {
        const element = questionArray[currentIndex].answers[i];

        //this creates the buttons for the various answers
        var answerBtnEl = document.createElement("button")
            //this assigns an attribute with the corresponding answer so they can be identified later
            answerBtnEl.setAttribute("data-response", element)
            //this assigns the text inside the button to be the corresponding answer
            answerBtnEl.textContent = element
            
            //When the user clicks on a answer button... 
            answerBtnEl.addEventListener("click", function(event) {
                //Testing, to make sure that the event listener is working
                //console.log(event)
            //console.log(event.target)

                //this tells the computer which button was clicked
                var currentAnswer = event.target.getAttribute("data-response")

                //used for testing, to make sure that the computer knows which button was clicked
                //console.log ("currentAnswer", currentAnswer)
                
                //this tells the function which button is the correct one.
                var correctBtn = questionArray[currentIndex].correctanswer

                //testing, to make sure that the computer knows when the user clicked the correct button
                console.log("correct", correctBtn)

                //If they click the correct answer...
                if (currentAnswer === correctBtn) {

                    //clears out the previous answers
                    answersEl.innerHTML = ""

                    //notifies the user that they got the correct answer by...
                    //putting a notification in an "h3"
                    var correct = document.createElement("h3")
                    //this is the text that will pop up notifying them.
                    correct.textContent = "You got question " + [currentIndex + 1] + " correct!  Great job!"
                    //and putting it on the page in the "answers" element
                    answersEl.appendChild(correct)

                    //updates the count so that the next questions and corresponding answers will appear 
                    //the next time this function is run.
                    currentIndex++

                    //repeats this function at the currentIndex, which was just changed.
                    setQuestions(currentIndex)
                
                //if they clicked a wrong answer or something went wrong
                } else {
                    //clears out the previous answers
                    answersEl.innerHTML = ""
                    
                    //notifies the user that they got the wrong answer by...
                    //putting it in a "h3 tag"
                    var incorrect = document.createElement("h3")
                    //this is the text that will pop up notifying them.
                    incorrect.textContent = "You got question " + [currentIndex + 1] + " wrong!  You can do this!"
                    //this adds it to the page in the "answers" section
                    answersEl.appendChild(incorrect)

                    //updates the count that the next questions and corresponding answers will appear
                    //the next time this function is run.
                    currentIndex++

                    //repeats this function at the currentIndex, which was just changed.
                    setQuestions(currentIndex)


                }
                
                //if they clicked the wrong answer...
                if (currentAnswer !== correctBtn) {
                    //10 seconds is taken off of the timer.
                    secondsLeft = secondsLeft - 10
                }

                

            })
            //this attaches the button elements
            answersEl.appendChild(answerBtnEl)
            //testing, to make sure that 
        //console.log("element2", answerBtnEl)
    }
    
    
}


//end game condtion


//save high score to localStorage get/set
//relocate

//create another HTML page with a button to try again