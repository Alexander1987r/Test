import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';


export const getSwiper=()=>{
  const swiperProducts= new Swiper('.products__slide',{
    direction:'horizontal',
    loop:true,
    speed:1000,
    effect:'slider',
    slidesPerView:2,
    centeredSlides:true,
    spaceBetween:20,
    navigation:{
      prevEl:'.products__slide-btn-prev',
      nextEl:'.products__slide-btn-next'
    },
    pagination:{
      el:'.products__pagination',
      clickable:true,
    },
    breakpoints: {
      // when window width is >= 320px
      992: {
        spaceBetween: 75
      },
    }

  });
  const swiper= new Swiper('.career__list',{
    effect:'slider',
  navigation:{
      prevEl:'.career__button-prev',
      nextEl:'.career__button-next'
  },
  });
}

