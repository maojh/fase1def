$(document).ready(function() {

  // nasconde le label
  $("#label").hide();
  //mostra #label quando hover su #bubble
  $("#bubble").hover(function() {
    //toggle classe effetto
    $(this).toggleClass("bubbleBig");
    //toggle con fade
    $("#label").fadeToggle("fast");
  });

  //Quando passi sopra a #idElem
  $("#idElem").hover(function() {
    //#otherElem entra o esce 
    $("#otherElem").fadeToggle("slow");
  })
});
</script>
