const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reload')
		.setDescription('Reinicia un comando.')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('El comando a reiniciar.')
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command', true).toLowerCase();
		const command = interaction.client.commands.get(commandName);

		if (!command) {
			return interaction.reply(`No hay ningun comando con ese nombre \`${commandName}\`!`);
		}

		delete require.cache[require.resolve(`../${command.category}/${command.data.name}.js`)];

		try {
	        interaction.client.commands.delete(command.data.name);
	        const newCommand = require(`../${command.category}/${command.data.name}.js`);
	        interaction.client.commands.set(newCommand.data.name, newCommand);
	        await interaction.reply(`El comando \`${newCommand.data.name}\` fue reiniciado!`);
		} catch (error) {
	        console.error(error);
	        await interaction.reply(`Hubo un error mientras se reiniciaba el comando \`${command.data.name}\`:\n\`${error.message}\``);
		}
	},
};