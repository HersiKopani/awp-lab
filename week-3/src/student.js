const student = {
  name: "Ana Hoxha",
  id: "S001",
  grades: { AWP: 9, DB: 8, SE: 10 },
  address: { city: "Tirana" },
};

// a) print every course and grade
for (const [course, grade] of Object.entries(student.grades)) {
  console.log(`${course}: ${grade}`);
}

// b) print the average grade
const values = Object.values(student.grades);
const average = values.reduce((sum, g) => sum + g, 0) / values.length;
console.log("Average:", average.toFixed(2));

// c) shallow vs deep copy
const shallow = { ...student };
shallow.address.city = "Durres"; // nested object is shared -> changes student too

const deep = structuredClone(student);
deep.address.city = "Vlore"; // fully independent -> student unaffected

console.log("student.address.city:", student.address.city); // "Durres"

// d) add ML: 7 without changing student
const updated = {
  ...student,
  grades: { ...student.grades, ML: 7 },
};
console.log("student keys:", Object.keys(student.grades));
console.log("updated keys:", Object.keys(updated.grades));
