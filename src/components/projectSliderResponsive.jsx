import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSliderResponsive = ({ images }) => {
  const isVideo = (src) => {
    return typeof src === 'string' && src.toLowerCase().endsWith('.mp4');
  };

  return (
    <div className="project-slider-responsive-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          type: "progressbar"
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
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
    </div>
  );
};

export default ProjectSliderResponsive;
