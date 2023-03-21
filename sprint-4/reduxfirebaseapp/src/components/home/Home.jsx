import React from 'react'
import {useSelector} from "react-redux";
const Home = () => {
  const { user } = useSelector((store)=> store.login)
  console.log(user)
  return (
    <section className='flex flex-col gap-6'>
      <nav className='w-screen bg-blue-300 p-4'>
        <button className='p-3 bg-blue-600 rounded-md text-white'>Logout</button> 
        </nav>
      <div className='flex flex-col items-center'>
      <h1>{user.name}</h1>
      <img src={user.userPhoto} alt="" className='rounded-full'/>
      </div>
    </section>
  )
}

export default Home