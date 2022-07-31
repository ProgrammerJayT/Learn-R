import { DataTypes } from 'sequelize';
import database from '../libs/database';

const Post = database.sequelize.define('Post', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  authorId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// eslint-disable-next-line no-unused-expressions
(async () => {
  await Post.sync();
})();

export default Post;
