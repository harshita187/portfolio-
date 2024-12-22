import React from "react";
import profile from "../asset/myphoto.jpeg";
import profileImage from "../asset/welcome-wallpaper.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "50px 20px",
        backgroundImage: `url(${profileImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "100vh", // Adjust height to fit the entire viewport
        position: "relative",
      }}
    >
      <img
        src={profile}
        alt="Harshita Singh"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "5px solid white",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          position: "absolute",
          top: "30%",
          transform: "translateY(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          transform: "translateY(-50%)",
          textAlign: "center",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: "2rem" }}>
          Hi, I'm Harshita Singh
        </h1>
        <p style={{ fontSize: "1rem", margin: "10px 0" ,marginBottom:"20px"}}>
          Crafting dynamic web experiences with React and Node.js.
        </p>
        <a
          href="#contact"
          style={{
            padding: "10px 20px",
            background: "white",
            color: "black",
            borderRadius: "20px",
            textDecoration: "none",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
