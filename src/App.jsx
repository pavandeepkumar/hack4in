import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './container/user/login/Login'
import Students from './container/students/Students'
import Registation from './container/user/register/Registation'
import Teacher from './container/teacher/Teacher'
import Admin from './container/admin/Admin'
import Examlist from './container/exam/examlist'
import Question from './container/question/Question'
import  Result from './container/result/Result'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Students />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Registation />}/>
          <Route path='/teacher' element={<Teacher />}/>
          <Route path='/admin' element={<Admin />} />
          <Route path='/exam' element={<Examlist/>} />
          <Route path='/question' element={<Question/>} />
          <Route path='/result' element={<Result />} />
  
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
