# Week 4 – Asynchronous JavaScript

Project setup (fe and be), 2 prediction exercises and 4 coding exercises • 120 minutes

## Review questions (Lecture 4)

1. Why does JavaScript need asynchronous code?
2. `setTimeout(fn, 0)` or `Promise.then`: which runs first?
3. What are the three states of a promise?
4. What is the difference between `Promise.all` and `Promise.allSettled`?
5. What does `await` do? What does an `async` function return?
6. Does `fetch` throw an error on a 404?
7. How do you make 3 independent requests faster?
8. How do you stop a fetch that takes too long?

## Setup

```
week-4/
├── fe/                 # front end
│   ├── index.html
│   └── app.js
├── be/                 # back end (Node.js >= 20.6)
│   ├── src/server.js
│   ├── package.json
│   ├── .env            # not in Git
│   └── .env.example    # in Git
├── .gitignore
├── PREDICTIONS.md      # Exercises 1 and 2
└── README.md
```

```bash
cd be
node -v        # v20.6 or newer
npm -v         # v10 or newer
cp .env.example .env
npm run dev    # be is ready on port 4000
```

## Exercises

| # | Type | Time | File |
|---|------|------|------|
| 1 | Predict the event loop order | 10 min | `PREDICTIONS.md` |
| 2 | Predict: async / await and errors | 10 min | `PREDICTIONS.md` |
| 3 | `sleep()` and promisify a callback API | 10 min | `be/src/ex3.js` |
| 4 | Sequential vs parallel | 15 min | `be/src/utils.js`, `be/src/ex4.js` |
| 5 | API client: `fetchJSON` | 20 min | `be/src/api.js`, `be/src/ex5.js` |
| 6 | Show the users on a web page | 20 min | `fe/index.html`, `fe/app.js` |

Run the back-end exercises from `be/`:

```bash
node src/ex3.js
node src/ex4.js
node src/ex5.js
```

Exercise 6: open `fe/index.html` with VS Code Live Server.

## Submission checklist

- [ ] fe/ and be/ folders, be/package.json
- [ ] .env.example committed, .env NOT
- [ ] PREDICTIONS.md (Exercises 1 and 2)
- [ ] be/src: Exercises 3-5 run with node
- [ ] fe: the users page works (Ex. 6)
- [ ] no node_modules, PR link on the portal
