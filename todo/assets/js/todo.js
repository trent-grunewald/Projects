//Checks off completed Todos.
$( "li" ).on("click", function(){
  $( this ).toggleClass('completed');
});

//delete //
$( ".delete" ).on("click", function(){
  $( this ).slideUp( );
})
