var http = require('http');

var server = http.createServer(function(req, res) {

    var categoria = req.url;
    if (categoria == '/tecnologia') {
        res.end("<html><body>Portal de noticias de tecnologia</body></html>");

    } else if (categoria == '/moda') {
        res.end("<html><body>Portal de noticias Moda</body></html>");

    } else if (categoria == '/beleza') {
        res.end("<html><body>Portal de noticias beleza</body></html>");

    } else {
        res.end("<html><body>Portal de noticias</body></html>");
    }


});

server.listen(3000);