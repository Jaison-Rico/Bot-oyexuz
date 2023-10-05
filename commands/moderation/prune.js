const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prune')
		.setDescription('Elimina hasta 100 mensajes.')
		.addIntegerOption(option =>
			option.setName('amount')
				.setDescription('Numeros de mensajes a eliminar')
				.setMinValue(1)
				.setMaxValue(100)),
	category: 'moderation',
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar mensajes en este canal!', ephemeral: true });
		});

		return interaction.reply({ content: `Exito al eliminar \`${amount}\` mensajes.`, ephemeral: true });
	},
};