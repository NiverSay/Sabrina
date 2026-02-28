/* CONFETE MELHORADO */

function confete(){
for(let i=0;i<60;i++){
setTimeout(()=>{
let conf=document.createElement("div");
conf.style.position="fixed";
conf.style.width="8px";
conf.style.height="8px";
conf.style.background=`hsl(${Math.random()*360},100%,60%)`;
conf.style.left=Math.random()*100+"vw";
conf.style.top="-10px";
conf.style.borderRadius="2px";
conf.style.transform=`rotate(${Math.random()*360}deg)`;
conf.style.transition="transform 3s linear, top 3s linear";
document.body.appendChild(conf);

setTimeout(()=>{
conf.style.top="110vh";
conf.style.transform+=" rotate(720deg)";
},50);

setTimeout(()=>conf.remove(),3000);
},i*50);
}
}

/* CONTADOR BONITO */

function iniciarContador(){
const birth=new Date("2026-03-01T00:00:00");

function atualizar(){
const now=new Date();
let diff=now-birth;

let dias=Math.floor(diff/(1000*60*60*24));
let horas=Math.floor((diff/(1000*60*60))%24);
let minutos=Math.floor((diff/(1000*60))%60);
let segundos=Math.floor((diff/1000)%60);

document.getElementById("contador").innerText=
`Você fez 18 anos há ${horas}h ${minutos}m ${segundos}s 💙`;
}

setInterval(atualizar,1000);
atualizar();
}

/* CARTA */

function abrirCarta(){
document.querySelector(".envelope").classList.toggle("open");
}

/* CORAÇÕES */

function iniciarCoracoes(){
setInterval(()=>{
let heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💗";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},800);
}



