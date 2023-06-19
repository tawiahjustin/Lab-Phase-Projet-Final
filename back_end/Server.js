import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import commentRouter from './routes/comments.js'
import questionRouter from './routes/questions.js'
import userRouter from './routes/users.js'
import User from './models/users.js'

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
app.use(cors())
app.use('/user', userRouter)
app.use('/questions', questionRouter)
app.use('/comments', commentRouter)

app.post('/register', async (req, res) => {
  const { username, email, password, passwordConfirm } = req.body
  try {
    const userDoc = await User.create({
      username,
      email,
      password,
      passwordConfirm,
    })
    res.json(userDoc)
  } catch (e) {
    res.status(400).json(e)
  }
})
app.listen(5000, () => console.log('server running'))
