
$(document).ready(function(){

    $('.irArriba').click(function(){
        $('body,html').animate({
            scrollTop: '0px'
        },10);
    });

    
    $(window).scroll(function(){
        if( $(this).scrollTop() > 0){
            $('.irArriba').slideDown(300);
        }else{
            $('.irArriba').slideUp(300);
        }
    });

});