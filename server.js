const http = require("http");
const querystring = require("node:querystring");

// Renderの場合はこのように修正！（3000固定をprocess.env.PORTへ）
const PORT = process.env.PORT || 3000;

http
  .createServer(function(req, res) {
    if (req.method == "POST") {
      var data = "";
      req.on("data", function(chunk) {
        data += chunk;
      });
      req.on("end", function() {
        if (!data) {
          res.end("No post data");
          return;
        }
        var dataObject = querystring.parse(data);
        console.log("post:" + dataObject.type);
        if (dataObject.type == "wake") {
          console.log("Woke up in post");
          res.end();
          return;
        }
        res.end();
      });
    } else if (req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Discord Bot is Operating!");
    }
  })
  .listen(PORT,"0.0.0.0");  // ここを修正！！必ずprocess.env.PORTで！

console.log(`HTTPサーバーがポート${PORT}で起動しました`);
console.log(`process.env.PORT=${process.env.PORT}, Use PORT=${PORT}`);

if (!process.env.DISCORD_BOT_TOKEN) {
  console.log("DISCORD_BOT_TOKENを設定してください。");
  //process.exit(0);
  return; // 処理を止めるだけでプロセスは残る
}

require("./code.js");
console.log('code.js モジュール読み込み完了');
