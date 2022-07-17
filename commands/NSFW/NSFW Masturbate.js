const { Masturbate } = require('./IMG');
const { HandJob } = require('./IMG');

module.exports = {
    name: "masturbate",
    aliases: ["nsfwmasturbate", "hentaimasturbate"],
    description:"Comando Hentai Masturbarse",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐒𝐞 𝐡𝐚𝐜𝐞 𝐞𝐥 𝐀𝐮𝐭𝐨𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐞𝐰𝐞 ")
                embed.setImage(Masturbate[NumMagic])
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + message.author.username + " \n𝐄𝐬𝐭𝐚 𝐌𝐚𝐬𝐭𝐮𝐫𝐛𝐚𝐧𝐝𝐨 𝐚 "+ member.user.username + "  ")
            embed.setImage(HandJob[NumMagic])
            return message.channel.send( {embeds: [embed] });
        }
        return message.reply("Este Canal no es +18")
    } catch (error) {
        return console.log("Error : " + error);
    }
}
};