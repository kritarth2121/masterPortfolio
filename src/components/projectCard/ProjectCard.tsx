import React, { useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Modal from "../Modal/Modal";

const Fade = require("react-reveal/Fade");

export default function ProjectCard({ repo, theme }: any): React.JSX.Element {
  const [visible, setVisible] = useState(false);
  console.log(visible, "LoginModal");
  return (
    <div className="w-full" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div
          key={repo.id}
          className="p-3 cursor-pointer"
          onClick={() => setVisible(true)}
        >
          <div className="flex flex-row items-center font-extrabold space-x-4 text-xl">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>

          <Modal
            visible={visible}
            showCloseButton
            closeOnOutsideClick
            handleVisibility={setVisible}
          >
            <div className="mx-5 mt-5 bg-white">
              <h3 className="text-2xl font-semibold text-center">
                {repo.name}
              </h3>
              <Carousel>
                <div>
                  <img src="assets/1.jpeg" />
                  <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img src="assets/2.jpeg" />
                  <p className="legend">Legend 2</p>
                </div>
                <div>
                  <img src="assets/3.jpeg" />
                  <p className="legend">Legend 3</p>
                </div>
              </Carousel>
              <p className="repo-description" style={{ color: theme.text }}>
                {repo.description}
              </p>
              <div className="repo-details">
                <ProjectLanguages
                  className="repo-languages"
                  logos={repo.languages}
                />
              </div>
            </div>
          </Modal>
        </div>
      </Fade>
    </div>
  );
}
