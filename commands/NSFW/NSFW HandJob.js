const { HandJob } = require('./IMG');

module.exports = {
    name: "handjob",
    aliases: ["nsfwhandjob", "hentaihandjob"],
    description:"Comando Hentai HandJoob",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐍𝐞𝐜𝐞𝐬𝐢𝐭𝐚 𝐔𝐧𝐚 𝐀𝐲𝐮𝐝𝐚 𝐌𝐚𝐧𝐮𝐚𝐥 ¿𝐂𝐚𝐧𝐭𝐢𝐝𝐚𝐭@𝐬? ")
                embed.setImage(HandJob[NumMagic])
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