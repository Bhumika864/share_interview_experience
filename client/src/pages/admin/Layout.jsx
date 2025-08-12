import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
const Layout = () => {
  const navigate = useNavigate();
  const logout=()=>{
    navigate('/')
  }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
      <div  onClick={()=>navigate('/')} class=" cursor-pointer text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
  HireStory
</div>
      <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'> <Sidebar/> <Outlet></Outlet> </div>
    </>
  )
}

export default Layout
