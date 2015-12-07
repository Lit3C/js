console.log("Quelle est la couleur du cheval blanc d'Heny IV ?")
console.read(function(couleur)
{
  if(couleur.toLowerCase() ==="blanc")
  {
    console.log("Combien sont les sept nains ?");
    console.read(function(nombre)
    {
      if((nombre === "7")||
      (nombre === "sept")||
      (nombre === "Sept"))
      {
        console.log("Bonne réponse");
      }
      else
      {
        console.log("Mauvaise réponse");
      }
    });
  }
  else
  {
    console.log("Mauvaise réponse");
  }
});
