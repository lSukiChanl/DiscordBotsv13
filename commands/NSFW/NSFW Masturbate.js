const { Masturbate } = require('./IMG');
const { HandJob } = require('./IMG');

module.exports = {
    name: "masturbate",
    aliases: ["nsfwmasturbate", "hentaimasturbate"],
    description:"Comando Hentai Masturbarse",
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
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" " + message.author.username + " \nšš š”ššš šš„ šš®š­šØššš„š¢šš¢šØš¬šØ šš°š ")
                embed.setImage(Masturbate[NumMagic])
                embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" " + message.author.username + " \nšš¬š­š ššš¬š­š®š«ššš§ššØ š "+ member.user.username + "  ")
            embed.setImage(HandJob[NumMagic])
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