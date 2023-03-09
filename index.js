const { Client, Events, GatewayIntentBits } = require('discord.js');


const dotenv = require ('dotenv')
dotenv.config()
const { TOKEN } = process.env


// importação dos comandos
const fs =require("node:fs")
const path = require ("node:path")
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const { TOKEN } = require ('./config.json')
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

const client = new Client({ intents : [GatewayIntentBits.Guilds ] })



for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const commands = require(filePath)
   if ('data' in command && 'execute' in command){
 } 
    else console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);

 }


client.on(Events.InteractionCreate, interaction => {
    if (!interaction.isChatInputCommand()) return
    console.log(interaction)
})
client.login(TOKEN)
