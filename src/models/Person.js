import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
  },
  { collection: 'Person' }
);

export default mongoose.model('Person', schema);
