class App.Routers.main extends Backbone.Router

  routes:
    ''            : 'index'
    'new'   : 'add'
    'all'   : 'all'

  initialize: ->
    navigator.geolocation.getCurrentPosition ((position) ->
      window.pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    ), ->
      handleNoGeolocation true


  index: ->
    @view = new App.Views.Markers({el:"#content"})

  add: ->
    @view = new App.Views.AddMarker({el:"#content"})

  all: ->
    @view = new App.Views.AllMarkers({el:"#content"})
