// Exercise 4 – Sequential vs Parallel
// Run: node src/ex4.js
//
// Tasks
// 1. Create be/src/utils.js with sleep()
// 2. Version A: await inside for...of
// 3. Version B: Promise.all(ids.map(fetchGrade))
// 4. Explain why B is 3 times faster
// 5. When must you use version A?
//
// Expected output (times differ a little on each run)
// sequential: 901.761ms
// parallel: 300.769ms
// 3 grades loaded

import { sleep } from "./utils.js";

async function fetchGrade(id) {
  await sleep(300); // pretend network call
  return { id, grade: 8 };
}

const ids = ["S001", "S002", "S003"];

// TODO A: load the 3 grades one after another (for...of)

// TODO B: load the 3 grades at the same time (Promise.all)

// Measure both with console.time / console.timeEnd

// Task 4 – why is B 3 times faster?
// TODO: your answer

// Task 5 – when must you use version A?
// TODO: your answer
