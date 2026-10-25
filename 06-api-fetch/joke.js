// Fetch data from a free public API (no key needed) with fetch + async/await.
// Needs Node 18+ (fetch is built in) and internet.
// Run: node joke.js

async function main() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const joke = await res.json();
    console.log(joke.setup);
    setTimeout(() => console.log(`👉 ${joke.punchline}`), 1500);
  } catch (err) {
    console.error("Could not get a joke (are you online?):", err.message);
  }
}

main();
