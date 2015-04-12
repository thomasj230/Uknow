/**
 * Created by thomas on 12/04/15.
 */

$(function(){
    $('.board').mouseenter(function(){
        $('.board').animate({
            width: '500px'
        }, 'normal');
    }).mouseleave(function(){
        $('.board').animate({
            width: '250px'
        }, 'fast');
    });
});