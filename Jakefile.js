desc('Default task');
task('default', ['lint'], function(){
    console.log('\n\nBuild OK');
});

desc('Lint Everything');
task('lint', [], function(){
    var lint = require('./build/lint/lint_runner.js');
    var files = new jake.FileList();
    files.include('**/*.js');
    files.exclude('node_modules');
    lint.validateFileList(files.toArray(), {}, {});
});