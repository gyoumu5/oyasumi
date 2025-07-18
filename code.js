const { Client, Intents } = require('discord.js');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

//console.log("DISCORD_BOT_TOKEN:", process.env.DISCORD_BOT_TOKEN);

console.log('code.js処理開始');
/*
client.on("debug", (info) => {
  console.log("💬 [DEBUG]", info);
});
client.on("error", (error) => {
  console.error("❗ [Client Error]", error);
});
*/

// キーワードと転送先チャンネル名を対応付けるマップ
const keywordsToChannels = {
"2印": "遅刻・欠勤連絡（印刷）",
印刷: "遅刻・欠勤連絡（印刷）",
2215: "遅刻・欠勤連絡（2215）",
"2押": "遅刻・欠勤連絡（2215）",
日立: "遅刻・欠勤連絡（日立）",
"3押": "遅刻・欠勤連絡（日立）",
シート: "遅刻・欠勤連絡（シート＆カーリング）",
カーリング: "遅刻・欠勤連絡（シート＆カーリング）",
射出: "遅刻・欠勤連絡（射出）",
天面: "遅刻・欠勤連絡（射出）",
業務: "遅刻・欠勤連絡（業務）",
品管: "遅刻・欠勤連絡（品管）",
生技: "遅刻・欠勤連絡（生技）",
};

// 書き込み用チャンネル名
const sourceChannelName = "遅刻・欠勤連絡（書き込み用）";

console.log('Bot起動処理');

client.on("ready", () => {
console.log(`Bot準備完了！ ${client.user.tag} でログインしています。`);
});

console.log('Log1');

// メッセージ作成時の処理
client.on("messageCreate", async (message) => {
if (message.author.bot) return; // ボットやシステムメッセージを無視
  if (message.channel.name === sourceChannelName) {
    console.log(`[messageCreate] メッセージ受信: ID=${message.id}, 内容="${message.content}"`);
    handleMessage(message);
  }
});

// メッセージ編集時の処理
client.on("messageUpdate", async (oldMessage, newMessage) => {
if (newMessage.author.bot) return; // ボットやシステムメッセージを無視
  if (newMessage.channel.name === sourceChannelName) {
    console.log(`[messageUpdate] メッセージ編集検出: ID=${newMessage.id}, 内容="${newMessage.content}"`);
    handleMessage(newMessage);
  }
});

console.log('Log2');

// メッセージを処理する共通関数
async function handleMessage(message) {
if (message.channel.name === sourceChannelName) {
// メッセージ中にキーワードが含まれているか確認
for (const [keyword, targetChannelName] of Object.entries(
keywordsToChannels
)) {
if (message.content.includes(keyword)) {
// 対応する転送先チャンネルを取得
const targetChannel = message.guild.channels.cache.find(
(channel) => channel.name === targetChannelName
);

console.log('Log3');
  
if (targetChannel) {
  // 転送
  await targetChannel.send(message.content);
  console.log(`キーワード "${keyword}" に反応して、メッセージを "${targetChannelName}" に転送しました。`);

  // 転送後に1秒待つ（1000ミリ秒）
  await new Promise(resolve => setTimeout(resolve, 1000));

  // 転送元メッセージにリアクションを付ける
  await message.react("🍟");
} else {
console.error(
`転送先チャンネル "${targetChannelName}" が見つかりませんでした。`
);
}
break; // 一致した時点で後続チェックを停止
}
}
}
}

console.log('Log4');
//console.log("✅ BOT TOKENの長さ:", process.env.DISCORD_BOT_TOKEN?.length);

client.login(process.env.DISCORD_BOT_TOKEN).then(() => {
  console.log('Discordログイン成功');
}).catch((err) => {
  console.error('Discordログイン失敗:', err);
});

