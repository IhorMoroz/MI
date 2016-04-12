addEventListener('DOMContentLoaded', function(){
    var BOTTOM_MARGIN = 35,
        TIME_ANIMATION = 500;


    function setHeightApp(){
        var App = document.querySelector('.App');
        App.style.height = (window.innerHeight - BOTTOM_MARGIN) + 'px';
    }

    setHeightApp();

    $(window).css('overflow', 'hidden');
    window.addEventListener('resize', function(){
        setHeightApp();
    });

    $("nav").on('click', function(e){
        e.preventDefault();
        var obj = e.target;
        if($(obj).attr('data-link') == "smallMenu"){
            var mainMenu = $(".mainMenu");
            mainMenu.toggle(TIME_ANIMATION);
        }
        if($(obj).attr('data-slide') && window.innerWidth <= 560){
             $(".mainMenu").hide(TIME_ANIMATION);
        }
    });
});

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
         if($(target).attr('data-slide')){
             var page = ($(target).attr('data-slide'));
             removeFloatSlides();
             showCurrentSlide(page-1);
         }
    });

    initNavigation();
});

$(document).ready(function(){
    var DEFAULT_LANGUAGE = "ua";

    function _getAtribute(obj){
        var atr = $(obj).attr('data-language'),
            res = atr.split('-');
        return res;
    }

    function _setLanguage(lang){
        var elemLang = $('.ELEMLANG');
        for (var i = 0; i < elemLang.length; i++) {
            var path = _getAtribute(elemLang[i]);
            for (var j = 1; j < path.length; j++) {
                $(elemLang[i]).text(languages[lang][path[0]][path[j]]);
            }
            // console.log(languages[lang][path[0]][path[1]]);break;
        }
    }

    _setLanguage(DEFAULT_LANGUAGE);
    $(".lang>a").on('click', function(e){
        var obj = e.target;
        var lang = $(obj).attr('data-lang');
        _setLanguage(lang);
    });
});

$(document).ready(function(){

    function dropBody(){
        $("body").text("");
    }

    function showMsg(){
        var div = $("<div></div>").text("Pleace use modern browser, like Chrome, Firefox or IE10+").css({
            "width" : "500px",
            "margin" : "100px auto",
            "text-align" : "center",
            "color" : "#fff",
            "font-size" : "30px"
        });
        $("body").append(div);
    }

    if(document.all && !window.atob){
        dropBody();
        showMsg();
    }
});
