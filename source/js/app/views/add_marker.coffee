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
    message = "the message of #{name}: #{text}"
    console.log message, window.pos.$a
    $.ajax
      type: "POST"
      url: "http://geo-backend.herokuapp.com/messages"
      data: {message: {text: message, latitude: window.pos.$a, longitude: window.pos.ab}}
      success: ->
        alert "New message: #{data}"
    Backbone.history.navigate "", true

  render: ->
    @$el.html Handlebars.compile($("#add-marker").html())
