const person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "Developer",
  salary: 25000,
  married: true,
  'favorite spaces': ['Bandorban', 'Saintmartin', 'Kuakata']
};


/* accessing object property using dot Notation */  
console.log(person);
console.log(person.name);
console.log(person.profession);
const income = person.salary;


/* bracket Notation */ 
console.log(person['age']);

/**
  Error debe
  console.log(person."favorite spaces");
  console.log(person.favorite spaces); 
**/ 
  

// then you must use brackets Notation
console.log(person["favorite spaces"]);


/*
--------------- Update Object property values using dot & brackets Notation --------------
*/

person.salary = 30000;
console.log(person);
const propName = 'profession';
person[propName] = 'DevOps';  

person['age'] = 31;
console.log(person);
person["favorite spaces"] = ['maldives', 'bali', 'pataya'];
console.log(person);

 