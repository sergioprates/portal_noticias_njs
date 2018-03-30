var http = require('http');

var server = http.createServer(function(requisicao, resposta){
	
	var categoria = requisicao.url.replace('/', '');

	if (categoria == 'tecnologia') {
		resposta.end('<html><body>Portal de Tecnologia</body></html>');
	}
	else if(categoria == 'beleza'){
		resposta.end('<html><body>Portal de Beleza</body></html>');
	}
	else{
		resposta.end('<html><body>Portal de notícias</body></html>');
	}

	
});

server.listen(3000);