const college = {
  name: "VNC",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(college.name); // VNC
console.log(college.unique.color); // blue

console.log(college.unique.result.merit); // top

college["unique"].result["merit"] = "top top top";
college.events[2] = "16 Dec";
console.log(college);

// --------------------- DELETE a property from a Object ----------------
delete college.class;
console.log(college);
