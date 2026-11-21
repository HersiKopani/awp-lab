// ===== Exercise 6 – Custom Errors =====
class AppError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

class ValidationError extends AppError {
  constructor(message, field) {
    super(message, 400);
    this.field = field;
  }
}

class NotFoundError extends AppError {
  constructor(message) {
    super(message, 404);
  }
}

function handle(err) {
  if (err instanceof AppError) {
    console.log(`${err.status} ${err.name}: ${err.message}`);
  } else {
    throw err;
  }
}

// ===== Exercise 4 – Person, Student and Lecturer =====
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

class Student extends Person {
  #grades = {};

  constructor(id, name, email) {
    super(name, email);
    this.id = id;
  }

  addGrade(course, grade) {
    if (!Number.isInteger(grade) || grade < 4 || grade > 10) {
      throw new ValidationError(`Invalid grade ${grade} for ${course}`, "grade");
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

class Lecturer extends Person {
  constructor(name, email, title = "MSc.") {
    super(name, email);
    this.title = title;
  }

  greet() {
    return `${super.greet()}, ${this.title} lecturer`;
  }
}

// ===== Exercise 5 – Course =====
class Course {
  static #nextId = 1;
  static MAX_STUDENTS = 3;
  #students = [];

  constructor(title, lecturer) {
    this.id = Course.#nextId++;
    this.title = title;
    this.lecturer = lecturer;
  }

  enroll(student) {
    if (this.#students.some((s) => s.id === student.id)) {
      throw new ValidationError(`${student.name} is already enrolled`, "student");
    }
    if (this.#students.length >= Course.MAX_STUDENTS) {
      throw new ValidationError(`${this.title} is full`, "students");
    }
    this.#students.push(student);
  }

  findStudent(id) {
    const student = this.#students.find((s) => s.id === id);
    if (!student) throw new NotFoundError(`Student ${id} not found`);
    return student;
  }

  get size() {
    return this.#students.length;
  }

  get students() {
    return [...this.#students];
  }

  static compareBySize(a, b) {
    return b.size - a.size;
  }
}

// ===== Tests =====
const ana = new Student("S001", "Ana Hoxha", "ana@example.com");
const ben = new Student("S002", "Ben Kola", "ben@example.com");
const era = new Student("S003", "Era Leka", "era@example.com");
const dan = new Student("S004", "Dan Meta", "dan@example.com");
const hersi = new Lecturer("Hersi Kopani", "hersi@example.com");

// Exercise 4
console.log(ana.greet());
console.log(hersi.greet());
console.log(ana instanceof Person);
console.log(hersi instanceof Student);

// Exercise 5
const awp = new Course("Advanced Web Programming", hersi);
awp.enroll(ana);
awp.enroll(ben);
console.log(awp.id, awp.size);
console.log(awp.lecturer.name, awp.students.map((s) => s.name));

const db = new Course("Databases", hersi);
db.enroll(ana);
const sorted = [db, awp].sort(Course.compareBySize);
console.log(sorted.map((c) => `${c.title}: ${c.size}`));

// Exercise 6
try { ana.addGrade("SE", 12); } catch (err) { handle(err); }
try { awp.enroll(ana); } catch (err) { handle(err); }
try { awp.findStudent("S999"); } catch (err) { handle(err); }
try { awp.enroll(era); awp.enroll(dan); } catch (err) { handle(err); }
