const { Suck } = require('./IMG');
const { Masturbate } = require('./IMG');

module.exports = {
    name: "suck",
    aliases: ["nsfwsuck", "hentaisuck", "mamada"],
    description:"Comando Hentai Chupandola/Suck",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐒𝐞 𝐞𝐬𝐭𝐚 𝐃𝐚𝐧𝐝𝐨 𝐏𝐥𝐚𝐜𝐞𝐫 𝐚 𝐬𝐢 𝐌𝐢𝐬𝐦@ \n𝐖𝐨𝐨𝐖 𝐏𝐞𝐫𝐨 𝐪𝐮𝐞 𝐄𝐥𝐚𝐬𝐭𝐢𝐜𝐢𝐝𝐚𝐝 ")
                embed.setImage(Masturbate[NumMagic])
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + message.author.username + " \n𝐋𝐞 𝐄𝐬𝐭𝐚 𝐃𝐚𝐧𝐝𝐨 𝐮𝐧𝐚 𝐂𝐡𝐮𝐩𝐚𝐝𝐢𝐭𝐚 𝐚 "+ member.user.username + " ")
            embed.setImage(Suck[NumMagic])
            return message.channel.send( {embeds: [embed] });
        }
        return message.reply("Este Canal no es +18")
    } catch (error) {
        return console.log("Error : " + error);
    }
}
};