import mongoose from 'mongoose'

// user Schema
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
})
const User = mongoose.model('User', userSchema)
export default User
