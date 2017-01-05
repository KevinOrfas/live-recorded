/*jshint esversion: 6 */
(function() {
    'use strict';

    var http = require('http');
    var server;
    var port = 8080;

    exports.start = function() {
        server = http.createServer();
        server.on('request', function(request, response) {
            response.end('Hello World');
        });
        server.listen(port);
    };

    exports.stop = function(callback) {
        server.close(callback);
    };

}());
