import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import profil from "../images/profil.jpg";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="drawer-overlay"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="drawer"
          >
            <div className="drawer-content">
              <button className="drawer-close" onClick={onClose}>
                ×
              </button>

              <div className="drawer-about">
                <div className="drawer-profile">
                  <img
                    src={profil}
                    alt="Profile"
                    className="drawer-profile-img"
                  />
                  <h2>About Me</h2>
                </div>
                <p>
                  Designer & Full Stack Developer based in Paris, I craft
                  innovative digital solutions that blend aesthetics and
                  performance. With a passion for both design and development, I
                  create seamless user experiences that make an impact.
                </p>
              </div>

              <div className="drawer-contact">
                <h3>Contact</h3>
                <p>Email: your.email@example.com</p>
                <p>LinkedIn: linkedin.com/in/yourprofile</p>
                <p>GitHub: github.com/yourusername</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
