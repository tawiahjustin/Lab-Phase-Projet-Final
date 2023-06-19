import mongoose from 'mongoose'

// user Schema
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  passwordConfirm: String,
})
const User = mongoose.model('User', userSchema)
export default User
