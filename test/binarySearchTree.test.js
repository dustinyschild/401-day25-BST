const { Tree } = require('./test.helper');
const { expect } = require('chai');

describe('BST Tests',function(){
  beforeEach(function(){
    return this.newNode = Tree.root;
  });
  describe('appendChild',function(){
    afterEach(function(){
      this.newNode.left = null;
      this.newNode.right = null;
    });
    it('should append and return the newNode',function(){
      let newNode = this.newNode.appendChild({key: 10,data: 'data'});
      expect(Tree.root.left).to.be.null;
      expect(Tree.root.right).to.be.equal(newNode);

      newNode = Tree.root.appendChild({key: 3,data: 'data'});
      expect(Tree.root.left).to.be.equal(newNode);

      newNode = Tree.root.appendChild({key: 7,data: 'data'});
      expect(Tree.root.right.left).to.be.equal(newNode);
    });
    it('should return the ',function(){
      this.newNode.appendChild({key: 3, data: 'data'});
      this.newNode.appendChild({key: 1, data: 'data'});
      let minValue = this.newNode.min();
      expect(minValue).to.be.equal(1);
    });
  });
});
