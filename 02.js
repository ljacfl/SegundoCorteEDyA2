/*
Create and handle new list of TODOs.
Every task must have its title, description,
and points to next TODO.
Fill the list with some data and print all
TODOs
*/

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(node) {
      const newNode = new Node(node);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
    }
  
    peek(value, current = this.head) {
      if (this.head === null) {
        this.head = new Node(value);
      } else {
        this.tail.next = new Node(value);
      }
    }
  
    size(current = this.head, acum = 0) {
      while (current) {
        acum++;
        current = current.next;
      }
      return acum;
    }
  
    remove(value, current = this.head) {
      let prev = null;
  
      while (current !== null) {
        if (current.value === value) {
          if (prev === null) {
            this.head = current.next;
          } else {
            prev.next = current.next;
            if (current.next === null) {
              this.tail = prev;
            }
          }
          return true;
        }
        prev = current;
        current = current.next;
      }
      return false;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(`Title: ${current.value.title}`);
        console.log(`Description: ${current.value.description}`);
        if (current.next) {
          console.log(`Next TODO: ${current.next.value.title}`);
        } else {
          console.log("No more TODOs");
        }
        console.log("------------");
        current = current.next;
      }
    }
  }
  
  // Define a sample TODO object
  const todo1 = {
    title: "Task 1",
    description: "Description for Task 1",
  };
  
  const todo2 = {
    title: "Task 2",
    description: "Description for Task 2",
  };
  
  const todo3 = {
    title: "Task 3",
    description: "Description for Task 3",
  };
  
  // Create a new linked list
  const todoList = new LinkedList();
  
  // Append the TODOs to the list
  todoList.append(todo1);
  todoList.append(todo2);
  todoList.append(todo3);
  
  // Print all the TODOs
  todoList.print();
  

