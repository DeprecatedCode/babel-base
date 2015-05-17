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

var conditionallyCreateItem = function (selection, number, file, dir, contents) {
    if (!(number in selection)) {
        return;
    }

    var fullpath = path.join(process.cwd(), file);

    if (fs.existsSync(fullpath)){
        print('[#1] - The ./#2 #3 already exists, skipping!'
            .replace('#1', number)
            .replace('#2', file)
            .replace('#3', dir ? 'directory' : 'file'));
    }

    else {
        print('[#1] - Ok, creating the ./#2 #3'
            .replace('#1', number)
            .replace('#2', file)
            .replace('#3', dir ? 'directory' : 'file'));

        if (dir) {
            fs.mkdirSync(fullpath);
        }

        else {
            contents = Array.isArray(contents) ? contents.concat('').join('\n') : contents;
            fs.writeFileSync(fullpath, contents);
        }

        print('      ...done!');
    }
    print();
}

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

conditionallyCreateItem(selection, '1', 'src', true);

conditionallyCreateItem(selection, '2', 'gulpfile.js', false,
    ['var gulpInit = require(\'babel-base/module/gulp-init\');',
     'var gulp = gulpInit();']);

conditionallyCreateItem(selection, '3', '.gitignore', false,
    ['node_modules', 'dist']);

print('Nothing else to do, goodbye!');
