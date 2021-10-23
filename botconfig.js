module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discordapp.com/users/315576376327405589", //Support Server Link
  Token: process.env.Token || "OTAxNTgwMzEwNDQ4MzE2NTI3.YXR8GA.nUaQn_o51uaDXVZ36DvUDxu_vyw", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "901580310448316527", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "OVWXH2UQ4f0w95LlL-f-U30jewFFhvhs", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/T4l3s/Crash-s-Music/main/standard.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
Lavalink: {
    id: "Main",
    host: "lavalink.darrennathanael.com",
    port: 2095,
    pass: "whatwasthelastingyousaid",
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "17f3cc3d3fc746c4a0999034a47a9df1", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "0ec40c5c637c46b1ad6a147e3e9c2ad6", //Spotify Client Secret
  },
};
