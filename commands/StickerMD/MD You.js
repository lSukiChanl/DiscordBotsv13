module.exports = {
    name: "mdyou",
    aliases: ["mdtu"],
    description:"Sticker Menhera Perrita SeΓ±alando",
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
                    description: "ππππ πππππππππ πππππππππππππ ππππππππ \nπππ ππππ πππππππππππππ"
                }})
                )
            );
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+ message.author.username +" ππ¬π­π ππΓ±ππ₯ππ§ππ¨")
            embed.setImage('https://cdn.discordapp.com/emojis/631036246638067722.png')
            embed.setFooter({text: " ππ«πππ’π­π¨π¬ : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};