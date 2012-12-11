(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Routers.main = (function(_super) {

    __extends(main, _super);

    function main() {
      return main.__super__.constructor.apply(this, arguments);
    }

    main.prototype.routes = {
      '': 'index',
      'new': 'add',
      'all': 'all'
    };

    main.prototype.initialize = function() {
      return navigator.geolocation.getCurrentPosition((function(position) {
        window.position = position;
        return window.pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      }), function() {
        return handleNoGeolocation(true);
      });
    };

    main.prototype.index = function() {
      return this.view = new App.Views.Markers({
        el: "#content"
      });
    };

    main.prototype.add = function() {
      return this.view = new App.Views.AddMarker({
        el: "#content"
      });
    };

    main.prototype.all = function() {
      return this.view = new App.Views.AllMarkers({
        el: "#content"
      });
    };

    return main;

  })(Backbone.Router);

}).call(this);
