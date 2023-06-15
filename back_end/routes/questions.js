import express from 'express'
const router = express.Router()
import Question from '../models/questions.js'

// getting questions
router.get('/', async (req, res) => {
  Question.find()
    .then((questions) => res.json(questions))
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Internal server error' })
    })
})
// creating a new Question
router.post('/', async (req, res) => {
  const question = new Question({
    title: req.body.title,
    question: req.body.question,
    category: req.body.category,
  })
  question.save()
})
export default router

//
