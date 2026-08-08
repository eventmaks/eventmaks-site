const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelectorAll('.desktop-nav a,.header-cta');
const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>24);
onScroll();window.addEventListener('scroll',onScroll,{passive:true});
toggle?.addEventListener('click',()=>{const open=header.classList.toggle('menu-active');document.body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));});
navLinks.forEach(link=>link.addEventListener('click',()=>{header.classList.remove('menu-active');document.body.classList.remove('menu-open');toggle?.setAttribute('aria-expanded','false');}));

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const items=[...document.querySelectorAll('.gallery-item')];
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox.querySelector('img');
let current=0;
function show(index){current=(index+items.length)%items.length;lightboxImg.src=items[current].dataset.full;lightbox.hidden=false;document.body.classList.add('lightbox-open');}
function close(){lightbox.hidden=true;lightboxImg.src='';document.body.classList.remove('lightbox-open');}
items.forEach((item,i)=>item.addEventListener('click',()=>show(i)));
lightbox.querySelector('.lightbox-close').addEventListener('click',close);
lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>show(current-1));
lightbox.querySelector('.lightbox-next').addEventListener('click',()=>show(current+1));
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close();});
document.addEventListener('keydown',e=>{if(lightbox.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1);});
