const Discord = require('discord.js');
const antispam = require('better-discord-antispam');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}.`);
  client.user.setActivity('SPAMMERS', { type: 'WATCHING' });
   antispam(client, {
        limitUntilWarn: 3,
        limitUntilMuted: 4,
        interval: 11000,
        warningMessage: "Please stop spamming!",
        muteMessage: "Muted :)!",
        maxDuplicatesWarning: 2,
        maxDuplicatesMute: 3,
        ignoredRoles: ["OWNER", "Staff"],
        ignoredMembers: [],
        mutedRole: "Muted",
        timeMuted: -1,
        logChannel: "antispam-logs"
      });
});

client.on('message', msg => {
  client.emit('checkMessage', msg);
});

client.login('DISCORD BOT TOKEN');