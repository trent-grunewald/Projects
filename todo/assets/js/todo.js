//Checks off completed Todos.
$( "ul" ).on( "click", "li", function(){
  $( this ).toggleClass( 'completed' );
});

//delete //
$( "ul" ).on("click", "span", function(event){
  $( this ).parent().fadeOut(700, function(){
    $( this ).remove();
  });
  event.stopPropagation();
})

//add todo
$( ".addTodo" ).keypress(function(event){
  if( event.which === 13 ){
    //grabs todo text from input
    var todoText = $( this ).val();
    $( this ).val( "" );
    //create a new li and add to ul
    $( ".todoList" ).append( "<li><span>x</span>" +  todoText + "</li>" )
  }
});
