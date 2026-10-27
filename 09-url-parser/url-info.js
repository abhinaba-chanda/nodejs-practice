// URL parser
// Breaks a web address into its parts and reads the query string.
// Practice: the built-in URL class, URLSearchParams, objects.
// Run: node 09-url-parser/url-info.js "https://example.com/search?q=node&page=2"

function urlInfo(address) {
  const url = new URL(address);
  return {
    protocol: url.protocol.replace(":", ""),
    host: url.hostname,
    path: url.pathname,
    query: Object.fromEntries(url.searchParams),
    secure: url.protocol === "https:",
  };
}

function isValidUrl(address) {
  try {
    new URL(address);
    return true;
  } catch {
    return false;
  }
}

if (require.main === module) {
  const address = process.argv[2] || "https://abhinaba-chanda.github.io/weather-now/?city=London";
  if (!isValidUrl(address)) {
    console.log("That is not a valid URL");
    process.exit(1);
  }
  console.log(urlInfo(address));
}

module.exports = { urlInfo, isValidUrl };
