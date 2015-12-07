/*var lettres =["a","b","c","d","e","f","g","h","i","j","k"];


var aleatoires = [];

compteur = 0;

while (aleatoires.length<=lettres.length){
  var number=Math.round(Math.random()*10);
  aleatoires.push(number);
  console.log("monTableauEnWHILE:"+" "+aleatoires[compteur]+" / "+"laLettre:"+" "+lettres[compteur]);
}


//-------------------------------------------------------------


var number = [];

for (var i=0; number.length<lettres.length; i++){
  //var numerobis=Math.round(Math.random()*10);
  number.push(i);
  console.log("monTableauUP:"+" "+number[i]+" / "+"laLettre:"+" "+lettres[i]);
}

  console.log(number);

for (var i=(lettres.length-1); i>-1; i--){
  //var numerobis=Math.round(Math.random()*10);
  console.log("monTableau-DOWN:"+" "+number[i]+" / "+"position: "+i+" / "+"laLettre:"+" "+lettres[i]);
}*/


//--------------------------------------------------------------
var lettres =["a","b","c","d","e","f","g","h","i","j","k"];
var tabLettres = [];
/*var tab = [];

for(i=0;i<10;i++){
  tab.push(i);
  console.log(tab.join(""));
}*/

var ligne ="";
for(i=0;i<=lettres.length-1;i++){
  ligne += lettres[i];
  console.log(ligne+"        "+i);
}
