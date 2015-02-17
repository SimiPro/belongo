var loopback = require('loopback');
var boot = require('loopback-boot');



var app = module.exports = loopback();




// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);


//creatingMysql(app.dataSources.testDB);




app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}


function creatingMysql(ds) {
	var dataSource = app.dataSources.testDB;

	dataSource.automigrate('placez', function(err) {
	  if (err) console.log(err);


	});

	dataSource.automigrate('testModel', function(err) {
	  if (err) console.log(err);


	});

}
