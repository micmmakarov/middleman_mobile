class App.Views.Markers extends Backbone.View

  initialize: ->
    #alert "fuck!"

    @collection = new App.Collections.Markers()
    @collection.fetch({add: true, dataType:'jsonp'})
    @collection.on 'reset', @render, @
    @collection.on 'add', @addOne, @
    @render()

  events:
    'click .add-message': 'click'

  click: (e) ->
    e.preventDefault()

    alert "fuck!"
    return false

  click_button: (b) ->
    b.preventDefault()

  addOne: (marker) ->
    map = @map
    pos = new google.maps.LatLng(marker.get('latitude'), marker.get('longitude'))
    info = new google.maps.InfoWindow(
      content: marker.get('text')
    )
    marker = new google.maps.Marker(
      map: map
      position: pos
      content: marker.get('text')
    )
    google.maps.event.addListener marker, "click", ->
      info.open map, marker

    #view = new Omgwant.Views.FeedImage(model: image)
    #($ "#images-table").append view.render().el

  render: ->
    @$el.html Handlebars.compile($("#main-page").html())
    google.maps.event.addDomListener window, "load", @loadMap()
    @collection.each(@addOne, @)
    @

  loadMap: ->
    mapOptions =
      zoom: 17
      mapTypeId: google.maps.MapTypeId.ROADMAP
    @map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions)
    map = @map
    navigator.geolocation.getCurrentPosition ((position) ->
      pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      map.setCenter pos
      marker = new google.maps.InfoWindow(
        map: map
        position: pos
        content: "<span class='message'>I am here. Wanna type message.</span>"
        visible:true
      )
    ), ->
      handleNoGeolocation true
