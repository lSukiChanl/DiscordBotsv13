module.exports = {
    name: "mdreally",
    aliases: ["mdrealmente"],
    description:"Sticker Menhera Perrita Â¿Lo Dices en Serio?",
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
                    description: "ðððð ððððððððð ððððððððððððð ðððððððð \nððð ðððð ððððððððððððð"
                }})
                )
            );
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+ message.author.username +" ðð«ðð ð®ð§ð­ð ð¬ð¢ ð¥ð¨ ðð¢ððð¬ ðð§ ððð«ð¢ð¨")
            embed.setImage('https://cdn.discordapp.com/emojis/631035898380812298.png')
            embed.setFooter({text: " ðð«ððð¢ð­ð¨ð¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};