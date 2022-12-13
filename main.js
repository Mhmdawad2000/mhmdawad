const mo =  document.querySelector("#mo");
const navitems =  document.querySelector(".nav-items");
const navlinks =  document.querySelectorAll(".nav-link");
mo.addEventListener('click',() =>{
    navitems.classList.toggle("active");
    mo.classList.toggle("moc");
});
navlinks.forEach(navlink => {
    navlink.addEventListener('click',() =>{
        navitems.classList.toggle("active");
        mo.classList.toggle("moc");
    });
});