const Discord = require('discord.js');
const TeachableMachine = require('@sashido/teachablemachine-node');

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/HChfbmdH7/"
});
const DiscordClient = new Discord.Client();
const prefix = "."
DiscordClient.on('ready', () => {
  console.log("Motherfuck. I gave you the ability to spin gold, and instead, you've spun pubic hair with shit in it, and gravel and corn...")
})
DiscordClient.on('message', message => {
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) {
    return;
    } else {
     if(!args.length){
       message.reply("no image provided. Error.")
       return;
     }
     	if (command === 'check' || 'trash' || 'tree' || 'AI'){
        var link = args[0];
        model.classify({
          imageUrl: link,
        }).then((predictions) => {
          message.channel.send("PROCESSING...")
          console.log("Result:", predictions);
          var easyPredict = JSON.stringify(predictions);
          message.channel.send("Result: " + easyPredict);
        }).catch((e) => {
          console.log("ERROR", e);
        });
      } else {
        return;
      }
    }
  });
  DiscordClient.login('NzEzNjMwNjk1OTA1NDI3NDY4.Xsi6YA.mmu-0LxfGzJncVZYmNp81h3uKco');
