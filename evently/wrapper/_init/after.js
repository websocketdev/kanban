function() {
  $("ul").sortable({
    connectWith: 'ul',
    opacity: 0.5,
    helper: 'clone',
    placeholder: 'ui-state-highlight'
  });
}
