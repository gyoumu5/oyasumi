const http = require("http");
const querystring = require("querystring");
const discord = require("discord.js-12");
const client = new discord.Client();

//GASでwakeさせること。

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
      res.end("Discord Bot is Oprateing!");
    }
  })
  .listen(3000);

client.on("ready", message => {
  console.log("Bot準備完了！");
});

client.on("message", message =>{
  if (message.content === "hello."){
    message.channel.send(`hello! ${message.author}`)
  }
})

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("DISCORD_BOT_TOKENを設定してください。");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);