import dayjs from 'dayjs';
const currentDate = dayjs();
const formattedDate = dayjs().format('MM-DD-YYYY');


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
function createTaskCard(title, content) {
    // Create a new div element for the card
    const card = document.createElement('div'); // $(<div>)
    card.classList.add('task-card');

    // Create elements for title and content
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    // Append title and content to the card
    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    // Append the card to the correct container in the HTML document
    const cardContainer = document.getElementById('todo-cards'); // $('#todo-cards')
    cardContainer.appendChild(card); // Append the card element to the container

    
//how would I create a new element
//create a section or div
//put in title, date, description, and a delete button on there
//append to To Do portion 
}
function createProjectCard(project) {
    const taskCard = $('<div>')
      .addClass('card project-card draggable my-3')
      .attr('data-project-id', project.id);
    const cardHeader = $('<div>').addClass('card-header h4').text(project.name);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(project.type);
    const cardDueDate = $('<p>').addClass('card-text').text(project.dueDate);
    const cardDeleteBtn = $('<button>')
      .addClass('btn btn-danger delete')
      .text('Delete')
      .attr('data-project-id', project.id);
    cardDeleteBtn.on('click', handleDeleteProject);
  
    // ? Sets the card background color based on due date. Only apply the styles if the dueDate exists and the status is not done.
    if (project.dueDate && project.status !== 'done') {
      const now = dayjs();
      const taskDueDate = dayjs(project.dueDate, 'DD/MM/YYYY');
  
      // ? If the task is due today, make the card yellow. If it is overdue, make it red.
      if (now.isSame(taskDueDate, 'day')) {
        taskCard.addClass('bg-warning text-white');
      } else if (now.isAfter(taskDueDate)) {
        taskCard.addClass('bg-danger text-white');
        cardDeleteBtn.addClass('border-light');
      }
    }
  
    // ? Gather all the elements created above and append them to the correct elements.
    cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
    taskCard.append(cardHeader, cardBody);
  
    // ? Return the card so it can be appended to the correct lane.
    return taskCard;
  }
// Todo: create a function to render the task list and make cards draggable
function printProjectData() {
    const projects = readTasksFromStorage();
  
    // ? Empty existing project cards out of the lanes
    const todoList = $('#todo-cards');
    todoList.empty();
  
    const inProgressList = $('#in-progress-cards');
    inProgressList.empty();
  
    const doneList = $('#done-cards');
    doneList.empty();
  
    // ? Loop through projects and create project cards for each status
    for (let task of tasks) {
      if (task.status === 'to-do') {
        todoList.append(createProjectCard(tasks));
      } else if (task.status === 'in-progress') {
        inProgressList.append(createProjectCard(tasks));
      } else if (task.status === 'done') {
        doneList.append(createProjectCard(tasks));
      }
    }
  
    // ? Use JQuery UI to make task cards draggable
    $('.draggable').draggable({
      opacity: 0.7,
      zIndex: 100,
      // ? This is the function that creates the clone of the card that is dragged. This is purely visual and does not affect the data.
      helper: function (e) {
        // ? Check if the target of the drag event is the card itself or a child element. If it is the card itself, clone it, otherwise find the parent card  that is draggable and clone that.
        const original = $(e.target).hasClass('ui-draggable')
          ? $(e.target)
          : $(e.target).closest('.ui-draggable');
        // ? Return the clone with the width set to the width of the original card. This is so the clone does not take up the entire width of the lane. This is to also fix a visual bug where the card shrinks as it's dragged to the right.
        return original.clone().css({
          width: original.outerWidth(),
        });
      },
    });
  }
  
        //animation or if not bootstrap?  if not YOUTUBE / GOOGLE
    




// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    let generatedRandomId = generateTaskId();
    
    // Save the task ID to localStorage
    localStorage.setItem('tasks', generatedRandomId);
    
    // Retrieve the task ID from localStorage
    let storedTaskId = localStorage.getItem('tasks');
    console.log("Stored Task ID: " + storedTaskId);
    
    // Create a task object with actual details and pass them to createTaskCard
    let taskTitle = document.getElementById('exampleFormControlInput0').value;
    let taskDescription = document.getElementById('exampleFormControlTextarea1').value;
    createTaskCard(taskTitle, taskDescription);

    $('#formModal').modal('toggle');
    renderTaskList();
}
// Select the Save Changes button by its id
const saveChangesButton = document.getElementById('handleAddTask');

// Add an event listener to the Save Changes button
saveChangesButton.addEventListener('click', handleAddTask);




//be able to add to localstorage 
//access local storage, 
//get the unque ID generateTaskId()
//Key/value pair (taskBoardId, task)
//1. put items in local storage then create task card
//createTaskCard(task)


// Todo: create a function to handle deleting a task
function deleteTask(taskId) {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = taskList.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(taskList)); // Use the correct key 'tasks'
        renderTaskList();
    } else {
        console.log("Task not found for deletion");
    }
}

//find the id that matches to the one you want to delete
//find them in localstorage 
//remove from local storage
//run task card again to reflect local storage change

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // Function to handle the drag start event
function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

// Function to handle the drag over event
function handleDragOver(event) {
    event.preventDefault();
}

// Function to handle the drop event
function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const droppedTask = document.getElementById(taskId);
    const newStatusLane = event.target.closest('.status-lane');
    if (newStatusLane) {
        const newStatus = newStatusLane.dataset.status;
        console.log(`Task ${taskId} dropped into ${newStatus} lane`);
    }
}
const statusLanes = document.querySelectorAll('.status-lane');
statusLanes.forEach(statusLane => {
    statusLane.addEventListener('dragover', handleDragOver);
    statusLane.addEventListener('drop', handleDrop);
});

// Add event listeners to the tasks for drag start event
const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
    task.addEventListener('dragstart', handleDragStart);
});
//put intoanother section 
//YOUTUBE or Bootcamp spot
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
//local storage 
//if empty ignore else for each item with this id pattern,createTaskCard(task)
});
