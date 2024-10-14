//3.

let phi = 3.14;

function calculateArea({ radius, power = 2 }) {
    return phi * Math.pow(radius, power);
}

export default calculateArea;

