/**
 * Created by thomas on 12/04/15.
 */

$(function(){

});

function domaineList(){
    if( $('#domaine-list').css('display') == 'none')
    {
        var height =  190 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
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
    domaineChange(id);
    $('#domaine').html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#domaine-list').slideUp(300);

}

function matiereList(){
    if( $('#matiere-list').css('display') == 'none')
    {
        var height =  190 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
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
    matiereChange(id);
    $('#matiere').html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#matiere-list').slideUp(300);

}
function themeList(){
    if( $('#theme-list').css('display') == 'none')
    {
        var height =  190 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
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
    themeChange(id);
    $('#theme').html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#theme-list').slideUp(300);

}

function chapitreList(){
    if( $('#chapitre-list').css('display') == 'none')
    {
        var height =  190 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
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
    chapitreChange(id);
    $('#chapitre').html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#chapitre-list').slideUp(300);

}

function typeList(){
    if( $('#type-list').css('display') == 'none')
    {
        var height =  190 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
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
    $('#type').css('font-style', 'normal').html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#type-list').slideUp(300);
}

function niveauList(){
    if( $('#niveau-list').css('display') == 'none')
    {
        var height =  190 + $('#recherche').height() + $('#domaine').height() + $('#matiere').height() + $('#theme').height() + $('#chapitre').height() + $('#type').height() + $('#niveau').height();
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
    $('#niveau').css('font-style', 'normal').html(traduction + '<span class="glyphicon glyphicon-triangle-bottom"></span>');
    $('#niveau-list').slideUp(300);
}