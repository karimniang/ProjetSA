var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 4; i++) {
  database.users.push({
    id: i,
    username: faker.internet.userName("abdou","karim"),
    password: faker.internet.password(),
    email: faker.internet.email()
  });
}

console.log(JSON.stringify(database));
