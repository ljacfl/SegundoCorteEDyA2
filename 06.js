/*
Create and handle new graph of friends
and cities.
✓ Every person should be a node, and
every city too.
✓ Every person must have name and
Age, and should be referenced to one
city
✓ Every city must have a name.
✓ Print the list of people who lives in a
particular City
*/

class Person {
    constructor(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
  }
  
  class City {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Graph {
    constructor() {
      this.nodes = new Map();
      this.edges = new Map();
    }
  
    addPerson(name, age, city) {
      const person = new Person(name, age, city);
      this.nodes.set(person, []);
    }
  
    addCity(name) {
      const city = new City(name);
      this.nodes.set(city, []);
    }
    getPeopleInCity(city) {
      const peopleInCity = [];
      for (const [node] of this.nodes) {
        if (node instanceof Person && node.city === city) {
          peopleInCity.push(node);
        }
      }
      return peopleInCity;
    }
  }
  
  // Create a graph
  const socialGraph = new Graph();
  
  // Add cities and people to the graph
  socialGraph.addCity("Cali");
  socialGraph.addCity("Buenaventura");
  socialGraph.addCity("Bogota");
  socialGraph.addPerson("Gabriel Cortes", 15, "Buenaventura");
  socialGraph.addPerson("Alejandro Ramirez", 20, "Buenaventura");
  socialGraph.addPerson("Juan Ibarra", 23, "Cali");
  socialGraph.addPerson("Lina Moreira", 23, "Cali");
  socialGraph.addPerson("Luis Jimenez", 19, "Bogota");
  
   
  // Find people in a particular city
  const peopleInNewYork = socialGraph.getPeopleInCity("Cali");
  console.log("People living in Cali:");
  for (const person of peopleInNewYork) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  }
  