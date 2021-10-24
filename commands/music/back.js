module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Ale teraz ${message.author} nie puszcza piosenki... Spróbować ponownie? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Ale wcześniej nic nie grałem ${message.author}... Spróbować ponownie? ❌`);

        await queue.back();

        message.channel.send(`No spoko, puszczę **ostatni** utwór! ✅`);
    },
};