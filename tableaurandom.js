var j =["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

/*console.log("Jours de la semaine: " + j.length);

console.log(j[0]);
console.log(j[1]);
console.log(j[2]);
console.log(j[3]);
console.log(j[4]);
console.log(j[5]);
console.log(j[6]);

console.log(j[Math.floor(Math.random()*6)]);*/

var n=["Jean", "Pierre", "Paul", "Jack"];
var N=["Chat", "Chien", "Chinchilla", "Cochon"];

/*console.log(n[Math.floor(Math.random()*4)]+" "+N[Math.floor(Math.random()*4)]);*/

var hasard=Math.floor(Math.random()*n.length);
var hasard2=Math.floor(Math.random()*N.length);

console.log(n[hasard]+" "+N[hasard2]);

var nouveauPrenom = prompt("Quel est le nouveau prénom ?");
console.log("Nouveau Prénom: "+nouveauPrenom);

n.push(nouveauPrenom);

console.log("Liste de prénoms: "+n);
