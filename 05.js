/*
Create and handle your family tree until
your third pre-generation, think there is
only one person to make next
generation (mom or dad).
✓ Every person must have a full name
and birthdate.
✓ Every person could have more than
one child
✓ Print your family tree in pre-order, post
order and in-order
*/



class TreeNode {
    constructor(fullName, birthdate) {
      this.fullName = fullName;
      this.birthdate = birthdate;
      this.children = [];
    }
  }
  
  class FamilyTree {
    constructor(root) {
      this.root = new TreeNode(root.fullName, root.birthdate);
    }
  
    addChild(parentFullName, childFullName, childBirthdate) {
      this._addChildRecursive(this.root, parentFullName, childFullName, childBirthdate);
    }
  
    _addChildRecursive(node, parentFullName, childFullName, childBirthdate) {
      if (node.fullName === parentFullName) {
        const newChild = new TreeNode(childFullName, childBirthdate);
        node.children.push(newChild);
        return;
      }
  
      for (const child of node.children) {
        this._addChildRecursive(child, parentFullName, childFullName, childBirthdate);
      }
    }
  
    preOrderTraversal(node = this.root) {
      if (!node) return;
      console.log(`Full Name: ${node.fullName}, Birthdate: ${node.birthdate}`);
      for (const child of node.children) {
        this.preOrderTraversal(child);
      }
    }
  
    postOrderTraversal(node = this.root) {
      if (!node) return;
      for (const child of node.children) {
        this.postOrderTraversal(child);
      }
      console.log(`Full Name: ${node.fullName}, Birthdate: ${node.birthdate}`);
    }
  
    inOrderTraversal(node = this.root) {
      if (!node) return;
      if (node.children.length > 0) {
        this.inOrderTraversal(node.children[0]);
      }
      console.log(`Full Name: ${node.fullName}, Birthdate: ${node.birthdate}`);
      if (node.children.length > 1) {
        this.inOrderTraversal(node.children[1]);
      }
    }
  }
  
  // Create a sample family tree
  const familyTree = new FamilyTree({ fullName: "Fanny Fernandez Rojas", birthdate: "1950-08-22" });
  
  // Add children
  familyTree.addChild("Fanny Fernandez Rojas", "Jasmir Fernandez Rojas", "1969-03-01");
  familyTree.addChild("Fanny Fernandez Rojas", "Cristian Fernandez Rojas", "1976-07-20");
  familyTree.addChild("Jasmir Fernandez Rojas", "Jorge Cortes Fernandez", "1998-12-29");
  familyTree.addChild("Jasmir Fernandez Rojas", "Angelica Cortes Fernandez", "1994-03-17");
  
  // Print the family tree using different traversals
  console.log("Pre-order Traversal:");
  familyTree.preOrderTraversal();
  console.log("\nPost-order Traversal:");
  familyTree.postOrderTraversal();
  console.log("\nIn-order Traversal:");
  familyTree.inOrderTraversal();
  