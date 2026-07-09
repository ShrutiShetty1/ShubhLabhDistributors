/*=========================================
 SHUBH LABH DISTRIBUTIONS
 Premium Theme
=========================================*/

// Sticky Header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// Fade Animation
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

// Statistics Counter
const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const update=()=>{

const increment=Math.ceil(target/100);

if(count<target){

count+=increment;

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

// Back To Top Button
const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show-btn");

}else{

topBtn.classList.remove("show-btn");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});