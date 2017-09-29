const { Tree } = require('./test.helper');
const { expect } = require('chai');

describe('BST Tests',function(){
  describe('appendChild',function(){
    it('should return the newNode',function(){
      let newNode = Tree.root.appendChild({key: 10,data: 'data'});
      expect(Tree.root.left).to.be.null;
      expect(Tree.root.right).to.be.equal(newNode);

      newNode = Tree.root.appendChild({key: 3,data: 'data'});
      expect(Tree.root.left).to.be.equal(newNode);

      newNode = Tree.root.appendChild({key: 7,data: 'data'});
      expect(Tree.root.right.left).to.be.equal(newNode);
    });
  });
});
