class App.Routers.main extends Backbone.Router

  routes:
    ''            : 'index'

  initialize: ->

  index: ->
    @view = new App.Views.Markers({el:"#content1"})