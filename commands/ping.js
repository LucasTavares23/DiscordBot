const { SlashCommandBuilder } = require("discord.js");

module.exports ={
    data: new SlashCommandBuilder() 
    .setname ('Ping')
    .setDescription('Responde com Pong!'),
async execute (interaction) {
    await interaction.reply('Pong!')
},
}