// eslint.config.js
module.exports = {
  root: true,  // Indicate this is the root config
  parserOptions: {
    ecmaVersion: 2020,  // Specify ECMAScript version
    sourceType: 'module',  // Allow the use of imports
  },
  extends: [
    'eslint:recommended',  // Use recommended rules from ESLint
    'plugin:node/recommended',  // Use recommended rules for Node.js
  ],
  env: {
    node: true,  // Enable Node.js global variables and Node.js scoping
    es6: true,   // Enable ES6 globals and syntax
  },
  rules: {
    // Add or override rules here
    'no-console': 'warn',  // Example rule to warn on console.log statements
  },
};

