const { Armpit } = require('./IMG');

module.exports = {
    name: "armpit",
    aliases: ["nsfwarmpit", "hentaiarmpit"],
    description:"Comando Hentai Fetiche por las Axilas",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
                let member = message.mentions.members.first(); 
                let NumMagic = Math.floor(Math.random()*51);
                if (!member){
                    let embed = new discord.MessageEmbed()
                    embed.setColor('#D57DC1')
                    embed.setDescription(" " + message.author.username + " \n𝐀𝐱𝐢𝐥𝐚𝐬 𝐞𝐰𝐞 ")
                    embed.setImage(Armpit[NumMagic])
                    return message.channel.send( {embeds: [embed] });
                }
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐄𝐬𝐭𝐚 𝐎𝐜𝐮𝐩𝐚𝐧𝐝𝐨 𝐬𝐮𝐬 𝐀𝐱𝐢𝐥𝐚𝐬 𝐩𝐚𝐫𝐚 𝐒𝐚𝐭𝐢𝐬𝐟𝐚𝐜𝐞𝐫 𝐚 "+ message.member.user.username + "  ")
                embed.setImage(Armpit[NumMagic])
                return message.channel.send( {embeds: [embed] });
            }
            return message.reply("Este Canal no es +18")
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};