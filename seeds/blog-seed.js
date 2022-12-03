//setup the seed object for the blogs
const { Blogs } = require('../models');

const blogData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and theController layer for application logic.',
    user_id: 1
}
];

const seedBlog = () => Blogs.bulkCreate(blogData);

module.exports = seedBlog;