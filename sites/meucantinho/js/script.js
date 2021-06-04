
import ScrollAnima from "./modules/scroll-anima.js"
import SlideNav from "./modules/slide.js";

import MenuMobile from './modules/menu-mobile.js';
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();


const slide = new SlideNav('.slide', ".slide-wrapper");
slide.init();
slide.addArrow('.prev', '.next');


const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

