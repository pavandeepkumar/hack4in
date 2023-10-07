
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './container/user/login/Login'
import Students from './container/students/Students'
// import Registation from './container/user/register/Registation'
import Teacher from './container/teacher/Teacher'
import Admin from './container/admin/Admin'
import RegistrationForm from './container/user/register/Registation'
import LandingPage from './container/landingPage/LandingPage'
import Navbar from './container/NavBar/NavBar'
import ExamForm from './container/students/ExamForm/ExamForm'
import ExamQuestions from './container/admin/ExamQuestions/ExamQuestion'
import CreateQuestion from './container/students/CreateQuestionForm/CreateQuestion'
import StudentResultList from './container/admin/STUDENTList/StudentList'




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/students' element={<Students />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/exam' element={<ExamForm />} />
          <Route path='/questions' element={<ExamQuestions />} />
          <Route path='/create' element={<CreateQuestion />} />
          <Route path='/result' element={<StudentResultList />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
