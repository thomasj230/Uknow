/**
 * Created by thomas on 17/04/15.
 */

function afficheTitre(index){
    $('#carousel_' + index).carousel(0).carousel('pause');
    $('#bouton-description_' + index).attr('class', 'bouton-description');
    $('#bouton-liste_' + index).attr('class', 'bouton-liste');
    $('#bouton-details_' + index).attr('class', 'bouton-details');
}

function afficheDescription(index){
    $('#carousel_' + index).carousel(1).carousel('pause');
    $('#bouton-description_' + index).attr('class', 'bouton-description active');
    $('#bouton-liste_' + index).attr('class', 'bouton-liste');
    $('#bouton-details_' + index).attr('class', 'bouton-details');
}

function afficheListe(index){
    $('#carousel_' + index).carousel(2).carousel('pause');
    $('#bouton-description_' + index).attr('class', 'bouton-description');
    $('#bouton-liste_' + index).attr('class', 'bouton-liste active');
    $('#bouton-details_' + index).attr('class', 'bouton-details');
}

function afficheDetails(index){
    $('#carousel_' + index).carousel(3).carousel('pause');
    $('#bouton-description_' + index).attr('class', 'bouton-description');
    $('#bouton-liste_' + index).attr('class', 'bouton-liste');
    $('#bouton-details_' + index).attr('class', 'bouton-details active');
}



