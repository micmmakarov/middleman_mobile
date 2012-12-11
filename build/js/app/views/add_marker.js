(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.AddMarker = (function(_super) {

    __extends(AddMarker, _super);

    function AddMarker() {
      return AddMarker.__super__.constructor.apply(this, arguments);
    }

    AddMarker.prototype.initialize = function() {
      this.collection = new App.Collections.Markers();
      return this.render();
    };

    AddMarker.prototype.events = {
      'click .post-message': 'new'
    };

    AddMarker.prototype["new"] = function(e) {
      var message, name, text;
      e.preventDefault();
      text = $(".text").val();
      name = $(".name").val();
      message = "" + name + ": " + text;
      console.log(message, window.position.coords.latitude, window.position.coords.longitude);
      $.ajax({
        type: "POST",
        url: "http://geo-backend.herokuapp.com/messages",
        data: {
          message: {
            text: message,
            latitude: window.position.coords.latitude,
            longitude: window.position.coords.longitude
          }
        },
        success: function() {
          return alert("New message: " + data);
        }
      });
      return Backbone.history.navigate("", true);
    };

    AddMarker.prototype.render = function() {
      return this.$el.html(Handlebars.compile($("#add-marker").html()));
    };

    return AddMarker;

  })(Backbone.View);

}).call(this);
