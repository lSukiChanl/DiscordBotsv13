const { Yuri18 } = require('./IMG');

module.exports = {
    name: "yuri18",
    aliases: ["nsfwyuri18", "hentaiyuri18"],
    description:"Comando Hentai Yuri",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            let NumMagicB = Math.floor(Math.random()*33);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" " + message.author.username + " \nšš®š šš¢ššØ šš„ šš®š«š¢ >////< ")
                embed.setImage(Yuri18[NumMagic])
                embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" " + message.author.username + " ššš«š šŖš®š šš®š§šš¢šØš§š šš¬š­š ššØš¦šš§ššØ š§šØ ššššš¬ ššš§šš¢šØš§šš« š šššš¢š >.< ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagicB+".gif")
                embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
            return message.reply("Este Canal no es +18")
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};