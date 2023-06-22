import mongoose from 'mongoose'

// question Schema
const questionSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
})
const Question = mongoose.model('Question', questionSchema)
export default Question
