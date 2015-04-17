/**
 * Created by thomas on 12/04/15.
 */

$(function(){

});

function domaineList(){
    if( $('#domaine-list').css('display') == 'none')
    {
        var height =  140 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
        $('#domaine-list').css('max-height', 'calc(100% - ' + height + 'px )').slideDown(300);
        $('#matiere-list').slideUp(300);
        $('#theme-list').slideUp(300);
        $('#chapitre-list').slideUp(300);
        $('#type-list').slideUp(300);
        $('#niveau-list').slideUp(300);
    }else{
        $('#domaine-list').slideUp(300);
    }
}

function domaineChoix(id, traduction){
    $('#domaine').val(id).html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#domaine-list').slideUp(300);
    domaineChange(id);
}

function matiereList(){
    if( $('#matiere-list').css('display') == 'none')
    {
        var height =  140 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
        $('#matiere-list').css('max-height', 'calc(100% - ' + height + 'px )').slideDown(300);
        $('#domaine-list').slideUp(300);
        $('#theme-list').slideUp(300);
        $('#chapitre-list').slideUp(300);
        $('#type-list').slideUp(300);
        $('#niveau-list').slideUp(300);
    }else{
        $('#matiere-list').slideUp(300);
    }
}

function matiereChoix(id, traduction){
    $('#matiere').val(id).html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#matiere-list').slideUp(300);
    matiereChange(id);
}
function themeList(){
    if( $('#theme-list').css('display') == 'none')
    {
        var height =  140 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
        $('#theme-list').css('max-height', 'calc(100% - ' + height + 'px )').slideDown(300);
        $('#domaine-list').slideUp(300);
        $('#matiere-list').slideUp(300);
        $('#chapitre-list').slideUp(300);
        $('#type-list').slideUp(300);
        $('#niveau-list').slideUp(300);
    }else{
        $('#theme-list').slideUp(300);
    }
}

function themeChoix(id, traduction){
    $('#theme').val(id).html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#theme-list').slideUp(300);
    themeChange(id);
}

function chapitreList(){
    if( $('#chapitre-list').css('display') == 'none')
    {
        var height =  140 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
        $('#chapitre-list').css('max-height', 'calc(100% - ' + height + 'px )').slideDown(300);
        $('#domaine-list').slideUp(300);
        $('#matiere-list').slideUp(300);
        $('#theme-list').slideUp(300);
        $('#type-list').slideUp(300);
        $('#niveau-list').slideUp(300);
    }else{
        $('#chapitre-list').slideUp(300);
    }
}

function chapitreChoix(id, traduction){
    $('#chapitre').val(id).html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#chapitre-list').slideUp(300);
    chapitreChange(id);
}

function typeList(){
    if( $('#type-list').css('display') == 'none')
    {
        var height =  140 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
        $('#type-list').css('max-height', 'calc(100% - ' + height + 'px )').slideDown(300);
        $('#domaine-list').slideUp(300);
        $('#matiere-list').slideUp(300);
        $('#theme-list').slideUp(300);
        $('#chapitre-list').slideUp(300);
        $('#niveau-list').slideUp(300);
    }else{
        $('#type-list').slideUp(300);
    }
}

function typeChoix(id, traduction){
    $('#type').val(id).html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#type-list').slideUp(300);
}

function niveauList(){
    if( $('#niveau-list').css('display') == 'none')
    {
        var height =  140 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
        $('#niveau-list').css('max-height', 'calc(100% - ' + height + 'px )').slideDown(300);
        $('#domaine-list').slideUp(300);
        $('#matiere-list').slideUp(300);
        $('#theme-list').slideUp(300);
        $('#chapitre-list').slideUp(300);
        $('#type-list').slideUp(300);
    }else{
        $('#niveau-list').slideUp(300);
    }
}

function niveauChoix(id, traduction){
    $('#niveau').val(id).html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#niveau-list').slideUp(300);
}