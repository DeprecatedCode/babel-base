/**
 * @module babel-base/setup
 * @author Nate Ferrero
 */
var fs = require('fs');
var path = require('path');
var readlineSync = require('readline-sync');

var print = function () {
    console.log.apply(console, Array.prototype.slice.call(arguments));
};

var ask = function (what) {
    return readlineSync.question(what + ' ');
};

print('Welcome to the babel-base setup utility!');
print();
print('Current directory:', '"' + process.cwd() + '"');
print();
print('I\'ll setup some directories and files to get you started:');
print();
print('  [1] - The ./src directory, containing your project source files');
print('  [2] - The ./gulpfile.js file, containing gulp configuration');
print('  [3] - The ./.gitignore file, to ignore the dist folder created by gulp');
print();

var selection = {};
selection[ask('Proceed? (y/n, or enter a number from the above list to run only that step)')] = true;

if ('y' in selection) {
    selection['1'] = true;
    selection['2'] = true;
    selection['3'] = true;
}

print();

if ('1' in selection) {
    var dir = path.join(process.cwd(), 'src');
    if (fs.existsSync(dir)){
        print('[1] - The ./src directory already exists, skipping!');
    }
    else {
        print('[1] - Ok, creating the ./src directory');
        fs.mkdirSync(dir);
        print('      ...done!');
    }
    print();
}

if ('2' in selection) {
    var file = path.join(process.cwd(), 'gulpfile.js');
    if (fs.existsSync(file)){
        print('[2] - The gulpfile.js file already exists, skipping!');
    }
    else {
        print('[2] - Ok, creating the gulpfile.js file');
        fs.writeFileSync(file, ['var gulpInit = require(\'./node_modules/babel-base/module/gulp-init\');',
                                'var gulp = gulpInit();',
                                ''].join('\n'));
        print('      ...done!');
    }
    print();
}

if ('3' in selection) {
    var file = path.join(process.cwd(), '.gitignore');
    if (fs.existsSync(file)){
        print('[2] - The .gitignore file already exists, skipping!');
    }
    else {
        print('[2] - Ok, creating the .gitignore file');
        fs.writeFileSync(file, ['node_modules', 'dist', ''].join('\n'));
        print('      ...done!');
    }
    print();
}
print('Nothing else to do, goodbye!');
