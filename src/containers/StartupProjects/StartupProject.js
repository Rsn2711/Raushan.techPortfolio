import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects, socialMediaLinks } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
            <Slider {...settings}>
              {bigProjects.projects.map((project, i) => {
                return (
                  <div key={i} className="project-card-wrapper">
                    <div
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      {project.image ? (
                        <div className="project-image">
                          <img
                            src={project.image}
                            alt={project.projectName}
                            className="card-image"
                          ></img>
                        </div>
                      ) : null}
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark ? "dark-mode card-subtitle" : "card-subtitle"
                          }
                        >
                          {project.projectDesc}
                        </p>
                        {project.footerLink ? (
                          <div className="project-card-footer">
                            {project.footerLink.map((link, i) => {
                              return (
                                <span
                                  key={i}
                                  className={
                                    isDark
                                      ? "dark-mode project-tag"
                                      : "project-tag"
                                  }
                                  onClick={() => openUrlInNewTab(link.url)}
                                >
                                  {link.name}
                                </span>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="project-button-div">
            <Button
              text="More Projects"
              newTab={true}
              href={socialMediaLinks.github}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
