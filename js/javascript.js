$(document).ready(function() {
  $("input").click(function() {
    $( ".cookie" ).text( $( "input:checked" ).val() + " is checked!");
    });

      $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("green-background");
      });

      $("button#yellow").click(function() {
        $("body").removeClass();
        $("body").addClass("yellow-background");
      });

      $("button#red").click(function() {
        $("body").removeClass();
        $("body").addClass("red-background");
      });

      $("button#black").click(function() {
        $("body").removeClass();
        $("body").addClass("black-theme");
      });

      $("button#white").click(function() {
        $("body").removeClass();
        $("body").addClass("white-theme");
      });

      $("#lecture").click(function() {
        $("p").addClass("highlight-box");
      })

      // var option1 = $('#option1:checked').val();
      // var option2 = $("input#option2").val();
      // var option3 = $("input#option3").val();
      // var option4 = $("input#option4").val();
      // // var option5 = $("input#option5").val();
      // console.log(option1);
      //  $("#option1").show('.sco');
      //  $(".").show(option2input);
      // //  $(".").show(option3input);
      // //  $(".").show(option4input);
      // //  $(".").show(option5input);
      // //  $(".").show(option6input);
      // event.preventDefault()

});
