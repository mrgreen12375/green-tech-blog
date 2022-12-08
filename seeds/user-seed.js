const { User } = require('../models');

const userData = [
    {
        username: 'Dave',
        password: 'password12345'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;