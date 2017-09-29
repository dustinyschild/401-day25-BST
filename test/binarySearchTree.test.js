const { Tree } = require('./test.helper');
const { expect } = require('chai');

describe('BST Tests',function(){
  describe('toArray',function(){
  });
  describe('appendChild',function(){
    it('should return the newNode',function(){
      let newNode = Tree.root.appendChild({key: 10,data: 'data'});
      expect(Tree.root.right).to.be.equal(newNode);
    });
  });
});
