const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const nascimento = document.getElementById('nascimento')
const telefone = document.getElementById('telefone')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = username.value.trim()
    const cpfValue = cpf.value.trim()
    const nascimentoValue = nascimento.value.trim()
    const telefoneValue = telefone.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
    }

    if(nascimentoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(nascimento, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(nascimento)
    }
   
    if(telefoneValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(telefone, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(telefone)
    }

    if(cpfValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cpf, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cpf)
    }


    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length > 4) { 
        setErrorFor(password, 'Senha deve ser apenas 4 caracteres')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}

