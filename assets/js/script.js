// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let generatedRandomId = Math.random();
    console.log("Generated Task ID: " + generatedRandomId);
    return generatedRandomId;
}

// Todo: create a function to create a task card
function createTaskCard(task) { //3
// Create a new div element for the card
const card = document.createElement('div');
card.classList.add('card'); // Add a class for styling
// Create elements for title and content
const cardTitle = document.createElement('h2');
cardTitle.textContent = title;
const cardContent = document.createElement('p');
cardContent.textContent = content;
// Append title and content to the card
card.appendChild(cardTitle);
card.appendChild(cardContent);
// Append the card to a container in the HTML document
const cardContainer = document.getElementById('card-container');
cardContainer.appendChild(card);

// Call the createCard function with title and content
createCard('Card Title', 'This is the content of the card.');

//how would I create a new element
//create a section or div
//put in title, date, description, and a delete button on there
//append to To Do portion 
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() { //4
    //make cards remder
        //populate-> which means that we make them show in another place
    // make dragable
        //animation or if not bootstrap?  if not YOUTUBE / GOOGLE
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    let generatedRandomId = generateTaskId();
    localStorage.setItem('taskID', generatedRandomId);
    let storedTaskId = localStorage.getItem('taskID');
    console.log("Stored Task ID: " + storedTaskId);

//be able to add to localstorage 
//access local storage, 
//get the unque ID generateTaskId()
//Key/value pair (taskBoardId, task)
//1. put items in local storage then create task card
//createTaskCard(task)
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){ //5
//find the id that matches to the one you want to delete
//find them in localstorage 
//remove from local storage
//run task card again to reflect local storage change
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
//put intoanother section 
//YOUTUBE or Bootcamp spot
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
//local storage 
//if empty ignroe else for each item with this id pattern,createTaskCard(task)
});
