// const greet = require('./greet').greet; // old node syntax, ES6 is newer syntax

// we need to install some babel packages with the following command>
// npm install --save-dev @babel/core @babel/node @babel/preset-env
// now we also add .babelrc file with the code inside it
// then we can use the following ES6 codes
// but we need to run the code with command> npx babel-node my-script.js insead of > node my-script.js
// we can also create a script in package.json i.e. "start": "babel-node my-script.js",
// we can now run the code with command> npm run start

// after cloning run the command npm install --save-dev @babel/core @babel/node @babel/preset-env

import { greet } from "./greet";


 greet();
