import { Schema, Document, model } from 'mongoose';
import { profileType } from '../types/profileType';

const ProfileSchema = new Schema({
  birthdate: { type: Date, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  languages: { type: String, required: true },
  login: { type: String, required: true },
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  phone: { type: String, required: true },
  pwd: { type: String, required: true },
  traits: { type: String, required: true },
  userId: { type: Number, required: true },
});

interface IProfileSchemaDocument extends Document, profileType {}

export default model<IProfileSchemaDocument>('Profile', ProfileSchema);
