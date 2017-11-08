$(document).ready(function() {


//color fading effect
var $target = $('.wrapper');
inView('.container').on('enter', function(el){
  // var color = $(el).attr('data-background-color');
  // $target.css('background-color', color );
});

$("#RoboLinea, #AILinea").fadeTo("fast", 0.3);

// $("#RoboLinea").hover(function(){
//   $("#RoboLinea").fadeTo("fast", 1);
// });


//tooltip.js init
$("[data-toggle=tooltip]").tooltip();


});
