import mongoose from 'mongoose'

// comment Schema
const commentSchema = mongoose.Schema({
  user: String,
  comment: String,
})
const Comment = mongoose.model('Comment', commentSchema)
export default Comment
