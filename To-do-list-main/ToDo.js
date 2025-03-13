
//Selectors

let bar = document.getElementById("NameTask");
let ScrollTask = document.getElementById("ScrollTasks");
let button = document.getElementById("button");
let taskcontainer = document.getElementById("TasksContainerId");

// Container size;
ScrollTask.style.maxHeight = '200px';
     ScrollTask.style.overflow = 'auto';

//Putting the tasks getting from localstorage into dom;

loadTask()

// Adding the tasks created into dom;

 function addTask(){
  let value1 = bar.value.trim()

  if (value1){
    creaTask(value1)
    bar.value = ""
    saveIntoTheLocalStorage()

  }else{
    alert("coloque uma task")
  }
}


// Adding tasks button
button.addEventListener("click",addTask)


// Making tasks
function creaTask (value1){
  let counter = Date.now()
  let NameTask = document.createElement('div');
  let TaskDiv = document.createElement('div');
  let ChekBox = document.createElement('input');
  NameTask.textContent=value1;
  NameTask.id="IdNameTask";
  ChekBox.id="buttonCheck"+counter;
  TaskDiv.classList="TaskStyle";
  NameTask.classList="nameTask";
  ChekBox.type="checkbox";
  ChekBox.classList="CheckStyle";
  TaskDiv.appendChild(ChekBox);
  TaskDiv.appendChild(NameTask);
  taskcontainer.appendChild(TaskDiv);
  
let buttonCheck = document.getElementById("buttonCheck"+counter);

// Remove and check to the task 
buttonCheck.addEventListener("click",function(){
taskcontainer.removeChild(TaskDiv);
  saveIntoTheLocalStorage()
})

}
  // Saving the tasks into localStorage
function saveIntoTheLocalStorage(){
  let taskArray = [];
  taskcontainer.querySelectorAll("#IdNameTask").forEach(function (item){
    taskArray.push(item.textContent)
  })
  localStorage.setItem("Tasks",JSON.stringify(taskArray))
}

// Geting the tasks from localStorage
function loadTask (){
  let load= JSON.parse(localStorage.getItem('Tasks')||'[]')
  load.forEach(creaTask)

}

