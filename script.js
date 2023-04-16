const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('d-none');
});

  
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
        document.getElementById("back-to-top").style.display = "block";
} else {
    document.getElementById("back-to-top").style.display = "none";
}
}
function scrollToTop() {
document.body.scrollTop = 20;
document.documentElement.scrollTop = 0;
}