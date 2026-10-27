// CSV to JSON
// Reads a small CSV file and turns every row into an object,
// using the first line as the keys.
// Practice: fs, string split/trim, map, JSON.stringify.
// Run: node 08-csv-to-json/csv.js

const fs = require("fs");
const path = require("path");

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length === 0) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",").map((v) => v.trim());
    const row = {};
    headers.forEach((h, i) => {
      const value = values[i] ?? "";
      row[h] = value !== "" && !isNaN(value) ? Number(value) : value;
    });
    return row;
  });
}

if (require.main === module) {
  const file = process.argv[2] || path.join(__dirname, "players.csv");
  console.log(JSON.stringify(parseCsv(fs.readFileSync(file, "utf8")), null, 2));
}

module.exports = { parseCsv };
