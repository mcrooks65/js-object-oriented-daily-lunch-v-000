// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let costumerId = 0

class Customer {
  constructor(name) {
    this.name = name;
    this.id = customerId++;
  }
}
