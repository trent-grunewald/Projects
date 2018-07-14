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
  if($(this).val()!="" && event.which === 13){
    //grabs todo text from input
    var todoText = $( this ).val();
    $( this ).val( "" );
    //create a new li and add to ul
    $( ".todoList" ).append( "<li><span><i class='material-icons'>delete_forever</i></span>" +  todoText + "</li>" )
  }
});
