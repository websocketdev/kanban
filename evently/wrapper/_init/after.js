function() {
  $("ul").sortable({
    connectWith: 'ul',
    opacity: 0.5,
    helper: 'clone',
    placeholder: 'ui-state-highlight'
  });

  $("ul").droppable({
    drop: function(ev, ui) {
      var task = ui.draggable;
      alert(task.html());
    }    
  });
}
