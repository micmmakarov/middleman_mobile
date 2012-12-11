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
