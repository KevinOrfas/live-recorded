(function() {
    'use strict';

    var http = require('http');

    http.get('http://127.0.0.1:8080', function(res) {
        console.log('Got response: ' + res.statusCode);
    }).on('error', function(e) {
        console.log('Got error: ' + e.message);
    });

}());