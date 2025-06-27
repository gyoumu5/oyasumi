const { Client, GatewayIntentBits } = require("discord.js");

// v14のIntent必須！
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

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

const sourceChannelName = "遅刻・欠勤連絡（書き込み用）";

client.on("ready", () => {
  console.log(`Bot準備完了！ ${client.user.tag} でログインしています。`);
});

client.on("messageCreate", async (message) => {
  if (message.author?.bot) return;
  console.log(
    `[messageCreate] メッセージ: ID=${message.id}, 内容="${message.content}"`
  );
  handleMessage(message);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  try {
    if (newMessage.partial) newMessage = await newMessage.fetch();
    if (newMessage.author?.bot) return;
    console.log(
      `[messageUpdate] 編集後メッセージ: ID=${newMessage.id}, 内容="${newMessage.content}"`
    );
    handleMessage(newMessage);
  } catch (err) {
    console.error("messageUpdate error:", err);
  }
});

async function handleMessage(message) {
  try {
    if (message.channel?.name === sourceChannelName && typeof message.content === "string") {
      for (const [keyword, targetChannelName] of Object.entries(keywordsToChannels)) {
        if (message.content.includes(keyword)) {
          const targetChannel = message.guild.channels.cache.find(
            (ch) => ch.name === targetChannelName && ch.type === 0 // GUILD_TEXT
          );
          if (targetChannel) {
            await targetChannel.send(message.content);
            console.log(
              `キーワード "${keyword}" で"${targetChannelName}"に転送。`
            );
            await message.react("🍟");
          } else {
            console.error(`転送先チャンネル "${targetChannelName}"が見つかりません。`);
          }
          break;
        }
      }
    }
  } catch (err) {
    console.error("handleMessage error:", err);
  }
}

client.login(process.env.DISCORD_BOT_TOKEN);
