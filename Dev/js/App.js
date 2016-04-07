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
