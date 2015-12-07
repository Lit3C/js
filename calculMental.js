var a=Math.round(Math.random()*10);
var op=Math.round(Math.random()*10);
var b=Math.round(Math.random()*10);

if(Number(op)<3){
    console.log("Calcule : "+a+"+"+b);
    console.log(op+" soit addition");
    console.read(function(reponse1){
        if(Number(reponse1)===(parseInt(a+b))){
            console.log("oui");
        }else{
            console.log("faux");
        }
    });
}else if(Number(op)<7){
    console.log("Calcule : "+a+"*"+b);
    console.log(op+" soit multiplication");
    console.read(function(reponse2){
        if(Number(reponse2)===(a*b)){
            console.log("oui");
        }else{
            console.log("faux");
        }
    });
}else if(Number(op)<11){
    console.log("Calcule : "+a+"-"+b);
    console.log(op+" soit soustraction");
    console.read(function(reponse3){
        if(Number(reponse3)===(a-b)){
            console.log("oui");
        }else{
            console.log("faux");
        }
    });
}else{
    console.log("euhhhh...");
}
