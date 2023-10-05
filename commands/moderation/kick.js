const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Selecciona un miembro y expulsalo. (but not really).')
		.addUserOption(option => option.setName('target').setDescription('Miembro a expulsar').setRequired(true)),
	category: 'moderation',
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		return interaction.reply({ content: `You wanted to kick: ${member.user.username}`, ephemeral: true });
	},
};