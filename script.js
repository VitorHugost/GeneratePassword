let inputRange = document.querySelector("#sizePassword");
let button = document.querySelector("#button")

let qntCaracteres = document.querySelector("#valor");
let password = document.querySelector("#password");
let container_password = document.querySelector("#container-password");

let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmonpqrstuvwxyz123456789@!#"
let novaSenha = ""

inputRange.oninput = ()=>{qntCaracteres.innerHTML = inputRange.value}

button.addEventListener("click",geraSenha)

function geraSenha(){
    let pass = ""
    for(let i = 0,n = caracteres.length; i < inputRange.value;++i){
      pass = pass + caracteres.charAt(Math.floor(Math.random() * n))  
    }

    container_password.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass
    
}
function copy(){
    navigator.clipboard.writeText(novaSenha)
}