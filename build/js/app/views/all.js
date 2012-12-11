(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.AllMarkers = (function(_super) {

    __extends(AllMarkers, _super);

    function AllMarkers() {
      return AllMarkers.__super__.constructor.apply(this, arguments);
    }

    AllMarkers.prototype.initialize = function() {
      this.collection = new App.Collections.Markers();
      this.collection.fetch({
        add: true,
        dataType: 'jsonp'
      });
      this.collection.on('reset', this.render, this);
      this.collection.on('add', this.addOne, this);
      return this.render();
    };

    AllMarkers.prototype.addOne = function(marker) {
      var template;
      template = Handlebars.compile($("#marker").html(), marker);
      return $("#markers").append(template(marker.toJSON()));
    };

    AllMarkers.prototype.render = function() {
      this.$el.html(Handlebars.compile($("#all-markers").html()));
      this.collection.each(this.addOne, this);
      return this;
    };

    return AllMarkers;

  })(Backbone.View);

}).call(this);
