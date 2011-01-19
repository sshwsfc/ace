define(function(h, m) {
  var n = h("pilot/oop"), j = h("pilot/lang"), o = h("pilot/event_emitter").EventEmitter, p = h("ace/selection").Selection, q = h("ace/mode/text").Mode, i = h("ace/range").Range, k = h("ace/document").Document;
  h = function(a, b) {
    this.$modified = true;
    this.selection = new p(this);
    this.$breakpoints = [];
    this.listeners = [];
    b && this.setMode(b);
    a instanceof k ? this.setDocument(a) : this.setDocument(new k(a))
  };
  (function() {
    n.implement(this, o);
    this.setDocument = function(a) {
      if(this.doc) {
        throw new Error("Document is already set");
      }this.doc = a;
      a.on("change", this.onChange.bind(this))
    };
    this.getDocument = function() {
      return this.doc
    };
    this.onChange = function(a) {
      var b = a.data;
      this.$modified = true;
      if(!this.$fromUndo && this.$undoManager) {
        this.$deltas.push(b);
        this.$informUndoManager.schedule()
      }this._dispatchEvent("change", a)
    };
    this.setValue = function(a) {
      this.doc.setValue(a);
      this.$deltas = []
    };
    this.getValue = this.toString = function() {
      return this.doc.getValue()
    };
    this.getSelection = function() {
      return this.selection
    };
    this.setUndoManager = function(a) {
      this.$undoManager = a;
      this.$deltas = [];
      this.$informUndoManager && this.$informUndoManager.cancel();
      if(a) {
        var b = this;
        this.$informUndoManager = j.deferredCall(function() {
          b.$deltas.length > 0 && a.execute({action:"aceupdate", args:[b.$deltas, b]});
          b.$deltas = []
        })
      }
    };
    this.$defaultUndoManager = {undo:function() {
    }, redo:function() {
    }};
    this.getUndoManager = function() {
      return this.$undoManager || this.$defaultUndoManager
    };
    this.getTabString = function() {
      return this.getUseSoftTabs() ? j.stringRepeat(" ", this.getTabSize()) : "\t"
    };
    this.$useSoftTabs = true;
    this.setUseSoftTabs = function(a) {
      if(this.$useSoftTabs !== a) {
        this.$useSoftTabs = a
      }
    };
    this.getUseSoftTabs = function() {
      return this.$useSoftTabs
    };
    this.$tabSize = 4;
    this.setTabSize = function(a) {
      if(!(isNaN(a) || this.$tabSize === a)) {
        this.$modified = true;
        this.$tabSize = a;
        this._dispatchEvent("changeTabSize")
      }
    };
    this.getTabSize = function() {
      return this.$tabSize
    };
    this.isTabStop = function(a) {
      return this.$useSoftTabs && a.column % this.$tabSize == 0
    };
    this.getBreakpoints = function() {
      return this.$breakpoints
    };
    this.setBreakpoints = function(a) {
      this.$breakpoints = [];
      for(var b = 0;b < a.length;b++) {
        this.$breakpoints[a[b]] = true
      }this._dispatchEvent("changeBreakpoint", {})
    };
    this.clearBreakpoints = function() {
      this.$breakpoints = [];
      this._dispatchEvent("changeBreakpoint", {})
    };
    this.setBreakpoint = function(a) {
      this.$breakpoints[a] = true;
      this._dispatchEvent("changeBreakpoint", {})
    };
    this.clearBreakpoint = function(a) {
      delete this.$breakpoints[a];
      this._dispatchEvent("changeBreakpoint", {})
    };
    this.$detectNewLine = function(a) {
      this.$autoNewLine = (a = a.match(/^.*?(\r?\n)/m)) ? a[1] : "\n"
    };
    this.tokenRe = /^[\w\d]+/g;
    this.nonTokenRe = /^[^\w\d]+/g;
    this.getWordRange = function(a, b) {
      var d = this.getLine(a), e = false;
      if(b > 0) {
        e = !!d.charAt(b - 1).match(this.tokenRe)
      }e || (e = !!d.charAt(b).match(this.tokenRe));
      e = e ? this.tokenRe : this.nonTokenRe;
      var c = b;
      if(c > 0) {
        do {
          c--
        }while(c >= 0 && d.charAt(c).match(e));
        c++
      }for(b = b;b < d.length && d.charAt(b).match(e);) {
        b++
      }return new i(a, c, a, b)
    };
    this.setNewLineMode = function(a) {
      this.doc.setNewLineMode(a)
    };
    this.getNewLineMode = function() {
      return this.doc.getNewLineMode()
    };
    this.$mode = null;
    this.setMode = function(a) {
      if(this.$mode !== a) {
        this.$mode = a;
        this._dispatchEvent("changeMode")
      }
    };
    this.getMode = function() {
      if(!this.$mode) {
        this.$mode = new q
      }return this.$mode
    };
    this.$scrollTop = 0;
    this.setScrollTopRow = function(a) {
      if(this.$scrollTop !== a) {
        this.$scrollTop = a;
        this._dispatchEvent("changeScrollTop")
      }
    };
    this.getScrollTopRow = function() {
      return this.$scrollTop
    };
    this.getWidth = function() {
      this.$computeWidth();
      return this.width
    };
    this.getScreenWidth = function() {
      this.$computeWidth();
      return this.screenWidth
    };
    this.$computeWidth = function() {
      if(this.$modified) {
        this.$modified = false;
        for(var a = this.doc.getAllLines(), b = 0, d = 0, e = this.getTabSize(), c = 0;c < a.length;c++) {
          var f = a[c].length;
          b = Math.max(b, f);
          a[c].replace(/\t/g, function(g) {
            f += e - 1;
            return g
          });
          d = Math.max(d, f)
        }this.width = b;
        this.screenWidth = d
      }
    };
    this.getLine = function(a) {
      return this.doc.getLine(a)
    };
    this.getDisplayLine = function(a) {
      var b = (new Array(this.getTabSize() + 1)).join(" ");
      return this.doc.getLine(a).replace(/\t/g, b)
    };
    this.getLines = function(a, b) {
      return this.doc.getLines(a, b)
    };
    this.getLength = function() {
      return this.doc.getLength()
    };
    this.getTextRange = function(a) {
      return this.doc.getTextRange(a)
    };
    this.findMatchingBracket = function(a) {
      if(a.column == 0) {
        return null
      }var b = this.getLine(a.row).charAt(a.column - 1);
      if(b == "") {
        return null
      }b = b.match(/([\(\[\{])|([\)\]\}])/);
      if(!b) {
        return null
      }return b[1] ? this.$findClosingBracket(b[1], a) : this.$findOpeningBracket(b[2], a)
    };
    this.$brackets = {")":"(", "(":")", "]":"[", "[":"]", "{":"}", "}":"{"};
    this.$findOpeningBracket = function(a, b) {
      var d = this.$brackets[a], e = b.column - 2;
      b = b.row;
      for(var c = 1, f = this.getLine(b);;) {
        for(;e >= 0;) {
          var g = f.charAt(e);
          if(g == d) {
            c -= 1;
            if(c == 0) {
              return{row:b, column:e}
            }
          }else {
            if(g == a) {
              c += 1
            }
          }e -= 1
        }b -= 1;
        if(b < 0) {
          break
        }f = this.getLine(b);
        e = f.length - 1
      }return null
    };
    this.$findClosingBracket = function(a, b) {
      var d = this.$brackets[a], e = b.column;
      b = b.row;
      for(var c = 1, f = this.getLine(b), g = this.getLength();;) {
        for(;e < f.length;) {
          var l = f.charAt(e);
          if(l == d) {
            c -= 1;
            if(c == 0) {
              return{row:b, column:e}
            }
          }else {
            if(l == a) {
              c += 1
            }
          }e += 1
        }b += 1;
        if(b >= g) {
          break
        }f = this.getLine(b);
        e = 0
      }return null
    };
    this.insert = function(a, b) {
      return this.doc.insert(a, b)
    };
    this.multiRowInsert = function(a, b, d) {
      for(var e = a.length - 1;e >= 0;e--) {
        var c = a[e];
        if(!(c >= this.doc.getLength())) {
          var f = b - this.doc.getLine(c).length;
          if(f > 0) {
            var g = j.stringRepeat(" ", f) + d;
            f = -f
          }else {
            g = d;
            f = 0
          }g = this.insert({row:c, column:b + f}, g)
        }
      }return{rows:g ? g.row - a[0] : 0, columns:g ? g.column - b : 0}
    };
    this.remove = function(a) {
      return this.doc.remove(a)
    };
    this.multiRowRemove = function(a, b) {
      if(b.start.row !== a[0]) {
        throw new TypeError("range must start in the first row!");
      }for(var d = b.end.row - a[0], e = a.length - 1;e >= 0;e--) {
        var c = a[e];
        c >= this.doc.getLength() || this.remove(new i(c, b.start.column, c + d, b.end.column))
      }
    };
    this.undoChanges = function(a) {
      if(a.length) {
        this.$fromUndo = true;
        this.doc.revertDeltas(a);
        this.$fromUndo = false;
        var b = a[0];
        a = a[a.length - 1];
        this.selection.clearSelection();
        if(b.action == "insertText" || b.action == "insertLines") {
          this.selection.moveCursorToPosition(b.range.start)
        }if(b.action == "removeText" || b.action == "removeLines") {
          this.selection.setSelectionRange(i.fromPoints(b.range.start, a.range.end))
        }
      }
    };
    this.redoChanges = function(a) {
      if(a.length) {
        this.$fromUndo = true;
        this.doc.applyDeltas(a);
        this.$fromUndo = false;
        var b = a[0];
        a = a[a.length - 1];
        this.selection.clearSelection();
        if(b.action == "insertText" || b.action == "insertLines") {
          this.selection.setSelectionRange(i.fromPoints(b.range.start, a.range.end))
        }if(b.action == "removeText" || b.action == "removeLines") {
          this.selection.moveCursorToPosition(b.range.start)
        }
      }
    };
    this.replace = function(a, b) {
      return this.doc.replace(a, b)
    };
    this.indentRows = function(a, b, d) {
      d = d.replace(/\t/g, this.getTabString());
      for(a = a;a <= b;a++) {
        this.insert({row:a, column:0}, d)
      }return d.length
    };
    this.outdentRows = function(a) {
      for(var b = a.collapseRows(), d = new i(0, 0, 0, 0), e = this.getTabSize(), c = b.start.row;c <= b.end.row;++c) {
        var f = this.getLine(c);
        d.start.row = c;
        d.end.row = c;
        for(var g = 0;g < e;++g) {
          if(f.charAt(g) != " ") {
            break
          }
        }if(g < e && f.charAt(g) == "\t") {
          d.start.column = g;
          d.end.column = g + 1
        }else {
          d.start.column = 0;
          d.end.column = g
        }if(c == a.start.row) {
          a.start.column -= d.end.column - d.start.column
        }if(c == a.end.row) {
          a.end.column -= d.end.column - d.start.column
        }this.remove(d)
      }return a
    };
    this.moveLinesUp = function(a, b) {
      if(a <= 0) {
        return 0
      }b = this.doc.removeLines(a, b);
      this.doc.insertLines(a - 1, b);
      return-1
    };
    this.moveLinesDown = function(a, b) {
      if(b >= this.doc.getLength() - 1) {
        return 0
      }b = this.doc.removeLines(a, b);
      this.doc.insertLines(a + 1, b);
      return 1
    };
    this.duplicateLines = function(a, b) {
      a = this.$clipRowToDocument(a);
      b = this.$clipRowToDocument(b);
      var d = this.getLines(a, b);
      this.doc.insertLines(a, d);
      return b - a + 1
    };
    this.$clipRowToDocument = function(a) {
      return Math.max(0, Math.min(a, this.doc.getLength() - 1))
    };
    this.documentToScreenColumn = function(a, b) {
      var d = this.getTabSize(), e = 0;
      b = b;
      a = this.getLine(a).split("\t");
      for(var c = 0;c < a.length;c++) {
        var f = a[c].length;
        if(b > f) {
          b -= f + 1;
          e += f + d
        }else {
          e += b;
          break
        }
      }return e
    };
    this.screenToDocumentColumn = function(a, b) {
      var d = this.getTabSize(), e = 0;
      b = b;
      a = this.getLine(a).split("\t");
      for(var c = 0;c < a.length;c++) {
        var f = a[c].length;
        if(b >= f + d) {
          b -= f + d;
          e += f + 1
        }else {
          e += b > f ? f : b;
          break
        }
      }return e
    }
  }).call(h.prototype);
  m.EditSession = h
});