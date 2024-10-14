import yearUntilRetirement from './file1.js';
let person = { firstName: "John", year: 1987 };
yearUntilRetirement(person);

import addNumber from './file2.js';
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

import calculateArea from './file3.js';
let area21 = calculateArea({ radius: 21 });
let area7 = calculateArea({ radius: 7 });
console.log(`Area with 21 radius: ${area21}, Area with radius 7: ${area7}`); 

import makeAjaxRequest from './file4.js';
makeAjaxRequest('www.google.com');
