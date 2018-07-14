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

//add todo
$( ".addTodo" ).keypress(function(event){
  if(event.which === 13){
    //grabs todo text from input
    var todoText = $( this ).val();
    //create a new li and add to ul
    $(".todoList").append("<li>todoText</li>")
  }
});
