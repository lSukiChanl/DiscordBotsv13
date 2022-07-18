module.exports = {
    name: "vote",
    aliases: ["menhera-chan","kurumi","kurumi-chan"],
    description:"Ver un Meme Random",
    async execute (client, message, args, discord){

        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Author = process.env.NOMBREAUTOR;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;
        
        try {
            let NumMagic = Math.floor(Math.random()*968);
            NumMagic = NumMagic + 1;
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setTitle("🎀 🎀 🎀 𝐕𝐎𝐓𝐀𝐑 🎀 🎀 🎀")
                embed.setThumbnail("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/MenheraAngel001.png")
                embed.addField(" 𝐀𝐛𝐚𝐣𝐨 𝐔𝐑𝐋 (𝐒𝐢 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐥 𝐋𝐢𝐧𝐤) ", ""+
                    "\n https://top.gg/bot/589681935312224256/vote " )
                embed.setURL("https://top.gg/bot/589681935312224256/vote")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Vote/Votame.gif")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                message.reply(" 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐕𝐨𝐭𝐚𝐫𝐦𝐞 :heartpulse: ");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};