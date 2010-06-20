function() {
  var app = $$(this).app;

  $("ul").sortable({
    connectWith: 'ul',
    opacity: 0.5,
    helper: 'clone',
    placeholder: 'ui-state-highlight'
  });

  $("ul").droppable({
    drop: function(ev, ui) {
      var task = ui.draggable.children("p");
      var newBin = $(this).attr("id");
      
      app.db.saveDoc({
        _id:  task.attr("_id"),
        _rev: task.attr("_rev"),
        text: task.text(),
        type: "task",
        bin: newBin
      });
    }    
  });
}
