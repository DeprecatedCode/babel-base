# babel-base
ES6/7 Base Module Structure

## Getting Started

To create a new project using this library, run the following in a console shell:

```bash
mkdir my-new-project
cd my-new-project

npm install --save gulp babel-base
node ./node_modules/babel-base/setup
```

Use ES6/7 to write your project code in the ./src directory.


Then, to compile your project:

```bash
gulp
```

To watch your project and recompile every time a change is detected:

```bash
gulp watch
```

The compiled version of your module can be found in the ./dist directory.

## Technical Details

This project uses `{stage: 0}` configuration option of [Babel](https://github.com/babel/babel) to convert ES6/7 code into ES5 code.
