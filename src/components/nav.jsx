import React, { useState } from "react";
import profil from "../images/profil.jpg";
import Drawer from "./drawer";

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        <div>Work</div>
        <div
          onClick={() => setIsDrawerOpen(true)}
          style={{ cursor: "pointer" }}
        >
          About
        </div>
        <div>Contact</div>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default Nav;
