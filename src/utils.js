export function getLocation() {
  console.log('getting location');
  navigator.geolocation.getCurrentPosition(function(position) {
    return [position.coords.latitude, position.coords.longitude];
  });
}

export function getClosestStore(lat, long, id) {
  const url = 'https://lcboapi.com/';
  const condition = `stores?product_id=${id}&lat=${lat}&lon=${long}&access_key=`;
  const KEY =
    'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';

  fetch(url + condition + KEY)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);
    })
    .catch(error => console.log('Error', error));
}
