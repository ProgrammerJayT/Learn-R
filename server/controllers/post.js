/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
import post from '../helpers/post';
import { errorLog } from '../utils/logger.js';

// eslint-disable-next-line consistent-return,import/prefer-default-export
export const createPost = (req, res) => {
  const { authorId, body } = req.body;

  if (!authorId || !body) {
    return res.status(400).json({
      message: 'All fields are required.',
      status: 400,
    });
  }

  post.savePost(authorId, body).then(() => res.status(201).json({
    message: 'Post successfully submitted.',
    status: 201,
  })).catch((SavePostError) => {
    errorLog.error(`SavePostError: ${SavePostError}`);
    return res.status(500).json({
      message: 'Sorry, failed to submit post',
      status: 500,
    });
  });
};

// eslint-disable-next-line consistent-return,import/prefer-default-export
export const findOne = (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      message: 'Sorry, failed to fetch post.',
      status: 400,
    });
  }

  post.findPostById(id).then((foundPost) => {
    if (foundPost === null) {
      return res.status(400).json({
        message: 'Sorry, post not found.',
        status: 400,
      });
    }

    res.status(200).json({
      message: foundPost,
      status: 200,
    });
  }).catch((FindPostByIdError) => {
    errorLog.error(`FindPostById: ${FindPostByIdError}`);
    return res.status(500).json({
      message: 'Sorry, failed to fetch post',
      status: 500,
    });
  });
};

export const findAll = (req, res) => {
  post.findAll().then((foundPosts) => {
    if (foundPosts === null) {
      return res.status(404).json({
        message: 'Failed to fetch posts.',
        status: 404,
      });
    }

    return res.status(200).json({
      message: foundPosts,
      status: 200,
    });
  }).catch((FindPostsError) => {
    errorLog.error(`FindPosts: ${FindPostsError}`);
    res.status(500).json({
      message: 'Sorry, failed to fetch posts.',
      status: 500,
    });
  });
};

export const findByAuthor = (req, res) => {
  const { authorId } = req.query;

  if (!authorId) {
    return res.status(400).json({
      message: 'Sorry, author id required.',
      status: 400,
    });
  }

  post.findAllByAuthor(authorId).then((foundPosts) => {
    if (foundPosts === null) {
      return res.status(400).json({
        message: 'Sorry, post not found.',
        status: 400,
      });
    }

    return res.status(200).json({
      message: foundPosts,
      status: 200,
    });
  }).catch((FindByAuthorError) => {
    errorLog.error(`FindByAuthorError: ${FindByAuthorError}`);
    return res.status(500).json({
      message: 'Failed to retrieve posts.',
      status: 500,
    });
  });
};

export const deletePost = (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      message: 'Sorry, post id required',
      status: 400,
    });
  }

  post.deletePost(id).then(() => res.status(201).json({
    message: 'Post deleted successfully',
    status: 201,
  })).catch((DeletePostError) => {
    errorLog.error(`DeletePostL ${DeletePostError}`);
    return res.status(500).json({
      message: 'Sorry, failed to delete post.',
      status: 500,
    });
  });
};
