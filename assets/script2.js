//get the user intials from local storage
var newInitialsEl = localStorage.getItem("userinitials")
console.log("new initials" + newInitialsEl)
//get the user's score from local storage
var finalScoreEl = localStorage.getItem("final score")
console.log("final score", finalScoreEl)

//add new initals and score to container
//sort() them into order by score
//they need to be connected somehow?





// Find a <table> element with id="myTable":
var table = document.querySelector("#HSTable");


// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell4 = row.insertCell(2);
var cell5 = row.insertCell(3);
var cell6 = row.insertCell(4);
var cell7 = row.insertCell(5);
var cell8 = row.insertCell(6);
var cell9 = row.insertCell(7);
var cell10 = row.insertCell(8);

// Add some text to the new cells:
cell1.innerHTML = newInitialsEl;
cell2.innerHTML = finalScoreEl;



//gets the clear button
var clearScoresEl = document.querySelector("#clearScoresBtn")
//when clicked...
clearScoresEl.addEventListener("click", function (event) {

    console.log("clear scores button clicked!")
    //local storage is cleared
    localStorage.clear()

})

// //gets the "try again button"
var tryAgainEl = document.querySelector("#tryAgain")
// //when clicked...
tryAgainEl.addEventListener("click", function (event) {
    console.log("try again button")
    //     //the user is sent back to the index page
    window.location.href = "index.html"
})




//create another HTML page showing the high scores in a table
//arrange high scores from highest to lowest
//DONE -- provide a button to try again send back to index.html with window.location.href = "index.html"
//DONE -- provide a button to clear localStorage localStorage.clear();
//add CSS to make both pages pretty