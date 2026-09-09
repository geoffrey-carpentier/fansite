// Compte a rebours jusqu'au prochain halving du Bitcoin.
// Le halving a lieu tous les 210 000 blocs. Le quatrieme a eu lieu le 20 avril 2024
// (bloc 840 000). Un bloc etant mine toutes les dix minutes en moyenne, le cinquieme
// (bloc 1 050 000) est attendu autour du 20 avril 2028. C'est une estimation :
// la date reelle depend de la puissance de calcul du reseau.

var DATE_PROCHAIN_HALVING = new Date("2028-04-20T00:00:00Z");

function deuxChiffres(nombre) {
    return nombre < 10 ? "0" + nombre : "" + nombre;
}

function majCompteARebours() {
    var maintenant = new Date();
    var restant = DATE_PROCHAIN_HALVING - maintenant;

    // Si la date est depassee, on affiche des zeros plutot qu'un compte a rebours negatif.
    if (restant < 0) {
        restant = 0;
    }

    var secondes = Math.floor(restant / 1000);
    var jours = Math.floor(secondes / 86400);
    var heures = Math.floor((secondes % 86400) / 3600);
    var minutes = Math.floor((secondes % 3600) / 60);
    var sec = secondes % 60;

    document.getElementById("cd-jours").textContent = jours;
    document.getElementById("cd-heures").textContent = deuxChiffres(heures);
    document.getElementById("cd-minutes").textContent = deuxChiffres(minutes);
    document.getElementById("cd-secondes").textContent = deuxChiffres(sec);
}

// Premier affichage immediat, puis mise a jour chaque seconde.
majCompteARebours();
setInterval(majCompteARebours, 1000);
