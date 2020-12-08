import mongoose, { Document } from 'mongoose'

export interface UserShape {
  email: string
  username: string
  password: string
}

export interface IUser extends Document {
  email: string
  username: string
  password: string
}

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
