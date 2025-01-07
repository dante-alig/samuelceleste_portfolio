import React, { useState } from "react";
import profil from "../images/profil.jpg";
import Drawer from "./drawer";
import { Link } from "react-router-dom";

const Nav = ({ parallaxRef }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  return (
    <div className="nav-container">
      {/* ----- photo de profil--------- */}
      <div className="profil-pic">
        <div>
          <img src={profil} />
        </div>
        <div className="profil-name">Dante</div>
      </div>

      {/* ----- Navigation--------- */}
      <nav>
        <div onClick={() => scrollToSection(0)} style={{ cursor: "pointer" }}>
          Work
        </div>
        <div
          onClick={() => setIsDrawerOpen(true)}
          style={{ cursor: "pointer" }}
        >
          About
        </div>
        <Link
          to="https://calendly.com/samuelceleste/appel"
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Contact
        </Link>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Nav;
