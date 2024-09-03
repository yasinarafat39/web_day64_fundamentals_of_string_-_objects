const person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "Developer",
  Salary: 25000,
  married: true,
  'favorite spaces': ['Bandorban', 'Saintmartin', 'Kuakata']
};


/* accessing object property using dot Notation */ 
// console.log(person);
// console.log(person.name);
// console.log(person.profession);
const income = person.Salary;


/* bracket Notation */ 
// console.log(person['age']);
// Error debe
// console.log(person."favorite spaces");
// console.log(person.favorite spaces);

// then you must use brackets Notation
// console.log(person["favorite spaces"]);



console.log(person.income);