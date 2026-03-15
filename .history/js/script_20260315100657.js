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