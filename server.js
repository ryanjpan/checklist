var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

//require('./server/config/mongoose.js')

var routes = require('./server/config/routes.js');
routes(app);

app.listen( port, function() {
  console.log( ` Check List running on port ${ port }` );
});
