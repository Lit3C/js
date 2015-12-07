
var hasard = Math.round(Math.random()*10);
    console.log("Devine le chiffre entre 0 et 10");
    console.read(function(chiffre)
{
    if(chiffre > hasard)
    {
        console.log("Trop grand");
        console.log("Presque ! Allez essaie une dernière fois");
        console.read(function(chiffre2)
        {
            if(Number(chiffre2)===hasard)
            {
                console.log("Gagné");
            }
            else
            {
                console.log("Perdu, le chiffre était "+ hasard);
            }
        });
    }
    else if(chiffre < hasard)
    {
        console.log("Trop petit");
        console.log("Presque ! Allez essaie une dernière fois");
        console.read(function(chiffre3)
        {
                if(Number(chiffre3)===hasard)
                {
                    console.log("Gagné");
                }
                else
                {
                    console.log("Perdu, le chiffre était "+ hasard);
                }
        });
    }
    else if(chiffre != Number)
    {
        console.log("euhhhh, j'ai dis un numéro Patate !");
    }
    else
    {
        console.log("Bravo");

    }
});
