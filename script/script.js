const bar = document.getElementById('bar');

const nav = document.getElementById('navbar');

const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function msgCart() {
    window.alert("Produto Adicionado ao Carrinho!")
}

/*------- VALIDATION AREA ENTER PAGE -------*/

const formEnter = document.getElementById('enterArea');
const emailEnter = document.getElementById("inputEmail");
const passEnter = document.getElementById("inputPass");

formEnter.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function openPage() {
    window.location.href = "../html/indexLogged.html"
};

const validateInputs = () => {
    const emailEnterValue = emailEnter.value.trim();
    const passEnterValue = passEnter.value.trim();

    if(emailEnterValue === '') {
        setError(emailEnter, "Insira seu e-mail");
    } else if (!isValidEmail(emailEnterValue)) {
        setError(emailEnter, "Forneça um e-mail válido");
    } else {
        setSuccess(emailEnter);
    }

    if (passEnterValue === '') {
    setError(passEnter, "Insira sua senha!");
    } else if (passEnterValue.length < 8) {
        setError(passEnter, "A senha tem no mínimo 8 caracteres");
        } else {
            setSuccess(passEnter)
        }

    if (emailEnterValue == "manoel.livros@email.com" && passEnterValue == "12345678") {
        openPage();
        } else {
            setError(passEnter, "Usuário ou senha inválidos");
            }
};

/*------- VALIDATION AREA REGISTER PAGE -------*/

const registerArea = document.getElementById("formRegister");
const registerEmail  = document.getElementById("userEmail");
const registerPass1 = document.getElementById("password1");
const registerPass2 = document.getElementById("password2");
const registerName = document.getElementById("userName");
const registerCpf = document.getElementById("clientCpf");
const registerRg = document.getElementById("clientRg");
const registerBirth = document.getElementById("clientBirth");
const registerPhone = document.getElementById("clientPhone");
const registerCep = document.getElementById("clientCep");

registerArea.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail2 = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputsRegister = () => {
    const registerEmailValue = registerEmail.value.trim();
    const registerPass1Value = registerPass1.value.trim();
    const registerPass2Value = registerPass2.value.trim();
    const registerNameValue = registerName.value.trim();
    const registerCpfValue = registerCpf.value.trim();
    const registerRgValue = registerRg.value.trim();
    const registerBirthValue = registerBirth.value.trim();
    const registerPhoneValue = registerPhone.value.trim();
    const registerCepValue = registerCep.value.trim();
    const standardName = /[^a-zà-ú]/gi;


    if (registerEmailValue === "") {
        setError(registerEmail, "Insira seu e-mail");
    } else if (!isValidEmail2(registerEmailValue)) {
        setError(registerEmail, "Insira um e-mail válido");
    } else {
        setSuccess(registerEmail);
    };

    if (registerPass1Value === "") {
        setError(registerPass1, "Insira uma senha");
    } else if (registerPass1.length < 8) {
        setError(registerPass1, "A senha deve ter no mínimo 8 caracteres");
    } else {
        setSuccess(registerPass1);
    };

    if (registerPass2Value === "") {
        setError(registerPass2, "Por favor, confirme sua senha");
    } else if (registerPass2 !== registerPass1) {
        setError(registerPass2, "As senhas não coincidem");
    } else {
        setSuccess(registerPass2);
    };

    if (registerNameValue === "") {
        setError(registerName, "Insira seu nome e sobrenome");
    } else {
        setSuccess(registerName);
    };

};






/*
const form = document.getElementById('form');
const fields = document.querySelectorAll(".required");
const username = document.getElementById("username");
const email = document.getElementById("userEmail");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const clientData = element.parentElement;
        const errorDisplay = clientData.querySelector('.error')

        errorDisplay.innerText = message;
        clientData.classList.add('error');
        clientData.classList.remove('success');
}

const setSuccess = element => {
    const clientData = element.parentElement;
    const errorDisplay = clientData.querySelector('.error');

    errorDisplay.innerText = '';
    clientData.classList.add('success');
    clientData.classList.remove('error');
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(userNameValue === '') {
        setError(username, "Requer um nome de usuário");
    } else {
        setSuccess(username);
    };

    if(emailValue === '') {
        setError(email, "Requer um E-mail");
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Insira um e-mail válido');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, "Requer um nome de usuário");
    } else if (passwordValue.length < 8){
        setError(password, "A senha deve ter no mínimo 8 caracteres");
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, "Requer uma senha");
    } else if (password2Value !== passwordValue){
        setError(password2, "As senhas não coincidem");
    } else {
        setSuccess(password2);
    }
};
*/