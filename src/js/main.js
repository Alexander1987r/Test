import { getBurger } from "./burger";
import { getMap } from "./map";
import { getAccordion} from "./accordion"

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper= new Swiper('.career__list',{

  navigation:{
      prevEl:'.career__button-prev',
      nextEl:'.career__button-next'
  },
  pagination:{
      el:'.products__pagination',
      clickable:true,
  },

});


getAccordion();
getBurger();
getMap();

