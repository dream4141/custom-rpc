const rpc = require("discord-rpc");

//Yarattığınız app'in client idsi
const ClientId = '388418356547682315';

rpc.register(ClientId);

const ana = new rpc.Client({ transport: 'ipc' });



//Ana kısım
ana.on('ready', () => {
  console.log("Custom RPC: Connected");
  ana.setActivity({
    details: 'Ana yazı',//Ana yazı
    state: 'Alt yazı',//Ana yazı altındaki yazı
    largeImageKey: 'ripbyrustavi',//Large fotoğraf
    largeImageText: 'İmleç yazısı',//İmleç ile üstüne gelindiğinde çıkacak olan yazı
    smallImageKey: 'cay',//Small fotoğraf
    smallImageText: '2.İmleç yazısı'//İmleç ile üstüne gelindiğinde çıkacak olan yazı
  });
});


ana.login(ClientId).catch(console.error);

