(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Models.Marker = (function(_super) {

    __extends(Marker, _super);

    function Marker() {
      return Marker.__super__.constructor.apply(this, arguments);
    }

    Marker.prototype.rootUrl = 'http://geo-backend.herokuapp.com/messages';

    Marker.prototype.initialize = function() {};

    return Marker;

  })(Backbone.Model);

}).call(this);
