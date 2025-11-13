import React from "react";
import wallpaperImage from "../asset/web-development-wallpaper.jpg";
// Optional: Add a profile image

const About = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "50px 20px",
        color: "white",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${wallpaperImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "40px",
          borderRadius: "10px",
          maxWidth: "1000px",
          width: "100%",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Optional: Profile Image */}
        {/* <img
          src={profile}
          alt="Harshi Singh"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "5px solid #FFD700",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            marginRight: "40px",
          }}
        /> */}

        {/* About Text */}
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", fontFamily: "'Poppins', sans-serif" }}>
            About Me
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "#f0f0f0",
              marginBottom: "20px",
            }}
          >
            I'm Harshita, an aspiring Full-Stack Developer with a focus on UI/UX Design to offer the best possible experience for clients and users.
            Currently pursuing my Bachelor's degree at NIT Jaipur. I work with the following languages, web tools, and technologies:
          </p>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              listStyle: "none",
              padding: 0,
            }}
          >
            <li
              style={{
                padding: "10px 20px",
                background: "#FFD700",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              HTML
            </li>
            <li
              style={{
                padding: "10px 20px",
                background: "#FFD700",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              CSS
            </li>
            <li
              style={{
                padding: "10px 20px",
                background: "#FFD700",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              JavaScript
            </li>
            <li
              style={{
                padding: "10px 20px",
                background: "#FFD700",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              React.js
            </li>
            <li
              style={{
                padding: "10px 20px",
                background: "#FFD700",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              Node.js
            </li>
            <li
              style={{
                padding: "10px 20px",
                background: "#FFD700",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              MongoDB
            </li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
