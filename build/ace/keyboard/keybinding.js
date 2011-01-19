define(function(a, g) {
  var h = a("pilot/useragent"), i = a("pilot/keys"), j = a("pilot/event");
  a("pilot/settings");
  var k = a("ace/keyboard/hash_handler").HashHandler, l = a("ace/keyboard/keybinding/default_mac").bindings, m = a("ace/keyboard/keybinding/default_win").bindings, n = a("pilot/canon");
  a("ace/commands/default_commands");
  a = function(b, d) {
    this.$editor = b;
    this.$data = {};
    this.$keyboardHandler = null;
    this.$defaulKeyboardHandler = new k(d || (h.isMac ? l : m))
  };
  (function() {
    this.setKeyboardHandler = function(b) {
      if(this.$keyboardHandler != b) {
        this.$data = {};
        this.$keyboardHandler = b
      }
    };
    this.getKeyboardHandler = function() {
      return this.$keyboardHandler
    };
    this.$callKeyboardHandler = function(b, d, e, f) {
      var c;
      if(this.$keyboardHandler) {
        c = this.$keyboardHandler.handleKeyboard(this.$data, d, e, f, b)
      }if(!c || !c.command) {
        c = this.$defaulKeyboardHandler.handleKeyboard(this.$data, d, e, f, b)
      }if(c) {
        if(n.exec(c.command, {editor:this.$editor}, c.args)) {
          return j.stopEvent(b)
        }
      }
    };
    this.onCommandKey = function(b, d, e) {
      key = (i[e] || String.fromCharCode(e)).toLowerCase();
      this.$callKeyboardHandler(b, d, key, e)
    };
    this.onTextInput = function(b) {
      this.$callKeyboardHandler({}, 0, b, 0)
    }
  }).call(a.prototype);
  g.KeyBinding = a
});