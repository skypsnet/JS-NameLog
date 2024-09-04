const noLogin = document.getElementById("nologin");
const siLogin = document.getElementById("silogin");

window.addEventListener("load",(e)=>{

    if(this.localStorage.getItem("name") != null){
       noLogin.style.display = "none"
       siLogin.style.display = "block"
       siLogin.innerHTML = `Hola, ${this.localStorage.getItem("name")} bienvenido/a de nuevo`
    }


});