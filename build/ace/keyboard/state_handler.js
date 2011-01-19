define(function(n, k) {
  function l(b) {
    this.keymapping = this.$buildKeymappingRegex(b)
  }
  l.prototype = {$buildKeymappingRegex:function(b) {
    for(state in b) {
      this.$buildBindingsRegex(b[state])
    }return b
  }, $buildBindingsRegex:function(b) {
    b.forEach(function(a) {
      if(a.key) {
        a.key = new RegExp("^" + a.key + "$")
      }else {
        if(Array.isArray(a.regex)) {
          a.key = new RegExp("^" + a.regex[1] + "$");
          a.regex = new RegExp(a.regex.join("") + "$")
        }else {
          if(a.regex) {
            a.regex = new RegExp(a.regex + "$")
          }
        }
      }
    })
  }, $composeBuffer:function(b, a, e) {
    if(b.state == null || b.buffer == null) {
      b.state = "start";
      b.buffer = ""
    }var c = [];
    a & 1 && c.push("Ctrl");
    a & 8 && c.push("Command");
    a & 2 && c.push("Option");
    a & 4 && c.push("Shift");
    e && c.push(e);
    e = c.join("-").toLowerCase();
    c = b.buffer + e;
    if(a != 2) {
      b.buffer = c
    }return{bufferToUse:c, symbolicName:e}
  }, $find:function(b, a, e, c, m) {
    var f = {};
    this.keymapping[b.state].some(function(d) {
      var h;
      if(d.key && !d.key.test(e)) {
        return false
      }if(d.regex && !(h = d.regex.exec(a))) {
        return false
      }if(d.match && !d.match(a, c, m, e)) {
        return false
      }if(d.disallowMatches) {
        for(var j = 0;j < d.disallowMatches.length;j++) {
          if(h[d.disallowMatches[j]]) {
            return false
          }
        }
      }if(d.exec) {
        f.command = d.exec;
        if(d.params) {
          var i;
          f.args = {};
          d.params.forEach(function(g) {
            i = g.match != null && h != null ? h[g.match] || g.defaultValue : g.defaultValue;
            if(g.type === "number") {
              i = parseInt(i)
            }f.args[g.name] = i
          })
        }b.buffer = ""
      }if(d.then) {
        b.state = d.then;
        b.buffer = ""
      }if(f.command == null) {
        f.command = "null"
      }return true
    });
    if(f.command) {
      return f
    }else {
      b.buffer = "";
      return false
    }
  }, handleKeyboard:function(b, a, e) {
    var c = this.$composeBuffer(b, a, e);
    return c = this.$find(b, c.bufferToUse, c.symbolicName, a, e)
  }};
  k.matchCharacterOnly = function(b, a, e) {
    return a == 0 ? true : a == 4 && e.length == 1 ? true : false
  };
  k.StateHandler = l
});