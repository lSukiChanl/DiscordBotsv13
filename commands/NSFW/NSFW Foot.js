const { Foot } = require('./IMG');

module.exports = {
    name: "foot",
    aliases: ["nsfwcum", "hentaicum"],
    description:"Comando Hentai Fetiche por las Patas",
    async execute (client, message, args, discord){
        try {
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + message.author.username + " \n𝐏𝐚𝐭𝐚𝐬 𝐞𝐰𝐞 ")
                embed.setImage(Foot[NumMagic])
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setDescription(" " + message.author.username + " \n𝐄𝐬𝐭𝐚 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐧𝐝𝐨 𝐬𝐮𝐬 𝐏𝐢𝐞𝐬 𝐩𝐚𝐫𝐚 𝐃𝐚𝐫𝐥𝐞 𝐏𝐥𝐚𝐜𝐞𝐫 𝐚 "+ member.user.username + " ")
            embed.setImage(Foot[NumMagic])
            return message.channel.send( {embeds: [embed] });
        }
        return message.reply("Este Canal no es +18")
    } catch (error) {
        return console.log("Error : " + error);
    }
}
};