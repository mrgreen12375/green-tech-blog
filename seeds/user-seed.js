const { User } = require('../models');

const userData = [
    {
        username: 'Dave',
        password: 'password'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;