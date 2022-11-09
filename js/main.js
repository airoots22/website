let alturaActual = window.innerHeight;

setInterval(function(){
    let body = document.querySelector("body");
    body.style.height = body + "px";
},100)