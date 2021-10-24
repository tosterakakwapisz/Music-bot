module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author} Kolejka jest pusta... Chcesz spróbować ponownie? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author} Wcześniej nic nie było grane... Może spróbuj zagrać coś nowego?? ❌`);

        await queue.back();

        message.channel.send(`Granie **poprzedniej** piosenki ✅`);
    },
};