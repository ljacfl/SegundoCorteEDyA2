/*
Create and handle new
stack of books.
✓Every book must have its
Name, ISBN, Author and
Editorial
✓Fill the stack with some
examples of data
*/


class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    }
  
    push(book) {
      const newNode = new Node(book);
  
      if (!this.top) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
    }
  
    pop() {
      if (!this.top) {
        return null; // Stack is empty
      }
  
      const poppedBook = this.top.value;
      this.top = this.top.next;
  
      return poppedBook;
    }
  
    isEmpty() {
      return this.top === null;
    }
  }
  
  // Define Name, ISBN, Author, and Editorial
  const book1 = {
    Name: "Book 1",
    ISBN: "1234567890",
    Author: "Author 1",
    Editorial: "Editorial A",
  };
  
  const book2 = {
    Name: "Book 2",
    ISBN: "9876543210",
    Author: "Author 2",
    Editorial: "Editorial B",
  };
  
  const book3 = {
    Name: "Book 3",
    ISBN: "2468135790",
    Author: "Author 3",
    Editorial: "Editorial C",
  };
  
  // Create a new stack for books
  const bookStack = new Stack();
  
  // Push books onto the stack
  bookStack.push(book1);
  bookStack.push(book2);
  bookStack.push(book3);
  
  // Pop and print books from the stack
  while (!bookStack.isEmpty()) {
    const poppedBook = bookStack.pop();
    console.log(`Book Name: ${poppedBook.Name}`);
    console.log(`ISBN: ${poppedBook.ISBN}`);
    console.log(`Author: ${poppedBook.Author}`);
    console.log(`Editorial: ${poppedBook.Editorial}`);
    console.log("------------------------");
  }  