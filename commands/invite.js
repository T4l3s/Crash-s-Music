const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To invite me to your server",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Convide " + client.user.tag + " para seu server!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `Você pode convidar o bot clicando [aqui](https://discord.com/oauth2/authorize?client_id=889961304742301696&scope=bot&permissions=8)`);
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, interaction, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Convide " + client.user.tag + " para seu server!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `Você pode convidar o bot clicando [aqui](https://discord.com/oauth2/authorize?client_id=889961304742301696&scope=bot&permissions=8)`);
    message.channel.send(embed);
  },
  },
};

