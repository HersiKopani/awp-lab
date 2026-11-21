const animal = {
  eats: true,
  describe() {
    return `${this.name} eats: ${this.eats}`;
  },
};
const dog = Object.create(animal);
dog.name = "Rex";
dog.barks = true;

console.log(dog.describe());                          // (a) Rex eats: true
console.log(Object.hasOwn(dog, "eats"));              // (b) false
console.log("eats" in dog);                           // (c) true
console.log(Object.getPrototypeOf(dog) === animal);   // (d) true
console.log(Object.keys(dog));                        // (e) [ 'name', 'barks' ]

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}`;
};

const book = new Book("1984", "George Orwell");
console.log(book.info());                 // 1984 by George Orwell
console.log(Object.hasOwn(book, "info")); // false
