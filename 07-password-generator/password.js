// Generate strong random passwords with Node's built-in crypto module.
// Run: node password.js 16

const crypto = require("crypto");

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{}?",
};

function generate(length = 16) {
  if (length < 4) throw new Error("Length must be at least 4");
  const all = Object.values(SETS).join("");
  // one character from every set, so the password always has each kind
  const chars = Object.values(SETS).map((set) => set[crypto.randomInt(set.length)]);
  while (chars.length < length) chars.push(all[crypto.randomInt(all.length)]);
  // shuffle (Fisher-Yates)
  for (let i = chars.length - 1; i > 0; i--) {
    const j = crypto.randomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join("");
}

if (require.main === module) {
  const len = Number(process.argv[2]) || 16;
  for (let i = 0; i < 3; i++) console.log(generate(len));
}

module.exports = { generate, SETS };
