import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ theme, darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);
  console.log(theme);
  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <div
      className="w-full h-full absolute top-0 left-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <Particles
        className="w-full h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 100,
              limit: 300,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#bdf7fc",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "images/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 30,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#cfe3f5",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          // interactivity: {
          //   detect_on: "canvas",
          //   events: {
          //     onHover: {
          //       enable: true,
          //       mode: "repulse",
          //       parallax: {
          //         enable: false,
          //         force: 60,
          //         smooth: 10,
          //       },
          //     },
          //     onClick: {
          //       enable: true,
          //       mode: "push",
          //     },
          //     resize: true,
          //   },
          //   modes: {
          //     grab: {
          //       distance: 400,
          //       lineLinked: {
          //         opacity: 1,
          //       },
          //     },
          //     bubble: {
          //       distance: 400,
          //       size: 100,
          //       duration: 2,
          //       opacity: 1,
          //       speed: 2,
          //     },
          //     repulse: {
          //       distance: 200,
          //     },
          //     push: {
          //       particles_nb: 4,
          //     },
          //     remove: {
          //       particles_nb: 2,
          //     },
          //   },
          // },
          retina_detect: true,
          // fps_limit: 60,
          // background: {
          //   image: "url('https://particles.js.org/images/background3.jpg')",
          // },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

// mode: "grab",
// grab: {
//   distance: 300,
//   line_linked: {
//     opacity: 0.5,
//   },
// },
