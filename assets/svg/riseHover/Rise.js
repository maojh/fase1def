$(document).ready(function() {

    // $("#RoboButtonWhite").hide();
    // $("#AIButtonWhite").hide();
    //
    // $("#RoboLine").fadeTo(20,0.4);
    // $("#AILine").fadeTo(20,0.4);

    // $("#Robo").fadeTo(200,0.4);
    // $("#ai").fadeTo(200,0.4);

    $("#robotbutton").click(function(){
        $("#RoboLinea").fadeToggle(20,1);
    });

    $("#aibutton").click(function(){
        $("#aiLinea").fadeToggle(20,1);
    });

});
