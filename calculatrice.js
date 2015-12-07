console.log("Choisis une opération")
console.read(function(operation)
{
  if
  (
    (operation === "+") ||
    (operation === "-") ||
    (operation === "/") ||
    (operation === "*")
  ){
    console.log("Choisis un premier chiffre")
    console.read(function(premierchiffre)
    {
      if(premierchiffre > 0)
    }
      console.log("Choisis un deuxième chiffre")
      console.read(function(deuxiemechiffre)
      ){
        console.log("ok")
      }
  })
  else {
    console.log("Recommence");
  }
})
