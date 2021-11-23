class Human {
  constructor(gender) {
    this.gender = gender;
  }
}

class Alien {
  constructor(gender) {
    this.gender = gender;
  }
}

class FamilyMember {
  constructor(name) {
    this.name = name;
  }
}

class FamilyMemberBuilder {
  constructor(name) {
    this.familyMember = new FamilyMember(name);
  }

  setFamilyStatus(status) {
    this.familyMember.status = status;
    return this;
  }

  setAge(age) {
    this.familyMember.age = age;
    return this;
  }

  setRace(race) {
    this.familyMember.race = race;
    return this;
  }

  build() {
    return this.familyMember;
  }
}

const familyPerson1 = new FamilyMemberBuilder("Jane")
  .setRace(new Alien("octopus"))
  .setAge(139)
  .setFamilyStatus("cousin")
  .build();


const familyPerson2 = new FamilyMemberBuilder("Jack")
  .setRace(new Human("male"))
  .setAge(35)
  .build();

console.log(familyPerson1);
console.log(familyPerson2);
