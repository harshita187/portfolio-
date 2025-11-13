import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#333", color: "#fff" }}>
      <h1>Harshi</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        {["Hero", "About", "Projects", "Skills", "Experience", "Contact"].map((section) => (
          <li key={section}>
            <Link to={section.toLowerCase()} smooth duration={500} style={{ color: "#fff", textDecoration: "none", cursor: "pointer" }}>
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
