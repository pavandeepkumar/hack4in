
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
