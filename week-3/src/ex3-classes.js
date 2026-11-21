class Student {
  #grades = {};

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  addGrade(course, grade) {
    if (!Number.isInteger(grade) || grade < 4 || grade > 10) {
      throw new RangeError(`Invalid grade: ${grade}`);
    }
    this.#grades[course] = grade;
  }

  get grades() {
    return { ...this.#grades };
  }

  get average() {
    const values = Object.values(this.#grades);
    if (values.length === 0) return 0;
    return values.reduce((sum, g) => sum + g, 0) / values.length;
  }

  toString() {
    return `${this.name} (${this.id}) - average: ${this.average.toFixed(2)}`;
  }
}

const s = new Student("S001", "Ana Hoxha");
console.log(s.average);   // 0
s.addGrade("AWP", 9);
s.addGrade("DB", 8);
s.addGrade("SE", 10);

const copy = s.grades;
copy.AWP = 4;
console.log(s.grades);    // { AWP: 9, DB: 8, SE: 10 }
console.log(String(s));   // Ana Hoxha (S001) - average: 9.00

try {
  s.addGrade("ML", 11);
} catch (e) {
  console.log(e.name, e.message); // RangeError Invalid grade: 11
}
