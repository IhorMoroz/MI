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
