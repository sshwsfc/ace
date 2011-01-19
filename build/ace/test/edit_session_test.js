define(function(e, f, i) {
  var c = e("ace/edit_session").EditSession, g = e("ace/undomanager").UndoManager;
  e("./mockrenderer");
  var h = e("ace/range").Range, b = e("./assertions");
  e("async");
  f = {"test: find matching opening bracket":function() {
    var a = new c(["(()(", "())))"]);
    b.position(a.findMatchingBracket({row:0, column:3}), 0, 1);
    b.position(a.findMatchingBracket({row:1, column:2}), 1, 0);
    b.position(a.findMatchingBracket({row:1, column:3}), 0, 3);
    b.position(a.findMatchingBracket({row:1, column:4}), 0, 0);
    b.equal(a.findMatchingBracket({row:1, column:5}), null)
  }, "test: find matching closing bracket":function() {
    var a = new c(["(()(", "())))"]);
    b.position(a.findMatchingBracket({row:1, column:1}), 1, 1);
    b.position(a.findMatchingBracket({row:1, column:1}), 1, 1);
    b.position(a.findMatchingBracket({row:0, column:4}), 1, 2);
    b.position(a.findMatchingBracket({row:0, column:2}), 0, 2);
    b.position(a.findMatchingBracket({row:0, column:1}), 1, 3);
    b.equal(a.findMatchingBracket({row:0, column:0}), null)
  }, "test: match different bracket types":function() {
    var a = new c(["({[", ")]}"]);
    b.position(a.findMatchingBracket({row:0, column:1}), 1, 0);
    b.position(a.findMatchingBracket({row:0, column:2}), 1, 2);
    b.position(a.findMatchingBracket({row:0, column:3}), 1, 1);
    b.position(a.findMatchingBracket({row:1, column:1}), 0, 0);
    b.position(a.findMatchingBracket({row:1, column:2}), 0, 2);
    b.position(a.findMatchingBracket({row:1, column:3}), 0, 1)
  }, "test: move lines down":function() {
    var a = new c(["a1", "a2", "a3", "a4"]);
    a.moveLinesDown(0, 1);
    b.equal(a.getValue(), "a3\na1\na2\na4");
    a.moveLinesDown(1, 2);
    b.equal(a.getValue(), "a3\na4\na1\na2");
    a.moveLinesDown(2, 3);
    b.equal(a.getValue(), "a3\na4\na1\na2");
    a.moveLinesDown(2, 2);
    b.equal(a.getValue(), "a3\na4\na2\na1")
  }, "test: move lines up":function() {
    var a = new c(["a1", "a2", "a3", "a4"]);
    a.moveLinesUp(2, 3);
    b.equal(a.getValue(), "a1\na3\na4\na2");
    a.moveLinesUp(1, 2);
    b.equal(a.getValue(), "a3\na4\na1\na2");
    a.moveLinesUp(0, 1);
    b.equal(a.getValue(), "a3\na4\na1\na2");
    a.moveLinesUp(2, 2);
    b.equal(a.getValue(), "a3\na1\na4\na2")
  }, "test: duplicate lines":function() {
    var a = new c(["1", "2", "3", "4"]);
    a.duplicateLines(1, 2);
    b.equal(a.getValue(), "1\n2\n3\n2\n3\n4")
  }, "test: duplicate last line":function() {
    var a = new c(["1", "2", "3"]);
    a.duplicateLines(2, 2);
    b.equal(a.getValue(), "1\n2\n3\n3")
  }, "test: duplicate first line":function() {
    var a = new c(["1", "2", "3"]);
    a.duplicateLines(0, 0);
    b.equal(a.getValue(), "1\n1\n2\n3")
  }, "test: convert document to screen coordinates":function() {
    var a = new c("01234\t567890\t1234");
    a.setTabSize(4);
    b.equal(a.documentToScreenColumn(0, 0), 0);
    b.equal(a.documentToScreenColumn(0, 4), 4);
    b.equal(a.documentToScreenColumn(0, 5), 5);
    b.equal(a.documentToScreenColumn(0, 6), 9);
    b.equal(a.documentToScreenColumn(0, 12), 15);
    b.equal(a.documentToScreenColumn(0, 13), 19);
    a.setTabSize(2);
    b.equal(a.documentToScreenColumn(0, 0), 0);
    b.equal(a.documentToScreenColumn(0, 4), 4);
    b.equal(a.documentToScreenColumn(0, 5), 5);
    b.equal(a.documentToScreenColumn(0, 6), 7);
    b.equal(a.documentToScreenColumn(0, 12), 13);
    b.equal(a.documentToScreenColumn(0, 13), 15)
  }, "test: convert document to scrren coordinates with leading tabs":function() {
    var a = new c("\t\t123");
    a.setTabSize(4);
    b.equal(a.documentToScreenColumn(0, 0), 0);
    b.equal(a.documentToScreenColumn(0, 1), 4);
    b.equal(a.documentToScreenColumn(0, 2), 8);
    b.equal(a.documentToScreenColumn(0, 3), 9)
  }, "test: convert screen to document coordinates":function() {
    var a = new c("01234\t567890\t1234");
    a.setTabSize(4);
    b.equal(a.screenToDocumentColumn(0, 0), 0);
    b.equal(a.screenToDocumentColumn(0, 4), 4);
    b.equal(a.screenToDocumentColumn(0, 5), 5);
    b.equal(a.screenToDocumentColumn(0, 6), 5);
    b.equal(a.screenToDocumentColumn(0, 7), 5);
    b.equal(a.screenToDocumentColumn(0, 8), 5);
    b.equal(a.screenToDocumentColumn(0, 9), 6);
    b.equal(a.screenToDocumentColumn(0, 15), 12);
    b.equal(a.screenToDocumentColumn(0, 19), 13)
  }, "test: insert text in multiple rows":function() {
    var a = new c(["12", "", "abcd"]), d = a.multiRowInsert([0, 1, 2], 2, "juhu 1");
    b.equal(d.rows, 0);
    b.equal(d.columns, 6);
    b.equal(a.getValue(), "12juhu 1\n  juhu 1\nabjuhu 1cd")
  }, "test: undo insert text in multiple rows":function() {
    var a = new c(["12", "", "abcd"]), d = new g;
    a.setUndoManager(d);
    a.multiRowInsert([0, 1, 2], 2, "juhu 1");
    a.$informUndoManager.call();
    b.equal(a.getValue(), "12juhu 1\n  juhu 1\nabjuhu 1cd");
    d.undo();
    b.equal(a.getValue(), "12\n\nabcd");
    d.redo();
    b.equal(a.getValue(), "12juhu 1\n  juhu 1\nabjuhu 1cd")
  }, "test: insert new line in multiple rows":function() {
    var a = new c(["12", "", "abcd"]), d = a.multiRowInsert([0, 1, 2], 2, "\n");
    b.equal(d.rows, 1);
    b.equal(a.getValue(), "12\n\n  \n\nab\ncd")
  }, "test: insert multi line text in multiple rows":function() {
    var a = new c(["12", "", "abcd"]), d = a.multiRowInsert([0, 1, 2], 2, "juhu\n12");
    b.equal(d.rows, 1);
    b.equal(a.getValue(), "12juhu\n12\n  juhu\n12\nabjuhu\n12cd")
  }, "test: remove right in multiple rows":function() {
    var a = new c(["12", "", "abcd"]);
    a.multiRowRemove([0, 1, 2], new h(0, 2, 0, 3));
    b.equal(a.getValue(), "12\n\nabd")
  }, "test: undo remove right in multiple rows":function() {
    var a = new c(["12", "", "abcd"]), d = new g;
    a.setUndoManager(d);
    a.multiRowRemove([0, 1, 2], new h(0, 1, 0, 3));
    a.$informUndoManager.call();
    b.equal(a.getValue(), "1\n\nad");
    d.undo();
    b.equal(a.getValue(), "12\n\nabcd");
    d.redo();
    b.equal(a.getValue(), "1\n\nad")
  }, "test get longest line":function() {
    var a = new c(["12"]);
    a.setTabSize(4);
    b.equal(a.getWidth(), 2);
    b.equal(a.getScreenWidth(), 2);
    a.doc.insertNewLine(0);
    a.doc.insertLines(1, ["123"]);
    b.equal(a.getWidth(), 3);
    b.equal(a.getScreenWidth(), 3);
    a.doc.insertNewLine(0);
    a.doc.insertLines(1, ["\t\t"]);
    b.equal(a.getWidth(), 3);
    b.equal(a.getScreenWidth(), 8);
    a.setTabSize(2);
    b.equal(a.getWidth(), 3);
    b.equal(a.getScreenWidth(), 4)
  }};
  i.exports = e("async/test").testcase(f)
});
if(module === require.main) {
  require("../../../support/paths");
  exports.exec()
};