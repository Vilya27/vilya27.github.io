let menu = document.querySelector(".header-menu");
menu.onclick = function() {
    document.querySelector(".checkbox").checked = false;
}
let prevPosition = 0;
let header = document.querySelector(".header-nav");
document.addEventListener("scroll", function (){
    // console.log(scrollY);
    let currentPosition = scrollY;
    if( currentPosition > 700 && prevPosition > currentPosition) {
        header.style.position = "fixed";
    } else {
        header.style.position = "relative";
    }
    prevPosition = currentPosition;
});