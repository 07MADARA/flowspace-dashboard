const toggle = document.getElementById("themeToggle")

if(toggle){

toggle.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})

}

/* Chart */

const ctx = document.getElementById('chart')

if(ctx){

new Chart(ctx,{

type:'bar',

data:{

labels:['Mon','Tue','Wed','Thu','Fri'],

datasets:[{

label:'Productivity',

data:[5,7,4,8,6]

}]

}

})

}

window.addEventListener("load",()=>{

document.getElementById("loader").style.display="none"

})

const tasks = document.querySelectorAll(".task")
const columns = document.querySelectorAll(".column")

tasks.forEach(task => {

task.addEventListener("dragstart", () => {

task.classList.add("dragging")

})

task.addEventListener("dragend", () => {

task.classList.remove("dragging")

})

})

columns.forEach(column => {

column.addEventListener("dragover", e => {

e.preventDefault()

const dragging = document.querySelector(".dragging")

column.appendChild(dragging)

})

})