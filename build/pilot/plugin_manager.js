define(function(f, e) {
  var g = f("pilot/promise").Promise;
  e.REASONS = {APP_STARTUP:1, APP_SHUTDOWN:2, PLUGIN_ENABLE:3, PLUGIN_DISABLE:4, PLUGIN_INSTALL:5, PLUGIN_UNINSTALL:6, PLUGIN_UPGRADE:7, PLUGIN_DOWNGRADE:8};
  e.Plugin = function(b) {
    this.name = b;
    this.status = this.INSTALLED
  };
  e.Plugin.prototype = {NEW:0, INSTALLED:1, REGISTERED:2, STARTED:3, UNREGISTERED:4, SHUTDOWN:5, install:function(b, c) {
    var a = new g;
    if(this.status > this.NEW) {
      a.resolve(this);
      return a
    }f([this.name], function(d) {
      d.install && d.install(b, c);
      this.status = this.INSTALLED;
      a.resolve(this)
    }.bind(this));
    return a
  }, register:function(b, c) {
    var a = new g;
    if(this.status != this.INSTALLED) {
      a.resolve(this);
      return a
    }f([this.name], function(d) {
      d.register && d.register(b, c);
      this.status = this.REGISTERED;
      a.resolve(this)
    }.bind(this));
    return a
  }, startup:function(b, c) {
    c = c || e.REASONS.APP_STARTUP;
    var a = new g;
    if(this.status != this.REGISTERED) {
      a.resolve(this);
      return a
    }f([this.name], function(d) {
      d.startup && d.startup(b, c);
      this.status = this.STARTED;
      a.resolve(this)
    }.bind(this));
    return a
  }, shutdown:function(b, c) {
    if(this.status == this.STARTED) {
      pluginModule = f(this.name);
      pluginModule.shutdown && pluginModule.shutdown(b, c)
    }
  }};
  e.PluginCatalog = function() {
    this.plugins = {}
  };
  e.PluginCatalog.prototype = {registerPlugins:function(b, c, a) {
    var d = [];
    b.forEach(function(i) {
      var h = this.plugins[i];
      if(h === undefined) {
        h = new e.Plugin(i);
        this.plugins[i] = h;
        d.push(h.register(c, a))
      }
    }.bind(this));
    return g.group(d)
  }, startupPlugins:function(b, c) {
    var a = [];
    for(var d in this.plugins) {
      a.push(this.plugins[d].startup(b, c))
    }return g.group(a)
  }};
  e.catalog = new e.PluginCatalog
});