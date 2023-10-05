const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('numero')
		.setDescription('Genera un numero random del 1 al 1000!'),
        category: 'fun',
	async execute(interaction) {
		const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    
    await interaction.reply(`El número aleatorio es: ${numeroAleatorio}`);
	},
};