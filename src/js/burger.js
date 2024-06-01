//навигация
const navigation=document.querySelector('.navigation');
//тогл бургера
const headerButton=document.querySelector('.header__button');
//тогл бургера
const headerButtonContent=headerButton.querySelector('.header__button-content');

export const getBurger=()=>{
  //открытие закрытие на различных диапазонах
  const changeBurger=()=>{
    if(!navigation.classList.contains('navigation_open')){
      navigation.classList.add('navigation_open');
      headerButtonContent.classList.add('header__button-content_open');
      /*

      navigation.style.display='block';

      navigationLink.forEach((elem)=>{
      elem.addEventListener('click',()=>{
        navigation.style.display='none';
      });
    });
      */
    } else {
      navigation.classList.remove('navigation_open');
      headerButtonContent.classList.remove('header__button-content_open');
    }


  }


  const changes=(screen)=>{
    if(screen.matches){
      headerButton.addEventListener('click',changeBurger);
    }else{
      headerButton.removeEventListener('click',changeBurger);
    }
  }
  if(matchMedia){
    const screen=window.matchMedia("(max-width:991px)");
    screen.addEventListener('change',changes);
    changes(screen)
  }
}