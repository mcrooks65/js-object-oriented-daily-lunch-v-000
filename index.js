// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
  let neighborhoodId = 1;
  constructor(name) {
    this.id = neighborhoodId++;
    this.name = name;
    store.neighborhoods.push(this);
  }
  delivers() {
    return // returns a list of all deliveries placed in a neighborhood
  }
  customers() {

  }
  meals() {

  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.id = neighborhoodId++;
  }
}
