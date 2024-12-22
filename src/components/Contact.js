import React from "react";
import contactimage from "../asset/arrangement-with-devices-copy-space.jpg";
import { DiGithub } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai"; 

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "50px 20px",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactimage})`,
        textAlign: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column", // Change to column for layout
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Change to column for text and icons
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", 
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Reach Me Out
        </h2>
        
        {/* Social icons container with row-wise layout */}
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Align icons in row
            gap: "20px", // Space between icons
            marginTop: "20px",
          }}
        >
          <a
            href="mailto:harshita129singh@gmail.com"
            style={{
              color: "#FFD700",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <AiOutlineMail
              size={60}
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                marginBottom: "-3px",
              }}
            />
          </a>
          <a
            href="https://github.com/harshita187"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFD700",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <DiGithub
              size={60}
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                marginBottom: "-3px",
              }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/harshita-singh-430637255/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#FFD700",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            <FaLinkedin
              size={60}
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                marginBottom: "-3px",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
