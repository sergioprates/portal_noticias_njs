module.exports.index = function(app, req, res){
    var cn = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(cn);

    noticiasModel.get5UltimasNoticias(function(ex, result){
       
        res.render('home/index', {noticias: result});
    });

    
}