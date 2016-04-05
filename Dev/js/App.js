addEventListener('DOMContentLoaded', function(){

    function setHeightApp(){
        var App = document.querySelector('.App');
        App.style.height = (window.innerHeight - 35) + 'px';
    }

    setHeightApp();

    $(window).css('overflow', 'hidden');
    window.addEventListener('resize', function(){
        setHeightApp();
    });
});
