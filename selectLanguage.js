var langue=["fr", "es", "en", "ru", "it", "de"];
var bjr=["Bonjour", "Hola", "Hi", "Priviet", "Buongiorno", "Guten tag"];
var merci=["Merci", "Gracias", "Thank you", "Spassiba", "Grazie", "Danke"];

var reponse=prompt("Quelle langue souhaiter vous afficher ?"+langue);
var choixLangue=langue.indexOf(reponse);

if(choixLangue ===-1){
  console.log("Nope !");
}else{
console.log(bjr[choixLangue]+" , "+merci[choixLangue]);
}
