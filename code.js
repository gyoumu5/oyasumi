const { Client } = require("discord.js");
const options = { intents: ["GUILDS", "GUILD_MESSAGES"] };
const client = new Client(options);

client.on("ready", (message) => {
  console.log("Bot準備完了！");
});

//ここから

client.on("messageCreate", (message) => {
  if (message.content === "hello.") {
    message.channel.send(`hello! ${message.author}`);
  }
});

//ここまで

client.on('message', message =>{
  if (message.author.bot) return;
  if (message.content.match(/test|aaaa/)){　//AまたはBというキーワードでBOTを稼働させたい
　let channel = message.channel;
　let author = message.author.username;
　let reply_text = `${author}が${message.content}と<#${message.channel.id}>で発言しています`;
  
  client.channels.cache.get('チャンネルID').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい
  return;
  }
});


client.login(process.env.DISCORD_BOT_TOKEN);