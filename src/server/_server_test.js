(function() {
    'use strict';

    exports.testNothing = function(test){
        test.equals(3, 3, 'number');
        test.done();
    };

}());