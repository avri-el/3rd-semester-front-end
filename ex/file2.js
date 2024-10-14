//2.

function addNumber(a, b, c, d, e, f, g) {
	const numbers = [a, b, c, d, e, f, g];
	let sum = 0;
  
	numbers.forEach(function (num) {
	  sum += num;
	});
  
	return sum;
  }
  
  export default addNumber;