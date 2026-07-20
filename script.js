// =========================================
// SHUBH LABH DISTRIBUTIONS
// Premium Website Script
// =========================================

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// =========================================
// Back To Top Button
// =========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 400) {
        topBtn.classList.add("show-btn");
    } else {
        topBtn.classList.remove("show-btn");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================================
// Scroll Animation
// =========================================

const sections = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// =========================================
// Active Menu
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});

// =========================================
// Smooth Scrolling
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("nav-links");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

}// EmailJS Configuration

(function(){

    emailjs.init("vhJD7jOsmCgKUpmMi");

})();



document.getElementById("contact-form")
?.addEventListener("submit", function(event){

    event.preventDefault();


    emailjs.sendForm(
        "service_tgvz9ub",
        "template_jtl6zlm",
        this
    )

    .then(function(){

        alert("Thank you! Your message has been sent successfully.");

        document.getElementById("contact-form").reset();

    },function(error){

        alert("Failed to send message. Please try again.");

        console.log(error);

    });

});

/* ===========================
   CAREER FORM
=========================== */

const careerForm = document.getElementById("career-form");

if (careerForm) {

    careerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_tgvz9ub",
            "template_eiq1f0f",
            this
        )
        .then(function() {

            alert("Thank you! Your job application has been submitted successfully.");

            careerForm.reset();

        })
        .catch(function(error) {

            console.log(error);
            alert("Failed to submit application. Please try again.");

        });

    });

}
function openGallery() {
    document.getElementById("galleryPopup").style.display = "flex";
}

function closeGallery() {
    document.getElementById("galleryPopup").style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("galleryPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-image");

if (modal && modalImg && closeBtn) {

    document.querySelectorAll(".product-card img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

}
/*
// =================================
// WELCOME + MAP + TRUCK ANIMATION
// =================================


document.addEventListener("DOMContentLoaded",()=>{


const greetings=[

"Welcome",

"नमस्ते",

"ನಮಸ್ಕಾರ",

"வணக்கம்",

"నమస్కారం",

"സ്വാഗതം",

"স্বাগতম",

"નમસ્તે"

];


const welcome=document.getElementById("welcomeText");

const splash=document.getElementById("splash");

const homepage=document.getElementById("homepage");

const route=document.getElementById("routePath");

const truck=document.getElementById("truckGroup");


let i=0;



function showGreeting(){


if(i < greetings.length){


welcome.style.opacity=0;


setTimeout(()=>{


welcome.innerHTML=greetings[i];

welcome.style.opacity=1;


i++;


},300);



}

else{


startMap();


}


}



let interval=setInterval(()=>{


showGreeting();


if(i>greetings.length){

clearInterval(interval);

}


},700);





function startMap(){



// draw route


let length=route.getTotalLength();


route.style.strokeDasharray=length;

route.style.strokeDashoffset=length;



route.animate(

[

{

strokeDashoffset:length

},

{

strokeDashoffset:0

}

],

{

duration:5000,

fill:"forwards"

}

);





moveTruck();



}





function moveTruck(){


let length=route.getTotalLength();


let start=null;


truck.style.opacity=1;



function animate(time){


if(!start)

start=time;



let progress=(time-start)/5000;



if(progress>1)

progress=1;



let point=route.getPointAtLength(

length*progress

);



let next=route.getPointAtLength(

Math.min(length,length*progress+5)

);



let angle=Math.atan2(

next.y-point.y,

next.x-point.x

)*180/Math.PI;



truck.setAttribute(

"transform",

`translate(${point.x},${point.y}) rotate(${angle})`

);



if(progress<1)

requestAnimationFrame(animate);



}



requestAnimationFrame(animate);





setTimeout(()=>{


splash.style.opacity=0;


setTimeout(()=>{


splash.style.display="none";


homepage.style.opacity=1;



},1000);



},5500);



}



});

/*
// =========================================
// MULTI LANGUAGE WELCOME + MAP INTRO
// =========================================

document.addEventListener("DOMContentLoaded",()=>{


const greetings=[

"Welcome",
"नमस्ते",
"ನಮಸ್ಕಾರ",
"வணக்கம்",
"నమస్కారం",
"സ്വാഗതം",
"স্বাগতম",
"નમસ્તે"

];


const welcome=document.getElementById("welcomeText");

const splash=document.getElementById("splash");

const homepage=document.getElementById("homepage");

const route=document.getElementById("routePath");

const truck=document.getElementById("truck");


if(homepage){

homepage.style.opacity="0";

}


let index=0;


function changeGreeting(){


if(index < greetings.length){


welcome.style.opacity="0";


setTimeout(()=>{


welcome.innerHTML=greetings[index];

welcome.style.opacity="1";


index++;


},300);


}

else{


startMapAnimation();


}

}


let greetingInterval=setInterval(()=>{


changeGreeting();


if(index>greetings.length){

clearInterval(greetingInterval);

}


},700);





function startMapAnimation(){



// show map

document.getElementById("mapIntro").style.display="block";



// route drawing

if(route){


let length=route.getTotalLength();


route.style.strokeDasharray=length;

route.style.strokeDashoffset=length;


route.animate(

[

{strokeDashoffset:length},

{strokeDashoffset:0}

],

{

duration:5000,

fill:"forwards"

}

);


}



// truck movement

if(truck){


truck.animate(

[

{
transform:"translate(0,0)"
},

{
transform:"translate(350px,-300px)"
}

],

{

duration:5000,

easing:"ease-in-out",

fill:"forwards"

}

);


}



setTimeout(()=>{


splash.style.opacity="0";


setTimeout(()=>{


splash.style.display="none";


homepage.style.opacity="1";


homepage.style.transition="opacity 1s ease";


},800);



},5500);



}



});*/

document.addEventListener("DOMContentLoaded", () => {

    const greetings = [
        "Welcome",
        "नमस्ते",
        "ನಮಸ್ಕಾರ",
        "வணக்கம்",
        "నమస్కారం",
        "സ്വാഗതം",
        "স্বাগতম",
        "નમસ્તે"
    ];

    const welcome = document.getElementById("welcomeText");
    const splash = document.getElementById("splash");

    let i = 0;

    welcome.textContent = greetings[0];

    const changeText = setInterval(() => {

        i++;

        if(i < greetings.length){

            welcome.style.opacity = 0;
welcome.style.transform = "translateY(8px)";

setTimeout(() => {
    welcome.textContent = greetings[i];
    welcome.style.opacity = 1;
    welcome.style.transform = "translateY(0)";
}, 200);

        }else{

    clearInterval(changeText);

    setTimeout(() => {

        const welcomeStage = document.getElementById("welcomeStage");
        const indiaStage = document.getElementById("indiaStage");
        

        welcomeStage.style.opacity = "0";

        setTimeout(() => {

            welcomeStage.style.display = "none";

            indiaStage.classList.add("show");

            

            startTruck();

        },600);

    },500);

}

    },700);
    
    welcome.style.opacity = 0;
    welcome.style.transform = "translateY(8px)";
    

setTimeout(() => {
    welcome.textContent = greetings[i];
    welcome.style.opacity = 1;
    welcome.style.transform = "translateY(0)";
}, 200);

});

function startTruck() {

    const truck = document.getElementById("truck");

    truck.animate(
        [
            { transform: "translate(40px,420px)" },
            { transform: "translate(320px,40px)" }
        ],
        {
            duration: 4200,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    setTimeout(() => {

        const splash = document.getElementById("splash");

        splash.style.opacity = "0";

        setTimeout(() => {

            splash.style.display = "none";

        }, 800);

    }, 5200);

}*/
        





    
        