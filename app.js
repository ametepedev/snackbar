function snackbarFunc(color,text) {
    //Selection du div snackbar
    var snackbar = document.getElementById('snackbar');

    //Ajout de la classe visible si la fonction snackbarFunc est appelée
    snackbar.className = "visible";
    snackbar.style.background = color;
    snackbar.innerText = text;
    //Ajout dune fonction setTimeout pour supprimer la classe visible apres 3 secondes=3000ms

    setTimeout(function(){
        snackbar.className = snackbar.className.replace("visible","");
    },3000);

}
//Ajouter 2 parametre a la fonction pour rendre le snackbar dynamique
//Color: pour changer le background 
//Text: pour personnaliser le texte