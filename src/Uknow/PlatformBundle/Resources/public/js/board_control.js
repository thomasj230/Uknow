/**
 * Created by thomas on 16/04/15.
 */

function textdomaine(id){
    var domain = id.charAt(0) + id.charAt(1) + id.charAt(2);
    $('#domaine-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if($(element).attr('id').indexOf(domain) != -1 && id != 'none'){
            $('#domaine').val(id).html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    } );
}

function textmatiere(id){
    var matiere = id.charAt(0) + id.charAt(1) + id.charAt(2) + id.charAt(3) + id.charAt(4) + id.charAt(5);
    $('#matiere-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if($(element).attr('id').indexOf(matiere) != -1 && id != 'none'){
            $('#matiere').val(id).html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    } );
}

function texttheme(id){
    var theme = id.charAt(0) + id.charAt(1) + id.charAt(2) + id.charAt(3) + id.charAt(4) + id.charAt(5) + id.charAt(6) + id.charAt(7) + id.charAt(8);
    $('#theme-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if($(element).attr('id').indexOf(theme) != -1 && id != 'none'){
            $('theme').val(id).html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    } );
}

function trimatiere(id){
    $('#matiere-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if($(element).attr('id').indexOf(id) == -1 && $(element).attr('id') != 'none' && id !='none'){
            $(element).css('display', 'none');
        }
    } );
}

function tritheme(id){
    $('#theme-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if($(element).attr('id').indexOf(id) == -1 && $(element).attr('id') != 'none' && id !='none'){
            $(element).css('display', 'none');
        }
    } );
}

function trichapitre(id){
    $('#chapitre-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if($(element).attr('id').indexOf(id) == -1 && $(element).attr('id') != 'none' && id !='none'){
            $(element).css('display', 'none');
        }
    } );
}

function domaineChange(id){
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
}

function matiereChange(id){
    textdomaine(id);
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
}

function themeChange(id){
    textdomaine(id);
    textmatiere(id);
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
}

function chapitreChange(id){
    textdomaine(id);
    textmatiere(id);
    texttheme(id);
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
}

function lienCours(){

}