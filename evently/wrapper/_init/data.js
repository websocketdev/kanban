function(resp) {
  var backlog = [];
  var working = [];
  var done    = [];

  resp.rows.forEach(function(r) {
    var v = r.value;
    if (v.bin == 'backlog')
      backlog.push(v);
    else if (v.bin == 'working')
      working.push(v);
    else if (v.bin == 'done')
      done.push(v);
  });

  return { "backlog" : backlog, "working" : working, "done" : done };
}
