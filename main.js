
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const fades=document.querySelectorAll('.fade');
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.08});fades.forEach(el=>io.observe(el));}else{fades.forEach(el=>el.classList.add('visible'));}

const filterBtns=document.querySelectorAll('[data-filter]');
const pubs=document.querySelectorAll('.pub-item[data-type]');
const search=document.querySelector('#pub-search');
function applyPubFilters(){if(!pubs.length)return;const active=document.querySelector('[data-filter].active')?.dataset.filter||'all';const q=(search?.value||'').toLowerCase().trim();pubs.forEach(p=>{const type=p.dataset.type;const text=p.textContent.toLowerCase();p.hidden=!((active==='all'||type===active)&&(!q||text.includes(q)));});}
filterBtns.forEach(btn=>btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');applyPubFilters();}));
if(search)search.addEventListener('input',applyPubFilters);

const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=document.querySelector('#form-note');if(note){note.hidden=false;note.textContent='Form sending is intentionally disabled in this preview. Connect an IITG email/form endpoint before launch.';}})}
