'use strict';

function Node(key,data){
  this.key = key;
  this.data = data;
  this.left = null;
  this.right = null;
}

Node.prototype.appendChild = function(childObj){
  let newNode = '';
  if (this.key === childObj.key){
    return null;
  }
  else if (this.key > childObj.key){
    if (!this.left){
      newNode = this.left = new Node(childObj.key,childObj.data);
    } else {
      newNode = this.left.appendChild(childObj);
    }
  }
  else {
    if (!this.right){
      newNode = this.right = new Node(childObj.key,childObj.data);
    } else {
      newNode = this.right.appendChild(childObj);
    }
  }
  return newNode;
};

module.exports = Node;
