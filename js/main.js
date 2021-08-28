$(document).ready(function(){

    $('.topbtn').click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 400);
    });
  
    $(".menu").click(function(){
        $(".gnb_wrap").animate({
           left: '0%'
        });
    });
    
    $(".close").click(function(){
        $(".gnb_wrap").animate({
           left: '100%'
        });
    });

    
    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        console.log(sct);

        if(sct >= 920){
            $('header').addClass('on_header')
        }   else { $('header').removeClass('on_header');
            }

        if(sct >= 1300){
            $('.topbtn').addClass('on_topbtn')
        }   else { $('.topbtn').removeClass('on_topbtn');
            }
    
    });


});//end