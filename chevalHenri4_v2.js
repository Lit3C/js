//noprotect
var questions = [
  "couleur du cheval blanc d'henri IV?",
  "combien de 7 nains?",
  "le petit poucet est il grand ?",
  "de quel couleur est la cape du chaperon rouge ?"
];
var questionsRetirees = [];

var reponses = [
  "blanc",
  "7",
  "non",
  "rouge"
];

var iMax = questions.length;
var score = 0;


function quizz(){
  for(var i=1 ; i<=iMax ; i++){
    //------------------------------DEFINIR LES QUESTIONS ALEATOIRES
    var numberRandom = Math.round(Math.random()*(questions.length-1));
    var askRandom = questions[numberRandom];
    var repRandom = reponses[numberRandom];
    //------------------------------LANCER LES QUESTIONS
    var repUser = prompt(askRandom+"\n"+"try n°"+i+"\n"+"la position Random : "+numberRandom);
    var retire = questions.splice(questions.indexOf(askRandom),1);
    questionsRetirees.push(retire);
    console.log("Boucle n° : "+i,
                "Question Posée : "+askRandom,
                "la position Random : "+numberRandom,
                "Je retire : "+retire,
                "Questions Retirées : ",questionsRetirees,
                "Listes des questions : ",questions,
                "----------------------------------------------------------------");
    var retireRep = reponses.splice(reponses.indexOf(repRandom),1);
    //reponsesRetirees.push(retireRep); ----[Dé-commenter si besoin de récupérer les réponses dans un tableau]
    //-------------------------------APPLIQUER UN SCORE POUR REPONSE JUSTE OU FAUSSE
      if (repUser === repRandom){
        score++;
        alert("FELICITATION !"+"\n"+"VOTRE SCORE EST DE : "+score);
      }else{
        alert("Vous avez écrit : "+repUser+
              "\n"+"VOTRE SCORE EST DE : "+score+
             "\n"+"La réponse était : "+repRandom+
             "\n"+"La position Random : "+numberRandom);
      }
  }
}
quizz();
console.log("------------SCORE---------"+
            "\n"+"Votre score totel est de  : "+score+"/4pts"+"\n"+
            "------------SCORE---------");
