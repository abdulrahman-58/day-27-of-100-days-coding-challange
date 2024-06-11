// Assalamualaikum @everyone 👋
// 🚀 Day 27 Challenge: Start Coding! 🚀
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
var car = {
    make: "Suzuki",
    modle: "Mehran",
    year: 2018
};
console.log(car.modle);
console.log("\n");
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
console.log("Orginal object: ", car);
car.color = "Black";
car.year = 2021;
console.log("Updated object: ", car);
console.log("\n");
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({ make: "Suzuki", modle: "Mehran", year: 2021, color: "black" });
