class App.Collections.Markers extends Backbone.Collection

  model: App.Models.Marker
  #url: 'http://omg-node-api.herokuapp.com/?search=adidas'
  url: 'http://geo-backend.herokuapp.com/messages'
  #parse: (response) ->
  #  response.products
