const http = require("http");
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Discord Bot is Operating!");
}).listen(PORT, "0.0.0.0");

console.log(`HTTPサーバーがポート${PORT}で起動しました`);
