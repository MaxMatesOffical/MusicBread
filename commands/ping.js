module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send(`🏓Music bread's Latency is ${Date.now() - message.createdTimestamp}ms`);
    }
}
