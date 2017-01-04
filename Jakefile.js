desc('Default task');
task('default', ['lint'], function(){
    console.log('\n\nBuild OK');
});

desc('Lint Everything');
task('lint', [], function(){
    console.log('Lint code goes here');
    var lint = require('./build/lint/lint_runner.js');
    lint.validateFile('Jakefile.js', {}, {});
});