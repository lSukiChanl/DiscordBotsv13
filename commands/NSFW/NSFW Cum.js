const { Cum } = require('./IMG');

module.exports = {
    name: "cum",
    aliases: ["nsfwcum", "hentaicum"],
    description:"Ohh Me Vengo",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
                const Creditos = process.env.AUTHOR;
                const Version = process.env.VERSION;
                const Author = process.env.NOMBREAUTOR;
                const Icon = process.env.ICONURL;
                const Url = process.env.URL;

                let member = message.mentions.members.first(); 
                let NumMagic = Math.floor(Math.random()*51);
                if (!member){
                    let embed = new discord.MessageEmbed()
                    embed.setColor('#D57DC1')
                    embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                    embed.setDescription(" " + message.author.username + " \nšš š”š ššš§š¢ššØ ššØš„šØ ")
                    embed.setImage(Cum[NumMagic])
                    embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
                    embed.setTimestamp()
                    return message.channel.send( {embeds: [embed] });
                }
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" " + message.author.username + " \nšš šš¢š§šØ šš§ "+ message.member.user.username + " ")
                embed.setImage(Cum[NumMagic])
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