const { Client } = require("discord.js");
const options = { intents: ["GUILDS", "GUILD_MESSAGES"] };
const client = new Client(options);

client.on("ready", (message) => {
  console.log("Bot準備完了！");
});

client.on('message', message =>{
  let member1 = "藤田道"
  let member2 = "田辺一則"
  let member3 = "松本吉彦"
  let member4 = "赤堀浩之"
  let member5 = "増田晴紀"
  let member6 = "高林孝光"
  let member7 = "赤堀良明"
  let member8 = "宮﨑亮"
  let member9 = "坂上ケイチ"
  let member10 = "秋山雅貴"
  let member11 = "紅林寿樹"
  let member12 = "藤田勇"
  
//  client.on('message', message =>{
//  if (message.author.bot) return;

  //botのメッセージのみに反応して転送する
  if (message.author.id === client.user.id) return;//二重反応を防ぐ
    if (message.author.bot)
      if (message.content.match(member1)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077447164218839122').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい
      }
      if (message.content.match(member2)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077447164218839122').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい
      }
      if (message.content.match(member3)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077446838006857729').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member4)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077446992298528819').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member5)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077447071927373884').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member6)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077446756255674479').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member7)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077447033687908362').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member8)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077444315774734438').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member9)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077446655965663253').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member10)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077446698185543791').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member11)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077447252349554719').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
      if (message.content.match(member12)){　//AまたはBというキーワードでBOTを稼働させたい
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `${message.content}`;
        client.channels.cache.get('1077445009160286288').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
      }
    return;
});


client.login(process.env.DISCORD_BOT_TOKEN);