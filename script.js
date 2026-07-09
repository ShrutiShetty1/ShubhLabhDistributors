/*==============================
SHUBH LABH DISTRIBUTIONS
Premium Theme
==============================*/

/* Sticky Header */

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.08)";

        document.querySelectorAll(".menu a").forEach(link => {
            link.style.color = "#0B2D5C";
        });

        document.querySelector(".logo-text h2").style.color = "#0B2D5C";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";

        document.querySelectorAll(".menu a").forEach(link => {
            link.style.color = "#ffffff";
        });

        document.querySelector(".logo-text h2").style.color = "#ffffff";

    }

});

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* Fade In Animation */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

/* Counter Animation */

const counters=document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace(/\D/g,'');

const count=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/100);

if(count<target){

counter.setAttribute("data-count",count+increment);

counter.innerText=(count+increment)+"+";

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

}

update();

});

/* Back To Top Button */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});