import React from 'react';

const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
const url = 'https://lcboapi.com/';

function getProducts() {
	fetch(url + 'products?access_key=' + KEY)
	.then(response => console.log(response.json()))
	.catch(error => console.log('Error', error));
}

export default getProducts;