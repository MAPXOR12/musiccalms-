const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands rox**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(``)
    .setImage(``)
    .setTitle(`Rox Is One`)
    .setDescription(`
*** <a:emoji_23:850626724513185802> | User Commands***
<a:emoji_16:850611586921398283>
${PREFIX}invite - ${PREFIX}support(supp)
${PREFIX}uptime
${PREFIX}ping - ${PREFIX}invites
${PREFIX}avatar - ${PREFIX}se
${PREFIX}icon - ${PREFIX}say
${PREFIX}rate - ${PREFIX}simp
${PREFIX}satus - ${PREFIX}impostor
<a:emoji_16:850611586921398283>
*** <a:emoji_22:850626710352166923> | Music Commands***
<a:emoji_16:850611586921398283>
${PREFIX}play - ${PREFIX}skip
${PREFIX}skipto - ${PREFIX}nowplaying
${PREFIX}stop - ${PREFIX}volume
${PREFIX}nowplaying - ${PREFIX}resume
${PREFIX}shuffle - ${PREFIX}search
${PREFIX}remove - ${PREFIX}queue 
${PREFIX}filter - ${PREFIX}radio
${PREFIX}loop - ${PREFIX}lyrics
<a:emoji_16:850611586921398283>
*** <a:emoji_10:850608290308292628> | Gif Commands***
<a:emoji_16:850611586921398283>
*${PREFIX}boy* - *${PREFIX}gifblack*
*${PREFIX}smoking* - *${PREFIX}girl*
*${PREFIX}sad* - 
<a:emoji_16:850611586921398283>
 *** <a:emoji_24:849928845750698004> | FunCommands***
<a:emoji_16:850611586921398283>
${PREFIX}prefix - ${PREFIX}giveway
${PREFIX}lock - ${PREFIX}unlock 
${PREFIX}ban - ${PREFIX}unban
${PREFIX}slowmode - ${PREFIX}invites
${PREFIX}server - ${PREFIX}about
**Links** <a:emoji_19:850624403293077504>
<a:emoji_1:848805449155215391>[SUPPORT](https://discord.gg/BCHan3ZxZr)   <a:emoji_13:850610633618489344>     [INVITE](https://discord.com/api/oauth2/authorize?client_id=828921463348264982&permissions=8&scope=bot) <a:emoji_20:850624420102930444>
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#740000")
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
