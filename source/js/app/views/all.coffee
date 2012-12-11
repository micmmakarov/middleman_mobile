class App.Views.AllMarkers extends Backbone.View

  initialize: ->
    @collection = new App.Collections.Markers()
    @collection.fetch({add: true, dataType:'jsonp'})
    @collection.on 'reset', @render, @
    @collection.on 'add', @addOne, @
    @render()

  addOne: (marker) ->
    #marker.get('latitude') marker.get('longitude'))
    #content: marker.get('text')
    #content: marker.get('text')
    template = Handlebars.compile($("#marker").html(), marker)
    $("#markers").append template(marker.toJSON())

  render: ->
    @$el.html Handlebars.compile($("#all-markers").html())
    @collection.each(@addOne, @)
    @
