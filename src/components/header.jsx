import Scroll from "./scroll";

const Header = ({ parallaxRef }) => {
  const scrollToSection = (offset) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(offset);
    }
  };

  return (
    <div>
      <header>
        <div className="title-container">
          <div className="title-box">
            <h1>I'm Samuel</h1>
            <h1>Céleste.</h1>
          </div>
          <div className="describe">
            Designer & Full Stack Developer, I craft innovative digital
            solutions that blend aesthetics and performance.
          </div>
        </div>
        <div className="projects">
          <div className="projects-section">Selected projects</div>
          <div className="projects-title" onClick={() => scrollToSection(1)}>
            Belami
          </div>
          <div className="projects-title" onClick={() => scrollToSection(2)}>
            Psychogenea
          </div>
          <div className="projects-title" onClick={() => scrollToSection(3)}>
            Lovely place
          </div>
          <div
            className="projects-title projects-title-under"
            onClick={() => scrollToSection(4)}
          >
            Yeni
          </div>
        </div>
      </header>
      <Scroll />
    </div>
  );
};

export default Header;
