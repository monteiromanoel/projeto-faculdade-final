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

const registerArea = document.getElementById('formRegister');
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

const setError2 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess2 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

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
    const standardName = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;


    if (registerEmailValue === "") {
        setError2(registerEmail, "Insira seu e-mail");
    } else if (!isValidEmail2(registerEmailValue)) {
        setError2(registerEmail, "Insira um e-mail válido");
    } else {
        setSuccess2(registerEmail);
    };
    
    if (registerPass1Value === "") {
        setError2(registerPass1, "Insira uma senha");
    } else if (registerPass1Value.length < 8) {
        setError2(registerPass1, "A senha deve ter no mínimo 8 caracteres");
    } else {
        setSuccess2(registerPass1);
    };

    if (registerPass2Value === "") {
        setError2(registerPass2, "Por favor, confirme sua senha");
    } else if (registerPass2Value !== registerPass1) {
        setError2(registerPass2, "As senhas não coincidem");
    } else {
        setSuccess2(registerPass2);
    };

    if (registerNameValue === "") {
        setError2(registerName, "Insira seu nome e sobrenome");
    } else if (!registerNameValue.match(standardName)){
        setError2(registerName, "Nome e/ou Sobrenome Inválidos");
    } else {
        setSuccess2(registerName);
    };

    if (registerCpfValue === "") {
        setError2(registerCpf, "Insira seu CPF");
    } else if (registerCpfValue.length < 11) {
        setError2(registerCpf, "Número de CPF inválido, insira novamente.")
    } else {
        setSuccess2(registerCpf);
    };
};

