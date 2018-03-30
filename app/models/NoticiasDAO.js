function NoticiasDAO(connection){
    this._cn = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._cn.query('select * from tb_noticias order by data_noticia desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id, callback) {
    this._cn.query('select * from tb_noticias where id=' + id, function(ex, result){
        callback(ex, result[0]);
    });
}

NoticiasDAO.prototype.salvarNoticia = function(item, callback) {
    this._cn.query('insert into tb_noticias set ?', item, callback);
     
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._cn.query('select * from tb_noticias order by data_noticia desc limit 5', callback);
}

module.exports = function(){
    return NoticiasDAO;
}