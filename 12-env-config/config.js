// Read settings from environment variables with defaults.
function loadConfig(env = process.env) {
  return {
    port: Number(env.PORT) || 3000,
    debug: env.DEBUG === "true",
    name: env.APP_NAME || "node-practice",
  };
}

module.exports = { loadConfig };

if (require.main === module) {
  console.log(loadConfig());
}
