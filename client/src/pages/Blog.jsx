import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer.JSX";

const Blog = () => {
  const { id } = useParams();
  const [Data, setData] = useState(null);
  const [Comments, setComments] = useState([]);
  const[name,setName]=useState('');
  const[content,setContent]=useState('')

  const fetchPostData = async () => {
    const foundData = blog_data.find((item) => item._id === id);
    setData(foundData);
  };
  const fetchComments = async () => {
    setComments(comments_data);
  };
const addComment = async (e) => {
  e.preventDefault();

  if (!name || !content) return;

  const newComment = {
    name: name,
    content: content,
    createdAt: new Date().toISOString(),
  };

  setComments([newComment, ...Comments]);
  setName('');
  setContent('');
};

  useEffect(() => {
    fetchPostData();
    fetchComments();
  }, []);

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
            Published on {Moment(Data.createdAt).format("MMMM Do YYYY")}
          </p>
          <h1 className="text-3xl font-bold">{Data.CompanyName}</h1>
          <p className="text-lg text-gray-600">
            {Data.JobTitle} • {Data.Type}
          </p>
          <p className="text-sm text-gray-500">{Data.CompanyLocation}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
              Outcome: {Data.Outcome}
            </span>
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
              Difficulty: {Data.Difficulty}
            </span>
            <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
              Type: {Data.Companytype}
            </span>
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
            <p>
              <strong>College:</strong> {Data["College-Name"]}
            </p>
            <p>
              <strong>Eligibility:</strong> {Data.Eligibility_criteria}
            </p>
            <p>
              <strong>Salary Range:</strong> {Data.SalaryRange}
            </p>
            <p>
              <strong>Resources:</strong> {Data.Resources_used}
            </p>
            <p>
              <strong>Resume:</strong> {Data["Upload-Resume"]}
            </p>
            <p>
              <strong>Project Links:</strong> {Data["Project-Links"]}
            </p>
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
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-1">
                Round {round.Round}: {round.Title}
              </h3>
              <p className="text-gray-600 mb-2 italic">{round.Overview}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <p>
                  <strong>Main Focus:</strong> {round.Main_Focus}
                </p>
                <p>
                  <strong>Duration:</strong> {round.Duration}
                </p>
                <p>
                  <strong>Questions:</strong> {round.Questions?.join(", ")}
                </p>
                <p>
                  <strong>Result:</strong> {round.Result}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 mb-10 max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Comments ({Comments.length})
          </h2>

          <div className="flex flex-col gap-6">
            {Comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-200 shadow-sm rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={assets.user_icon}
                    alt="User Icon"
                    className="w-8 h-8 rounded-full border"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    {/* <span className="text-xs text-gray-400">{Moment(item.createdAt).fromNow()}</span> */}
                    <span className="text-xs text-gray-400 absolute right-4 bottom-3 flex items-cnter gap-2 text-xs">
                      {Moment(item.createdAt).fromNow()}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed ml-11">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold mb-4">Add your comment</p>
          <form onSubmit={addComment} className="flex flex-col items-start gap-4 max-w-lg">
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full p-2 border border-gray-300 rounded outline-none"/>
            <textarea onChange={(e)=>setContent(e.target.value)} value={content}  name="" id="" placeholder="Comment" className="w-full p-2 border border-gray-300 rounded outline-none h-48 required"></textarea>
            <button type="submit" className="bg-primary text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer">Submit</button>
          </form>
          <div><p className="font-semibold my-4">Share this article on social media</p>
      <div className="flex"><img src={assets.facebook_icon} width={50} alt="" srcset="" />
      <img src={assets.twitter_icon} width={50} alt="" srcset="" />
      <img src={assets.googleplus_icon} width={50} alt="" srcset="" /></div>
      </div>

        </div>
        
      </div>
      <Footer></Footer>
      
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-lg text-gray-600">
      Loading...
    </div>
  );
};

export default Blog;
