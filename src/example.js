/**
 * ES6/7 Transpilation Demo - Example Module
 * @author Nate Ferrero
 */

/**
 * To run this example, run the following in your console shell from the babel-base root directory:
 *     gulp
 *     node dist/example.js
 */

import {Cat, Dog} from './pets';

new Cat('Sparkles', 5).vocalize();
new Dog('Fido').vocalize();
