const ytdl = require("ytdl-core")
const yrS = require("yt-search")
const play = require("play-dl");

const { AudioPlayer, StreamType, createAudioPlayer, createAudioResource, joinVoiceChannel, AudioPlayerStatus }= require("@discordjs/voice")

module.exports = {
    name: "play",
    aliases: ["p"],
    description:"Radio Anime",
    
    async execute (client, message, args, discord){
        try {
            const replacer = new RegExp(",", 'g');
            const string = args + "";
            args = string.replace(replacer, " ");

            message.channel.send('probandoo' + args);
            
            const vc = message.member.voice.channel;
            if (!vc) {
              return message.reply({
                content: "Tienes que estar en un canal de voz",
                ephemeral: true,
              });
            }

            async function vdSearch(args){
                const vdE = await yrS(args);
                return vdE.videos.length > 0 ? vdE.videos[0] : null;
            }

            const vdRepro = await vdSearch(args);
            console.log(vdRepro)
            if (!vdRepro) return message.channel.send("NO SE ENCONTRO VIDEO");
            
            const stream = ytdl(vdRepro.url, { filter : 'audioonly' });

              const conc = joinVoiceChannel({
                channelId: vc.id,
                guildId: message.guildId,
                adapterCreator: message.guild.voiceAdapterCreator,
              });
          
              const resource = createAudioResource(stream, {
                inputType: StreamType.Arbitrary,
              });
          
              const player = createAudioPlayer();
          
              player.play(resource);
              conc.subscribe(player);
          
              const embed = {
                author: {
                  name: "IchiMonogatari",
                  icon_url:
                    "https://cdn.discordapp.com/avatars/839161737525723186/039ad2a9bafef89dcbe13d4f331975e5.webp",
                },
                title: "Reproduciendo => " + vdRepro.title,
                description: `${vdRepro.description}\n[URL](${vdRepro.url})`,
                color: "RED",
                image: { url: vdRepro.thumbnail },
              };

              message.reply({
                embeds: [embed],
              });

              player.on(AudioPlayerStatus.Idle, () => conc.destroy());

              

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};
