
module.exports = {
    name: "url",
    aliases: ["dir"],
    description:"Escribir una Imagen",
    async execute (client, message, args, discord){

        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Author = process.env.NOMBREAUTOR;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;
        let Texto = args.join(" ");
        
        try {
            message.delete().catch(error =>
                message.reply(({embed: {
                    color: 15158332,
                    description: "šššš ššššššššš ššššššššššššš šššššššš \nššš šššš ššššššššššššš"
                }})
                )
            );  
            let embed = new discord.MessageEmbed()
                if (args  = ''){
                    embed.setColor('#D57DC1')
                    embed.setImage('https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/URL/URL.png')
                return msg.channel.send(embed)
                }
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setDescription(" "+message.author.username + " šš¢šš: \n ššš¬š©šš­šØ š„šš¬ ššš š„šš¬ ššš„ ššš«šÆš¢ššØš«, ššš«šØ ššššš¢š«š¦šØ š¦š¢ šš®š­šØš«š¢ššš šš­š¢š„š¢š³šš§ššØ šš„ ššØš­ ššš«š šš§šÆš¢šš« šš¬š­š šš¦šš šš§")
                embed.setImage(Texto)
                embed.setFooter({text: " šš«ššš¢š­šØš¬ : "+ Creditos +"  "+ Version +" "})
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};