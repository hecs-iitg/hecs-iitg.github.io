// HECS IITG two-logo institutional masthead.
// This is built from the existing navigation so every page stays consistent.
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const oldNav = header.querySelector('.nav-links');
  const navHTML = oldNav ? oldNav.innerHTML : '';
  document.querySelector('.utility')?.remove();

  header.innerHTML = `
    <div class="lab-masthead">
      <div class="container lab-masthead-inner">
        <a class="lab-emblem-link" href="index.html" aria-label="HECS IITG home">
          <img class="lab-emblem" src="hecs-iitg-icon.svg?v=20260903" alt="HECS IITG emblem">
        </a>
        <div class="lab-identity">
          <div class="lab-title">Hydrogen, Energy &amp; Combustion Systems Laboratory</div>
          <div class="lab-meta-line">
            <strong class="lab-acronym">HECS IITG</strong>
            <span class="lab-divider" aria-hidden="true"></span>
            <span class="lab-school">School of Energy Science and Engineering</span>
          </div>
          <a class="lab-institute" href="https://www.iitg.ac.in/" target="_blank" rel="noreferrer">Indian Institute of Technology Guwahati ↗</a>
        </div>
        <a class="iitg-brand-link" href="https://www.iitg.ac.in/" target="_blank" rel="noreferrer" aria-label="Indian Institute of Technology Guwahati website">
          <img class="iitg-brand" src="logo_IITG/IIT_Guwahati_idFJ5xOu5H_1.svg" alt="Indian Institute of Technology Guwahati logo">
        </a>
      </div>
    </div>
    <div class="lab-navrow">
      <div class="container lab-nav-inner">
        <nav class="nav-links" aria-label="Primary navigation">${navHTML}</nav>
        <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">Menu</button>
      </div>
    </div>`;

  const style = document.createElement('style');
  style.id = 'hecs-institutional-header-styles';
  style.textContent = `
    .utility{display:none!important}
    .site-header{position:sticky;top:0;z-index:80;background:#fff;border:0!important;box-shadow:0 1px 0 rgba(11,35,66,.10);backdrop-filter:none!important}
    .lab-masthead{max-height:148px;overflow:hidden;background:#fff;opacity:1;transition:max-height .38s ease,opacity .28s ease,transform .38s ease}
    .lab-masthead-inner{min-height:134px;display:grid;grid-template-columns:112px minmax(0,1fr) 112px;align-items:center;gap:22px;padding-top:10px;padding-bottom:10px}
    .lab-emblem-link{display:flex;align-items:center;justify-content:center;flex:0 0 auto}
    .lab-emblem{width:112px;height:112px;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(11,35,66,.08))}
    .lab-identity{min-width:0;display:flex;flex-direction:column;justify-content:center}
    .lab-title{color:#0B2342;font-size:clamp(1.55rem,2.15vw,2.12rem);font-weight:900;letter-spacing:-.035em;line-height:1.08;white-space:nowrap}
    .lab-meta-line{display:flex;align-items:center;gap:12px;margin-top:8px;min-width:0}
    .lab-acronym{color:#00A79D;font-size:.98rem;font-weight:900;letter-spacing:.115em;white-space:nowrap}
    .lab-divider{width:1px;height:18px;background:rgba(11,35,66,.20);flex:0 0 auto}
    .lab-school{color:#425866;font-size:.84rem;font-weight:750;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .lab-institute{display:inline-block;width:max-content;max-width:100%;margin-top:2px;color:#667984;font-size:.78rem;font-weight:650;transition:color .18s ease}
    .lab-institute:hover{color:#004E9B}
    .iitg-brand-link{display:flex;align-items:center;justify-content:flex-end;min-width:0;padding-left:22px;border-left:1px solid rgba(11,35,66,.14)}
    .iitg-brand{width:112px;height:112px;object-fit:contain;filter:drop-shadow(0 4px 12px rgba(11,35,66,.08))}
    .lab-navrow{background:linear-gradient(90deg,#0B2342 0%,#0D3449 62%,#0B4C56 100%);border-top:1px solid rgba(0,167,157,.14);box-shadow:0 4px 16px rgba(7,28,37,.08)}
    .lab-nav-inner{min-height:53px;display:flex;align-items:center;justify-content:flex-end;position:relative}
    .lab-navrow .nav-links{display:flex;align-items:center;gap:3px}
    .lab-navrow .nav-links a{color:#E5EFF1;background:transparent!important;border-radius:8px;padding:10px 11px;font-size:.86rem;font-weight:780;transition:color .18s ease,background .18s ease,transform .18s ease}
    .lab-navrow .nav-links a:hover{color:#fff;background:rgba(255,255,255,.08)!important;transform:translateY(-1px)}
    .lab-navrow .nav-links a.active{color:#fff;background:rgba(0,167,157,.22)!important}
    .lab-navrow .nav-links a:after{bottom:3px;background:linear-gradient(90deg,#61D7CE,#F59C00)}
    .lab-navrow .menu-toggle{display:none;color:#fff;border-color:rgba(255,255,255,.26);background:rgba(255,255,255,.08)}
    .site-header.is-scrolled .lab-masthead{max-height:0;opacity:0;transform:translateY(-8px)}
    .site-header.is-scrolled .lab-navrow{box-shadow:0 10px 28px rgba(7,28,37,.18)}
    .site-header.is-scrolled .lab-nav-inner{min-height:50px}
    .site-header.is-scrolled .nav{height:auto!important}

    @media(max-width:1120px){
      .lab-emblem{width:94px;height:94px}
      .lab-masthead-inner{min-height:116px;grid-template-columns:94px minmax(0,1fr) 94px;gap:17px}
      .lab-title{font-size:clamp(1.35rem,2.2vw,1.8rem)}
      .lab-school{font-size:.78rem}
      .iitg-brand-link{padding-left:17px}
      .iitg-brand{width:94px;height:94px}
      .lab-navrow .nav-links a{padding:9px 8px;font-size:.80rem}
    }
    @media(max-width:880px){
      .lab-masthead{max-height:128px}
      .lab-masthead-inner{min-height:112px;grid-template-columns:auto minmax(0,1fr) 82px;gap:14px;padding-top:8px;padding-bottom:8px}
      .lab-emblem{width:82px;height:82px}
      .lab-title{font-size:clamp(1.12rem,4vw,1.5rem);white-space:normal}
      .lab-meta-line{gap:8px;margin-top:6px;flex-wrap:wrap}
      .lab-school{white-space:normal;font-size:.73rem}
      .lab-institute{display:none}
      .iitg-brand-link{padding-left:12px}
      .iitg-brand{width:82px;height:82px;object-fit:contain}
      .lab-nav-inner{min-height:50px;justify-content:flex-end}
      .lab-navrow .menu-toggle{display:block!important}
      .lab-navrow .nav-links{display:none!important;position:absolute;z-index:100;top:calc(100% + 8px);left:0;right:0;flex-direction:column;align-items:stretch;gap:2px;padding:9px;background:#0B2342;border:1px solid rgba(255,255,255,.10);border-radius:14px;box-shadow:0 18px 45px rgba(7,28,37,.28)}
      .lab-navrow .nav-links.open{display:flex!important}
      .lab-navrow .nav-links a{width:100%;padding:11px 13px}
    }
    @media(max-width:560px){
      .lab-masthead{max-height:106px}
      .lab-masthead-inner{min-height:92px;grid-template-columns:60px minmax(0,1fr) 60px;gap:9px;padding-top:7px;padding-bottom:7px}
      .lab-emblem{width:60px;height:60px}
      .lab-title{font-size:clamp(.84rem,4.2vw,1.02rem);line-height:1.12}
      .lab-meta-line{margin-top:5px}
      .lab-acronym{font-size:.64rem;letter-spacing:.09em}
      .lab-divider,.lab-school{display:none}
      .iitg-brand-link{padding-left:8px}
      .iitg-brand{width:60px;height:60px}
    }
    @media(prefers-reduced-motion:reduce){
      .lab-masthead{transition:none}
    }`;
  document.head.appendChild(style);
})();

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
