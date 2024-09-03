const mobile = {
  brand: "samsung",
  price: 25000,
  color: "black",
  camera: "12mp",
};

// for of: array
// for in: object
for (const key in mobile) { 
  console.log(`${key}: ${mobile[key]}`);
}

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){ 
    console.log(`${key}: ${mobile[key]}`);
}
