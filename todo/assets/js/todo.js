//Checks off completed Todos.
$( "li" ).on("click", function(){
  $( this ).toggleClass('completed');
});

//delete //
$( ".delete" ).on("click", function(event){
  $( this ).parent().fadeOut(700, function(){
    $(this).remove();
  });
  event.stopPropagation();
})
