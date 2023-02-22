const { Client } = require("discord.js");
const options = { intents: ["GUILDS", "GUILD_MESSAGES"] };
const client = new Client(options);

client.on("ready", (message) => {
  console.log("Bot準備完了！");
});

client.on('message', message =>{
  let menber1 = "藤田道"
  let menber2 = "田辺一則"
  let menber3 = "松本吉彦"
  let menber4 = "赤堀浩之"
  let menber5 = "増田晴紀"
  let menber6 = "高林孝光"
  let menber7 = "赤堀良明"
  let menber8 = "宮﨑亮"
  let menber9 = "大石彰久"
  let menber10 = "秋山雅貴"
  let menber11 = "紅林寿樹"
  let menber12 = "藤田勇"
  
  if (message.author.bot) return;
    if (message.content.match("menber1")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077447164218839122').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい
    }
    if (message.content.match("menber2")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077446792855175189').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい
    }
    if (message.content.match("menber3")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077446838006857729').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber4")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077446992298528819').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber5")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077447071927373884').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber6")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077446756255674479').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber7")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077447033687908362').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber8")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077444315774734438').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber9")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077446655965663253').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber10")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077446698185543791').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber11")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077447252349554719').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
    if (message.content.match("menber12")){　//AまたはBというキーワードでBOTを稼働させたい
    　let channel = message.channel;
　    let author = message.author.username;
　    let reply_text = `${message.content}`;
      client.channels.cache.get('1077445009160286288').send(reply_text) //メッセージを取得したチャンネルとは別のチャンネルDに、発言ユーザーとメッセージABCの全文を送信したい    
    }
  return;
});


client.login(process.env.DISCORD_BOT_TOKEN);