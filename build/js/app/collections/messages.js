(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Collections.Markers = (function(_super) {

    __extends(Markers, _super);

    function Markers() {
      return Markers.__super__.constructor.apply(this, arguments);
    }

    Markers.prototype.model = App.Models.Marker;

    Markers.prototype.url = 'http://geo-backend.herokuapp.com/messages';

    return Markers;

  })(Backbone.Collection);

}).call(this);
