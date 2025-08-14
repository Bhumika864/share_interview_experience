import React, { useState } from "react";

// --- Static Dropdown Options ---
export const blogRole = [
  "SDE", "Frontend_Developer", "Backend_Developer", "Full_Stack_Developer",
  "Web_Developer", "Mobile_App_Developer", "Data_Analyst", "Data_Scientist",
  "Machine_Learning_Engineer", "AI_Engineer", "DevOps_Engineer", "Security_Engineer",
  "Cloud_Engineer", "Blockchain_Developer"
];

export const blogCompanies = ["Startups", "Mid-tier", "Service-Based", "Product-Based", "Unicorns"];
export const blogLocation = ["Remote", "On-Site"];
export const blogDifficultyLevel = ["Easy", "Medium", "Hard"];
export const blogOutcome = ["Selected", "Rejected", "Waiting"];
export const blogType = ["Internship", "Full-Time", "PPO", "Off-Campus", "On-Campus"];

const InterviewForm = () => {
  // --- State Management ---
  const [formData, setFormData] = useState({
    companyName: "",
    description: "",
    role: "",
    companyType: "",
    location: "",
    difficulty: "",
    outcome: "",
    type: "",
    rounds: [
      {
        Round: "",
        Title: "",
        Overview: "",
        Main_Focus: "",
        Questions: "",
        Result: "",
        Duration: ""
      }
    ],
    // Optional fields
    salaryRange: "",
    collegeName: "",
    eligibility: "",
    resources: "",
    resumeLink: "",
    projectLinks: "",
    mistakes: "",
    advice: ""
  });

  const [showOptional, setShowOptional] = useState(false);

  // --- Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoundChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRounds = [...formData.rounds];
    updatedRounds[index][name] = value;
    setFormData((prev) => ({ ...prev, rounds: updatedRounds }));
  };

  const addRound = () => {
    setFormData((prev) => ({
      ...prev,
      rounds: [
        ...prev.rounds,
        { Round: "", Title: "", Overview: "", Main_Focus: "", Questions: "", Result: "", Duration: "" }
      ]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  // --- JSX ---
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-4">Interview Experience Form</h2>

      {/* Company Info */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Enter company name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Dropdown Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select name="role" value={formData.role} onChange={handleChange} className="border rounded p-2">
          <option value="">Select Role</option>
          {blogRole.map((role, i) => <option key={i} value={role}>{role}</option>)}
        </select>

        <select name="companyType" value={formData.companyType} onChange={handleChange} className="border rounded p-2">
          <option value="">Select Company Type</option>
          {blogCompanies.map((comp, i) => <option key={i} value={comp}>{comp}</option>)}
        </select>

        <select name="location" value={formData.location} onChange={handleChange} className="border rounded p-2">
          <option value="">Select Location</option>
          {blogLocation.map((loc, i) => <option key={i} value={loc}>{loc}</option>)}
        </select>

        <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="border rounded p-2">
          <option value="">Select Difficulty Level</option>
          {blogDifficultyLevel.map((diff, i) => <option key={i} value={diff}>{diff}</option>)}
        </select>

        <select name="outcome" value={formData.outcome} onChange={handleChange} className="border rounded p-2">
          <option value="">Select Outcome</option>
          {blogOutcome.map((out, i) => <option key={i} value={out}>{out}</option>)}
        </select>

        <select name="type" value={formData.type} onChange={handleChange} className="border rounded p-2">
          <option value="">Select Job Type</option>
          {blogType.map((t, i) => <option key={i} value={t}>{t}</option>)}
        </select>
      </div>

      {/* Optional Fields Toggle */}
      <button
        type="button"
        onClick={() => setShowOptional(!showOptional)}
        className="mb-4 mt-5 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
      >
        {showOptional ? "Hide Optional Fields" : "Add Optional Fields"}
      </button>

      {/* Optional Fields */}
      {showOptional && (
        <div className="space-y-4 border-t border-gray-300 pt-4">
          {[
            { label: "Salary Range", name: "salaryRange", placeholder: "e.g., 5-7 LPA" },
            { label: "College Name", name: "collegeName", placeholder: "Enter college name" },
            { label: "Eligibility", name: "eligibility", placeholder: "Enter eligibility criteria" },
            { label: "Resources", name: "resources", placeholder: "List resources used" },
            { label: "Resume Link", name: "resumeLink", placeholder: "Paste resume link" },
            { label: "Project Links", name: "projectLinks", placeholder: "Paste project links" }
          ].map((field, i) => (
            <div key={i}>
              <label className="block mb-1 font-medium">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          ))}

          {/* Textareas */}
          <div>
            <label className="block mb-1 font-medium">Mistakes</label>
            <textarea
              name="mistakes"
              value={formData.mistakes}
              onChange={handleChange}
              placeholder="Describe mistakes made"
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Advice</label>
            <textarea
              name="advice"
              value={formData.advice}
              onChange={handleChange}
              placeholder="Share your advice"
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      )}

      {/* Rounds Section */}
      <h3 className="text-xl font-semibold mt-6 mb-2">Rounds</h3>
      {formData.rounds.map((round, index) => (
        <div key={index} className="border p-4 rounded mb-4 bg-gray-50">
          {Object.keys(round).map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={round[field]}
              onChange={(e) => handleRoundChange(index, e)}
              placeholder={field.replace("_", " ")}
              className="w-full border rounded p-2 mb-2"
            />
          ))}
        </div>
      ))}

      <button
        type="button"
        onClick={addRound}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        + Add Round
      </button>

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default InterviewForm;

