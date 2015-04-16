/**
 * Created by thomas on 16/04/15.
 */

$(function(){
    $('#domaine').change(function(){
        $.getJSON('/bundles/uknowplatform/json/structure.json', function (structure) {
            $.each(structure, function(i, domaine){
                if($('#domaine').val() == domaine){
                    alert(domaine);
                }
            });
        });
    });
});