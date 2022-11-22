// !Name
Splitting();
$('.signup').submit(function(event){
 event.preventDefault();
 
 var nameText = $('.name').val();
 $(".field").append("<p data-splitting='chars'>" + nameText + "</p>");
  Splitting();
  $("#wrap").addClass("plunge");
  setTimeout(function(){	
    $('.name').val('');
    $( ".field p" ).remove();
    $("#wrap").removeClass("plunge");
}, 4000);
});
// !Email
Splitting();
$('.signup').submit(function(event){
 event.preventDefault();
 
 var emailText = $('.email').val();
 $(".field").append("<p data-splitting='chars'>" + emailText + "</p>");
  Splitting();
  $("#wrap").addClass("plunge");
  setTimeout(function(){	
    $('.email').val('');
    $( ".field p" ).remove();
    $("#wrap").removeClass("plunge");
}, 4000);
});
// !Message
Splitting();
$('.signup').submit(function(event){
 event.preventDefault();
 
 var messageText = $('.message').val();
 $(".field").append("<p data-splitting='chars'>" + messageText + "</p>");
  Splitting();
  $("#wrap").addClass("plunge");
  setTimeout(function(){	
    $('.email').val('');
    $( ".field p" ).remove();
    $("#wrap").removeClass("plunge");
}, 4000);
});