# 🟢 Node.js Practice

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Dependencies](https://img.shields.io/badge/dependencies-0-success?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
[![tests](https://github.com/abhinaba-chanda/nodejs-practice/actions/workflows/test.yml/badge.svg)](https://github.com/abhinaba-chanda/nodejs-practice/actions/workflows/test.yml)

Beginner **Node.js** programs I wrote while learning. Every program uses only what comes with Node,
so there is nothing to install: just `node file.js`.

## 📂 Programs

| # | Program | What it teaches | Run it |
|---|---------|-----------------|--------|
| 1 | [Hello Node](01-hello-node/hello.js) | `process.argv`, template strings | `node 01-hello-node/hello.js Abhinaba` |
| 2 | [Todo CLI](02-todo-cli/todo.js) | `fs`, JSON, saving data to a file | `node 02-todo-cli/todo.js add "Learn Node"` |
| 3 | [HTTP server](03-http-server/server.js) | built-in `http` module, routes, JSON API | `node 03-http-server/server.js` |
| 4 | [Word counter](04-file-reader/word-count.js) | reading files, regex, objects | `node 04-file-reader/word-count.js` |
| 5 | [Match countdown](05-events-and-timers/countdown.js) | `EventEmitter`, timers, `async/await` | `node 05-events-and-timers/countdown.js 5` |
| 6 | [Random joke](06-api-fetch/joke.js) | `fetch` from a free public API | `node 06-api-fetch/joke.js` |
| 7 | [Password generator](07-password-generator/password.js) | `crypto`, shuffling | `node 07-password-generator/password.js 16` |
| 8 | [CSV to JSON](08-csv-to-json/csv.js) | reading files, `split`, `map` | `node 08-csv-to-json/csv.js` |
| 9 | [URL parser](09-url-parser/url-info.js) | `URL`, `URLSearchParams` | `node 09-url-parser/url-info.js "https://example.com/?q=node"` |
| 10 | [File hash](10-file-hash/hash.js) | `crypto` hashes, streams, Promises | `node 10-file-hash/hash.js package.json` |

## 📝 Todo app example

```text
> node 02-todo-cli/todo.js add "Learn Node.js"
Added: Learn Node.js
> node 02-todo-cli/todo.js add "Watch Barça match"
Added: Watch Barça match
> node 02-todo-cli/todo.js done 1
Completed: Learn Node.js ✅
> node 02-todo-cli/todo.js list
1. [x] Learn Node.js
2. [ ] Watch Barça match
```

Your todos are saved in `02-todo-cli/todos.json`.

## 🌐 HTTP server

```bash
node 03-http-server/server.js
```

Then open <http://localhost:3000>. Try <http://localhost:3000/api/hello?name=Abhinaba>.

## 🚀 Getting started

1. Install [Node.js](https://nodejs.org/) (version 18 or newer).
2. Clone and run:

```bash
git clone https://github.com/abhinaba-chanda/nodejs-practice.git
cd nodejs-practice
node 01-hello-node/hello.js
```

## 🧪 Tests

```bash
npm test
```

Uses Node's built-in test runner (`node:test`), no packages needed.

## 📜 License

[MIT](LICENSE) © Abhinaba Chanda
