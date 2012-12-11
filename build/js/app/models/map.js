(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Models.Map = (function(_super) {

    __extends(Map, _super);

    function Map() {
      return Map.__super__.constructor.apply(this, arguments);
    }

    return Map;

  })(Backbone.Model);

}).call(this);
