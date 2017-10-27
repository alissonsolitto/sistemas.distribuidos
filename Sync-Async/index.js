'use strict';

var express = require('express'),
    app = express(),
    http = require('http').Server(app),    
    port = process.env.PORT || 5000;

app.use(express.static('public'));

http.listen(port, function(){
  console.log('Servidor rodando na porta:'+port);
});