/* Question 2: The API test
 *
 * This is a test for getting data from the New OneMap API.
 * Documentation: https://www.onemap.gov.sg/docs/#search
 * Count the number of results found when searching by the postal
 * codes of 059108 and 139651. (Hint: None of them are zero!)
 */

// Documentation: https://www.npmjs.com/package/node-fetch
const fetch = require('node-fetch');

const postal = ['059108', '139651'];

const expected = [3, 71];

/**
 * Return a promise that resolves with the number of results found for the postal code.
 * @param {string} postal_code
 * @returns {Promise<string|number>}
 */
function searchByPostalCode(postal_code) {
	// Your code here...
	const url = 'https://developers.onemap.sg/commonapi/search?searchVal=' + postal_code + '&returnGeom=Y&getAddrDetails=Y&pageNum=1';
	return fetch(url)
	.then(res => res.json())
	.then(data => data.found);
}

Promise
	.all(postal.map(searchByPostalCode))
	.then(observed => {
		console.log('Question 2 Case 1 passed:');
		console.log(observed[0] == expected[0]);
		console.log('Question 2 Case 2 passed:');
		console.log(observed[1] == expected[1]);
	});
