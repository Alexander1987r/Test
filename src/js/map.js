import ymaps from 'ymaps';

let center=[59.907464, 30.324775];

export const getMap=()=>{
  ymaps
  .load()
  .then(maps => {
    const map = new maps.Map("map", {
      center: center,
      zoom: 13.7,
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    /*
       map.controls.remove('zoomControl');// удаляем контрол зуммирования
   */
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']);
  })
  .catch(error => console.log('Failed to load Yandex Maps', error));
}
