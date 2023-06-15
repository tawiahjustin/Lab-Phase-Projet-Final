import express from 'express'
const router = express.Router()
import Comment from '../models/comments.js'
router.get('/', (req, res) => {
  res.send('getting comments')
})
export default router
