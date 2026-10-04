const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('#navigation');
function closeMenu(){menu?.setAttribute('aria-expanded','false');nav?.classList.remove('open');menu?.setAttribute('aria-label','Open menu')}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();menu?.focus()}});
nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
const sequence=document.querySelector('.clarity-sequence');
const stage=document.querySelector('.hero-stage');
const object=document.querySelector('.sculpture-object');
document.querySelectorAll('.sheet').forEach((sheet,i)=>{const label=document.createElement('span');label.className='sculpture-service';const titles=['Business advisory','Tax planning','Bookkeeping','Payroll'];label.innerHTML='<small>THOUGHTFUL SUPPORT</small>'+titles[i];sheet.append(label)});
const steps=[...document.querySelectorAll('.step')];
const clamp=(x,min=0,max=1)=>Math.min(max,Math.max(min,x));
let ticking=false;
function draw(){
 ticking=false;
 const mobile=innerWidth<=760;
 if(sequence&&stage){
 const p=reduceMotion.matches||mobile?0:clamp(-sequence.getBoundingClientRect().top/(sequence.offsetHeight-stage.offsetHeight));
 stage.style.setProperty('--scene',p.toFixed(4));stage.style.setProperty('--service-reveal',clamp((p-.72)/.22));stage.style.setProperty('--hero-opacity',clamp(1-p*3.2));stage.style.setProperty('--note-opacity',clamp((p-.33)*2.7));
 const label=document.querySelector('.phase-label');if(label)label.textContent=p<.4?'01 — Perspective':p<.75?'02 — Organization':'03 — Clarity';
 }
 steps.forEach(step=>{const p=reduceMotion.matches?1:clamp((innerHeight*.8-step.getBoundingClientRect().top)/(innerHeight*.4));step.style.setProperty('--step-progress',p);step.classList.toggle('active',p>.15)});
}
function schedule(){if(!ticking){requestAnimationFrame(draw);ticking=true}}
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduceMotion.addEventListener('change',schedule);draw();
if(stage&&object&&matchMedia('(hover:hover) and (pointer:fine)').matches){stage.addEventListener('pointermove',e=>{if(reduceMotion.matches)return;object.style.setProperty('--pointer-x',`${(e.clientX/innerWidth-.5)*3}deg`);object.style.setProperty('--pointer-y',`${-(e.clientY/innerHeight-.5)*2}deg`)});stage.addEventListener('pointerleave',()=>{object.style.setProperty('--pointer-x','0deg');object.style.setProperty('--pointer-y','0deg')})}
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('active',entry.isIntersecting)),{threshold:.4});document.querySelectorAll('.value').forEach(el=>observer.observe(el));
const form=document.querySelector('#consultation');const success=document.querySelector('.form-success');
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;form.hidden=true;success.hidden=false;success.focus({preventScroll:true})});
document.querySelector('#reset-form')?.addEventListener('click',()=>{success.hidden=true;form.hidden=false;form.reset();form.querySelector('input').focus()});
