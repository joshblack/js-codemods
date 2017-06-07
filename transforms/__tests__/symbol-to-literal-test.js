'use strict';

const defineTest = require('jscodeshift/dist/testUtils').defineTest;
const options = {
  quote: 'single',
};

defineTest(__dirname, 'symbol-to-literal', options, 'symbol-to-literal1');
