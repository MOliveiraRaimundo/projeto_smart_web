const form = document.querySelector("#contato-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const messageText = document.querySelector("#message")
const btnEnviar = document.querySelector("#btn-enviar")
const msgFeedback = document.querySelector("#msgFeedBack")
const descricao = document.querySelector(".descricao")
const btnGabriel = document.querySelector("#btnGabriel")
const btnCarol = document.querySelector("#btnCarol")
const btnIngrid = document.querySelector("#btnIngrid")
const btnLucas = document.querySelector("#btnLucas")
const btnMichael = document.querySelector("#btnMichael")
const btnGleice = document.querySelector("#btnGleice")
const btnAlessandro = document.querySelector("#btnAlessandro")
const positionCards = document.querySelector(".positionCards")
const mascara = document.querySelector("#mascara")


const cards1 = document.querySelector(".cards1")
const cards2 = document.querySelector(".cards2")
const cards3 = document.querySelector(".cards3")
const cards4 = document.querySelector(".cards4")
const cards5 = document.querySelector(".cards5")
const cards6 = document.querySelector(".cards6")
const cards7 = document.querySelector(".cards7")

const btnFechar = document.querySelector(".btnFechar")


function enviarContato(){
    const nameInputValue = nameInput.value
    const emailInputValue = emailInput.value
    const messageTextValue = messageText.value 

    if(nameInput.value === "" || emailInput.value === "" || messageText.value ===""){
        return msgFeedback.innerHTML = `<p> Por favor, preencha todos os campos...</p>`
    }       
     msgFeedback.innerHTML = `<p> Agradecemos o seu contato ${nameInputValue}</p>`
 
    nameInput.value = "";
    emailInput.value = "";
    messageText.value = "";  

    
    setTimeout(() =>{
        msgFeedback.innerHTML = ``
    },3000)    
}
function isEmailValid(email){
    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,}$/);

    if(emailRegex.test(email)){
        return true;
    }

    return false
}
btnEnviar.addEventListener("click", (e) =>{
    e.preventDefault();
    enviarContato();
    isEmailValid(email);
});

const mostrarCards1 = () =>{
    cards1.style.left = "340px";
    mascara.style.visibility = "visible";    
}
const mostrarCards2 = () =>{
    cards2.style.left = "340px";
    mascara.style.visibility = "visible";
}
const mostrarCards3 = () =>{
    cards3.style.left = "340px";
    mascara.style.visibility = "visible";
}

const mostrarCards4 = () =>{
    cards4.style.left = "340px";
    mascara.style.visibility = "visible";
}
const mostrarCards5 = () =>{
    cards5.style.left = "340px";
    mascara.style.visibility = "visible";
}
const mostrarCards6 = () =>{
    cards6.style.left = "340px";
    mascara.style.visibility = "visible";
}
const mostrarCards7 = () =>{
    cards7.style.left = "340px";
    mascara.style.visibility = "visible";
}


const fecharCars = () =>{
    positionCards.style.left = "-2000px";
}
btnGabriel.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarCards1()
})

btnCarol.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarCards2()
})

btnIngrid.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCards3();
})

btnLucas.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCards4();
})

btnMichael.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCards5();
})

btnGleice.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCards6();
})   
btnAlessandro.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarCards7();
})
btnFechar.addEventListener("click", (e) =>{
   fecharCars()
   mascara.style.visibility = "hidden"
})