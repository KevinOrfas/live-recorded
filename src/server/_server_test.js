(function() {
    'use strict';

    var assert = require('assert');

    exports.testNothing = function(test){
        assert.equal(3, 3, 'number');
        test.done();
    };

}());