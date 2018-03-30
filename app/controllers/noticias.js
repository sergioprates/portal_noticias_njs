module.exports.noticias = function(config, req, res){
    var noticiasModel = new config.app.models.NoticiasDAO(config.config.dbConnection());

    noticiasModel.getNoticias(function(ex, result){
        res.render('noticias/noticias', 
        {
            noticias: result
        });
    });
}

module.exports.noticia = function(app, req, res){
   var id =  req.query.id_noticia;
    var noticiaModel = new app.app.models.NoticiasDAO(app.config.dbConnection());
    noticiaModel.getNoticia(id, function(ex, result){
        res.render('noticias/noticia', 
        {
            noticia: result
        });
    });
}