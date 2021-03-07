const keepAlive = require("./server.js")
const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = 'mb ';

client.once('ready', () => {
console.log('Music bread is online');
client.user.setActivity('music', { type: "LISTENING"})
})

client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    message.channel.send((`🏓Music bread's Latency is ${Date.now() - message.createdTimestamp}ms`)
  }
});

keepAlive()

client.login('ODE3ODcxNzY3MzU4OTMwOTc0.YEP0cA.F_x2ZLnEsYU0V45mzP77DFdC86o');