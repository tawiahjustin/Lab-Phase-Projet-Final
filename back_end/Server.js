import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import commentRouter from './routes/comments.js'
import questionRouter from './routes/questions.js'
import userRouter from './routes/users.js'
import User from './models/users.js'

const salt = bcrypt.genSaltSync(10)
const secret = 'nof95h93y9jf75yhu92676752qgdg8b'
const app = express()

dotenv.config({ path: './config/.env' })
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewURlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection established')
  })
  .catch((error) => {
    console.log('error connecting ' + error.message)
  })
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)
app.use(cookieParser())
app.use('/user', userRouter)
app.use('/questions', questionRouter)
app.use('/comments', commentRouter)

app.post('/register', async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
      passwordConfirm: bcrypt.hashSync(passwordConfirm, salt),
    })
    res.json(userDoc)
  } catch (e) {
    res.status(400).json(e)
  }
})
app.post('/login', async (req, res) => {
  const { username, email, password } = req.body
  const userDoc = await User.findOne({ username })
  const passOk = bcrypt.compare(password, userDoc.password)
  if (passOk) {
    // login
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err
      res.cookie('token', token).json({ id: userDoc._id, username })
    })
  } else {
    res.status(400).json('wrong credentials')
  }
})

app.listen(5000, () => console.log('server running'))
