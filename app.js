// Hides list
document.getElementById("btnHidden").onclick = function () {
  $("li").toggle();
};

// Removes specific task from list
  $("div.wrapper").on('click', 'button.delete', function() {
    $(this).closest("li").remove();
  });


  // Moves task up
  $("div.wrapper").on('click', 'button.up', function() {
    var thisItem = $(this).closest("li");
    thisItem.insertBefore(thisItem.prev());
  });


  // Moves task down
  $("div.wrapper").on('click', 'button.down', function(){
    var thisItem = $(this).closest('li');
    thisItem.insertAfter(thisItem.next());
  });


// Adds new task to list
document.getElementById("btnAdd").onclick = function () {
  var newTarea = $('input[id=inputAdd]').val();
  $("ul").append('<li>' + newTarea +
      '<div class="actions">' +
        '<button class="up">Up</button>' +
        '<button class="down">Down</button>' +
        '<button class="delete">Delete</button>' +
      '</div>' +
      '</li>');
  $("input[id=inputAdd]").val("");


};
