const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

document.querySelectorAll('.listen').forEach(button=>button.addEventListener('click',()=>{
  if(!('speechSynthesis' in window))return;
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(button.dataset.speak||'');
  utterance.lang='es-AR';utterance.rate=.96;speechSynthesis.speak(utterance);
}));

const topButton=document.querySelector('.to-top');
window.addEventListener('scroll',()=>topButton?.classList.toggle('visible',scrollY>700),{passive:true});
topButton?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

const reflection=document.querySelector('.reflection textarea');
if(reflection){reflection.value=localStorage.getItem('kit-uncuyo-reflexion')||'';reflection.addEventListener('input',()=>localStorage.setItem('kit-uncuyo-reflexion',reflection.value));}
