$(document).ready(function(){
    $('#firstName, #lastName').blur(function(){
        $(this).css('border','1px solid red');
    });
    $('#firstName, #lastName').focus(function(){
        $(this).css('border','1px solid green');
    });
});
