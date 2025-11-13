import React from "react";
import mediaimage from "../asset/multimedia-wallpaper.jpg";
import "./Projects.css";

const projects = [
  {
    title: "Campus-app",
    description:
      "A dedicated platform to buy and sell within your college community. Connect with fellow students to exchange textbooks, electronics, clothing, and more. Designed for a safe, convenient, and student-centric campus experience.",
    link: "https://campus-app-plum.vercel.app/",
  },
  {
    title: "React-Support-Ticket-Dashboard",
    description:
      "A ticket management system featuring real-time filtering, ticket status tracking, and user analytics. Built with React and Express.js, integrated API handling for efficient support operations and advanced search functionality.",
    link: "https://react-support-ticket-dashboard.vercel.app/",
  },
  {
    title: "City-Portal",
    description:
      "An interactive city information portal with dynamic data fetching and a fully responsive interface. Built with React and integrated multiple APIs for real-time city data. Deployed on Vercel with optimized performance and SEO.",
    link: "https://github.com/harshita187/city-portal",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section"
      style={{ backgroundImage: `url(${mediaimage})` }}
    >
      <div className="projects-overlay">
        <div className="projects-inner">
          <h1 className="projects-title">My Project Work</h1>
          <h2 className="projects-subtitle">
            Explore my personal, study, volunteer, and work Web Dev projects.
            Choose a project to learn more.
          </h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
