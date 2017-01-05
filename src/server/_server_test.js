/*jshint esversion: 6 */
(function() {
    'use strict';

    var port = '8080';
    var hostname = 'http://localhost';

    var server = require('./server.js');
    var http = require('http');

    //TODO: handle case where stop() is called before start()

    exports.test_serverReturnsHelloWorld = function(test) {
        server.start(port);
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
                server.stop(function() {
                    test.done();
                });
            });

        });
    };

    exports.test_serverRequiresPortNumber = function(test) { 
        test.throws(function(){
            server.start();
        });
        test.done();
    };

    exports.test_serverRunsCallbackWhenStopCompletes = function(test) { 
        server.start(port);
        server.stop(function(){
            test.done();
        });
        
    };

    exports.test_stopErrorsWhenNotRunning = function(test) { 
        server.stop(function(err){
            test.notEqual(err, undefined);
            test.done();
        });
    };
    

}());