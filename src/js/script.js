const form = document.querySelector("#contato-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageText = document.querySelector("#message")
const btnEnviar = document.querySelector("#btn-enviar")
const msgFeedback = document.querySelector("#msgFeedBack")


function enviarContato(){
    const nameInputValue = nameInput.value
    const emailInputValue = emailInput.value
    const messageTextValue = messageText.value 


    if(!nameInput.value)return
    if(!isEmailValid(emailInput.value))return
    if(!messageText.value)return


    msgFeedback.innerHTML = `<p> Agradecemos o seu contato ${nameInputValue}</p>`

    nameInputValue = "";
    emailInputValue = "";
    messageTextValue = "";
}

function isEmailValid(email){
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,}$/);


    if(emailRegex.test(email)){
        return true;
    }
        
    return false;
    
}

form.addEventListener("click", (e) =>{
    e.preventDefault();
    enviarContato();
    isEmailValid(email);
    
});


