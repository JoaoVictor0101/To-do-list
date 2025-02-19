let bar = document.getElementById("NameTask");
let containerIdTask = document.getElementById("containerIdTasks");
let button = document.getElementById("button");
let styleContainer = document.getElementsByClassName("StyleContainerTasks");
let top1 = document.getElementById("Top1");
let containerTasksCheck = document.getElementById("tasksCheck");
let TasksBack= document.getElementById('tasksBackCheck');
let i = 0

// fixing the layout of page 

 function addTask(){
  let value1 = bar.value.trim()

  if (value1){
    Creat(value1)
    bar.value = ""
    saveIntoTheLocalStorage()

    containerIdTask.style.maxHeight = '200px';
     containerIdTask.style.overflow = 'auto';
  }else{
    alert("coloque uma task")
  }
}


//     function creatAsk(value1){
//   i++
//     let task = `<div id="containerTask${i}" class="feedback">
//     <div class="checkStyle">
//       <input onclick="CheckEffect(${i})" type="checkbox" id="feedback-checkbox"/>
//       </div>
//       <div id="Check${i}" class="nameTaskStyle">
      
//       </div>
//       <div class="deleteStyle">
//     <button class="delete-button" onclick="remove(${i})">🗑️</button>
//     </div>
//     </div>`
    
//     let tempContainer = document.createElement("div");
//     tempContainer.id="divTask"
// tempContainer.innerHTML = task;
//     top1.appendChild(tempContainer);
    
   
//     containerIdTask.style.maxHeight = '200px';
//     containerIdTask.style.overflow = 'auto';
    
//     Creat(value1)
//   }

button.addEventListener("click",addTask)

function CheckEffect(i){
  let Check1= document.getElementById("Check"+i);
  let ConatinerTask = document.getElementById("containerTask"+i)
  
 let checkStyle =  Check1.getAttribute('class');
  if (checkStyle == "nameTaskStyle"){
    containerIdTask.appendChild(ConatinerTask);
    Check1.classList.remove('nameTaskStyle');
    Check1.classList.add('TaskDone');
    
  }else{
    Check1.classList.remove('TaskDone');
    Check1.classList.add('nameTaskStyle');
    containerIdTask.removeChild(ConatinerTask);
    TasksBack.appendChild(ConatinerTask);
  }
}

let o = 0
function Creat (value1){
  o++
  let creatItem = document.createElement('div');
  let TaskDiv = document.createElement('div');
  let ChekBox = document.createElement('input')
  let deleteButton = document.createElement('button');
  creatItem.textContent=value1
  creatItem.id="ioi"
  ChekBox.id="buttonCheck"+o
  TaskDiv.classList="TaskStyle";
  TaskDiv.id="oo"+o
  deleteButton.classList="delete-button";
  creatItem.classList="nameTask";
  ChekBox.type="checkbox";
  ChekBox.classList="CheckStyle";
  TaskDiv.appendChild(ChekBox)
  TaskDiv.appendChild(creatItem)
  TaskDiv.appendChild(deleteButton)
  top1.appendChild(TaskDiv)
  
let buttonCheck = document.getElementById("buttonCheck"+o);

buttonCheck.addEventListener("click",function(){
  let ParenTask = this.parentElement;
  let classParent = ParenTask.getAttribute('class');
  console.log(classParent)
  if (classParent == "TaskStyle"){
  buttontask(ParenTask.id)
  }else{
    backChack (ParenTask.id)
  }
//  top1.removeChild()
  
})
  
  deleteButton.textContent= "🗑️"
  deleteButton.classList="delete-button"
  deleteButton.addEventListener("click", function(){
    top1.removeChild(creatItem)
   
  })

}
function buttontask (taskId){
  let getId = document.getElementById(taskId);
  console.log(getId)
  containerIdTask.appendChild(getId)
  getId.classList="TaskStyle2"
}

function backChack (TaskId){
  let getId2 = document.getElementById(TaskId);
  TasksBack.appendChild(getId2)

}

  /*
  creat(){
   TaskContainer()
  }

  delete = creatElement - textContent - classList 
   delete.addEvent (click, functin (){
   top1.removeChild(TaskDiv)
   TaskDiv(creatItem, delete)
   })

  function TaskContainer(){ 
  TaskDiv = creaatElement - classList 
  TaskDiv.appendChild(creatItem)
  TaskDiv.appendChild(delete)
  
}
  
  */
  



// how can i get items from localStorage and setting them into the dom?

function saveIntoTheLocalStorage(){
  let taskArray = [];
  top1.querySelectorAll("#ioi").forEach(function (item){
    taskArray.push(item.textContent)
  })
  localStorage.setItem("Tasks",JSON.stringify(taskArray))
}

function loadTask (){
  let load= JSON.parse(localStorage.getItem('Tasks')||'[]')
  load.forEach(Creat)

}




 function remove (i){
  let divTask = document.getElementById('divTask'+i)
  let ConatinerTask = document.getElementById("containerTask"+i)
 if (ConatinerTask.parentElement === divTask){
   ConatinerTask.remove()
 } else if (ConatinerTask.parentElement === containerIdTask){
  ConatinerTask.remove()
 }else{
  ConatinerTask.remove()
 }

  }
