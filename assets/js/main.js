
// Highlight current nav link based on pathname
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header.site .link').forEach(a => {
    const href = a.getAttribute('href');
    if((path === '' && href === 'index.html') || href === path){
      a.classList.add('active');
    }
  });
})();
