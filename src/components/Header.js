import React from "react";

const Header = () => {
  return (
    <header
      style={{
        padding: "20px",
        borderBottom: "1px solid #333",
        backgroundColor: "#1a1a1a",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            color: "#FFA500",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          My Portfolio
        </h1>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
            fontSize: "1rem",
            margin: "0",
            padding: "0",
          }}
        >
          {["About", "Skills", "Projects", "Contact"].map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.toLowerCase()}`}
                style={{
                  color: "#FFA500",
                  textDecoration: "none",
                  padding: "5px 10px",
                  transition: "color 0.3s ease, background-color 0.3s ease",
                  borderRadius: "5px",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#FFA500") &
                  (e.target.style.color = "#1a1a1a")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent") &
                  (e.target.style.color = "#FFA500")
                }
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
