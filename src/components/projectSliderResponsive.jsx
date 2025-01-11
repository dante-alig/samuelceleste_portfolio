import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectSliderResponsive = ({ images, link, txtColor }) => {
  const isVideo = (src) => {
    return typeof src === "string" && src.toLowerCase().endsWith(".mp4");
  };

  return (
    <div className="project-slider-responsive-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        className="project-slider-responsive"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="project-slide-responsive">
              {isVideo(src) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="project-media-responsive"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={src}
                  alt={`Project view ${index + 1}`}
                  className="project-media-responsive"
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

export default ProjectSliderResponsive;
