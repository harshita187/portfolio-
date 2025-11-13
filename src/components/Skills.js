import React from "react";
import generalimage from "../asset/general-projects-wallpaper.jpg";

const skills = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "50px 20px",
        position: "relative",
        textAlign: "center",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${generalimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>Skills</h1>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          maxWidth: "800px",
          margin: "0 auto",
          marginBottom: "40px",
        }}
      >
        I am a versatile developer proficient in building dynamic and user-centric web applications. My skill set spans front-end technologies like React and CSS, back-end development with Node.js and Express, and database management using MongoDB and MySQL. I am also experienced in integrating APIs, optimizing performance, and ensuring responsive designs. With a passion for learning, I continuously expand my expertise in emerging technologies to deliver innovative solutions.
      </p>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          listStyle: "none",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            style={{
              padding: "15px 30px",
              color: "white",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              borderRadius: "50px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
