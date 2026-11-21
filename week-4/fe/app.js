// Exercise 6 – Show the users on a web page
//
// Tasks
// 1. Open fe/index.html with VS Code Live Server
// 2. Each <li>: bold name, email, city (textContent)
// 3. Status: "10 users", "No users found" or the error
// 4. Search filters as you type
// 5. Test the error: use the URL /userz
//
// Expected output
// Status: 10 users
// • Leanne Graham - Sincere@april.biz - Gwenborough
// • Ervin Howell - Shanna@melissa.tv - Wisokyburgh
//   ...
// Search "cle":  2 users
//   Clementine Bauch, Clementina DuBuque
// Search "zzz":  No users found
// URL /userz:    Could not load users: HTTP 404

const API = "https://jsonplaceholder.typicode.com";
const list = document.querySelector("#users");
const status = document.querySelector("#status");
let users = [];

function render(items) {
  /* TODO: one <li> per user */
}

async function load() {
  /* TODO: fetch, check ok, render */
}

// TODO: on "input" in #search, filter users by name

load();
