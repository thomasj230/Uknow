/**
 * Created by thomas on 22/04/15.
 */

$(function(){
   $('[data-toggle="tooltip"]').tooltip({delay: { show: 400, hide: 200 }});
   $(document).ready(function(){
       if ($('.reading-onglet-texte').text().length >= 15){
           $('.reading-onglet-texte').html($('.reading-onglet-texte').text().substring(0, 15) + '...');
       }
   })
});
