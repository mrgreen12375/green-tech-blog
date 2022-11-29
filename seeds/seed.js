//setup functions that will seed the blog object
const sequelize = require('../config/connection');
const seedBlog = require('./blog-seed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  process.exit(0);
};

seedAll();