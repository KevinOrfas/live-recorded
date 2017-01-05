/*jshint esversion: 6 */
(function() {
    'use strict';

    var port = '8080';
    var hostname = 'http://localhost';

    var server = require('./server.js');
    var http = require('http');

    exports.setUp = function(done) {
        server.start(port);
        done();
    };

    exports.tearDown = function(done) {
        server.stop(function() {
            done();
        });
    };

    //TODO: handle case where stop() is called before start()
    //TODO: test-drive stop() callback

    exports.test_serverReturnsHelloWorld = function(test) {
        var request = http.get(`${hostname}:${port}`);
        request.on('response', function(response) {
            var receivedData = false;
            response.setEncoding('utf8');
            test.equals(200, response.statusCode, 'status code');
            response.on('data', function(chunk){
                receivedData = true;
                test.equals('Hello World', chunk, 'response text');
            });
            response.on('end', function() {
                test.ok(receivedData, 'should have receivedData response data');
                test.done();
            });

        });
    };

    exports.test_serverRunsCallbackWhenStopCompletes = function(test) { 
        server.stop(function(){
            test.done();
        });
        server.start();
    };
    

}());