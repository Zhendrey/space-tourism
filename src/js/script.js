//!FUNCITONS
// import { Func } from './functions'

const headerNavigation = document.querySelector(".header__navigation");
const headerMenu = document.querySelector(".header__menu");
const headerBurger = document.querySelector(".header__burger");
const backgroundHome = document.querySelector("img.background");
const currentPage = document.querySelector("a.header__link_current-page");

//!EVENT LISTENERS AND FUNCTION CALLBACKS
headerBurger.addEventListener("click", function(event){
    headerNavigation.classList.toggle("active");
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active");
})

window.addEventListener("resize", function(){
    if(window.innerWidth <= 768 &&  window.innerWidth > 375){
        backgroundHome.src = `../../assets/${currentPage.textContent.toLowerCase()}/background-${currentPage.textContent.toLowerCase()}-tablet.jpg`;
        backgroundHome.alt = `background-${currentPage.textContent.toLowerCase()}-tablet`;
    }else if(window.innerWidth <= 375){
        backgroundHome.src = `../../assets/${currentPage.textContent.toLowerCase()}/background-${currentPage.textContent.toLowerCase()}-mobile.jpg`;
        backgroundHome.alt = `background-${currentPage.textContent.toLowerCase()}-mobile`;
    }else{
        backgroundHome.src = `../../assets/${currentPage.textContent.toLowerCase()}/background-${currentPage.textContent.toLowerCase()}-desktop.jpg`;
        backgroundHome.alt = `background-${currentPage.textContent.toLowerCase()}-desktop`;
    }
})

//!SEPARATE CONDITIONS
if(window.innerWidth <= 768 &&  window.innerWidth > 375){
    backgroundHome.src = `../../assets/${currentPage.textContent.toLowerCase()}/background-${currentPage.textContent.toLowerCase()}-tablet.jpg`;
    backgroundHome.alt = `background-${currentPage.textContent.toLowerCase()}-tablet`;
}else if(window.innerWidth <= 375){
    backgroundHome.src = `../../assets/${currentPage.textContent.toLowerCase()}/background-${currentPage.textContent.toLowerCase()}-mobile.jpg`;
    backgroundHome.alt = `background-${currentPage.textContent.toLowerCase()}-mobile`;
}else{
    backgroundHome.src = `../../assets/${currentPage.textContent.toLowerCase()}/background-${currentPage.textContent.toLowerCase()}-desktop.jpg`;
    backgroundHome.alt = `background-${currentPage.textContent.toLowerCase()}-desktop`;
}
