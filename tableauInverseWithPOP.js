var lettres =["a","b","c","d","e","f","g","h","i","j"];
var newTab =[];


console.log("tableau avant inversed : "+lettres);

var i=0;
var iMax=lettres.length;

for (i; i<iMax ;i++){
  //console.log(lettres.length+" "+i);
  var inversed = lettres.pop();
  //console.log(inversed);
  newTab.push(inversed);
}

console.log("tableau après inversed : "+"["+lettres+"] ");
console.log("new tableau inversed : "+newTab);
