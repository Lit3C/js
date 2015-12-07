console.log("pourquoi tu es gentil ?")
console.read(function(why)
{
    if(why == "carottes")
    {
        console.log(
            "Ah oui c'est trop bien comme"
            + " moi"
            );
        {
            console.log("Mais tu es donc un lapin ?");
            console.read(function(answer)
            {
                if(answer.length < 3)
                {
                    console.log(
                        "Mouahahahahaha"
                        );
                } else
                {
                    console.log(
                        "WTH -_- ?!");
                }
            })
        }

    }
    else
{
    console.log(
        "Mais qu'est-ce que tu racontes??"
        );
}
})
