define(function(l, m) {
  var c = l("pilot/event");
  m.TextInput = function(n, d) {
    function e(b) {
      if(!f) {
        if(b = b || a.value) {
          if(b.charCodeAt(b.length - 1) == j.charCodeAt(0)) {
            (b = b.slice(0, -1)) && d.onTextInput(b)
          }else {
            d.onTextInput(b)
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
      d.onCompositionUpdate(a.value)
    };
    c.addListener(a, "keypress", g);
    c.addListener(a, "textInput", g);
    c.addListener(a, "paste", function(b) {
      if(b.clipboardData && b.clipboardData.getData) {
        e(b.clipboardData.getData("text/plain"));
        b.preventDefault()
      }else {
        g()
      }
    });
    c.addListener(a, "propertychange", g);
    c.addListener(a, "copy", function() {
      f = true;
      a.value = d.getCopyText();
      a.select();
      f = true;
      setTimeout(e, 0)
    });
    c.addListener(a, "cut", function() {
      f = true;
      a.value = d.getCopyText();
      d.onCut();
      a.select();
      setTimeout(e, 0)
    });
    c.addListener(a, "compositionstart", function() {
      i = true;
      e();
      a.value = "";
      d.onCompositionStart();
      setTimeout(k, 0)
    });
    c.addListener(a, "compositionupdate", k);
    c.addListener(a, "compositionend", function() {
      i = false;
      d.onCompositionEnd();
      g()
    });
    c.addListener(a, "blur", function() {
      d.onBlur()
    });
    c.addListener(a, "focus", function() {
      d.onFocus();
      a.select()
    });
    this.focus = function() {
      d.onFocus();
      a.select();
      a.focus()
    };
    this.blur = function() {
      a.blur()
    }
  }
});