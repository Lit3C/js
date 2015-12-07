console.log("Saissisez un identifiant");
console.read(function(mail)
{
    if  ((mail.length > 4) && (mail.indexOf("@") !=-1))
    {
            console.log("Saissisez un mot de passe");
            console.read(function(mdp)
            {
                console.log("Vous avez saisie : "
                +"\n"+ "votre mail :"+ mail
                +"\n"+ "votre mot de passe" + mdp);
            });
    }
    else
    {
        console.log("Erreur de saisie");
    }
});
