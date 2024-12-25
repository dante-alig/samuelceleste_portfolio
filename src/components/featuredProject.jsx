import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FeaturedProject = ({
  bgContainer,
  aboutProject,
  aboutTxt,
  link,
  projectThumbnail,
  cssStyle,
  buttonStyle,
}) => {
  return (
    <div className={cssStyle[0]} style={{ backgroundColor: bgContainer }}>
      <div className={cssStyle[1]}>
        <img src={projectThumbnail} alt="mokup" />
      </div>
      <div className={cssStyle[3]}>
        <Link to={link[0].url} target="_blank">
          <div className={buttonStyle.buttonLink}>
            <p>View Demo</p>
          </div>
        </Link>
        <div className={buttonStyle.linkSpan}>
          <Link to={link[1].url} target="_blank">
            <span>GitHub</span>
            <FontAwesomeIcon
              className={buttonStyle.typoGitHub}
              icon="fa-solid fa-arrow-up-right-from-square"
            />
          </Link>
        </div>
      </div>
      <div className={cssStyle[2]}>
        <h3>{aboutProject}</h3>
        <p>{aboutTxt}</p>
        <ul>
          {link.map((objLink, index) => {
            return (
              <li key={index}>
                <Link to={objLink.url} target="_blank">
                  {objLink.title}
                  <FontAwesomeIcon
                    className={cssStyle[4]}
                    icon="fa-solid fa-arrow-up-right-from-square"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProject;
