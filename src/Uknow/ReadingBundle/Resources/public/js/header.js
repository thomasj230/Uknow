/**
 * Created by thomas on 10/04/15.
 */

$(function(){
    $('.menu-pencil').mouseenter(function(){
        $('.menu-pencil-down').slideDown(300);
    }).mouseleave(function(){
        $('.menu-pencil-down').slideUp(200);
    });
    $('.menu-briefcase').mouseenter(function(){
        $('.menu-briefcase-down').slideDown(300);
    }).mouseleave(function(){
        $('.menu-briefcase-down').slideUp(200);
    });
    $('.menu-education').mouseenter(function(){
        $('.menu-education-down').slideDown(300);
    }).mouseleave(function(){
        $('.menu-education-down').slideUp(200);
    });
});