import React from "react";
import {
  blog_data,
  blogCompanies,
  blogDifficultyLevel,
  blogLocation,
  blogOutcome,
  blogRole,
  blogType,
} from "../assets/assets";
import { useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const [role, setRole] = useState("");
  const [type, setType] = useState("");
  const [Location, setLocation] = useState("");
  const [Level, setLevel] = useState("");
  const [Outcome, setOutcome] = useState("");
  const [Types, setTypes] = useState("");

  return (
    <div className="p-4">
      {/* Dropdown Filter */}
      <div className="flex  gap-6 justify-center my-10">
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Roles</option>
          {blogRole.map((item) => (
            <option key={item} value={item.replace(/_/g, " ")}>
              {item.replace(/_/g, " ")}
            </option>
          ))}
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Company-type</option>
          {blogCompanies.map((role) => (
            <option key={role} value={role.replace(/_/g, " ")}>
              {role.replace(/_/g, " ")}
            </option>
          ))}
        </select>

        <select
          value={Location}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Location</option>
          {blogLocation.map((location) => (
            <option key={location} value={location.replace(/_/g, " ")}>
              {location.replace(/_/g, " ")}
            </option>
          ))}
        </select>
        <select
          value={Level}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Difficulty-level</option>
          {blogDifficultyLevel.map((level) => (
            <option key={level} value={level.replace(/ _/g, " ")}>
              {level.replace(/_/g, " ")}
            </option>
          ))}
        </select>
        <select
          value={Outcome}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setOutcome(e.target.value)}
        >
          <option value="">Outcome</option>
          {blogOutcome.map((outcome) => (
            <option key={outcome} value={outcome.replace(/ _/g, " ")}>
              {outcome.replace(/_/g, " ")}
            </option>
          ))}
        </select>
        <select
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={Types}
          onChange={(e) => setTypes(e.target.value)}
        >
          <option value="">Type</option>
          {blogType.map((type) => (
            <option key={type} value={type}>
              {type.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24 mx-4 sm:mx-16 xl:mx-40">

        {blog_data
          .filter((blog) => role === "" || blog.JobTitle === role)
          .filter((blog) => type === "" || blog.Companytype === type)
          .filter(
            (blog) => Location === "" || blog.CompanyLocation === Location
          )
          .filter((blog) => Level === "" || blog.Difficulty === Level)
          .filter((blog) => Outcome === "" || blog.Outcome === Outcome)
          .filter((blog)=>Types===""||blog.Type===Types)
          .map((blog) => (
            <PostCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>

  );
};

export default PostList;
