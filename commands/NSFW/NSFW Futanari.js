const { Futanari } = require('./IMG');

module.exports = {
    name: "futanari",
    aliases: ["nsfwfutanari", "hentaifutanari"],
    description:"Comando Hentai Fetiche por las Futanaris",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            if (message.channel.nsfw === true) {
                let member = message.mentions.members.first(); 
                let NumMagic = Math.floor(Math.random()*61);
                let NumMagicB = Math.floor(Math.random()*33);
                if (!member){
                    let embed = new discord.MessageEmbed()
                    embed.setColor('#D57DC1')
                    embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                    embed.setDescription(" " + message.author.username + " \n𝐀𝐥𝐠𝐨 𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐩𝐚𝐫𝐚 𝐞𝐥 𝐅𝐞𝐭𝐢𝐜𝐡𝐢𝐬𝐭𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐅𝐮𝐭𝐚𝐬 𝐞𝐰𝐞 ")
                    embed.setImage(Futanari[NumMagic])
                    embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                    embed.setTimestamp()
                    return message.channel.send( {embeds: [embed] });
                }
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" " + message.author.username + " \n𝐏𝐚𝐫𝐚 𝐪𝐮𝐞 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞 𝐞𝐬𝐭𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐍𝐚𝐝𝐢𝐞 >.< ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagicB+".gif")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
            return message.reply("Este Canal no es +18")
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};