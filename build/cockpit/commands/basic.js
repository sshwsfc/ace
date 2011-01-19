define(function(b, d) {
  b("pilot/typecheck");
  var c = b("pilot/canon"), e = {name:"sh", description:"Execute a system command (requires server support)", params:[{name:"command", type:"text", description:"The string to send to the os shell."}], exec:function(h, f, g) {
    var a = new XMLHttpRequest;
    a.open("GET", "/exec?args=" + f.command, true);
    a.onreadystatechange = function() {
      a.readyState == 4 && a.status == 200 && g.done("<pre>" + a.responseText + "</pre>")
    };
    a.send(null)
  }};
  c = b("pilot/canon");
  d.startup = function() {
    c.addCommand(e)
  };
  d.shutdown = function() {
    c.removeCommand(e)
  }
});