
module.exports = {
    name: "donate",
    aliases: ["donar"],
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;

            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')                
                embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
                embed.setTitle("🎀 🎀 🎀 🎀 🎀 𝗗𝗢𝗡𝗔𝗥 🎀 🎀 🎀 🎀 🎀")
                embed.setThumbnail("https://www.ichimonogatari.com/IMG/Avatar/MenheraAngel001.png")
                embed.addField(" 𝐀𝐛𝐚𝐣𝐨 𝐔𝐑𝐋 (𝐒𝐢 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐥 𝐋𝐢𝐧𝐤)  💖 ", ""+
                    "\n https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FR48DJLFQED2L&source=url " )
                embed.setURL("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FR48DJLFQED2L&source=url")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Donate/Donativo.gif")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
                message.reply(" 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐀𝐩𝐨𝐲𝐚𝐫𝐦𝐞 :heartpulse: ");
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};