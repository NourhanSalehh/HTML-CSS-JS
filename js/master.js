// start settings box
//save color in local storage
let mainColor = localStorage.getItem("colors_option");

if (mainColor !== null){

    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("colors_option"));

document.querySelectorAll(".colors-list li").forEach( Element =>{

    Element.classList.remove("active");

    if(Element.dataset.color === mainColor){

        Element.classList.add("active");
    }
})    
};

//random background options
let randomBackground= true;

let backgroundInterval;

let backLocalItem = localStorage.getItem("randomBackground");

if (backLocalItem !== null){

    if (backLocalItem === "true"){

        randomBackground= true;

    }else{

        randomBackground= false;
    }

    document.querySelectorAll(".random-background span").forEach(element => {

        element.classList.remove("active");
    });

    if (backLocalItem === "true"){

        document.querySelector(".random-background .yes").classList.add("active");
        document.querySelector(".random-background .no").classList.add("active");
    }
}

// toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
    document.querySelector(".settings-box").classList.toggle("open");
    document.querySelector(".settings-box").classList.toggle("open");
};

//switch colors
const colorsLi=document.querySelectorAll(".Colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click" ,(e) => {

        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color);
    
    localStorage.setItem("colors_option" , e.target.dataset.color);

    activeClass(e);
    });
});
//switch random background option
const backgroundSwitch=document.querySelectorAll(".random-background span ");

backgroundSwitch.forEach(span => {

    span.addEventListener("click" ,(e) => {

    activeClass(e);

    if (e.target.dataset.background === 'yes'){

        randomBackground= true;

        randomizeImgs();

        localStorage.setItem("randomBackground" ,true);
        
    }else{
    
        randomBackground= false;

        clearInterval(backgroundInterval);

        localStorage.setItem("randomBackground" ,false);
    }
    });
});
//reset button 
document.querySelector(".reset-option").onclick =function () {

    localStorage.clear();

    window.location.reload();
}
// end settings box

// start landing
// landing background
let landingPage = document.querySelector(".landing-page");

let imagsArray = ["landing-1.jpg","landing-2.jpg","landing-3.jpg","landing-4.jpg","landing-5.jpg"];

function randomizeImgs(){

    if( randomBackground === true){

        backgroundInterval= setInterval(() => {

                let randomNum = Math.floor(Math.random() * imagsArray.length);
                landingPage.style.backgroundImage = 'url("imgs/'+imagsArray[randomNum]+'")';
            
            }, 6000);
    }
}
randomizeImgs()
// end landing

//start gallery
//create popup
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener("click" ,(e) => {

        let overlay = document.createElement("div");

        overlay.className = 'popup-overlay';

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");

        popupBox.className ='popup-box';

        if(img.alt !== null){

            let imageHeading = document.createElement("h3");

            let imgText = document.createTextNode(img.alt);

            imageHeading.appendChild(imgText);

            popupBox.appendChild(imageHeading);
        }

        let popupImage = document.createElement("img");

        popupImage.src= img.src;

        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeButtonText = document.createTextNode("X");

        closeButton.appendChild(closeButtonText);

        closeButton.className ='close-button';
        
        popupBox.appendChild(closeButton);
        
    });
    });

    document.addEventListener('click' , function (e){

        if(e.target.className === "close-button"){

            e.target.parentNode.remove();
        };
    });
//end gallery

// start bullets
const allBullets =document.querySelectorAll(".nav-bullets .bullet");
const allLinks =document.querySelectorAll(".landing-links a ");

function scrollToMain(elements) {
elements.forEach(ele =>{

    ele.addEventListener("click" , (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: "smooth"
        });
    });
});
}
scrollToMain(allBullets);
scrollToMain(allLinks);
//bullets option

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsNav = document.querySelector(".nav-bullets");

let bulletLocalAdd = localStorage.getItem("bullets-option");

if (bulletLocalAdd !== null){

    bulletsSpan.forEach(span => {

        span.classList.remove("active");
    });

    if(bulletLocalAdd === 'block'){

        bulletsNav.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    }else{

        bulletsNav.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpan.forEach(span =>{

    span.addEventListener("click" , (e) => {

        if(span.dataset.display === 'block'){

            bulletsNav.style.display = 'block';

            localStorage.setItem("bullets-option" , 'block');

        }else {

            bulletsNav.style.display = 'none';

            localStorage.setItem("bullets-option" , 'none');

        }

        activeClass(e);
    });
});
// end bullets

//active class function
function activeClass (ev){

ev.target.parentElement.querySelectorAll(".active").forEach( Element =>{

    Element.classList.remove("active");
})

// add active class on target
ev.target.classList.add("active");
}

//toggle menu
let toggleBtn =document.querySelector(".toggle-menu");
let toggleLinks =document.querySelector(".landing-links");

toggleBtn.onclick = function (e) {
    e.stopPropagation();

    this.classList.toggle("menu-active");

    toggleLinks.classList.toggle("open");
};

document.addEventListener("click" ,(e) =>{

    if (e.target !==toggleBtn && e.target !== toggleLinks){

        if (toggleLinks.classList.contains("open")){

            toggleBtn.classList.toggle("menu-active");

            toggleLinks.classList.toggle("open");
        }

    }
})

toggleLinks.onclick =function (e){
e.stopPropagation();
}