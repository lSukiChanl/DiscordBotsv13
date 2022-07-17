const { Fuck } = require('./IMG');
const { Masturbate } = require('./IMG');

module.exports = {
    name: "fuck",
    aliases: ["nsfwfuck", "hentaifuck", "fuck"],
    description:"Comando Hentai Coger",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagicF = Math.floor(Math.random()*61);
            let NumMagicM = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐄𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐞𝐥 𝐀𝐮𝐭𝐨𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐞𝐰𝐞 ")
                embed.setImage(Masturbate[NumMagicM])
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + message.author.username + " \n𝐒𝐞 𝐞𝐬𝐭𝐚 𝐅𝐨𝐥𝐥𝐚𝐧𝐝𝐨 𝐚 "+ member.user.username + " 𝗢///𝗢 ")
            embed.setImage(Fuck[NumMagicF])
            return message.channel.send( {embeds: [embed] });
        }
        return message.reply("Este Canal no es +18")
    } catch (error) {
        return console.log("Error : " + error);
    }
}
};