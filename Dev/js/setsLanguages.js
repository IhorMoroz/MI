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
