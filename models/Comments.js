const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comments extends Model {}
Comments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        validate: {

            len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    blogs_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogs',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments'
});
module.exports = Comments;