$(document).ready(function(){
    var nav = $('nav');
    var mainMenu = $('.mainMenu');
    var smMenu = $(".smallMenu");
    var slides = $('.slide');

    function resizeToggleMenu(){
        if($(window).innerWidth() < 560){
            mainMenu.css('display', 'none');
            smMenu.css('display', 'flex');
        }else{
            smMenu.css('display', 'none');
            mainMenu.css('display', '');
        }
    }

    function hideSmMenu(){
        mainMenu.hide("slow");
        smMenu.show();
    }

    function removeFloatSlides(){
        for(var i = 0;i < slides.length;i++){
            $(slides[i]).css({ 'left' : '0'});
        }
    }

    function showCurrentSlide(page){
        for(var i = 0;i < slides.length;i++){
            if(i < page) $(slides[i]).css('left','-100%');
            if(i > page) $(slides[i]).css('left','+100%');
        }
    }

    function initNavigation(){
        removeFloatSlides();
        showCurrentSlide(0);
    }

    resizeToggleMenu();

    $(window).on('resize', function(){
        resizeToggleMenu();
    });

    nav.on('click', function(e){
         e.preventDefault();
         var target = e.target;
         if($(target).attr('data-menu')){
             var page = ($(target).attr('data-menu'));
             removeFloatSlides();
             showCurrentSlide(page-1);
         }
    });

    initNavigation();
});
