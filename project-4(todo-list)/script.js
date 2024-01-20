
function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")
    date = date[1] + " " + date[2] + " " + date[3] 
    document.querySelector("#date").innerHTML = date 
  } 

const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask(){
  if(inputbox.value===''){
    alert("you must write something...");
  }
  else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    listcontainer.appendChild(li);
    
    let span=document.createElement("span");/* this part is to get cross mark*/
    span.innerHTML="\u00d7";
    li.appendChild(span);

    let edit= document.createElement("div"); 
    edit.innerHTML = "&#9998;"; 
    li.appendChild(edit);
  
  }
  inputbox.value="";
  savedata();
}

listcontainer.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();
  }
  else if (e.target.tagName === "DIV") { 
    editTask(e.target.parentElement);
  }
},false);

function editTask(taskElement) {
  let newText = prompt("Edit task:", taskElement.firstChild.textContent);
  if (newText !== null) {
    taskElement.firstChild.textContent = newText;
    saveData();
  }
}

function savedata(){
  localStorage.setItem("data",listcontainer.innerHTML);
}

function showtask(){
  listcontainer.innerHTML=localStorage.getItem("data")
}
showtask();