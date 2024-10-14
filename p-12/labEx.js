//1
const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement= (year,firstName) => {
    let age= calculateAge(year)
    let retirement = 60-age


	if(retirement > 0){
    	console.log(`${firstName} retires in ${retirement} years`)
	} else {
    	console.log(`${firsrName} is already retired.`);
	}
}
let firstName= "John"
let year= 1987
yearUntilRetirement(year, firstName)

//2.

function addNumber(a, b, c, d, e, f, g) {
	const numbers = [a, b, c, d, e, f, g];
	let sum = 0;
  
	numbers.forEach(function (num) {
	  sum += num;
	});
  
	return sum;
  }
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.

let phi = 3.14;
let power = 2;

function calculateArea({ radius, power }) {
	return phi * Math.pow(radius, power);
  }
  
  let radius = 21;
  let area21 = calculateArea({ radius: radius, power: power });
  
  radius = 7;
  let area7 = calculateArea({ radius: radius, power: power });
  
  console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

//4.
function makeAjaxRequest(url, method = 'GET') {
	console.log(url, method);
  }
  
  makeAjaxRequest('www.google.com');