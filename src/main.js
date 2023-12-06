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

/*let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');

let usuario = document.querySelector('#usuarioCad');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;
let validNome = false;

let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmSenha');

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirmSenha');
let labelConfirmSenha = document.querySelector('#labelConfirmSenha');
let validConfirmSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.style.color = 'red';
    labelNome.textContent = 'Nome *Insira no mínimo 3 caracteres';
    nome.style.borderColor = 'red';
    validNome = false;
  } else {
    labelNome.style.color = 'green';
    labelNome.textContent = 'Nome';
    nome.style.borderColor = 'green';
    validNome = true;
  }
});

usuario.addEventListener('keyup', () => {
  if (usuario.value.length <= 4) {
    labelUsuario.style.color = 'red';
    labelUsuario.textContent = 'Usuário *Insira no mínimo 5 caracteres';
    usuario.style.borderColor = 'red';
    validUsuario = false;
  } else {
    labelUsuario.style.color = 'green';
    labelUsuario.textContent = 'Usuário';
    usuario.style.borderColor = 'green';
    validUsuario = true;
  }
});

senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.style.color = 'red';
    labelSenha.textContent = 'Senha *Insira no mínimo 6 caracteres';
    senha.style.borderColor = 'red';
    validSenha = false;
  } else {
    labelSenha.style.color = 'green';
    labelSenha.textContent = 'Senha';
    senha.style.borderColor = 'green';
    validSenha = true;
  }
});

confirmSenha.addEventListener('keyup', () => {
  if (senha.value !== confirmSenha.value) {
    labelConfirmSenha.style.color = 'red';
    labelConfirmSenha.textContent = 'Confirmar Senha *As senhas não conferem';
    confirmSenha.style.borderColor = 'red';
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.style.color = 'green';
    labelConfirmSenha.textContent = 'Confirmar senha';
    confirmSenha.style.borderColor = 'green';
    validConfirmSenha = true;
  }
});

function login() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    msgSuccess.style.display = 'block';
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>';
    msgError.style.display = 'none';
    msgError.innerHTML = '';

    setTimeout(() => {
      window.location.href = 'https://cdpn.io/thicode/debug/ZELzYxV/dXAqBaRyvwJk';
    }, 3000);
  } else {
    msgError.style.display = 'block';
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de logar</strong>';
    msgSuccess.innerHTML = '';
    msgSuccess.style.display = 'none';
  }
}

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirmSenha');

  if (inputConfirmSenha.getAttribute('type') === 'password') {
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  }
});*/

const mode = docuent.getElementById('mode_icon');

mode.addEventListener('click', () => {
  const form = document.getElementById('login_form');
  if(mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

      form.classList.add('dark');
    return
  }

  mode.classList.add('fa-moon');
  mode.classList.remove('fa-sun');
  form.classList.remove('dark');
});

