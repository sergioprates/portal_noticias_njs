module.exports = function(app){
    app.get('/', function(req, res){
        //com express é send
        //ao invés de end
      app.app.controllers.home.index(app, req, res);
    });
}

