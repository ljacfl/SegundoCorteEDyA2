/*
Create and handle new
queue of people in one ATM.
✓Every person in the ATM
must have its name and
arrived time.
✓Fill the queue with some
examples of data
*/

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(person) {
      const newNode = new Node(person);
  
      if (!this.front) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (!this.front) {
        return null; // Queue is empty
      }
  
      const removedPerson = this.front.value;
      this.front = this.front.next;
  
      if (!this.front) {
        this.rear = null; // Queue is now empty
      }
  
      return removedPerson;
    }
  
    isEmpty() {
      return this.front === null;
    }
  }
  
  // Define some sample people with names and arrival times
  const person1 = {
    name: "John",
    arrivedTime: "09:00 AM",
  };
  
  const person2 = {
    name: "Alice",
    arrivedTime: "09:15 AM",
  };
  
  const person3 = {
    name: "Bob",
    arrivedTime: "09:30 AM",
  };
  
  // Create a new queue for the ATM
  const atmQueue = new Queue();
  
  // Enqueue people into the queue
  atmQueue.enqueue(person1);
  atmQueue.enqueue(person2);
  atmQueue.enqueue(person3);
  
  // Simulate serving people and dequeue them one by one
  while (!atmQueue.isEmpty()) {
    const nextPerson = atmQueue.dequeue();
    console.log(`Now serving ${nextPerson.name}, arrived at ${nextPerson.arrivedTime}`);
  }
  
  // The queue is empty, and everyone has been served.
  