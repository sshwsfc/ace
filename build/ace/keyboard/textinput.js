define(function(l, m) {
  var d = l("pilot/event");
  m.TextInput = function(n, b) {
    function e(c) {
      if(!f) {
        if(c = c || a.value) {
          if(c.charCodeAt(c.length - 1) == j.charCodeAt(0)) {
            (c = c.slice(0, -1)) && b.onTextInput(c)
          }else {
            b.onTextInput(c)
          }
        }
      }f = false;
      a.value = j;
      a.select()
    }
    var a = document.createElement("textarea"), h = a.style;
    h.position = "absolute";
    h.left = "-10000px";
    h.top = "-10000px";
    n.appendChild(a);
    var j = String.fromCharCode(0);
    e();
    var i = false, f = false, g = function() {
      setTimeout(function() {
        i || e()
      }, 0)
    }, k = function() {
      b.onCompositionUpdate(a.value)
    };
    d.addCommandKeyListener(a, b.onCommandKey.bind(b));
    d.addListener(a, "keypress", g);
    d.addListener(a, "textInput", g);
    d.addListener(a, "paste", function(c) {
      if(c.clipboardData && c.clipboardData.getData) {
        e(c.clipboardData.getData("text/plain"));
        c.preventDefault()
      }else {
        g()
      }
    });
    d.addListener(a, "propertychange", g);
    d.addListener(a, "copy", function() {
      f = true;
      a.value = b.getCopyText();
      a.select();
      f = true;
      setTimeout(e, 0)
    });
    d.addListener(a, "cut", function() {
      f = true;
      a.value = b.getCopyText();
      b.onCut();
      a.select();
      setTimeout(e, 0)
    });
    d.addListener(a, "compositionstart", function() {
      i = true;
      e();
      a.value = "";
      b.onCompositionStart();
      setTimeout(k, 0)
    });
    d.addListener(a, "compositionupdate", k);
    d.addListener(a, "compositionend", function() {
      i = false;
      b.onCompositionEnd();
      g()
    });
    d.addListener(a, "blur", function() {
      b.onBlur()
    });
    d.addListener(a, "focus", function() {
      b.onFocus();
      a.select()
    });
    this.focus = function() {
      b.onFocus();
      a.select();
      a.focus()
    };
    this.blur = function() {
      a.blur()
    }
  }
});