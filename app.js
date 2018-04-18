
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if(window.pageYOffset > 525) {
      nav.classList.add('mystyle');
    } else {
      nav.classList.remove('mystyle');
    }
  });
});
