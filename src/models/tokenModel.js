import { Schema, model, models } from 'mongoose';

const token = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default models.Token || model('Token', token);
