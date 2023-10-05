const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hola')
		.setDescription('Responde con hola!'),
	async execute(interaction) {
		await interaction.reply('Hola!');
	},
};