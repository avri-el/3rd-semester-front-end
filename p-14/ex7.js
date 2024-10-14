//1
const calculateAge = (birthYear) => 2019 - birthYear;
const yearUntilRetirement = ({ year, firstName }) => {
    let age = calculateAge(year);
    let retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

let person = { firstName: "John", year: 1987 };
yearUntilRetirement(person);

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

function calculateArea({ radius, power = 2 }) {
    return phi * Math.pow(radius, power);
}

let area21 = calculateArea({ radius: 21 });
let area7 = calculateArea({ radius: 7 });

console.log(`Area with 21 radius: ${area21}, Area with radius 7: ${area7}`);


//4.
function makeAjaxRequest(url, method = 'GET') {
	console.log(url, method);
  }
  
  makeAjaxRequest('www.google.com');