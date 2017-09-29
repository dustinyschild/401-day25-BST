'use strict';

function Node(key,data){
  this.key = key;
  this.data = data;
  this.left = null;
  this.right = null;
}

Node.prototype.appendChild = function(childObj){
  if (this.key === childObj.key){
    return null;
  }
  else if (this.key > childObj.key){
    if (!this.left){
      let newNode = this.left = new Node(childObj.key,childObj.data);
      return newNode;
    } else {
      this.left.appendChild(childObj);
    }
  }
  else {
    if (!this.right){
      let newNode = this.right = new Node(childObj.key,childObj.data);
      return newNode;
    } else {
      this.right.appendChild(childObj);
    }
  }
};

module.exports = Node;
