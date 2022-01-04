// Packages
import { Client,  Intents} from 'discord.js';

// Code imports
import Utils from './utils/settings'

// Classes
const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.on('ready', () => {
    console.log(`Varsel bot Logado com sucesso em: ${client.user.tag}`)
})

console.log(Utils.Prefix)
client.login(Utils.Token);