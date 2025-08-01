import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative mt-1 sm:mt-20 flex flex-col items-center text-center'>
  <div>
    <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-[4.5rem] text-gray-700'>
      Share Your Interview Story.
      <div className='text-primary'>Read Others</div>
    </h1>
  </div>
  <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs' text-gray-500>HireStory is a community-driven platform where candidates post their real interview stories, coding questions, HR rounds, and valuable tips — to help others prepare better and smarter.</p>
  <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-grey-300 bg-white rounded overdlow-hidden'>
    <input type="text" placeholder='Search for blogs'  className='w-full pl-4 outline-none' required/>
    <button type="submit" className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
  </form>
</div>

    
  )
}

export default Header
