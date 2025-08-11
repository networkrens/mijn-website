
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header.site .link').forEach(a=>{
    const href=a.getAttribute('href');
    if((path==='' && href==='index.html') || href===path){a.classList.add('active');}
  });
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('reveal'); }});
  },{threshold:0.1});
  document.querySelectorAll('.card, .section-title, .hero .title').forEach(el=>obs.observe(el));
})();
