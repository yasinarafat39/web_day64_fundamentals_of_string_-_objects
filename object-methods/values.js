const computer = {
  brand: "Gigabite",
  price: 35000,
  processor: "inter CORE I3 10GEN",
  SSD: "240GB",
  monitor: "HP",
};

const values = Object.values(computer); // it's return a array with all property values.
console.log(values); // [ 'Gigabite', 35000, 'inter CORE I3 10GEN', '240GB', 'HP' ]
