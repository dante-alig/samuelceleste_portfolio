import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectSlider = ({ images, link, txtColor }) => {
  const isVideo = (src) => {
    return typeof src === "string" && src.toLowerCase().endsWith(".mp4");
  };

  return (
    <div className="project-slider-container">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="project-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="project-slide">
              {isVideo(src) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-media"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={src}
                  alt={`Project view ${index + 1}`}
                  className="project-media"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
