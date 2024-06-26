import React from 'react';

const rules = [
  {
    title: "General Hackathon Rules",
    rules: [
      "Participants are required to use Intel® AI Analytics Toolkit and Libraries to participate.",
      "Participants are required to use the Intel® Developer Cloud (IDC) for developing and deploying their projects. ",
      "Teams should build their product from scratch (Mobile App / Consumer Web App / Business Web App).",
      "Teams must select a single problem statement and theme; multiple choices are not allowed. The available problem statements are specified within the provided tracks.",
      "A team must have only 3 - 4 members.",
      "Students currently pursuing undergraduate and postgraduate programmes are allowed to participate.",
      "Working professionals are not eligible to participate.",
      "Participants are encouraged to form teams before the hackathon starts.",
      "Participants are encouraged to utilize their DevPost accounts to seek teammates for collaboration."
    ]
  },
  {
    title: "Round 1: Idea Submission Phase",
    rules: [
      "Participants are required to use only Intel® AI Analytics Toolkits, Libraries & SYCL/DPC++ Libraries for their ideations.",
      "Ideations should be presented in PowerPoint format and converted to PDF for submission. Upload via Google Drive links.",
      "A specific template will be provided, covering all essential points for submissions.",
      "Optionally, include the GitHub repository link for the ideation phase.",
      "Timely submission through the hackathon dashboard is crucial to avoid disqualification.",
      "Submitting a video that explains your idea and the problem statement will increase your team's chances of qualifying for the next round.",
      "Only the top 100 teams will qualify for round 2."
    ]
  },
  {
    title: "Round 2: Prototype Development Phase",
    rules: [
      "Prototypes are to be submitted via public GitHub repositories, with linkage to DevMesh accounts.",
      "The entirety of codebase must be accessible within the team's GitHub repository.",
      "Equal emphasis on deployment/inference benchmarking with and without Intel® oneAPI is mandated.",
      "Participants are strictly prohibited from modifying their PowerPoint presentations post-submission, with non-compliance risking disqualification.",
      "Hardware implementation may be demonstrated via video submissions, hosted on GitHub.",
      "Only the top 25 teams will qualify for round 3."
    ]
  },
  {
    title: "Round 3: 24-Hour Hackathon Phase",
    rules: [
      "Shortlisted participants receive ANOKHA passports for admission to Amrita University.",
      "Accommodation arrangements are to be managed independently by shortlisted participants, with detailed information available on the ANOKHA website.",
      "Further instructions and updates will be communicated in due course."
    ]
  }
];

const Rules = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-md mx-auto">
        {rules.map((val, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold bg-gray-200 py-2 px-4 rounded-t-md">{val.title}</h2>
            <ul className="list-disc ml-6 mt-2">
              {val.rules.map((rule, id) => (
                <li key={id}>{rule}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
