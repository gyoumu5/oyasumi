const {Client} = require("discord.js")
const options = {intents:["GUILDS","GUILD_MESSAGES"]}
const client = new Client(options);


client.on("ready", message => {
  console.log("Bot準備完了！");
});

//ここから

client.on("messageCreate", message =>{
  if (message.content === "hello."){
    message.channel.send(`hello! ${message.author}`)
  }
})

//ここまで

client.login(process.env.DISCORD_BOT_TOKEN);