function() {
  //alert($("ul.backlog").length);
  $("#backlog ul").sortable().droppable({
    drop: function(event, ui) {
      doSomething(ui.draggable);
    }
  });

  function doSomething(x) {
    alert(x.html());
  }
}
