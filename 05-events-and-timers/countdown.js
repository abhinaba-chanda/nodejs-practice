// Learn events, timers and async/await with a match countdown.
// Run: node countdown.js 5

const EventEmitter = require("events");

class Match extends EventEmitter {
  async start(seconds) {
    this.emit("countdown", seconds);
    for (let s = seconds - 1; s > 0; s--) {
      await sleep(1000);
      this.emit("countdown", s);
    }
    await sleep(1000);
    this.emit("kickoff");
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const match = new Match();
match.on("countdown", (s) => console.log(`Kick-off in ${s}...`));
match.on("kickoff", () => console.log("⚽ KICK-OFF! Let's go!"));

const seconds = Math.max(1, Math.min(60, Number(process.argv[2]) || 3));
match.start(seconds);
