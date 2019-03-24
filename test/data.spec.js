global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('./src/data.js')
describe('createOption', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof createOption, 'function');
  });

  // it('debería retornar "example"', () => {
  //   assert.equal(example(), 'example');
  // });
})
