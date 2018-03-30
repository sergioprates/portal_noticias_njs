module.exports = function(config){ 
    config.get('/formulario_inclusao_noticia', function(req, res){
       
        config.app.controllers.admin.formulario_inclusao_noticia(config, req, res);
      
    });

    config.post('/noticias/salvar', function(req, res){
        config.app.controllers.admin.noticias_salvar(config, req, res);
    });
}