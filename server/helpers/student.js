/**
 * @desc -
 */
import Student from '../models/Student';

class StudentHelper {
  constructor(model) {
    this.Model = model;
  }

  saveStudent = (id, firstname, lastname, education, language) => {
    const student = new this.Model({
      _id: id,
      firstName: firstname,
      lastName: lastname,
      educationLevel: education,
      preferredLanguage: language,
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
