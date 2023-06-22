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
router.post('/add-question', async (req, res) => {
  const { title, description, category } = req.body
  try {
    const userDoc = await Question.create({
      title,
      description,
      category,
    })
    res.json(userDoc)
  } catch (e) {
    res.status(400).json(e)
  }
})
export default router

//
