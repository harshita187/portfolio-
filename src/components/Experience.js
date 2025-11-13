import React from "react";
import artimage from "../asset/art-expo-wallpaper.jpg";
import "./Experience.css";

const experiences = [
  {
    role: "Intern",
    company: "RBulance Technology",
    details:
      "Developed server-side algorithms and REST APIs for IoT device management. Optimized database queries improving response time by 40%. Built scalable backend infrastructure using Node.js and MongoDB.",
  },
  {
    role: "Flipkart Grid 7.0 - Semifinalist",
    company: "Flipkart Grid & PRASUNETHON",
    details:
      "Developed a full-stack e-commerce solution reaching semifinals. Implemented real-time features using React frontend and Express backend with PostgreSQL database. Demonstrated proficiency in both frontend and backend technologies.",
  },
  {
    role: "Trainee (ML Summer School 2024)",
    company: "Amazon",
    details:
      "Completed intensive Amazon ML Summer School program. Worked on machine learning model deployment and optimization. Gained hands-on experience with AWS services and cloud architecture.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-section"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${artimage})` }}
    >
      <div className="experience-inner">
        <h2 className="experience-title">Experience</h2>
        <ul className="experience-list">
          {experiences.map((exp, index) => (
            <li className="experience-item" key={index}>
              <h3 className="experience-role">
                {exp.role} at <span className="experience-company">{exp.company}</span>
              </h3>
              <p className="experience-details">{exp.details}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
