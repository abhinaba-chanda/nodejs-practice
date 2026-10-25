// A tiny web server using only Node's built-in http module.
// Run: node server.js   then open http://localhost:3000

const http = require("http");

const PORT = process.env.PORT || 3000;
let visits = 0;

function handler(req, res) {
  visits++;
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<!doctype html>
<html><head><meta charset="utf-8"><title>My Node server</title></head>
<body style="font-family:sans-serif;background:#0d1117;color:#e6edf3;padding:2rem">
  <h1>Hello from Node.js 🚀</h1>
  <p>This page was made by <code>server.js</code>. Visits so far: ${visits}</p>
  <ul>
    <li><a style="color:#58a6ff" href="/api/time">/api/time</a> → JSON with the current time</li>
    <li><a style="color:#58a6ff" href="/api/hello?name=Abhinaba">/api/hello?name=Abhinaba</a> → JSON greeting</li>
  </ul>
</body></html>`);
  } else if (url.pathname === "/api/time") {
    sendJson(res, 200, { time: new Date().toISOString() });
  } else if (url.pathname === "/api/hello") {
    const name = url.searchParams.get("name") || "stranger";
    sendJson(res, 200, { message: `Hello, ${name}!` });
  } else {
    sendJson(res, 404, { error: "Not found" });
  }
}

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer(handler);

if (require.main === module) {
  server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT} (Ctrl+C to stop)`));
}

module.exports = server;
