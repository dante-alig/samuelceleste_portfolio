import Header from "../components/header";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectOverview from "../components/projectOverview";
import mockupBelami from "../images/mockupbelami.png";
import mockupBelami2 from "../images/mockupbelami1.mp4";
import mockupBelami3 from "../images/mockupbelami3.png";
import mockupKarine from "../images/mockupkarine.png";
import mockupKarine1 from "../images/mockupkarine.png";
import mockupKarine2 from "../images/mockupkarine2.mp4";
import mockupMarvel from "../images/ipad2.png";
import mockupMarvel2 from "../images/mockupmarvel2.mp4";
import mockupLovely from "../images/mockup6.png";
import mockupLovely2 from "../images/mockuplovely2.png";
import mokupYeni from "../images/mockup_yeni.png";
import mokupYeni2 from "../images/mockupyeni1.png";
import marvelm1 from "../images/mockupmarvel1.png";
import lovely from "../images/mockuplovely.png";
import mockupBelamiResponsiveInfos from "../images/responsive/belami.png";
import mockupBelamiResponsive from "../images/responsive/belami1.png";
import mockupBelamiResponsive2 from "../images/responsive/belami2.png";
import mockupBelamiResponsive3 from "../images/responsive/belami3.png";
import mockupBelamiResponsive4 from "../images/responsive/belami4.png";
import mockupBelamiResponsive5 from "../images/responsive/belami5.png";
import mockupKarineResponsive from "../images/responsive/karine1.png";
import mockupMarvelResponsive from "../images/responsive/marvel1.png";
import mockupLovelyResponsive from "../images/responsive/lovely1.png";
import mockupYeniResponsive from "../images/responsive/yeni1.png";
import { Link } from "react-router-dom";

