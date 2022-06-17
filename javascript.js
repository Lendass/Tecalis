function myFunction() {
    var element = document.getElementById("remove");
    element.classList.remove("list__item--active");

    var element = document.getElementById("add");
    element.classList.add("list__item--active");

    var element = document.getElementById("image");
    element.classList.remove("dynamic-content__image__image--active");

    var element = document.getElementById("image2");
    element.classList.add("dynamic-content__image__image--active");


} 
function myFunction2() {
    var element = document.getElementById("remove");
    element.classList.add("list__item--active");

    var element = document.getElementById("add");
    element.classList.remove("list__item--active");

    var element = document.getElementById("image");
    element.classList.add("dynamic-content__image__image--active");

    var element = document.getElementById("image2");
    element.classList.remove("dynamic-content__image__image--active");
} 

function myFunction3() {
    var element = document.getElementById("mobile-menu");
    element.classList.toggle("header__menu__mobile--active");
} 
