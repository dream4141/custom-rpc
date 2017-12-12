const rpc = require("discord-rpc");

//Yarattığınız app'in client idsi
const ClientId = '388341171086295040';

Playboy.register(ClientId);

const ana = new rpc.Client({ transport: 'ipc' });



//Asıl Olay İşte Burada
ana.on('ready', () => {
  console.log("Başarılı...");
  console.log("Mansion Creation RPC\'yi Kullandığınız İçin Teşekkür Ederiz.");
  ana.setActivity({
	//Not: Eğer "... Oynuyor" Değiştirmek İstiyorsanız Yarattığımız App'a Gidip App'in İsmini Değiştirin 
    details: 'Console.Owner("Maviş");',//Ortadaki Yazı
    state: 'Custom RPC Özelliği',//En Alttaki Yazı
    largeImageKey: 'mavis_1',// Large Seçeneğini İşaretleyip Yüklediğimiz Fotoğraf'ın İsmi
    largeImageText: 'Github: InfinityMavis',// Resmin Üstüne İmleci Getirince Çıkacak Olan Yazı
    smallImageKey: 'mavis_2',// Small Seçeneğini İşaretleyip Yüklediğimiz Fotoğraf'ın İsmi
    smallImageText: 'Github\'da Bulabilirsiniz'// Resmin Üstüne İmleci Getirince Çıkacak Olan Yazı
  });
});

//Mansion Creation™ Size Yardım Ve Destek Etmekten Gurur Duyar..
ana.login(ClientId).catch(console.error);

