module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
}

module.exports.noticias_salvar = function(app, req, res){
    var form = req.body;
    //res.send(form);
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty().len(10, 100);
    
    req.assert('autor', 'Autor é obrigatório').notEmpty().len(10, 100);

    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').isValidDate();
   var erros = req.validationErrors();
    if(erros){
        res.render('admin/form_add_noticia', {validacao: erros, noticia:form});
        return;
    }
   
    var noticiasModel = new app.app.models.NoticiasDAO(app.config.dbConnection());

    noticiasModel.salvarNoticia(form, function(ex, result){
        res.redirect('/noticias');
    });
}