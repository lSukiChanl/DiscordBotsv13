module.exports = {
    name: "srthink",
    aliases: ["sgthink"],
    description:"Sticker Pensando",
    async execute (client, message, args, discord){
        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Author = process.env.NOMBREAUTOR;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;
        
        try {
            message.delete().catch(error =>
                message.reply(({embed: {
                    color: 15158332,
                    description: "šššš ššššššššš ššššššššššššš šššššššš \nššš šššš ššššššššššššš"
                }})
                )
            );
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+ message.author.username +" šš šš®š¬šØ š ššš§š¬šš«")
            embed.setImage('https://cdn.discordapp.com/emojis/633100135185776650.png')
            embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};