import React from 'react';

const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
const url = 'https://lcboapi.com/';

// function getProducts() {
// 	 return 
// }

// module.exports = getProducts;
export function getProducts() {
	const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
	const url = 'https://lcboapi.com/';

		fetch(url + 'products?per_page=100&access_key=' + KEY)
		.then(response => response.json())
		.then(response => console.log(response.result))
		.then(response => {response.result})
				// .then(function(response) {
				// 	return response.
				// })
		.catch(error => console.log('Error', error));
	}
