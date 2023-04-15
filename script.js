function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}
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