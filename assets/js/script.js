// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id 
function generateTaskId() { //1
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
    const taskList = document.getElementById('task-list');
    const tasks = taskList.querySelectorAll('li');
    
    tasks.forEach(task => {
        task.setAttribute('draggable', true);
    
        task.addEventListener('dragstart', () => {
            task.classList.add('dragging');
        });
    
        task.addEventListener('dragend', () => {
            task.classList.remove('dragging');
        });
    });
    
    taskList.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(taskList, e.clientY);
        const draggingElement = taskList.querySelector('.dragging');
    
        if (afterElement == null) {
            taskList.appendChild(draggingElement);
        } else {
            taskList.insertBefore(draggingElement, afterElement);
        }
    });
    
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];
    
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
    
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }
    //make cards render
        //populate-> which means that we make them show in another place
    // make dragable
        //animation or if not bootstrap?  if not YOUTUBE / GOOGLE
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) { //2
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
    // Function to delete a task from the task list
function deleteTask(taskId) {

    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const taskIndex = taskList.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(taskList));
        renderTaskList();
    } else {
        console.log();
    }
}

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
