

import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ blog }) => {
  const {
    description,
    _id,
    JobTitle,
    CompanyLocation,
    CompanyName,
    Companytype,
    Difficulty,
    SalaryRange,
    Type,
    Outcome
  } = blog;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full flex flex-col sm:flex-row items-center gap-6 bg-white shadow-md rounded-xl p-6 mb-6 hover:shadow-lg transition cursor-pointer"
    >
      
      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-xl font-semibold text-gray-800">
            {CompanyName}
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {Companytype}
          </span>
        </div>

        <div className="text-sm text-gray-600 mt-1">{CompanyLocation}</div>

        <div className="mt-2 text-sm text-primary font-medium">{JobTitle}</div>


        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
          {description.slice(0, 100)}...
        </p>
   <div className="mt-4 inline-block bg-gray-100 text-gray-800 px-4 py-1 text-sm font-medium rounded-md">
  {SalaryRange}
</div>


        <div className="mt-3 flex flex-wrap gap-2">
          <span className="bg-purple-100 text-purple-700 px-2 py-1 text-xs rounded-full">
            Difficulty: {Difficulty}
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 text-xs rounded-full">
            Type: {Type}
          </span>
          <span className="bg-purple-100 text-red-700 px-2 py-1 text-xs rounded-full">
            Outcome: {Outcome}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
