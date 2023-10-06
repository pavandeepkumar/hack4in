import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import student from '../../../public/student.png'
import degree from '../../../public/degree.png'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className=''>
      <div className="h-screen flex flex-col  items-center justify-center ">
        <div className='m-20'>
          <div className='w-48 text-center  '>
            <img src={degree} alt="" />
          </div>
          <div className='text-2xl bold  text-blue-700'>
            Online Exam
          </div></div>
        <div className='flex justify-around'>
          <Link to="/login">

            <div>
              <div className='w-48 text-center'>
                <img src={student} alt={student} width={430} />
              </div>
              <div className='text-2xl bold'>
                Students <button onClick={() => navigate('/login')} className='bg-blue-700 py-2 px-4 rounded-full text-white'>Login</button>
              </div>
            </div>
          </Link>
          <div>
            <div className='w-48 text-center'>
              <img src="https://img.freepik.com/free-vector/data-extraction-concept-illustration_114360-4876.jpg?size=626&ext=jpg&ga=GA1.1.1667656756.1692868574&semt=ais" alt="" width={430} />
            </div>
            <div className='text-2xl bold'>
              Admin <button onClick={() => navigate('/login')} className='bg-blue-700 py-2 px-4 rounded-full text-white'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage