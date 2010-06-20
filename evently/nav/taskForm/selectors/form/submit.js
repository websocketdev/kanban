function(e) {
  var task = $("input[name=task]", this).val();
  $(this).trigger("doAdd", [task]);
  return false;
}
