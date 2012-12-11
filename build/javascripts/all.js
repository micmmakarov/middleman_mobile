<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <meta charset='utf-8' />
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible' />
    <title>Rails School test app (backbone and middleman)</title>
    <meta content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' name='viewport' />
    <link href='https://ajax.aspnetcdn.com/ajax/jquery.mobile/1.2.0/jquery.mobile-1.2.0.min.css' rel='stylesheet' />
    <script src='https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=true'></script>
    <link href="/css/map.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="/css/bootstrap.min.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="/css/bootstrap-responsive.css" media="screen" rel="stylesheet" type="text/css" />
    <script src="/js/main.js" type="text/javascript"></script>
  </head>
  <body class='javascripts javascripts_all'>
    <div class='navbar navbar-inverse navbar-fixed-top'>
      <div class='navbar-inner'>
        <div class='container'>
          <a class='btn btn-navbar' data-target='.nav-collapse' data-toggle='collapse'>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
            <span class='icon-bar'></span>
          </a>
          <a class='brand' href='#'>Rails school Messages</a>
          <div class='nav-collapse collapse'>
            <ul class='nav'>
              <li class='active'>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#all'>All messages</a>
              </li>
              <li>
                <a href='#new'>New Message</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div id='content'></div>
    <script id='main-page' type='text/x-handlebars-template'>
  <div id='map_canvas'></div>
  <div class='container-fluid'>
    <div class='row-fluid'>
      <p>
        You can add you message, and this app will use
        <br>your geo-location uses HTML5</br>
      </p>
      <a class='btn btn-large btn-primary' href='#new'>
        Add my message
      </a>
    </div>
  </div>
</script>
<script id='add-marker' type='text/x-handlebars-template'>
  <div class='container-fluid'>
    <div class='row-fluid'>
      <form>
        <fieldset>
          <legend>Add a new nice message</legend>
          <label>Your name</label>
          <input class='name' placeholder="What's your name" type='text' />
          <label>Your message</label>
          <textarea class='text' placeholder='A nice message please' type='text'></textarea>
          <br />
          <button class='btn btn-large post-message'>Post my message</button>
        </fieldset>
      </form>
    </div>
  </div>
</script>
<script id='all-markers' type='text/x-handlebars-template'>
  <div class='container-fluid'>
    <div class='row-fluid'>
      <div id='markers'></div>
    </div>
  </div>
</script>
<script id='marker' type='text/x-handlebars-template'>
  <hr />
  <h2>{{text}}</h2>
  <p>coordinates: lo: {{longitude}} la: {{latitude}}</p>
</script>
  </body>
</html>
