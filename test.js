var assert = require('chai').assert;
const fs = require('fs');

describe('index-node6@v2', function() { 
  it('should not have an index.js', function(){
    assert.equal(fs.readdirSync('node_modules/index-node62/node_modules/index-node6').indexOf('index.js'), -1);
  })
});

describe('index-node6@v1', function() {
  it('should have an index.js', function(){
    assert.equal(fs.readdirSync('node_modules/index-node62/node_modules/index-node6').indexOf('index.js'), 1);
  })
});
