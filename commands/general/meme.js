
module.exports = {
    name: "meme",
    aliases: ["memazo"],
    description:"Ver un Meme Random",
    async execute (client, message, args, discord){
        try {
            let NumMagic = Math.floor(Math.random()*551);
            NumMagic = NumMagic + 1;
            let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription("𝐌𝐞𝐦𝐞 𝐑𝐚𝐧𝐝𝐨𝐦 ...")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Memes/Meme"+NumMagic+".jpg")
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};