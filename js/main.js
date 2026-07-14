(function(){
'use strict';

// preloader
window.addEventListener('load',function(){
  var p=document.getElementById('preloader');
  if(p) setTimeout(function(){ p.classList.add('hidden'); },300);
});

// header scroll
var h=document.getElementById('header');
window.addEventListener('scroll',function(){
  h.classList.toggle('scrolled',window.scrollY>40);
});

// mobile menu
var mt=document.getElementById('menu-toggle');
var mm=document.getElementById('mobile-menu');
var mc=document.getElementById('mobile-close');
if(mt&&mm&&mc){
  mt.addEventListener('click',function(){ mm.classList.add('open'); });
  mc.addEventListener('click',function(){ mm.classList.remove('open'); });
  mm.addEventListener('click',function(e){ if(e.target===mm) mm.classList.remove('open'); });
  mm.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){ mm.classList.remove('open'); });
  });
}

// faq accordion
document.querySelectorAll('.fq').forEach(function(b){
  b.addEventListener('click',function(){
    var fi=this.parentElement;
    var open=fi.classList.contains('open');
    document.querySelectorAll('.fi.open').forEach(function(o){ o.classList.remove('open'); });
    if(!open) fi.classList.add('open');
  });
});

// quote carousel
(function(){
  var tr=document.getElementById('rev-track');
  if(!tr) return;
  var cards=tr.children;
  var total=cards.length;
  if(total<2) return;
  var idx=0;
  var dots=document.getElementById('rev-dots');
  var frag=document.createDocumentFragment();
  for(var i=0;i<total;i++){
    var d=document.createElement('span');
    d.className='rdot'+(i===0?' active':'');
    d.dataset.i=i;
    frag.appendChild(d);
  }
  dots.appendChild(frag);

  function go(i){
    idx=i;
    if(idx>=total) idx=0;
    if(idx<0) idx=total-1;
    var w=cards[0].offsetWidth+20; // gap 20px
    tr.style.transform='translateX(-'+(idx*w)+'px)';
    dots.querySelectorAll('.rdot').forEach(function(d,i){
      d.classList.toggle('active',i===idx);
    });
  }

  document.getElementById('rev-prev').addEventListener('click',function(){ go(idx-1); });
  document.getElementById('rev-next').addEventListener('click',function(){ go(idx+1); });
  dots.addEventListener('click',function(e){ if(e.target.classList.contains('rdot')) go(+e.target.dataset.i); });

  // auto-advance
  var iv=setInterval(function(){ go(idx+1); },5000);
  tr.parentElement.addEventListener('mouseenter',function(){ clearInterval(iv); });
  tr.parentElement.addEventListener('mouseleave',function(){ iv=setInterval(function(){ go(idx+1); },5000); });

  // responsive: recalc on resize
  var rto;
  window.addEventListener('resize',function(){
    clearTimeout(rto);
    rto=setTimeout(function(){ go(idx); },150);
  });
})();

// plan tabs
document.querySelectorAll('.ptab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.ptab').forEach(function(x){ x.classList.remove('active'); });
    this.classList.add('active');
    var p=this.dataset.p;
    document.querySelectorAll('.plan-card').forEach(function(c){
      c.style.display=(c.dataset.p===p?'flex':'none');
    });
  });
});
// show first tab by default
var at=document.querySelector('.ptab.active');
if(at) at.click();

// region filter
document.querySelectorAll('.rtab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.rtab').forEach(function(x){ x.classList.remove('active'); });
    this.classList.add('active');
    var r=this.dataset.r;
    document.querySelectorAll('.dest').forEach(function(c){
      c.style.display=(r==='all'||c.dataset.r===r?'block':'none');
    });
  });
});
var art=document.querySelector('.rtab.active');
if(art) art.click();

// modal
document.querySelectorAll('.plan-buy').forEach(function(b){
  b.addEventListener('click',function(){
    document.getElementById('modal-overlay').classList.add('open');
    document.getElementById('modal').classList.add('open');
  });
});
document.getElementById('modal-close').addEventListener('click',function(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.getElementById('modal').classList.remove('open');
});
document.getElementById('modal-overlay').addEventListener('click',function(){
  this.classList.remove('open');
  document.getElementById('modal').classList.remove('open');
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    document.getElementById('modal-overlay').classList.remove('open');
    document.getElementById('modal').classList.remove('open');
  }
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var id=this.getAttribute('href');
    if(id==='#') return;
    e.preventDefault();
    var el=document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

})();
