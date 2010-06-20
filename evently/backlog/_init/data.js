function(resp) {
  var entries = resp.rows.map(function(r) {
    return {
      id: r.id,
      text: r.value.text
    };
  });
  return { "entries": entries };
}
