const { Trap18 } = require('./IMG');

module.exports = {
    name: "trap18",
    aliases: ["nsfwtrap18", "hentaitrap18"],
    description:"Comando Hentai Trapos",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*151);
            let NumMagicB = Math.floor(Math.random()*33);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐒𝐢 𝐞𝐬 𝐓𝐫𝐚𝐩𝐢𝐭𝐨 𝐞𝐬 𝐦𝐚𝐬 𝐑𝐢𝐜𝐨 𝐞𝐰𝐞 ")
                embed.setImage(Trap18[NumMagic])
                return message.channel.send( {embeds: [embed] });
            }
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐏𝐚𝐫𝐚 𝐪𝐮𝐞 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞 𝐞𝐬𝐭𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐍𝐚𝐝𝐢𝐞 >.< ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagicB+".gif")
                return message.channel.send( {embeds: [embed] });
            }
            return message.reply("Este Canal no es +18")
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};