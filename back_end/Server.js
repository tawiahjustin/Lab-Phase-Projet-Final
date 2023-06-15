import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import commentRouter from './routes/comments.js'
import questionRouter from './routes/questions.js'
import userRouter from './routes/users.js'

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

app.use('/user', userRouter)
app.use('/questions', questionRouter)
app.use('/comments', commentRouter)

//
app.listen(5000, () => console.log('server running'))
