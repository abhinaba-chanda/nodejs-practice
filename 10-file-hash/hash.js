// File hash
// Prints the SHA-256 fingerprint of a file, reading it as a stream
// so even big files use little memory.
// Practice: crypto, fs streams, Promises and async/await.
// Run: node 10-file-hash/hash.js package.json

const crypto = require("crypto");
const fs = require("fs");

function hashText(text, algorithm = "sha256") {
  return crypto.createHash(algorithm).update(text).digest("hex");
}

function hashFile(file, algorithm = "sha256") {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(algorithm);
    fs.createReadStream(file)
      .on("data", (chunk) => hash.update(chunk))
      .on("end", () => resolve(hash.digest("hex")))
      .on("error", reject);
  });
}

if (require.main === module) {
  const file = process.argv[2];
  if (!file) {
    console.log("Usage: node 10-file-hash/hash.js <file>");
    process.exit(1);
  }
  hashFile(file)
    .then((h) => console.log(`${h}  ${file}`))
    .catch((err) => {
      console.error("Could not read file:", err.message);
      process.exit(1);
    });
}

module.exports = { hashText, hashFile };
