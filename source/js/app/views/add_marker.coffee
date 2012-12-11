class App.Views.AddMarker extends Backbone.View

  initialize: ->
    @collection = new App.Collections.Markers()
    @render()

  events:
    'click .post-message': 'new'

  new: (e) ->
    e.preventDefault()
    text = $(".text").val()
    name = $(".name").val()
    message = "#{name}: #{text}"
    console.log message, window.position.coords.latitude, window.position.coords.longitude
    $.ajax
      type: "POST"
      url: "http://geo-backend.herokuapp.com/messages"
      data: {message: {text: message, latitude: window.position.coords.latitude, longitude: window.position.coords.longitude}}
      success: ->
        alert "New message: #{data}"
    Backbone.history.navigate "", true

  render: ->
    @$el.html Handlebars.compile($("#add-marker").html())
