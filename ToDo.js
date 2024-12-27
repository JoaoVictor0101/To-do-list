let bar = document.getElementById("NameTask");
let containerIdTask = document.getElementById("containerIdTasks");
let button = document.getElementById("button");
let styleContainer = document.getElementsByClassName("StyleContainerTasks");
let top1 = document.getElementById("Top1");
let i = 0
function creatAsk(){
  i++
    let task = `<div class="feedback">
    <div class="checkStyle">
      <input onclick="CheckEffect(${i})" type="checkbox" id="feedback-checkbox"/>
      </div>
      <div id="Check${i}" class="nameTaskStyle">
      <label for="feedback-checkbx">${bar.value}</label>
      </div>
      <div class="deleteStyle">
    <button class="delete-button">🗑️</button>
    </div>
    </div>`
    if(bar.value === ""){
      alert("digite uma tarefa")
    }else{
    let tempContainer = document.createElement("div");
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
  
  console.log(Check1)
  
  Check1.classList.add("TaskDone");

}

 