import 'dotenv/config'
import { Client, Events, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.once(Events.Ready, () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on(Events.MessageCreate, message => {
    if(message.author.user.id === client.user.id) {
        return
    }

    // Note: message.content.trim().toLowerCase() === 'test' might be better here
    if(message.content.startsWith('test')) {
        // Note: message.reply might be useful here
        message.channel.send('output_message')
    }
})

client.login(process.env.DISCORD_TOKEN)