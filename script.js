
const body = document.getElementsByName("body") 

const toggle = document.getElementById("darkMode") 

let darkMode = false

toggle.addEventListener("change",() =>{
    darkMode = !darkMode
    
    if(darkMode==true){
        document.body.classList.add("active")
    }
    else{
        document.body.classList.remove("active")
    }
})


