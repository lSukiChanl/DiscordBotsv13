module.exports = {
    name: "mdshame",
    aliases: ["mdavergonzada"],
    description:"Sticker Menhera Perrita Avergonzada",
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
            embed.setDescription(" "+ message.author.username +" šš¬š­š ššÆšš«š šØš§š³šš@")
            embed.setImage('https://cdn.discordapp.com/emojis/631036055092461568.png')
            embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};