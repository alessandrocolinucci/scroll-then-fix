
window.onscroll = function() { fixToHeader() };

var wrap = document.getElementById('wrap');
var windowHeight = window.innerHeight;
var fixHeight = windowHeight * 0.3;

function fixToHeader() {
    if (document.body.scrollTop > fixHeight || document.documentElement.scrollTop > fixHeight) {
        wrap.classList.add('fix-search');
    } else {
        wrap.classList.remove('fix-search');
    }
}