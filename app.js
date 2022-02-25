const cars = ["Subaru", "Ford", "BMW"]; // this is an array

document.getElementById("car1").innerHTML = cars;
cars.push("Toyota"); // this is an array push method
document.getElementById("car2").innerHTML = cars;

const person = { // this is my object
    firstName: "Mason",
    lastName: "Carreon",
    id: 1234,
  };
  person.name = function() { // this is my object method
    return this.firstName + " " + this.lastName;
  };
  
  document.getElementById("object").innerHTML =
  "My name is " + person.name(); 