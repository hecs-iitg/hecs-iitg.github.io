const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});
  document.addEventListener('click',e=>{if(nav.classList.contains('open')&&!nav.contains(e.target)&&!toggle.contains(e.target)){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}});
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

// Scroll progress, compact header and back-to-top.
const progress=document.createElement('div');
progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.appendChild(progress);
const header=document.querySelector('.site-header');
const topButton=document.createElement('button');
topButton.type='button';topButton.className='back-to-top';topButton.setAttribute('aria-label','Back to top');topButton.textContent='↑';document.body.appendChild(topButton);
const updateScrollUI=()=>{
  const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  progress.style.transform=`scaleX(${Math.min(1,window.scrollY/max)})`;
  header?.classList.toggle('is-scrolled',window.scrollY>18);
  topButton.classList.toggle('show',window.scrollY>560);
};
window.addEventListener('scroll',updateScrollUI,{passive:true});updateScrollUI();
topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'}));

// Staggered section reveal.
const fades=[...document.querySelectorAll('.fade')];
fades.forEach((el,i)=>el.style.setProperty('--reveal-delay',`${Math.min((i%4)*85,255)}ms`));
if('IntersectionObserver' in window&&!reduceMotion){
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.09,rootMargin:'0px 0px -35px'});
  fades.forEach(el=>io.observe(el));
}else fades.forEach(el=>el.classList.add('visible'));

// Subtle hero particles, generated locally with no external dependency.
const particleHost=document.querySelector('.hero-particles');
if(particleHost&&!reduceMotion){
  const count=window.innerWidth<700?10:22;
  const colors=['rgba(35,199,189,.72)','rgba(0,78,155,.55)','rgba(245,156,0,.44)','rgba(255,255,255,.38)'];
  for(let i=0;i<count;i++){
    const p=document.createElement('i');p.className='hero-particle';
    const size=(2+Math.random()*5).toFixed(1)+'px';
    p.style.setProperty('--size',size);p.style.setProperty('--x',(4+Math.random()*92).toFixed(1)+'%');p.style.setProperty('--y',(5+Math.random()*88).toFixed(1)+'%');
    p.style.setProperty('--opacity',(0.18+Math.random()*.58).toFixed(2));p.style.setProperty('--blur',(Math.random()*1.2).toFixed(1)+'px');
    p.style.setProperty('--duration',(4.5+Math.random()*7).toFixed(1)+'s');p.style.setProperty('--delay',(-Math.random()*8).toFixed(1)+'s');
    p.style.setProperty('--particle-color',colors[i%colors.length]);particleHost.appendChild(p);
  }
}

// Pointer-responsive logo panel.
const logoPanel=document.querySelector('.hero-logo-panel');
if(logoPanel&&finePointer&&!reduceMotion){
  logoPanel.addEventListener('pointermove',e=>{
    const r=logoPanel.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;
    logoPanel.style.setProperty('--tilt-y',`${((x-.5)*7).toFixed(2)}deg`);logoPanel.style.setProperty('--tilt-x',`${((.5-y)*6).toFixed(2)}deg`);
  });
  logoPanel.addEventListener('pointerleave',()=>{logoPanel.style.setProperty('--tilt-x','0deg');logoPanel.style.setProperty('--tilt-y','0deg');});
}

// Clickable research themes in the hero.
const chips=[...document.querySelectorAll('.research-chip')];
const focusText=document.querySelector('.hero-focus-text');
const toneMap={teal:'#00A79D',orange:'#F59C00',blue:'#004E9B'};
chips.forEach(chip=>chip.addEventListener('click',()=>{
  chips.forEach(c=>c.classList.remove('active'));chip.classList.add('active');
  const tone=toneMap[chip.dataset.tone]||'#00A79D';logoPanel?.style.setProperty('--focus-color',tone);document.documentElement.style.setProperty('--focus-color',tone);
  if(focusText){focusText.classList.add('is-changing');setTimeout(()=>{focusText.textContent=chip.dataset.focus||chip.textContent;focusText.classList.remove('is-changing');},reduceMotion?0:150);}
}));

// Count-up for numeric research stats.
const countEls=[...document.querySelectorAll('.count-value[data-count]')];
const animateCount=el=>{const target=Math.max(0,Number(el.dataset.count)||0);if(reduceMotion){el.textContent=String(target);return;}const start=performance.now(),duration=900;const step=now=>{const t=Math.min(1,(now-start)/duration);const eased=1-Math.pow(1-t,3);el.textContent=String(Math.round(target*eased));if(t<1)requestAnimationFrame(step);};requestAnimationFrame(step);};
if('IntersectionObserver' in window){const cio=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){animateCount(e.target);cio.unobserve(e.target);}}),{threshold:.65});countEls.forEach(el=>{el.textContent='0';cio.observe(el);});}else countEls.forEach(animateCount);

// Lightweight 3D tilt + cursor spotlight on major cards.
const interactive=[...document.querySelectorAll('.pillar,.project-card,.pi-card,.feature-panel,.person-card,.contact-card')];
interactive.forEach(el=>el.classList.add('interactive-card'));
if(finePointer&&!reduceMotion){interactive.forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;el.style.setProperty('--mx',`${(x*100).toFixed(1)}%`);el.style.setProperty('--my',`${(y*100).toFixed(1)}%`);el.style.transform=`perspective(900px) rotateX(${((.5-y)*2.8).toFixed(2)}deg) rotateY(${((x-.5)*3.2).toFixed(2)}deg) translateY(-3px)`;});
  el.addEventListener('pointerleave',()=>{el.style.transform='';});
});}

// Button click ripple.
document.querySelectorAll('.btn').forEach(btn=>btn.addEventListener('pointerdown',e=>{if(reduceMotion)return;const r=btn.getBoundingClientRect();const ripple=document.createElement('span');ripple.className='ripple';ripple.style.left=`${e.clientX-r.left}px`;ripple.style.top=`${e.clientY-r.top}px`;btn.appendChild(ripple);setTimeout(()=>ripple.remove(),700);}));

// Publications filtering/search.
const filterBtns=document.querySelectorAll('[data-filter]');
const pubs=document.querySelectorAll('.pub-item[data-type]');
const search=document.querySelector('#pub-search');
function applyPubFilters(){if(!pubs.length)return;const active=document.querySelector('[data-filter].active')?.dataset.filter||'all';const q=(search?.value||'').toLowerCase().trim();pubs.forEach(p=>{const type=p.dataset.type;const text=p.textContent.toLowerCase();p.hidden=!((active==='all'||type===active)&&(!q||text.includes(q)));});}
filterBtns.forEach(btn=>btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');applyPubFilters();}));
if(search)search.addEventListener('input',applyPubFilters);

const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=document.querySelector('#form-note');if(note){note.hidden=false;note.textContent='Form sending is intentionally disabled in this preview. Connect an IITG email/form endpoint before launch.';}})}
