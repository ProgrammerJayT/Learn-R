/**
 * @desc -
 */
import User from '../models/User';

class UserHelper {
  constructor(model) {
    this.Model = model;
  }

  saveUser = (email, password, isAdmin) => {
    const user = new this.Model({ email, password, isAdmin });
    return user.save();
  };

  findUser = (email) => this.Model.findOne({
    email: {
      $eq: email,
    },
  });

  findById = (id) => {
    this.Model.findOne({
      _id: {
        $eq: id,
      },
    });
  };

  updateUser = (id, data) => this.Model.findByIdAndUpdate(
    {
      _id: {
        $eq: id,
      },
    },
    {
      $set: data,
    },
    {
      new: true,
    },
  );

  deleteUser = (id) => this.Model.findByIdAndDelete({
    _id: {
      $eq: id,
    },
  });
}

const user = new UserHelper(User);

export default user;
