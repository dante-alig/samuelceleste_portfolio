// Importation des dépendances nécessaires depuis React et les bibliothèques de motion
import { useRef } from "react";
import PropTypes from "prop-types";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

/**
 * Composant ParallaxText
 * Crée une animation de texte défilant infini qui réagit à la vitesse de défilement
 * @param {Object} props - Propriétés du composant
 * @param {string} props.children - Le contenu texte à animer
 * @param {number} props.baseVelocity - Vitesse de base de l'animation de défilement (par défaut: 100)
 */
function ParallaxText({ children, baseVelocity = 100 }) {
  // Initialisation de la position de base du texte
  const baseX = useMotionValue(0);
  // Récupération de la position de défilement actuelle
  const { scrollY } = useScroll();
  // Calcul de la vitesse de défilement
  const scrollVelocity = useVelocity(scrollY);
  // Lissage de la vitesse de défilement pour une animation plus fluide
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  // Transformation de la vitesse de défilement en facteur affectant la vitesse d'animation
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Transformation de la position de base en pourcentage pour un enveloppement fluide
  const x = useTransform(baseX, (v) => `${wrap(-50, -25, v)}%`);

  // Référence pour suivre la direction de l'animation
  const directionFactor = useRef(1);
  // Boucle d'animation frame par frame
  useAnimationFrame((t, delta) => {
    // Calcul du mouvement basé sur le delta temps et la vitesse de base
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Changement de direction basé sur la vitesse de défilement
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Application du facteur de vitesse au mouvement
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    // Mise à jour de la position
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {/* Répétition du texte plusieurs fois pour créer un effet de défilement continu */}
        <span className="scroll-text">{children} </span>
        <span className="scroll-text">{children} </span>
        <span className="scroll-text">{children} </span>
        <span className="scroll-text">{children} </span>
      </motion.div>
    </div>
  );
}

// Validation des PropTypes
ParallaxText.propTypes = {
  children: PropTypes.string.isRequired,
  baseVelocity: PropTypes.number,
};

/**
 * Composant Scroll
 * Composant wrapper qui crée un effet de texte défilant avec "PROJETS"
 * @returns {JSX.Element} Un composant de texte défilant
 */
function Scroll() {
  return (
    <section className="parallax-text">
      <ParallaxText baseVelocity={3}>
        <span className="scroll-point">•</span> remote friendly
        <span className="scroll-point">•</span>Basé à Paris, France
        <span className="scroll-point">•</span>+10 ans d'expérience en design
      </ParallaxText>
    </section>
  );
}

export default Scroll;
