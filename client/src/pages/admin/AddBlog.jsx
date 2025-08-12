import React, { useState } from 'react'

const AddBlog = () => {
  const [CompanyName,setcompanyname]=useState();
  const [CompanyLocation,setcompanylocation]=useState();
  const [Companytype,setcompanytype]=useState();
  const [CollegeName,setcollegename]=useState();
  const [JobTitle,setjobtitle]=useState();
  const [Type,settype]=useState();
  const [Outcome,setoutcome]=useState();
  const [Difficulty,setdifficulty]=useState();
  const [SalaryRange,setsalaryrange]=useState();
  const [EligibilityCriteria,seteligibilitycriteria]=useState();
  const[Description,setdescription]=useState();
  const[ProjectLinks,setprojectlinks]=useState();
  const[Resume,setresume]=useState();
  const[Mistakes,setmistakes]=useState();
  const[Resources,setresources]=useState();
  const[Rounds,setrounds]=useState();
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
  }
  return (
   <form onSubmit={onSubmitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scoll'>
    <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m=10 shadow rounded'>
      <p className='mt-4'>Company Name</p>
      <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border-gray-300 outline-none rounded' onChange={e=>setcompanyname(e.target.value)
      } value={CompanyName}  />

    </div>
   </form>
  )
}

export default AddBlog
