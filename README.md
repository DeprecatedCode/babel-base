# babel-base
ES6/7 Base Module Structure

[![babel-base on npm](https://nodei.co/npm/babel-base.png?downloads=true&stars=true)](https://nodei.co/npm/babel-base/)

[![Github Stars](https://img.shields.io/github/stars/SnappLab/babel-base.svg)](https://github.com/SnappLab/babel-base)
[![Package Version](https://img.shields.io/npm/v/babel-base.svg)](https://www.npmjs.com/package/babel-base)
[![Package License](https://img.shields.io/npm/l/babel-base.svg)](https://www.npmjs.com/package/babel-base)
[![Code Climate](https://img.shields.io/codeclimate/github/SnappLab/babel-base.svg)](https://codeclimate.com/github/SnappLab/babel-base)
[![Test Coverage](https://img.shields.io/codeclimate/coverage/github/SnappLab/babel-base.svg)](https://codeclimate.com/github/SnappLab/babel-base)
[![Build Status](https://img.shields.io/travis/SnappLab/babel-base.svg)](https://travis-ci.org/SnappLab/babel-base)


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
