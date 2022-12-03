//setup the seed object for the comments
const { Comments } = require('../models');

const commentData = [
  {
    comment: 'Test Comment',
    user_id: 1,
    blogs_id: 1
  }
];

const seedComment = () => Comments.bulkCreate(commentData);

module.exports = seedComment;