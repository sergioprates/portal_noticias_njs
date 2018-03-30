module.exports = function(config){
    config.get('/noticias', function(req, res){
        
     

        config.app.controllers.noticias.noticias(config, req, res);

   
        //com express é send
        //ao invés de end
       // res.render('noticias/noticias');
    });
}