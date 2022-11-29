const User = require('./User');
const Blogs = require('./Blogs');
const Comments = require('./Comments');

Blogs.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

User.hasMany(Blogs)

Blogs.hasMany(Comments, {
  foreignKey: 'postId',
  onDelete: 'CASCADE',
});

Comments.belongsTo(Blogs)

Comments.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

User.hasMany(Comments)

module.exports = { User, Blogs, Comments };