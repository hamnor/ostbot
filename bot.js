const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk3MTgxODYzOTQ4NTgyOTI0.Xoz75g.WcLs11ydnJAVqzV8HYN3Ip26KTo';

const prefix = '+';

var pkbilder = [
    " https://cdn.discordapp.com/attachments/557172397946437638/697187203788570665/Snapchat-567761806.jpg",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187205659230258/Snapchat-1843747936.jpg",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187205960957982/Snapchat-625260018.jpg",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187206284050523/Snapchat-1179117580.jpg",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187390187372548/11875710558572625510.JPG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187390548344902/4100593582630580383.PNG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187391068438598/4810034613354074273.PNG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187391458377758/15942013416585093799.JPG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697187698758123520/Snapchat-251132798.jpg"
];
var sbilder = [
    " https://cdn.discordapp.com/attachments/557172397946437638/600081374182899717/image0.png",
    "https://cdn.discordapp.com/attachments/557172397946437638/697584585650733096/9867855639692193178.JPG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697584300719341668/7536261430853966744.PNG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697584112562602024/2343077247538750081.JPG",
    "https://cdn.discordapp.com/attachments/557172397946437638/697584112067936286/945894226176023455.JPG",
   
]
var citat = [
    "Grisen är kokt när den är kokt",
    "Jänkarna hade inga vapen på 1300 talet!",

]

var citb = [
    "Hasse Hallgren - 1895",
    "Hasse Hallgren - 1675",

]



bot.on('ready', ()=>{ 
    console.log('This bot is online!');

})

bot.on('message', message=>{


    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        //pk
        case 'pk':
        var ipk = Math.floor(Math.random()*9)
        const pk = new Discord.MessageEmbed()
        .setImage(pkbilder[ipk])
        .setColor('#fff700')
        message.channel.send(pk) 
            
            
        break;
        //mrlisper
        case 'mrlisper':
        const mrlisper = new Discord.MessageEmbed()
        .setTitle('Alfan JONAS')
        .setImage('https://cdn.discordapp.com/attachments/557172397946437638/697187536908451880/14947218223320387419.PNG')
        .setColor('#fff700')
        message.channel.send(mrlisper);
        break;
        //help
        case'help':
        const help= new Discord.MessageEmbed()
        .setTitle('OstBot Commands')
        
        .addFields(
            {name: '+pk', value: 'Random bilder på PK'},
            
            {name: '+mrlisper', value: 'Bild på alfan i lisper släkten'},
            {name: '+elvis', value: 'Random bilder på Elvis H'},
            
            {name: '+clear x', value: 'Rensa x antal meddelanden'},
            )
        .setFooter('Skapad av Osthasse', 'https://assets.icanet.se/t_product_large_v1,f_auto/7318690053736.jpg')
        .setColor('#fff700')
        message.channel.send(help);
        break;
        //clear
        case 'clear':
        if(!args[1]) return message.reply('Error försök igen')
        message.channel.bulkDelete(args[1]);
        break;
        //elvis
        case 'elvis':
        var ipk = Math.floor(Math.random()*5);
        const elvis = new Discord.MessageEmbed()
        
        
        .setImage(sbilder[ipk])
        .setColor('#fff700')
        message.channel.send(elvis) 
        break;
        //citat
        case 'hasse':
        var cit = Math.floor(Math.random()*2);
        const hasse = new Discord.MessageEmbed()
        .setTitle(citat[cit])
        .setDescription(citb[cit])
        message.channel.send(hasse);
        break;

    }


})

bot.login(process.env.token); 