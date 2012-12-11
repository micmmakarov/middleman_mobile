(function() {

  window.App = {
    Models: {},
    Collections: {},
    Routers: {},
    Views: {},
    init: function() {
      this.router = new App.Routers.main();
      return Backbone.history.start();
    }
  };

  $(function() {
    return App.init();
  });

}).call(this);
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
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  App.Views.Markers = (function(_super) {

    __extends(Markers, _super);

    function Markers() {
      return Markers.__super__.constructor.apply(this, arguments);
    }

    Markers.prototype.initialize = function() {
      this.collection = new App.Collections.Markers();
      this.collection.fetch({
        add: true,
        dataType: 'jsonp'
      });
      this.collection.on('reset', this.render, this);
      this.collection.on('add', this.addOne, this);
      return this.render();
    };

    Markers.prototype.events = {
      'click .add-message': 'click'
    };

    Markers.prototype.click = function(e) {
      e.preventDefault();
      alert("fuck!");
      return false;
    };

    Markers.prototype.click_button = function(b) {
      return b.preventDefault();
    };

    Markers.prototype.addOne = function(marker) {
      var info, map, pos;
      map = this.map;
      pos = new google.maps.LatLng(marker.get('latitude'), marker.get('longitude'));
      info = new google.maps.InfoWindow({
        content: marker.get('text')
      });
      marker = new google.maps.Marker({
        map: map,
        position: pos,
        content: marker.get('text')
      });
      return google.maps.event.addListener(marker, "click", function() {
        return info.open(map, marker);
      });
    };

    Markers.prototype.render = function() {
      this.$el.html(Handlebars.compile($("#main-page").html()));
      google.maps.event.addDomListener(window, "load", this.loadMap());
      this.collection.each(this.addOne, this);
      return this;
    };

    Markers.prototype.loadMap = function() {
      var map, mapOptions;
      mapOptions = {
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      map = this.map;
      if (navigator.geolocation) {

      } else {
        alert("problems with browser to detect your location");
      }
      return navigator.geolocation.getCurrentPosition((function(position) {
        var pos;
        pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(pos);
        return window.map = map;
      }), function() {
        return handleNoGeolocation(true);
      });
    };

    return Markers;

  })(Backbone.View);

}).call(this);
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
