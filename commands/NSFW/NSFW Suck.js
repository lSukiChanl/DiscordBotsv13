const { Suck } = require('./IMG');
const { Masturbate } = require('./IMG');

module.exports = {
    name: "suck",
    aliases: ["nsfwsuck", "hentaisuck", "mamada"],
    description:"Comando Hentai Chupandola/Suck",
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
                embed.setDescription(" " + message.author.username + " \nšš šš¬š­š ššš§ššØ šš„šššš« š š¬š¢ šš¢š¬š¦@ \nššØšØš ššš«šØ šŖš®š šš„šš¬š­š¢šš¢ššš ")
                embed.setImage(Masturbate[NumMagic])
                embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" " + message.author.username + " \nšš šš¬š­š ššš§ššØ š®š§š šš”š®š©ššš¢š­š š "+ member.user.username + " ")
            embed.setImage(Suck[NumMagic])
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