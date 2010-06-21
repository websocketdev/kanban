function(e) {
  var task = $("input[name=task]", this).val();
  if (task)
    $(this).trigger("doAdd", [task]);
  return false;
}
