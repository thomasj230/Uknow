/**
 * Created by thomas on 16/04/15.
 */

function textdomaine(id){
    var domain = id.charAt(0) + id.charAt(1) + id.charAt(2);
    $('#domaine-list').children().each( function(index, element){
        if($(element).attr('id').indexOf(domain) != -1 && $(element).attr('id') != 'none'){
            $('#domaine').css('font-style', 'normal').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }else if(id == 'none' && $(element).attr('id') == 'none'){
            $('#domaine').css('font-style', 'italic').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    });
}

function textmatiere(id){
    var matiere = id.charAt(0) + id.charAt(1) + id.charAt(2) + id.charAt(3) + id.charAt(4) + id.charAt(5);
    $('#matiere-list').children().each( function(index, element){
        if($(element).attr('id').indexOf(matiere) != -1 && $(element).attr('id') != 'none'){
            $('#matiere').css('font-style', 'normal').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }else if(id == 'none' && $(element).attr('id') == 'none'){
            $('#matiere').css('font-style', 'italic').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    });
}

function texttheme(id){
    var theme = id.charAt(0) + id.charAt(1) + id.charAt(2) + id.charAt(3) + id.charAt(4) + id.charAt(5) + id.charAt(6) + id.charAt(7) + id.charAt(8);
    $('#theme-list').children().each( function(index, element){
        if($(element).attr('id').indexOf(theme) != -1 && $(element).attr('id') != 'none'){
            $('#theme').css('font-style', 'normal').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }else if(id == 'none' && $(element).attr('id') == 'none'){
            $('#theme').css('font-style', 'italic').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    });
}

function textchapitre(id){
    $('#chapitre-list').children().each( function(index, element) {
        if (id == 'none' && $(element).attr('id') == 'none') {
            $('#chapitre').css('font-style', 'italic').html($(element).text() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        }
    });
}

function trimatiere(id){
    var domain = id.charAt(0) + id.charAt(1) + id.charAt(2);
    $('#matiere-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if(($(element).attr('id').indexOf(domain) == -1 && id != 'all') || $(element).attr('id') == 'none'){
            $(element).css('display', 'none');
        }
    });
}

function tritheme(id){
    var matiere = id.charAt(0) + id.charAt(1) + id.charAt(2) + id.charAt(3) + id.charAt(4) + id.charAt(5);
    $('#theme-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if(($(element).attr('id').indexOf(matiere) == -1 && id != 'all') || $(element).attr('id') == 'none'){
            $(element).css('display', 'none');
        }
    });
}

function trichapitre(id){
    var theme = id.charAt(0) + id.charAt(1) + id.charAt(2) + id.charAt(3) + id.charAt(4) + id.charAt(5) + id.charAt(6) + id.charAt(7) + id.charAt(8);
    $('#chapitre-list').children().each( function(index, element){
        $(element).css('display', 'block');
        if(($(element).attr('id').indexOf(theme) == -1 && id != 'all') || $(element).attr('id') == 'none'){
            $(element).css('display', 'none');
        }
    });
}

function domaineChange(id){
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
    textmatiere('none');
    texttheme('none');
    textchapitre('none');
    $('#domaine').css('font-style', 'normal');
}

function matiereChange(id){
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
    textdomaine(id);
    texttheme('none');
    textchapitre('none');
    $('#matiere').css('font-style', 'normal');
}

function themeChange(id){
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
    textdomaine(id);
    textmatiere(id);
    textchapitre('none');
    $('#theme').css('font-style', 'normal');
}

function chapitreChange(id){
    trimatiere(id);
    tritheme(id);
    trichapitre(id);
    textdomaine(id);
    textmatiere(id);
    texttheme(id);
    $('#chapitre').css('font-style', 'normal');
}

function lienCours(){
    if($('#lienCours').attr('class') == 'col-xs-4 active'){
        domaineChange('all');
        textdomaine('none');
        $('#type').css('font-style', 'italic').html($('#type-list > #none').html() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
        $('#niveau').css('font-style', 'italic').html($('#niveau-list > #none').html() + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    }
}