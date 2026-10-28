// A tiny pub/sub bus built on EventEmitter.
const { EventEmitter } = require("node:events");

function createBus() {
  const emitter = new EventEmitter();
  const history = [];
  return {
    on: (name, fn) => emitter.on(name, fn),
    emit: (name, data) => {
      history.push(name);
      emitter.emit(name, data);
    },
    history: () => [...history],
  };
}

module.exports = { createBus };
