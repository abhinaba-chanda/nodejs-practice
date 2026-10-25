// Read a text file and count lines, words and the most common words.
// Run: node word-count.js sample.txt

const fs = require("fs");
const path = require("path");

const file = process.argv[2] || path.join(__dirname, "sample.txt");

function analyze(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "").length;
  const words = text.toLowerCase().match(/[a-z']+/g) || [];
  const counts = {};
  for (const w of words) counts[w] = (counts[w] || 0) + 1;
  const top = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  return { lines, words: words.length, characters: text.length, top };
}

if (require.main === module) {
  fs.readFile(file, "utf8", (err, text) => {
    if (err) {
      console.error(`Could not read ${file}: ${err.message}`);
      process.exit(1);
    }
    const r = analyze(text);
    console.log(`📄 ${path.basename(file)}`);
    console.log(`Lines: ${r.lines}  Words: ${r.words}  Characters: ${r.characters}`);
    console.log("Top 5 words:");
    r.top.forEach(([word, n]) => console.log(`  ${word.padEnd(10)} ${"█".repeat(n)} ${n}`));
  });
}

module.exports = { analyze };
