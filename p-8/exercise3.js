let el= {
    firstName:"Avriel",
    age: 18,
    weight: 48,
    height: 1.58,
    calculateBMI: function(){
        return this.weight/(this.height * this.height)
    },
};

console.log("Name:",el.firstName)
console.log("Age:",el.age)
console.log("Weight:",el.weight,"kg")
console.log("Height:",el.height,"cm")
el.calculateBMI()
let bmi= el.calculateBMI()
if (bmi<16.0){
    console.log("BMI STATUS: Severely Underweight")
} else if(bmi>=16.0 && bmi <= 18.4){
    console.log("BMI STATUS: Underweight")
} else if(bmi>=18.5 && bmi<=24.9){
    console.log("BMI STATUS: Normal")
} else if(bmi>=25.0 && bmi <=29.9){
    console.log("BMI STATUS: Overweight")
} else if(bmi>=30.0 && bmi <=34.9){
    console.log("BMI STATUS: Moderately Obese")
} else if(bmi>=35.0 && bmi<= 39.9){
    console.log("BMI STATUS: Severely Obese")
} else if(bmi>=40.0){
    console.log("BMI STATUS: Morbidly Obese")
}

el.BMI = el.calculateBMI()
console.log("BMI:", el.BMI)