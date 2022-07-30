/**
 * @desc -
 */
import Student from '../models/Student';

/**
 * C
 * R
 * U
 * D
 */
class StudentHelper {
  constructor(model) {
    this.Model = model;
  }

  /* Creating a new student and saving it to the database. */
  saveStudent = (id, firstName, lastName, educationLevel, preferredLanguage) => {
    const student = new this.Model({
      _id: id,
      firstName,
      lastName,
      educationLevel,
      preferredLanguage,
    });

    return student.save();
  };

  findById = (id) => this.Model.findOne({
    _id: {
      $eq: id,
    },
  });

  updateStudent = (data, id) => this.Model.findByIdAndUpdate(
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

  deleteStudent = (id) => this.Model.findByIdAndDelet({
    _id: {
      $eq: id,
    },
  });
}

const student = new StudentHelper(Student);

export default student;
