define(function(d, f) {
  var l = d("pilot/types/basic").SelectionType, m = d("pilot/types/basic").DeferredType, c = d("pilot/types"), n = d("pilot/settings").settings, b, h = new l({name:"setting", data:function() {
    return g.settings.getSettingNames()
  }, stringify:function(a) {
    b = a;
    return a.name
  }, fromString:function(a) {
    return b = n.getSetting(a)
  }, noMatch:function() {
    b = null
  }}), k = new m({name:"settingValue", defer:function() {
    return b ? b.type : c.getType("text")
  }, getDefault:function() {
    var a = this.parse("");
    if(b) {
      var e = b.get();
      if(a.predictions.length === 0) {
        a.predictions.push(e)
      }else {
        for(var i = false;;) {
          var j = a.predictions.indexOf(e);
          if(j === -1) {
            break
          }a.predictions.splice(j, 1);
          i = true
        }i && a.predictions.push(e)
      }
    }return a
  }}), g;
  f.startup = function(a) {
    g = a.env;
    c.registerType(h);
    c.registerType(k)
  };
  f.shutdown = function() {
    c.unregisterType(h);
    c.unregisterType(k)
  }
});