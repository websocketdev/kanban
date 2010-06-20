function(doc) {
  if (doc.type == "task" && doc.bin == "backlog")
    emit(doc.seq, doc);
}
