// A command-line todo app that saves your todos in todos.json
//
//   node todo.js add "Learn Node.js"
//   node todo.js list
//   node todo.js done 1
//   node todo.js remove 1
//   node todo.js clear

const fs = require("fs");
const path = require("path");

const FILE = process.env.TODO_FILE || path.join(__dirname, "todos.json");

function load() {
  if (!fs.existsSync(FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
  } catch {
    console.error("todos.json is broken, starting fresh.");
    return [];
  }
}

function save(todos) {
  fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

function list(todos) {
  if (todos.length === 0) return console.log("No todos yet 🎉  Add one with: node todo.js add \"something\"");
  todos.forEach((t, i) => console.log(`${i + 1}. [${t.done ? "x" : " "}] ${t.text}`));
}

function getIndex(todos, arg) {
  const n = Number(arg);
  if (!Number.isInteger(n) || n < 1 || n > todos.length) {
    console.error(`Please give a todo number between 1 and ${todos.length}.`);
    process.exit(1);
  }
  return n - 1;
}

const [command, ...rest] = process.argv.slice(2);
const todos = load();

switch (command) {
  case "add": {
    const text = rest.join(" ").trim();
    if (!text) {
      console.error('Usage: node todo.js add "your todo"');
      process.exit(1);
    }
    todos.push({ text, done: false, created: new Date().toISOString() });
    save(todos);
    console.log(`Added: ${text}`);
    break;
  }
  case "done": {
    const i = getIndex(todos, rest[0]);
    todos[i].done = true;
    save(todos);
    console.log(`Completed: ${todos[i].text} ✅`);
    break;
  }
  case "remove": {
    const i = getIndex(todos, rest[0]);
    const [removed] = todos.splice(i, 1);
    save(todos);
    console.log(`Removed: ${removed.text}`);
    break;
  }
  case "clear":
    save([]);
    console.log("All todos cleared.");
    break;
  case "list":
  case undefined:
    list(todos);
    break;
  default:
    console.log("Commands: add, list, done <n>, remove <n>, clear");
}
