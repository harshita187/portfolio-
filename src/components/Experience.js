import React from "react";
import artimage from "../asset/art-expo-wallpaper.jpg";

const experiences = [
  { role: "Intern", company: "RBulance Technology", details: "Developed server-side algorithms for IoT devices." },
  { role: "Hackathons", company: "Flipkart Grid & PRASUNETHON", details: "Participated in innovative tech challenges." },
  { role: "Traniee", company: " Amazon", details: "Amazon ML Summer School " },
];

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "50px 20px",
        position: "relative",
        textAlign: "center",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${artimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "30px", textTransform: "uppercase" }}>
        Experience
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          maxWidth: "800px",
          textAlign: "left",
        }}
      >
        {experiences.map((exp, index) => (
          <li
            key={index}
            style={{
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
              {exp.role} at <span style={{ color: "#FFD700" }}>{exp.company}</span>
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>{exp.details}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
