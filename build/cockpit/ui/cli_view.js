define(function(f, m) {
  function i(a, b) {
    this.cli = a;
    this.doc = document;
    this.win = c.getParentWindow(this.doc);
    if(this.element = this.doc.getElementById("cockpitInput")) {
      this.settings = b.settings;
      this.hintDirection = this.settings.getSetting("hintDirection");
      this.outputDirection = this.settings.getSetting("outputDirection");
      this.outputHeight = this.settings.getSetting("outputHeight");
      this.isUpdating = false;
      this.createElements();
      this.update()
    }else {
      console.log("No element with an id of cockpit. Bailing on cli")
    }
  }
  var j = f("text!cockpit/ui/cli_view.css!\n#cockpitInput { padding-left: 16px; }\n\n#cockpitOutput { overflow: auto; }\n#cockpitOutput.cptFocusPopup { position: absolute; z-index: 999; }\n\n.cptFocusPopup { display: none; }\n#cockpitInput:focus ~ .cptFocusPopup { display: block; }\n#cockpitInput:focus ~ .cptFocusPopup.cptNoPopup { display: none; }\n\n.cptCompletion { padding: 0; position: absolute; z-index: -1000; }\n.cptCompletion.VALID { background: #FFF; }\n.cptCompletion.INCOMPLETE { background: #DDD; }\n.cptCompletion.INVALID { background: #DDD; }\n.cptCompletion span { color: #FFF; }\n.cptCompletion span.INCOMPLETE { color: #DDD; border-bottom: 2px dotted #F80; }\n.cptCompletion span.INVALID { color: #DDD; border-bottom: 2px dotted #F00; }\nspan.cptPrompt { color: #66F; font-weight: bold; }\n\n\n.cptHints {\n  color: #000;\n  position: absolute;\n  border: 1px solid rgba(230, 230, 230, 0.8);\n  background: rgba(250, 250, 250, 0.8);\n  -moz-border-radius-topleft: 10px;\n  -moz-border-radius-topright: 10px;\n  border-top-left-radius: 10px; border-top-right-radius: 10px;\n  z-index: 1000;\n  padding: 8px;\n  display: none;\n}\n.cptHints ul { margin: 0; padding: 0 15px; }\n\n.cptGt { font-weight: bold; font-size: 120%; }\n"), 
  k = f("pilot/event"), c = f("pilot/dom");
  c.importCssString(j);
  var n = f("pilot/canon"), h = f("pilot/types").Status, g = f("pilot/keyboard/keyutil"), o = f("cockpit/cli").CliRequisition;
  j = f("cockpit/cli").Hint;
  var p = f("cockpit/ui/request_view").RequestView;
  new j(h.VALID, "", 0, 0);
  m.startup = function(a) {
    var b = new o(a.env);
    new i(b, a.env)
  };
  i.prototype = {createElements:function() {
    var a = this.element;
    this.element.spellcheck = false;
    this.output = this.doc.getElementById("cockpitOutput");
    this.popupOutput = this.output == null;
    if(!this.output) {
      this.output = this.doc.createElement("div");
      this.output.id = "cockpitOutput";
      this.output.className = "cptFocusPopup";
      a.parentNode.insertBefore(this.output, a.nextSibling);
      var b = function() {
        this.output.style.maxHeight = this.outputHeight.get() + "px"
      }.bind(this);
      this.outputHeight.addEventListener("change", b);
      b()
    }this.completer = this.doc.createElement("div");
    this.completer.className = "cptCompletion VALID";
    this.completer.style.color = c.computedStyle(a, "color");
    this.completer.style.fontSize = c.computedStyle(a, "fontSize");
    this.completer.style.fontFamily = c.computedStyle(a, "fontFamily");
    this.completer.style.fontWeight = c.computedStyle(a, "fontWeight");
    this.completer.style.fontStyle = c.computedStyle(a, "fontStyle");
    a.parentNode.insertBefore(this.completer, a.nextSibling);
    this.completer.style.backgroundColor = a.style.backgroundColor;
    a.style.backgroundColor = "transparent";
    this.hinter = this.doc.createElement("div");
    this.hinter.className = "cptHints cptFocusPopup";
    a.parentNode.insertBefore(this.hinter, a.nextSibling);
    b = this.resizer.bind(this);
    k.addListener(this.win, "resize", b);
    this.hintDirection.addEventListener("change", b);
    this.outputDirection.addEventListener("change", b);
    b();
    n.addEventListener("output", function(d) {
      new p(d.request, this)
    }.bind(this));
    g.addKeyDownListener(a, this.onKeyDown.bind(this));
    k.addListener(a, "keyup", this.onKeyUp.bind(this));
    k.addListener(a, "mouseup", function() {
      this.isUpdating = true;
      this.update();
      this.isUpdating = false
    }.bind(this));
    this.cli.addEventListener("argumentChange", this.onArgChange.bind(this))
  }, scrollOutputToBottom:function() {
    this.output.scrollTop = Math.max(this.output.scrollHeight, this.output.clientHeight) - this.output.clientHeight
  }, resizer:function() {
    var a = this.element.getClientRects()[0];
    this.completer.style.top = a.top + "px";
    var b = a.bottom - a.top;
    this.completer.style.height = b + "px";
    this.completer.style.lineHeight = b + "px";
    this.completer.style.left = a.left + "px";
    b = a.right - a.left;
    this.completer.style.width = b + "px";
    if(this.hintDirection.get() === "below") {
      this.hinter.style.top = a.bottom + "px";
      this.hinter.style.bottom = "auto"
    }else {
      this.hinter.style.top = "auto";
      this.hinter.style.bottom = this.doc.documentElement.clientHeight - a.top + "px"
    }this.hinter.style.left = a.left + 30 + "px";
    this.hinter.style.maxWidth = b - 110 + "px";
    if(this.popupOutput) {
      if(this.outputDirection.get() === "below") {
        this.output.style.top = a.bottom + "px";
        this.output.style.bottom = "auto"
      }else {
        this.output.style.top = "auto";
        this.output.style.bottom = this.doc.documentElement.clientHeight - a.top + "px"
      }this.output.style.left = a.left + "px";
      this.output.style.width = b - 80 + "px"
    }
  }, onKeyDown:function(a) {
    if(a.keyCode === g.KeyHelper.KEY.TAB || a.keyCode === g.KeyHelper.KEY.UP || a.keyCode === g.KeyHelper.KEY.DOWN) {
      return true
    }
  }, onKeyUp:function(a) {
    if(a.keyCode === g.KeyHelper.KEY.RETURN) {
      var b = this.cli.getWorstHint();
      if(b.status === h.VALID) {
        this.cli.exec();
        this.element.value = ""
      }else {
        c.setSelectionStart(this.element, b.start);
        c.setSelectionEnd(this.element, b.end)
      }
    }this.update();
    if(b = this.cli.getAssignmentAt(c.getSelectionStart(this.element))) {
      if(a.keyCode === g.KeyHelper.KEY.TAB) {
        b.complete();
        this.update()
      }if(a.keyCode === g.KeyHelper.KEY.UP) {
        b.increment();
        this.update()
      }if(a.keyCode === g.KeyHelper.KEY.DOWN) {
        b.decrement();
        this.update()
      }
    }
  }, update:function() {
    this.isUpdating = true;
    var a = {typed:this.element.value, cursor:{start:c.getSelectionStart(this.element), end:c.getSelectionEnd(this.element.selectionEnd)}};
    this.cli.update(a);
    a = this.cli.getAssignmentAt(a.cursor.start).getHint();
    c.removeCssClass(this.completer, h.VALID.toString());
    c.removeCssClass(this.completer, h.INCOMPLETE.toString());
    c.removeCssClass(this.completer, h.INVALID.toString());
    var b = '<span class="cptPrompt">&gt;</span> ';
    if(this.element.value.length > 0) {
      var d = this.cli.getInputStatusMarkup();
      b += this.markupStatusScore(d)
    }if(this.element.value.length > 0 && a.predictions && a.predictions.length > 0) {
      d = a.predictions[0];
      b += " &nbsp;&#x21E5; " + (d.name ? d.name : d)
    }this.completer.innerHTML = b;
    c.addCssClass(this.completer, this.cli.getWorstHint().status.toString());
    var e = "";
    if(this.element.value.length !== 0) {
      e += a.message;
      if(a.predictions && a.predictions.length > 0) {
        e += ": [ ";
        a.predictions.forEach(function(l) {
          e += l.name ? l.name : l;
          e += " | "
        }, this);
        e = e.replace(/\| $/, "]")
      }
    }this.hinter.innerHTML = e;
    e.length === 0 ? c.addCssClass(this.hinter, "cptNoPopup") : c.removeCssClass(this.hinter, "cptNoPopup");
    this.isUpdating = false
  }, markupStatusScore:function(a) {
    for(var b = "", d = 0, e = -1;;) {
      if(e !== a[d]) {
        b += "<span class=" + a[d].toString() + ">";
        e = a[d]
      }b += this.element.value[d];
      d++;
      if(d === this.element.value.length) {
        b += "</span>";
        break
      }if(e !== a[d]) {
        b += "</span>"
      }
    }return b
  }, onArgChange:function(a) {
    if(!this.isUpdating) {
      var b = this.element.value.substring(0, a.argument.start), d = this.element.value.substring(a.argument.end);
      a = typeof a.text === "string" ? a.text : a.text.name;
      this.element.value = b + a + d;
      b = (b + a).length;
      this.element.selectionStart = b;
      this.element.selectionEnd = b
    }
  }};
  m.CliView = i
});