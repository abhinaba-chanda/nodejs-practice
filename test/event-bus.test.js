const test = require("node:test");
const assert = require("node:assert");
const { createBus } = require("../14-event-bus/bus.js");

test("bus delivers events", () => {
  const bus = createBus();
  let got = null;
  bus.on("hello", (d) => (got = d));
  bus.emit("hello", 42);
  assert.strictEqual(got, 42);
  assert.deepStrictEqual(bus.history(), ["hello"]);
});
