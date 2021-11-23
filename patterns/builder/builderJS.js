// builder in js example

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, { age, phone="000000000", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

const user = new User("Bob", {
  age: 10,
  phone: "123123123",
  address: new Address("1", "Main"),
});


const user2 = new User("John");
console.log(user);
console.log(user2);
