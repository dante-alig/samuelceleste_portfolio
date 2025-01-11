import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import profil from "../images/profil.png";

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
                  I am a passionate graphic designer with more than 10 years of
                  experience, now transitioning into full-stack development. My
                  portfolio features personal projects I've fully designed and
                  coded, combining my design expertise with new technical
                  skills.
                </p>
              </div>

              <div className="drawer-contact">
                <h3>Contact</h3>
                <p>Email: samuel.celeste@gmail.com</p>
                <p>LinkedIn: samuelceleste</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
