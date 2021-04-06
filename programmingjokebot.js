const Discord = require('discord.js')
const {prefix, token } = require('./config.json')
const client = new Discord.Client();
client.once('ready', () => {
    console.log("hello world!")
});
const jokes = [" programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
"A UDP packet walks into a bar. \n A UDP packet walks into a bar.\n A UDP packet walks into a bar.\n A UDP packet walks into a bar.\n A UDP packet walks into a bar.\n" +
"The bartender says \"hello.\"\n"];
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    const args = message.content.slice(prefix.length).trim().split(/ + /);
    const command = args.shift().toLowerCase();
    if(command === 'joke' || message.content === 'joke')
        message.channel.send(jokes[Math.floor(Math.random() * 1)]);
    if(command === 'help')
        message.channel.send("Type !joke for a programming joke.")
});
client.login(token);