import React from "react";
import mediaimage from "../asset/multimedia-wallpaper.jpg";
// import profile from "../asset/myphoto.jpeg";

const projects = [
  {
    title: "Waste Management App",
    description: "An app to optimize waste collection using IoT.",
    link: "#",
  },
  {
    title: "Movie Search App",
    description: "Search and view movie details using the OMDb API.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "50px 20px",
        position: "relative",
        textAlign: "center",
        color: "white",
        backgroundImage: `url(${mediaimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Profile Image */}
      {/* <img
        src={profile}
        alt="Profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "5px solid white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: "20px",
        }}
      /> */}

      {/* Projects Section Content */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          padding: "30px",
          marginTop: "200px",
          width: "80%",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontFamily: "'Poppins', sans-serif" }}>
          My Project Work
        </h1>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Explore my personal, study, volunteer, and work Web Dev projects.
          Choose a category below to start.
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "50px",
                width: "300px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff" }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
