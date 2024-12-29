import FeaturedProject from "./featuredProject";
import ProjectSlider from "./projectSlider";
import ProjectSliderResponsive from "./projectSliderResponsive";
import Image from "../images/macbook.png";

const ProjectOverview = ({
  pageNumber,
  totalPages,
  titlePresentation,
  title,
  date,
  techno,
  roles,
  bgColor,
  txtColor,
  border,
  bgContainer,
  projectThumbnail,
  cssStyle,
  link,
  buttonStyle,
  sliderImages,
  sliderImagesResponsive,
}) => {
  return (
    <div
      className="overview-container"
      style={{ backgroundColor: bgColor }}
      id={pageNumber === "01" ? "belami-section" : undefined}
    >
      <div className="overview-presentation-container">
        <div className="overview-box">
          <div className="overview-pagination">
            <span style={{ color: txtColor }}>{pageNumber}</span>
            <span>/</span>
            <span>{totalPages}</span>
          </div>
          <div className="overview-title" style={{ color: txtColor }}>
            {titlePresentation}
          </div>
          <div className="overview-infos">
            <div className="overview-projet">
              <div>Project</div> <div style={{ color: txtColor }}>{title}</div>
            </div>
            <div className="overview-role">
              <div>Role</div>
              <ul style={{ color: txtColor }}>
                {roles.map((ro, index) => {
                  return <li key={index}>{ro}</li>;
                })}
              </ul>
            </div>
            <div className="overview-date">
              <div>Date</div>
              <div style={{ color: txtColor }}>{date}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="overview-techno-box" style={{ color: txtColor }}>
            {techno.map((tech, index) => {
              return (
                <div
                  key={index}
                  className="techno"
                  style={{ border: `1px solid ${border}` }}
                >
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ProjectSlider images={sliderImages} link={link} txtColor={txtColor} />
      <ProjectSliderResponsive
        images={sliderImagesResponsive}
        link={link}
        txtColor={txtColor}
      />
    </div>
  );
};

export default ProjectOverview;
