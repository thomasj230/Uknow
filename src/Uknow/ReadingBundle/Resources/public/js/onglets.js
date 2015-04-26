/**
 * Created by thomas on 22/04/15.
 */

$(function(){
   $('[data-toggle="tooltip"]').tooltip({delay: { show: 200, hide: 200 }});
   $(document).ready(function(){
       var i = 0;
       while($('#reading-onglet-texte-' + i).text().length != 0){
           if ($('#reading-onglet-texte-' + i).text().length >= 15){
               $('#reading-onglet-texte-' + i).html($('#reading-onglet-texte-' + i).text().substring(0, 15) + '...');
           }
           i = i + 1;
       }
   })
});

function carouselLeft(){
    $('.carousel').carousel('prev').carousel('pause');
    $('.carousel').carousel('prev').carousel('pause');
}

function carouselRight(){
    $('.carousel').carousel('next').carousel('pause');

}

