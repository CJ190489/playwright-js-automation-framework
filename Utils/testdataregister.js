const { faker } = require('@faker-js/faker');

function createUser() {

    const uniqueId = `${faker.string.alphanumeric(2)}`;

    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        zipCode: faker.location.zipCode(),
        phone: faker.string.numeric(10),
        ssn: faker.string.numeric(9),

        // Unique for every execution
        username: `user_${uniqueId}`,
        password: 'Test@12345'
    };
}

module.exports = { createUser };