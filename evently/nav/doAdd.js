function(e, task) {
  var widget = $(this);
  var app = $$(this).app;
  var newTask = {
    text: task,
    type: "task",
    bin: "backlog"
  };

  app.db.saveDoc(newTask);
}
