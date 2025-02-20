import { getCrewData } from './functions.js';
// import Swiper from 'swiper/bundle';
// import { EffectFade, Pagination} from 'swiper/modules'
// import 'swiper/css/bundle';
// import 'swiper/css/effect-fade';
// import 'swiper/css/pagination';


const data = await getCrewData();

//DOM VARIABLES
const crewSlides = document.querySelectorAll(".crew .slide");



data.forEach((crew, index) => {
    const qualification = crewSlides[index].querySelector(".slide__subtitle");
    const name = crewSlides[index].querySelector(".slide__name");
    const description = crewSlides[index].querySelector(".slide__text");
    const image = crewSlides[index].querySelector(".info__image img");

    qualification.textContent = crew.qualification.toUpperCase();
    name.textContent = crew.name.toUpperCase();
    description.textContent = crew.description;
    image.src = crew.image ? crew.image : crew.imagePng;
    image.alt = crew.name + ' the ' + crew.qualification.toLowerCase();
});

//crew swiper
const swiperCrew = new Swiper('.swiper_crew', {
    modules: [Swiper.Pagination, Swiper.EffectFade],
    direction: 'horizontal',
    loop: true,
    // autoHeight: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
    }
});

//technology swiper
const swiperTechnology = new Swiper('.swiper_technology', {
    modules: [Swiper.Pagination, Swiper.EffectFade],
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
        renderBullet: function(index, className){
            return `<a href="#" class=${className}>${++index}</a>`
        }
    }
})