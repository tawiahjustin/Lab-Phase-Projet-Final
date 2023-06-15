import express from 'express'
const router = express.Router()
import User from '../models/users.js'

// GET :  RETURN ALL USERS
router.get('/', (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => {
      console.error(err)
      res.status(500).json({ error: 'Internal server error' })
    })
})

//POST :  ADD A NEW USER TO THE DATABASE
router.post('/', (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  })
  user.save()
})
export default router
