const ytdl = require("ytdl-core")
const yrS = require("yt-search")

const { AudioPlayer, StreamType, createAudioPlayer, createAudioResource, joinVoiceChannel, AudioPlayerStatus }= require("@discordjs/voice")

module.exports = {
    name: "radio",
    aliases: ["radioanime", "radio-anime", "radio anime"],
    description:"Radio Anime",
    
    async execute (client, message, args, discord){
        try {
         
            message.channel.send("Reproduciendo ahora: ");
            let embed = new discord.MessageEmbed()
                embed.setTitle("RADIO ANIMEX")
                embed.setColor("RANDOM")
                embed.setThumbnail("https://1.bp.blogspot.com/-LD2HnZd1fyI/X_LRif0i3kI/AAAAAAAACac/KIS6n4A574wkme1ffZWY5omKKyJzgI-lQCLcBGAsYHQ/s16000/fghgh.png")
                embed.setDescription(`Radio Anime las 24 Horas del Dia`)
                embed.setURL("https://www.radioanimex.com")
            message.channel.send( {embeds: [embed] });

            const vc = message.member.voice.channel;
            if (!vc) {
              return message.reply({
                content: "Tienes que estar en un canal de voz",
                ephemeral: true,
              });
            }


            const conc = joinVoiceChannel({
                channelId: vc.id,
                guildId: message.guildId,
                adapterCreator: message.guild.voiceAdapterCreator,
              });


              //const resource = createAudioResource('https://radiostreamingaac.com:8590/radioanimex');
              //const resource = createAudioResource('https://www.youtube.com/watch?v=TheR-r9XW3U');
              //const stream = ytdl('https://www.youtube.com/watch?v=TheR-r9XW3U', {filter: "audioonly"})

              const stream = ytdl('https://www.youtube.com/watch?v=gOMhN-hfMtY', { filter : 'audioonly' });

              const resource = createAudioResource(stream);

              const player = createAudioPlayer();

              player.play(resource);
              conc.subscribe(player);

              player.on(AudioPlayerStatus.Idle, () => conc.destroy());

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};
