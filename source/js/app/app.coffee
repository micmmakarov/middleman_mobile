#= require_self
#= require_tree ./models
#= require_tree ./collections
#= require_tree ./views
#= require_tree ./routers
#= require_tree .

window.App =
  Models: {}
  Collections: {}
  Routers: {}
  Views: {}

  init: ->
    @router = new App.Routers.main()
    Backbone.history.start()

$ ->
  App.init()



#  $("div[data-role=\"page\"]").live "pagehide", (event, ui) ->
#    $(event.currentTarget).remove()

  # Try HTML5 geolocation

 # if navigator.geolocation
 #   navigator.geolocation.getCurrentPosition ((position) ->
 #     pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
 #     infowindow = new google.maps.InfoWindow(
 #       map: map
 #       position: pos
 #       content: "Location found using HTML5."
 #     )
 #     map.setCenter pos
 #   ), ->
 #     handleNoGeolocation true

 # else

    # Browser doesn't support Geolocation
  #  handleNoGeolocation false
#handleNoGeolocation = (errorFlag) ->
#  if errorFlag
#    content = "Error: The Geolocation service failed."
#  else
#    content = "Error: Your browser doesn't support geolocation."
#  options =
#    map: map
#    position: new google.maps.LatLng(60, 105)
#    content: content

#  infowindow = new google.maps.InfoWindow(options)
#  map.setCenter options.position
#  map = undefined
