var mailAttendu = ["toto@gmail.com", "abcdef@hotmail.fr", "azerty@yahoo.fr"];
var passwordAttendu = ["toto", "abcdef", "azerty"];

var maxTentatives = 4;
var nbTentatives = 0;

var ident1=mailAttendu.indexOf(ident);
var ident = prompt("Entrer votre identifiant");

function login(){
  nbTentatives++;
  ident;
}

function password(){
  nbTentatives++;
  var mdp = prompt("Entrer votre mot de passe");

  if( ident1 < 0 && nbTentatives < maxTentatives){
   console.log("essaie encore");
    login();
  } else if( nbTentatives >= maxTentatives){
    console.log('perdu');
  }  else {
    console.log('merci');
  }
}

login();
