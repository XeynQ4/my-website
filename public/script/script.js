function changeNav() {
    let nav = document.getElementById("nav");
    let items = document.getElementsByClassName("nav-item");
    if (nav.style.width === "40%") {
        for (item of items) {
            item.style.visibility = "hidden";
        }
        nav.style.width = "60px";
    } else {
        nav.style.width = "40%";
        for (item of items) {
            item.style.visibility = "visible";
        }
    }
}

const min_width = window.matchMedia("(min-width: 768px)");
window.addEventListener("resize", check);
function check() {
    let nav = document.getElementById("nav");
    let items = document.getElementsByClassName("nav-item");
    if (min_width.matches) {
        nav.style.width = "100vw";
        for (item of items) {
            item.style.visibility = "visible";
        }
    } else {
        for (item of items) {
            item.style.visibility = "hidden";
        }
        nav.style.width = "60px";
    }
}
