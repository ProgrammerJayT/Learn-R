import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
// eslint-disable-next-line import/extensions
import Post from '../models/Post.js';

class PostHelper {
  constructor(model) {
    this.Model = model;
  }

  savePost = (authorId, body) => this.Model.create({
    id: uuidv4(),
    authorId,
    body,
  });

  findPostById = (id) => this.Model.findOne({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });

  findAll = () => this.Model.findAll();

  findAllByAuthor = (authorId) => this.Model.findAll({
    where: {
      authorId: {
        [Op.eq]: authorId,
      },
    },
  });

  deletePost = (id) => this.Model.destroy({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

const post = new PostHelper(Post);

export default post;
