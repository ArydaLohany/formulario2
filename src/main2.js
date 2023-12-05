/*document.addEventListener('DOMContentLoaded', function() {

const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide"); // Use querySelectorAll


formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input[type='password']"); // Select password input
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

formOpenBtn.addEventListener("click", () => {
    formContainer.classList.add("active");
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

formCloseBtn.addEventListener("click", () => {
    formContainer.classList.remove("active");
});
});*/

let btn = document.querySelector('#verSenha')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenhasetAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#verConfirmSenha')
btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')  
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

function cadastrar(){
    alert('clicado')
}