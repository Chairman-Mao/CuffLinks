$(document).ready(function() {
	$('.menu').hover(function() {
        $(this).addClass("selected");
      },
      function(){
        $(this).removeClass("selected");
      }
   );

	$('.assembled-disassembled').click(function(){
    	var orig_data = $('.assembled-disassembled img').attr('src')
    	var new_data = $('.assembled-disassembled img').attr('other-src')
        $('.assembled-disassembled img').attr('src', new_data);
        $('.assembled-disassembled img').attr('other-src', orig_data);
    }
   );

  $("#about").click(function() {
        $('#modal-container').show('slow');
  })

  $("#modal-overlay").click(function() {
        $('#modal-container').hide('fast');
    });

  $(".interest-button").click(function() {
        if ($(this).text() != "Yes, interested!") {  
           $($(this)).text("Yes, interested!")
        }
        else {
           $($(this)).text("Interested?")
        }
  });

  $(".decision-button").click(function() {
        if ($(this).text() != "Schedule") {
          if ($(this).text() == "I'm Busy") {  
           $($(this)).text("Denied")
          }
          else {
             $($(this)).text("I'm Busy")
          }
        }
  });

  $(".final-button").click(function() {
        if ($(this).text() == "Request?") {  
           $($(this)).text("Requested!")
        }
  });
}); 