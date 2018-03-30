module.exports = function(app){
    app.get('/noticia', function(req, res){       
        
      app.app.controllers.noticias.noticia(app, req, res);
    });
}