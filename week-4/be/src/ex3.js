// Exercise 3 – sleep() and promisify a callback API
// Run: node src/ex3.js
//
// Tasks
// 1. sleep(ms) returns a promise that resolves after ms
// 2. getGradeAsync: resolve(grade) or reject(err)
// 3. Print the grade of S001, then ask for S999 in the same chain
// 4. One .catch and one .finally at the end
//
// Expected output
// waiting...
// done after 500 ms
// S001 grade: 9
// Error: No grade for S999
// finished

// A callback API we cannot change:
function getGrade(studentId, callback) {
  setTimeout(() => {
    if (studentId === "S001") callback(null, 9);
    else callback(new Error(`No grade for ${studentId}`));
  }, 200);
}

export const sleep = (ms) => {
  /* TODO */
};

export function getGradeAsync(studentId) {
  // TODO: return a new Promise that wraps getGrade
}

// TODO: wait 500 ms, then use getGradeAsync with
// .then / .catch / .finally for "S001", then "S999"
