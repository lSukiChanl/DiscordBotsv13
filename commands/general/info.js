const moment = require('moment');

module.exports = {
    name: "info",
    aliases: ["informacion"],
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            
            const flags = {
                DISCORD_EMPLOYEE: 'Discord Employee',
                DISCORD_PARTNER: 'Discord Partner',
                BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
                BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
                HYPESQUAD_EVENTS: 'HypeSquad Events',
                HOUSE_BRAVERY: 'House of Bravery',
                HOUSE_BRILLIANCE: 'House of Brilliance',
                HOUSE_BALANCE: 'House of Balance',
                EARLY_SUPPORTER: 'Early Supporter',
                TEAM_USER: 'Team User',
                SYSTEM: 'System',
                VERIFIED_BOT: 'Verified Bot',
                VERIFIED_DEVELOPER: 'Verified Bot Developer'
            };
    
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            
                let embed = new discord.MessageEmbed()
                    embed.setTitle("🎀 🎀 🎀 🎀 Informacion del Perfil 🎀 🎀 🎀 🎀")
                    embed.setThumbnail(message.member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
                    embed.setColor('#D57DC1')
                    embed.addField('Informacion de Usuario',
                        "\n " + `**♡ Username:** ${message.member.user.username}` +
                        "\n " + `**♡ Codigo:** ${message.member.user.discriminator}`+
                        "\n " + `**♡ ID:** ${message.member.id}` +
                        //"\n " + `**♡ Flags:** ${message.member.userFlags.length ? message.member.userFlags.map(flag => flags[flag]).join(', ') : 'None'}` +
                        "\n " + `**♡ Avatar:** [Link to avatar](${message.member.user.avatarURL()+"?size=1024"})` +
                        "\n " + `**♡ Time Created:** ${moment(message.member.user.createdTimestamp).format('LT')} ${moment(message.member.user.createdTimestamp).format('LL')} ${moment(message.member.user.createdTimestamp).fromNow()}` +
                        "\n " + `**♡ Status:** ${message.member.presence?.status}`+
                        "\n " + `**♡ Game:** ${message.member.user.getActivity || 'Not playing a game.'}`,
                        "\n " + `\u200b`
                    );
                    embed.addField('Miembro',
                        "\n " + `**♡ Highest Role:** ${message.member.roles.highest.id === message.guild.id ? 'None' : message.member.roles.highest.name}` + 
                        "\n " + `**♡ Server Join Date:** ${moment(message.member.joinedAt).format('LL LTS')}` + 
                        "\n " + `**♡ Roles [${message.guild.roles.cache.has.length}]:** ${message.guild.roles.cache.has.length < 10 ? message.guild.roles.cache.values().join(', ') : message.guild.roles.cache.has.length > 10 ? this.client.utils.trimArray(roles) : 'None'}` +
                        "\n " + `\u200b`
                    );
                    embed.setURL("https://www.ichimonogatari.com")
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Help/Help.gif")
                    embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                    embed.setTimestamp()
                return message.channel.send( {embeds: [embed] });

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};