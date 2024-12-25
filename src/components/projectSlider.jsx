import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ProjectSlider = ({ images }) => {
  const isVideo = (src) => {
    return typeof src === 'string' && src.toLowerCase().endsWith('.mp4');
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
    </div>
  );
};

export default ProjectSlider;
