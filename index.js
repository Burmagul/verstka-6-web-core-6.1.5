// тест
const ANSWER = require('./module.js');  
console.log('answeText', ANSWER);

import './scss/main.css';

// import Swiper from 'swiper/swiper-bundle';
import Swiper from 'swiper';


// swiper
const mySwiper = new Swiper(".mySwiper", {
slidesPerView: 1,
keyboard: {
    enabled: true,
},
pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});

const mySwiper2 = new Swiper(".mySwiper2", {
slidesPerView: 1,
keyboard: {
    enabled: true,
},
pagination: {
    el: ".swiper-pagination2",
    clickable: true,
},
});

const mySwiper3 = new Swiper(".mySwiper3", {
slidesPerView: 1,
keyboard: {
    enabled: true,
},
pagination: {
    el: ".swiper-pagination3",
    clickable: true,
},
});

const mySwiper4 = new Swiper(".mySwiper4", {
slidesPerView: 1,
keyboard: {
enabled: true,
},
pagination: {
    el: ".swiper-pagination4",
    clickable: true,
},
});



// логика для #################### "Показать все" #######################

const button = document.querySelector('.main__body-reed-showContainer2');
let isOpen = false;

const svgImage = document.createElement('img');
svgImage.src = './icons/icon.svg';

button.addEventListener("click", function () {
    const openCloseContainers = document.querySelectorAll('.swiper-slide');
    const wrapperContainers = document.querySelectorAll('.swiper-wrapper');
    
    if (openCloseContainers) {
        openCloseContainers.forEach(container => {
            container.classList.toggle('opened', !isOpen);
        });
    }

    if (wrapperContainers) {
        wrapperContainers.forEach(container => {
            container.classList.toggle('opened', !isOpen);
        });
    }
    
    button.innerHTML = isOpen ? `${svgImage.outerHTML} &nbsp; &nbsp; &nbsp; Показать все` : ` &nbsp; &nbsp;${svgImage.outerHTML} &nbsp; &nbsp; &nbsp; &nbsp; Скрыть`;

    isOpen = !isOpen;
});



// modalka menu   №№№№№№№№№№№№№№№№№№№№№     асновная модалка     №№№№№№№№№№№№№№№№№№№№№№

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.main__body-menuButton');
    const modalkaOne = document.querySelector('.main__header-menuModal');
    const headerIcons = document.querySelector('.main__headerIcons');
    const body = document.querySelector('.main__body');
    const modalkaOneClose = document.querySelector('.menuModal-closeBtn');

    menuButton.addEventListener('click', function () {
        if (modalkaOne) {
            modalkaOne.style.display = 'block';
            headerIcons.style.display = 'none';
            body.style.display = 'none';
        } else {
            console.error('Модальное окно не найдено');
        }
    });

    modalkaOneClose.addEventListener('click', function () {
        if (modalkaOne) {
            modalkaOne.style.display = 'none';
            headerIcons.style.display = 'flex';
            body.style.display = 'block';
        }
    });
});


// modalka menu  ################  telefon call modal 1  ###############################

document.addEventListener('DOMContentLoaded', function () {

    const callButton1 = document.querySelector('.main__header-menuModal-contact-chatTel');
    const callContainer=document.querySelector('.main__header-menuModal-contact-call')
    const modalkaOne = document.querySelector('.main__header-menuModal');
    
    callButton1.addEventListener('click', function() {
        if (callContainer) {
            callContainer.style.display = 'block';
            modalkaOne.style.display='none';
            
        } else {
            console.error('Модальное окно не найдено');
        }
    });
    
    const callClose=document.querySelector('.main__header-menuModal-contact-call-close');
    
    callClose.addEventListener('click', function() {
        if (callContainer) {
            callContainer.style.display = 'none'; 
            modalkaOne.style.display='block';
    }
   }
   )
    })

// modalka menu  ################  telefon call modal 2  ###############################



document.addEventListener('DOMContentLoaded', function () {

    const callButton = document.querySelector('.main__header-menuModal-contact-messageTel');
    const chatContainer = document.querySelector('.menuModal-contact-container');
    const mainmodalkaOne = document.querySelector('.main__header-menuModal');

    callButton.addEventListener('click', function () {
        if (chatContainer) {
            chatContainer.style.display = 'block';
            mainmodalkaOne.style.display = 'none';
        } else {
            console.error('Модальное окно не найдено');
        }
    });

    const callClose = document.querySelector('.menuModal-contact-container-iconClose');

    callClose.addEventListener('click', function () {
        if (chatContainer) {
            chatContainer.style.display = 'none';
            mainmodalkaOne.style.display = 'block'; 
        }
    });
});


//   ###########################   modal planshet ###################################

document.addEventListener('DOMContentLoaded', function () {

    const groupButton = document.querySelector('.main__body-menuButton1');
    const modalkaOne = document.querySelector('.main__header-menuModal');
    const destTopeCont=document.querySelector('.main__header-menuModal-deskTope-contact');
    const mainheader=document.querySelector('.main__header');
    const mainBody=document.querySelector('.main__body')

    groupButton.addEventListener('click', function() {
        if (modalkaOne) {
            modalkaOne.style.display = 'block';
            destTopeCont.style.display='none';
            mainheader.style.display='none';
            mainBody.style.display='none';
            
        } else {
            console.error('Модальное окно не найдено');
        }
    });
    
    const callClose=document.querySelector('.menuModal-closeBtn');
    
    callClose.addEventListener('click', function() {
        if (modalkaOne) {
            modalkaOne.style.display = 'none'; 
            destTopeCont.style.display='none';
            mainheader.style.display='block'
            mainBody.style.display='block';
    }
        })
    })

// ###############  desktop modal 2  ################




document.addEventListener('DOMContentLoaded', function () {
    const messageButton = document.querySelector('.main__header-menuModal-contact-message');
    const contactContainer = document.querySelector('.menuModal-contact-container');
const modalka = document.querySelector('.main__header-menuModal');
    
    
    messageButton.addEventListener('click', function() {
        if (contactContainer) {
        contactContainer.style.display = 'flex';
        } else {
        console.error('Модальное окно не найдено');
        }
    });
    
    const contactClose=document.querySelector('.akjolClose');
    
    contactClose.addEventListener('click', function() {
        if (contactContainer) {
            contactContainer.style.display = 'none'; 
            modalka.style.display='none';
    }
        })
 
    })



// ########################################### desktop modal 1 ########################################################
const modalkaOne = document.querySelector('.main__header-menuModal');

document.addEventListener('DOMContentLoaded', function () {

const callButtonDesk = document.querySelector('.main__header-menuModal-contact-chat');
const callContainer=document.querySelector('.main__header-menuModal-contact-call');
const callClose=document.querySelector('.main__header-menuModal-contact-call-close');


callButtonDesk.addEventListener('click', function() {
    if (callContainer) {
        callContainer.style.display = 'flex';
        callClose.style.display='none'
    } else {
        console.error('Модальное окно не найдено');
    }
});

const callClosebtn=document.querySelector('.main__header-menuModal-contact-call-closeBtn1');

callClosebtn.addEventListener('click', function() {
    if (callContainer) {
        callContainer.style.display = 'none'; 
        modalkaOne.style.display='none';
}
    })
})


