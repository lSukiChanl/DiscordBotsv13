const { Yaoi18 } = require('./IMG');

module.exports = {
    name: "yaoi18",
    aliases: ["nsfwtrap18", "hentaitrap18"],
    description:"Comando Hentai Yaoi",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            let NumMagicB = Math.floor(Math.random()*33);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐒𝐢 𝐄𝐫𝐞𝐬 𝐅𝐮𝐣𝐨𝐬𝐡𝐢 𝐄𝐬𝐭𝐞 𝐞𝐬 𝐭𝐮 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 (⁄ ⁄•⁄ω⁄•⁄ ⁄)  ")
                embed.setImage(Yaoi18[NumMagic])
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