const Home = ({ parallaxRef }) => {
  return (
    <div className="container">
      <Parallax ref={parallaxRef} pages={6} style={{ top: "0", left: "0" }}>
        <ParallaxLayer offset={0} speed={0}>
          <Header parallaxRef={parallaxRef} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.999} speed={0.5}>
          <ProjectOverview
            pageNumber="01"
            totalPages="05"
            titlePresentation="Belami - AI generated creative opening messages."
            title="Belami"
            date="October 2024 - in progress"
            techno={["React Nativ", "Figma", "Open AI", "Backend"]}
            roles={["Ui Design", "Dev front & back"]}
            bgColor="black"
            border="white"
            bgContainer="#f5e6c7"
            // Images pour le slider (vous pouvez les remplacer par vos propres images)
            sliderImages={[
              mockupBelami,
              mockupBelami2,
              mockupBelami3,

              // Remplacer par d'autres images
            ]}
            sliderImagesResponsive={[
              mockupBelamiResponsiveInfos,
              mockupBelamiResponsive,
              mockupBelamiResponsive2,
              mockupBelamiResponsive3,
              mockupBelamiResponsive4,
              mockupBelamiResponsive5,
            ]}
            cssStyle={[
              "featured-container",
              "featured-mokup",
              "featured-presentation",
              "button-display-off",
            ]}
            buttonStyle={{
              buttonLink: "button-link-marvel",
              linkSpan: "link-marvel",
              typoGitHub: "fa-arrow-up-right-from-square-marvel",
            }}
            link={[
              {
                url: "https://www.figma.com/design/sOXpTDyout0PXphyu70Paa/Belami?node-id=0-1&t=l1V4DIsDR2gYxShT-1",
                title: "Figma",
              },
              {
                url: "https://github.com/dante-alig/belami_0.1.git",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.999} speed={0.5}>
          <ProjectOverview
            pageNumber="02"
            totalPages="05"
            titlePresentation="Karine Raspail - Therapist in psychogenealogy"
            title="Karine Raspail"
            date="September 2024 - in progress"
            techno={["React", "responsive", "Typescript", "Frame Motion"]}
            roles={["Ui Design", "Dev front"]}
            bgColor="#E1EAE9"
            txtColor="black"
            border="black"
            bgContainer="#ffffff"
            sliderImages={[mockupKarine1, mockupKarine2]}
            sliderImagesResponsive={[mockupKarineResponsive]}
            cssStyle={[
              "featured-container-tab0",
              "featured-mokup-tab1",
              "featured-presentation-tab2",
              "button-display",
            ]}
            buttonStyle={{
              buttonLink: "button-link",
              linkSpan: "link",
              typoGitHub: "fa-arrow-up-right-from-square",
            }}
            link={[
              {
                url: "https://psychogenealogie.netlify.app",
                title: "Netlify",
              },
              {
                url: "https://github.com/dante-alig/portfolio_therapeute.git",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.999} speed={1}>
          <ProjectOverview
            pageNumber="03"
            totalPages="05"
            titlePresentation="Marvel - Catalogs all characters in one place."
            title="Marvel"
            date="Aout 2024 "
            techno={["React", "Backend"]}
            roles={["Ui Design", "Dev front & back"]}
            bgColor="#1A1B1D"
            txtColor="#ea3323"
            border="#ea3323"
            bgContainer="black"
            sliderImages={[marvelm1, mockupMarvel2]}
            sliderImagesResponsive={[mockupMarvelResponsive]}
            cssStyle={[
              "featured-container-tab0",
              "featured-mokup-tab1",
              "featured-presentation-tab2",
              "button-display",
            ]}
            buttonStyle={{
              buttonLink: "button-link-marvel",
              linkSpan: "link-marvel",
              typoGitHub: "fa-arrow-up-right-from-square-marvel",
            }}
            link={[
              {
                url: "https://marvelarchiv.netlify.app/",
                title: "Netlify",
              },
              {
                url: "https://github.com/dante-alig/portfolio_marvel",
                title: "Github",
              },
            ]}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={3}>
          <ProjectOverview
            pageNumber="04"
            totalPages="05"
            titlePresentation="Lovely place - the best romantic spots in Paris to create unforgettable dates."
            title="Lovely place"
            date="Novembre 2024 - in progress "
            techno={["Figma", "React", "Typescript", "Google Map API"]}
            roles={["Ux Ui Design", "Dev front & back"]}
            bgColor="#f5e6c7"
            txtColor="black"
            border="black"
            bgContainer="black"
            sliderImages={[lovely, mockupLovely2]}
            sliderImagesResponsive={[mockupLovelyResponsive]}
            cssStyle={[
              "featured-container-tab0",
              "featured-mokup-tab1",
              "featured-presentation-tab2",
              "button-display",
            ]}
            buttonStyle={{
              buttonLink: "button-link-lovely",
              linkSpan: "link-lovely",
              typoGitHub: "fa-arrow-up-right-from-square-lovely",
            }}
            link={[
              {
                url: "https://www.figma.com/design/sOXpTDyout0PXphyu70Paa/Belami?node-id=0-1&t=l1V4DIsDR2gYxShT-1",
                title: "Figma",
              },
              { url: "https://github.com/", title: "Github" },
            ]}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.999} speed={0.5}>
          <ProjectOverview
            pageNumber="05"
            totalPages="05"
            titlePresentation="Yeni - Connects creators and businesses for seamless creative collaborations."
            title="Yeni"
            txtColor="#abcc48"
            date="Decembre 2024 - in progress"
            techno={["React Nativ", "Figma", "Open AI"]}
            roles={["Ux Ui Design", "Dev front & back"]}
            bgColor="black"
            border="white"
            bgContainer="#171616"
            sliderImages={[mokupYeni2, mokupYeni]}
            sliderImagesResponsive={[mockupYeniResponsive]}
            cssStyle={[
              "featured-container",
              "featured-mokup",
              "featured-presentation-yeni",
              "button-display-off",
              "fa-arrow-up-right-from-square-yeni",
            ]}
            buttonStyle={{
              buttonLink: "button-link-marvel",
              linkSpan: "link-marvel",
              typoGitHub: "fa-arrow-up-right-from-square-yeni",
            }}
            link={[
              {
                url: "https://www.figma.com/design/sOXpTDyout0PXphyu70Paa/Belami?node-id=0-1&t=l1V4DIsDR2gYxShT-1",
                title: "Figma",
              },
              { url: "https://github.com/", title: "Github" },
            ]}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4.999} speed={0}>
          <div className="about">
            <div className="about-container">
              <div className="title-container-bottom">
                <div className="title-box">
                  <h1>Nice to meet you,</h1>
                  <h1> Let’s connect.</h1>
                </div>
                <Link
                  to="https://calendly.com/samuelceleste/appel"
                  target="_blank"
                  className="bookACall"
                >
                  Book a call
                </Link>
                {/* <div className="mail">2025 Dante Design</div> */}
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
