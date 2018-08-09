const rpc = require("discord-rpc");

//Yarattığınız app'in client idsi
const ClientId = '477050778197032980';

rpc.register(ClientId);

const ana = new rpc.Client({ transport: 'ipc' });



//Ana kısım
ana.on('ready', () => {
  console.log("Custom RPC: Connected");
  ana.setActivity({
    details: 'DREAM BOT',//Ana yazı
    state: 'Dream41',//Ana yazı altındaki yazı
    largeImageKey: 'avatar_m11',//Large fotoğraf
    largeImageText: 'DREAM41',//İmleç ile üstüne gelindiğinde çıkacak olan yazı
    smallImageKey: 'avatar_m11',//Small fotoğraf
    smallImageText: 'dreambot'//İmleç ile üstüne gelindiğinde çıkacak olan yazı
  });
});


ana.login(ClientId).catch(console.error);

