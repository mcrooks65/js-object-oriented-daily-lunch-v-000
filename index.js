// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
  let neighborhoodId = 1;
  constructor(name) {
    this.id = neighborhoodId++;
    this.name = name;
    store.neighborhoods.push(this);
  }
  customers() { // returns all of the customers that live in a particular neighborhood
     return store.customers.filter(customer => customer.neighborhoodId === this.id);
   }

   meals() { // returns a unique list of meals that have been ordered in a particular neighborhood (you might want to do this one last)
Customer class:
     const allMeals = this.customers().map(customer => customer.meals());
     const merged = [].concat.apply([], allMeals);
     return [...new Set(merged)];
   }

   deliveries() { // returns a list of all deliveries placed in a neighborhood
     return store.deliveries.filter(delivery => delivery.neighborhoodId === this.id);
   }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.id = neighborhoodId++;
  }
}
