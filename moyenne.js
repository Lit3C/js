var tableau=[];

function tab(){
//  for(var i=val; i<10;i++);{
    var val=prompt("Entre donc des valeurs numériques (stp quoi)");
    tableau.push(val);
      var val2=prompt("Entre donc des valeurs numériques (stp quoi)");
      tableau.push(val2);
        var val3=prompt("Entre donc des valeurs numériques (stp quoi)");
        tableau.push(val3);
          var val4=prompt("Entre donc des valeurs numériques (stp quoi)");
          tableau.push(val4);
//  }
  console.log("Notes saisies :"+tableau);
//  console.log("Nombre de notes :"+Number(tableau.length));
}
tab();


/*var somme=parseInt(tableau[0])+parseInt(tableau[1])+parseInt(tableau[2])+parseInt(tableau[3]+parseInt(tableau[4]));*/


     for(i = 0; i < tableau.length; i++)
     {
     var somme = tableau[i]+i;
     }

console.log("Somme des notes: "+somme);

function moyenne(){
  console.log("Moyenne (somme/length): "+(somme/tableau.length));
}
moyenne();
