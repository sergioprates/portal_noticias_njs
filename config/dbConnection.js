var db = require('mysql');

var cnFn = function(){
    console.log('Conectado!');
    return db.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'mudar123',
        database: 'curso_nodejs'
    });
}

module.exports = function(){
    //console.log('Conexão carregada!');
    return cnFn;
}

