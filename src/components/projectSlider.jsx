// Importation des dépendances nécessaires
import React from "react";
// Import des composants Swiper pour le carrousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import des modules Swiper nécessaires pour les fonctionnalités
import { Navigation, Pagination, EffectFade } from "swiper/modules";
// Import des styles CSS de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Composant ProjectSlider
 * Crée un carrousel d'images et de vidéos avec navigation et pagination
 * @param {Array} images - Tableau des sources d'images/vidéos à afficher
 * @param {Array} link - Tableau d'objets contenant les liens (url et titre)
 * @param {string} txtColor - Couleur du texte pour les liens
 */
const ProjectSlider = ({ images, link, txtColor }) => {
  /**
   * Vérifie si la source est une vidéo MP4
   * @param {string} src - Source du média
   * @returns {boolean} - True si c'est une vidéo MP4, false sinon
   */
  const isVideo = (src) => {
    return typeof src === "string" && src.toLowerCase().endsWith(".mp4");
  };

  return (
    <div className="project-slider-container">
      {/* Configuration du carrousel Swiper */}
      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        className="project-slider"
      >
        {/* Mapping des médias (images/vidéos) */}
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="project-slide">
              {/* Rendu conditionnel : vidéo ou image */}
              {isVideo(src) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-media"
                >
                  <source src={src} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              ) : (
                <img
                  src={src}
                  alt={`Vue du projet ${index + 1}`}
                  className="project-media"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Liste des liens associés au projet */}
      <ul className="linkto">
        {link.map((objet, index) => {
          return (
            <ul key={index} className="linkto">
              <li style={{ border: `1px solid ${txtColor}` }}>
                <Link
                  to={objet.url}
                  style={{ color: txtColor }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {objet.title}
                  <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" />
                </Link>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectSlider;
