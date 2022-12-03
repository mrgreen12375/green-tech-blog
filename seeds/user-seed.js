const { User } = require('../models');

const userData = [
    {
        username: 'Steven',
        password: 'password12345'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;