const nameInput = document.getElementById("nameinp");
const btnInput = document.getElementById("saveinp");
const delInput = document.getElementById("borrarname")

btnInput.addEventListener("click",(e)=>{
   e.preventDefault()
   localStorage.setItem("name",nameInput.value);
   nameInput.value = ""

})

delInput.addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.clear()
})

