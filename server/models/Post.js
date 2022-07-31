import { DataTypes } from 'sequelize';
import database from '../libs/database';

const Post = database.sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
  },
  authorId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Post;
