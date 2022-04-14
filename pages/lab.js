import Particles from "react-tsparticles";
import { css } from "@emotion/react";
import Link from "next/link";
import Button from "@mui/material/Button";
// import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import FooterContact from "../src/components/FooterContact";
import { FaRegGem } from "react-icons/fa";

const headerStyle = css`
  height: 100vh;
`;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  align-items: center;
  width: 100%;
`;

const containerStyleProject = css`
  display: flex;
  flex-direction: column;
  position: relative;
  /* background-color: #f3f3f3; */
  background-color: #007d902a;
  padding: 3rem;
  align-items: center;
  width: 100%;
  height: auto;
  clip-path: polygon(0 7%, 100% 0, 100% 93%, 0% 100%);
`;

const contentContainer = css`
  left: 10%;
  width: 75%;
  padding-top: 2rem;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const contentContainerProjects = css`
  /* left: 10%; */
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const titleContainerStyle = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 15%;
  left: 10%;
  color: white;
  font-weight: 200;
  font-size: 2rem;
`;

const titleStyle = css`
  color: white;
  font-weight: 400;
  font-size: 4rem;
  letter-spacing: 1px;
  z-index: 10;
`;

const titleColor = css`
  color: #007c90;
  font-size: inherit;
  display: inline;
`;

const gemStyle = css`
  font-size: 12rem;
  color: #007c90;
`;

const Lab = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div css={headerStyle}>
        <div css={titleContainerStyle}>
          <h1 css={titleStyle}>
            Hi, I'm <span css={titleColor}>Kristen.</span>
          </h1>
          <span>Aspiring full-stack developer,</span>
          <span>motivated self-initiated learner,</span>
          <span>and reformed healthcare worker.</span>
          <Link href="#about-section" passHref>
            <Button
              variant="outlined"
              sx={{ marginTop: 10, color: "#007c90", borderColor: "#007c90" }}
            >
              Look around &rarr;
            </Button>
          </Link>
        </div>
        <Particles
          id="tsparticles"
          height="100vh"
          min-height="500px"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            background: {
              color: {
                value: "#1b293e",
              },
            },
            fpsLimit: 120,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "connect",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                connect: {
                  distance: 75,
                  radius: 250,
                  lineLinked: { opacity: 0.3 },
                },
              },
            },
            particles: {
              color: {
                value: ["#ffffff", "#007c90"],
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 0.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 750,
                },
                value: 250,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 1 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div css={containerStyle}>
        <div id="about-section" css={contentContainer}>
          <About />
        </div>
      </div>
      <div css={containerStyleProject}>
        <div css={contentContainerProjects}>
          <Projects id="projects-section" />
        </div>
      </div>
      <div css={containerStyle}>
        <FaRegGem css={gemStyle} />
      </div>
      <FooterContact />
    </>
  );
};

export default Lab;
