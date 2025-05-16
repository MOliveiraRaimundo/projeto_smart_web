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

const mobileMenu = document.querySelector(".mobile-menu")
const nav = document.querySelector(".nav")


const cards1 = document.querySelector(".cards1")
const cards2 = document.querySelector(".cards2")
const cards3 = document.querySelector(".cards3")
const cards4 = document.querySelector(".cards4")
const cards5 = document.querySelector(".cards5")
const cards6 = document.querySelector(".cards6")
const cards7 = document.querySelector(".cards7")

const btnFechar = document.querySelectorAll(".btnFechar")


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

function mostrarCard(card) {
    card.style.left = "340px";
    mascara.style.visibility = "visible";
  }
  
  function esconderCard(card) {
    card.style.left = "-1000px";
    mascara.style.visibility = "hidden";
  }

  btnGabriel.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarCard(cards1);
  });

  btnCarol.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarCard(cards2);
  });

btnLucas.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCard(cards3);
})

btnMichael.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCard(cards4);
})

btnGleice.addEventListener("click", (e) =>{
    e.preventDefault()
    mostrarCard(cards5);
})   
btnAlessandro.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarCard(cards6);
})
btnFechar.forEach(botao =>{
    botao.addEventListener("click", (e) =>{
        e.preventDefault();
        botao.closest(".cards1, .cards2, .cards3, .cards4, .cards5, .cards6, .cards7").style.left = "-1000px";
        mascara.style.visibility = "hidden";
    })
})

//RESPONSIVO MENU//

mobileMenu.addEventListener("click", (e) =>{
    e.preventDefault()
    nav.classList.toggle("active")
    
})

// Carrossel automático
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos slides do carrossel
    const slidesData = [
        {
            title: "Smart Web",
            subtitle: "Transforme sua ideia em realidade agora!",
            text: "Estamos prontos para ajudar sua empresa a alcançar novos horizontes, inovando e ampliando suas possibilidades. Juntos, podemos fazer o impossível se tornar possível. Fale conosco e descubra como podemos realizar o seu sonho com a força da tecnologia!",
            image: "./assets/banner-img - Copia.jpg"
        },
        {
            title: "Desenvolvimento Web",
            subtitle: "Soluções personalizadas para o seu negócio",
            text: "Criamos sites responsivos e modernos que se adaptam a qualquer dispositivo. Nossa equipe utiliza as melhores tecnologias do mercado para garantir eficiência, segurança e uma excelente experiência ao usuário.",
            image: "./assets/site-loja.png"  //Substitua pelo caminho da sua segunda imagem
        },
        {
            title: "Marketing Digital",
            subtitle: "Aumente sua presença online",
            text: "Estratégias completas de marketing digital para impulsionar sua marca na internet. Trabalhamos com SEO, redes sociais e campanhas digitais para aumentar seu alcance e converter visitantes em clientes.",
            image: "./assets/marketing-digital.jpg" // Substitua pelo caminho da sua terceira imagem
        }
    ];
    
    // Elementos do DOM
    const titleElement = document.querySelector('.main-banner .title');
    const subtitleElement = document.querySelector('.main-banner .sub-title-main');
    const textElement = document.querySelector('.main-banner .text-main');
    const imageElement = document.getElementById('img-carrossel');
    
    let currentSlideIndex = 0;
    
    // Função para atualizar o slide
    function updateSlide(index) {
        // Aplicar fadeOut
        titleElement.style.opacity = 0;
        subtitleElement.style.opacity = 0;
        textElement.style.opacity = 0;
        imageElement.style.opacity = 0;
        
        // Esperar um pouco antes de atualizar o conteúdo
        setTimeout(() => {
            const slide = slidesData[index];
            
            // Atualizar conteúdo
            titleElement.textContent = slide.title;
            subtitleElement.textContent = slide.subtitle;
            textElement.textContent = slide.text;
            imageElement.src = slide.image;
            
            // Aplicar fadeIn
            titleElement.style.opacity = 1;
            subtitleElement.style.opacity = 1;
            textElement.style.opacity = 1;
            imageElement.style.opacity = 1;
        }, 500);
    }
    
    // Função para avançar para o próximo slide
    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slidesData.length;
        updateSlide(currentSlideIndex);
    }
    
    // Iniciar o carrossel automático
    setInterval(nextSlide, 5000); // Muda slide a cada 5 segundos
});





