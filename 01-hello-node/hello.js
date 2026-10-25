// Your first Node.js program.
// Run: node hello.js Abhinaba

const name = process.argv[2] || "World";
console.log(`Hello, ${name}! 👋`);
console.log(`You are running Node.js ${process.version} on ${process.platform}.`);
