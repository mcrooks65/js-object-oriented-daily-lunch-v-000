// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Customer {
  constructor(name) {
    this.name = name;
    this.id = customerId++;
  }
}
