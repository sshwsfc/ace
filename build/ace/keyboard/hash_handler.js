define(function(l, m) {
  function i(h) {
    this.setConfig(h)
  }
  var j = l("pilot/keys");
  (function() {
    function h(a, e, b, d) {
      return(d && a.toLowerCase() || a).replace(/(?:^\s+|\n|\s+$)/g, "").split(new RegExp("[\\s ]*" + e + "[\\s ]*", "g"), b || 999)
    }
    function k(a, e, b) {
      var d, f = 0;
      a = h(a, "\\-", null, true);
      for(var c = 0, g = a.length;c < g;++c) {
        if(j.KEY_MODS[a[c]]) {
          f |= j.KEY_MODS[a[c]]
        }else {
          d = a[c] || "-"
        }
      }(b[f] || (b[f] = {}))[d] = e;
      return b
    }
    function n(a, e) {
      var b, d, f, c, g = {};
      for(b in a) {
        c = a[b];
        if(e && typeof c == "string") {
          c = c.split(e);
          d = 0;
          for(f = c.length;d < f;++d) {
            k.call(this, c[d], b, g)
          }
        }else {
          k.call(this, c, b, g)
        }
      }return g
    }
    this.setConfig = function(a) {
      this.$config = a;
      if(typeof this.$config.reverse == "undefined") {
        this.$config.reverse = n.call(this, this.$config, "|")
      }
    };
    this.handleKeyboard = function(a, e, b, d) {
      return e != 0 || d != 0 ? {command:(this.$config.reverse[e] || {})[b]} : {command:"inserttext", args:{text:b}}
    }
  }).call(i.prototype);
  m.HashHandler = i
});