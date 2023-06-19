import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import AddQuestions from './components/AddQuestions'
import Comments from './views/Comments'
import Inscription from './views/Inscription'
import SignUp from './components/SignUp'
import Login from './components/Login'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Inscription />}>
        <Route index element={<Login />} />
        <Route path='/register' element={<SignUp />} />
      </Route>
      <Route path='/home' element={<Home />} />
      <Route path='/add-question' element={<AddQuestions />} />
      <Route path='/comment' element={<Comments />} />
    </Routes>
  )
}

export default App
