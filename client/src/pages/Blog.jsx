import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'

const Blog = () => {
  const { id } = useParams()
  const [Data, setData] = useState(null)

  const fetchPostData = async () => {
    const foundData = blog_data.find(item => item._id === id)
    setData(foundData)
  }

  useEffect(() => {
    fetchPostData()
  }, [])

  return Data ? (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-32 left-0 w-full h-96 object-cover opacity-10 -z-10"
      />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-gray-500">
            Published on {Moment(Data.createdAt).format('MMMM Do YYYY')}
          </p>
          <h1 className="text-3xl font-bold">{Data.CompanyName}</h1>
          <p className="text-lg text-gray-600">{Data.JobTitle} • {Data.Type}</p>
          <p className="text-sm text-gray-500">{Data.CompanyLocation}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Outcome: {Data.Outcome}</span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Difficulty: {Data.Difficulty}</span>
            <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Type: {Data.Companytype}</span>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-gray mb-8 max-w-none">
          <p>{Data.description}</p>
        </div>

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-2">Other Info</h2>
            <p><strong>College:</strong> {Data["College-Name"]}</p>
            <p><strong>Eligibility:</strong> {Data.Eligibility_criteria}</p>
            <p><strong>Salary Range:</strong> {Data.SalaryRange}</p>
            <p><strong>Resources:</strong> {Data.Resources_used}</p>
            <p><strong>Resume:</strong> {Data["Upload-Resume"]}</p>
            <p><strong>Project Links:</strong> {Data["Project-Links"]}</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h2 className="text-lg font-semibold mb-2">Mistakes & Advice</h2>
            <p>{Data["Mistakes"]}</p>
          </div>
        </div>

        {/* Interview Rounds */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Interview Rounds</h2>
          {Data.Rounds?.map((round, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-1">Round {round.Round}: {round.Title}</h3>
              <p className="text-gray-600 mb-2 italic">{round.Overview}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <p><strong>Main Focus:</strong> {round.Main_Focus}</p>
                <p><strong>Duration:</strong> {round.Duration}</p>
                <p><strong>Questions:</strong> {round.Questions?.join(', ')}</p>
                <p><strong>Result:</strong> {round.Result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-lg text-gray-600">Loading...</div>
  )
}

export default Blog
