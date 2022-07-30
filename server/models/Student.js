/**
 * @desc -
 */
import mongoose from 'mongoose';

const Student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  educationLevel: {
    type: String,
    required: false,
  },
  preferredLanguage: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Student', Student);
