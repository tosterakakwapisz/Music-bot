module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Nic nie jest grane ${message.author}... Chcesz spróbować ponownie? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Podaj poprawny filtr ${message.author}... Chcesz spróbować ponownie? ❌\n${actualFilter ? `Obecny filtr ${actualFilter} (${client.config.app.px} wyfiltruj ${actualFilter} aby wyłączyć).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Filtr nie istnieje ${message.author}... Chcesz spróbować ponownie? ❌\n${actualFilter ? `Aktywny filtr ${actualFilter}.\n` : ''} Lista dostępnych filtrów ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Filtr: ${filter} jest **${queue.getFiltersEnabled().includes(filter) ? 'załączony' : 'wyłączony'}** ✅\n* Pamiętaj, im dłuższa piosenka, dłużej to zajmie.*`);
    },
};