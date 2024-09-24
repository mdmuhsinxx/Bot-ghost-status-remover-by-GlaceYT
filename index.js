/**
 These codes are developed with the help of spella ai
 * **********************************************
 *   Code by mdmuhsin
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Yalla Bot is now activated! This innovative bot is proudly developed by Spella Experiment to enhance your experience. To learn more about Spella and explore our projects, join our official Discord server at https://discord.gg/uwVGgwHV3T.');
});
app.listen(port, () => {
  console.log(`🔗 Listening to Spella: http://localhost:${port}`);
  console.log(`🔗 Powered By spella`);
});


const statusMessages = ["Hala","habibii"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**

╭━━━╮╱╱╱╱╱╭╮╭╮
┃╭━╮┃╱╱╱╱╱┃┃┃┃
┃╰━━┳━━┳━━┫┃┃┃╭━━╮
╰━━╮┃╭╮┃┃━┫┃┃┃┃╭╮┃
┃╰━╯┃╰╯┃┃━┫╰┫╰┫╭╮┃
╰━━━┫╭━┻━━┻━┻━┻╯╰╯
╱╱╱╱┃┃
╱╱╱╱╰╯    
  DISCORD SERVER : https://discord.gg/uwVGgwHV3T.
 * **********************************************
 *   Code by mdmuhsin
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    Thank you for using spella codes`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    welcome to spella`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
 
╭━━━╮╱╱╱╱╱╭╮╭╮
┃╭━╮┃╱╱╱╱╱┃┃┃┃
┃╰━━┳━━┳━━┫┃┃┃╭━━╮
╰━━╮┃╭╮┃┃━┫┃┃┃┃╭╮┃
┃╰━╯┃╰╯┃┃━┫╰┫╰┫╭╮┃
╰━━━┫╭━┻━━┻━┻━┻╯╰╯
╱╱╱╱┃┃
╱╱╱╱╰╯      
  DISCORD SERVER : https://discord.gg/uwVGgwHV3T.
 * **********************************************
 *   Code by mdmuhsin
 * **********************************************
 */
