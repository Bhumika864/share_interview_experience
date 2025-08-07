import React from 'react'
import {assets} from '../assets/assets';
import {useNavigate} from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ' >
      <div class="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">
  HireStory
</div>

      <button   onClick={()=>navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5' >Login <img src={assets.arrow} className='w-3'/></button>
    </div>
  )
}

export default Navbar
