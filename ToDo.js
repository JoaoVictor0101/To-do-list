let bar = document.getElementById("NameTask");
let containerIdTask = document.getElementById("containerIdTasks");
let button = document.getElementById("button");
let styleContainer = document.getElementsByClassName("StyleContainerTasks");
let top1 = document.getElementById("Top1");
let containerTasksCheck = document.getElementById("tasksCheck");
let TasksBack= document.getElementById('tasksBackCheck')
let i = 0
function creatAsk(){
  i++
    let task = `<div id="containerTask${i}" class="feedback">
    <div class="checkStyle">
      <input onclick="CheckEffect(${i})" type="checkbox" id="feedback-checkbox"/>
      </div>
      <div id="Check${i}" class="nameTaskStyle">
      <label for="feedback-checkbx">${bar.value}</label>
      </div>
      <div class="deleteStyle">
    <button class="delete-button" onclick="remove(${i})">🗑️</button>
    </div>
    </div>`
    if(bar.value === ""){
      alert("digite uma tarefa")
    }else{
    let tempContainer = document.createElement("div");
    tempContainer.id="divTask"+i
tempContainer.innerHTML = task;
    top1.appendChild(tempContainer);
    
    }
    bar.value=""  
    containerIdTask.style.maxHeight = '200px';
    containerIdTask.style.overflow = 'auto';
    
}
button.addEventListener("click",creatAsk)

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
