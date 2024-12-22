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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        color: "white",
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
       Reach me out
      </h2>
      <p style={{ fontSize: "1rem", marginBottom: "10px" }}>
        Email:{" "}
        <a
          href="mailto:harshita129singh@gmail.com"
          style={{
            color: "#FFD700",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
         <AiOutlineMail
        size={80}
          style={{
            color: "#FFD700",
            fontSize: "1.5rem",
            marginBottom: "-3px",
          }}
        />{" "}
        </a>
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
        GitHub:{" "}
        
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
        size={80}
          style={{
            color: "#FFD700",
            fontSize: "1.5rem",
            marginBottom: "-3px",
          }}
        />{" "}
        </a>
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
        LinkedIn:{" "}
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
        size={80}
          style={{
            color: "#FFD700",
            fontSize: "1.5rem",
            marginBottom: "-3px",
          }}
        />{" "}
        </a>
      </p>
    </section>
  );
};

export default Contact;
