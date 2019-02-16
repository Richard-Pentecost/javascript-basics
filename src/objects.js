const createPerson = (name, age) => {
  return {
    name,
    age,
  }
};

const getName = (object) => object.name;

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  // object has a prototype method called hasOwnProperty
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
  return Object.keys(object).indexOf(property) !== -1;
};

const isOver65 = (person) => person.age > 65;

const getAges = (people) => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => {
    if(person.name === name) {
      return person;
    }
  })
};

const findHondas = (cars) => {
  return cars.filter(car => {
    if(car.manufacturer === 'Honda') {
      return car;
    }
  });
};

const averageAge = (people) => {
  // simple and elegant
  return people.reduce((acc, next) => {
    return acc + next.age;
  }, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: function(name) {
      return `Hi ${name}, my name is ${this.name} and I am ${this.age}!`;
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
