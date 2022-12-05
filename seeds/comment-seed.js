//setup the seed object for the comments
const { Comment } = require('../models');

const commentData = [
  {
    comment: 'Test Comment',
    user_id: 1,
    blog_id: 1
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;