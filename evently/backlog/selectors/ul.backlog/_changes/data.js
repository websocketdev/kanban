function(resp) {
  $.log('bbbbbb');
  var entries = resp.rows.map(function(r) {
    return {
      id: r.id,
      text: 'aaa' 
    };
  });
  return { "entries": entries };
}
