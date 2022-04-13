import Particles from "react-tsparticles";
import { css } from "@emotion/react";
import ProjectCard from "../src/components/ProjectCard";
import Link from "next/link";
import Button from "@mui/material/button";
import Navbar from "../src/components/Navbar";

const headerStyle = css`
  height: 100vh;
`;

const containerStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  background-color: white;
  align-items: center;
  width: 100%;
`;

const contentContainer = css`
  left: 10%;
  width: 80%;
  padding-top: 2rem;
`;

const projectContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
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
          <Link href="#projects-section" passHref>
            <Button variant="outlined" sx={{ marginTop: 20 }}>
              Look around &rarr;
            </Button>
          </Link>
        </div>
        <Particles
          id="tsparticles"
          height="100vh"
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
      <Navbar />
      <div id="projects-section" css={containerStyle}>
        <div css={contentContainer}>
          <h1>What I've Been Working On</h1>
        </div>
        {/* <Card sx={{ maxHeight: 400 }} variant="outlined">
          <CardContent>
            <Typography variant="h3" gutterBottom>
              Card component
            </Typography>
            <Typography variant="h5">Card stuff</Typography>
          </CardContent>
        </Card> */}
        <div css={projectContainer}>
          <ProjectCard>
            <h1>Project 1</h1>
            <p>another card</p>
            <a href="">&rarr;</a>
          </ProjectCard>
          <ProjectCard>
            <h1>Project 2</h1>
            <p>another card</p>
            <a href="">&rarr;</a>
          </ProjectCard>
          <ProjectCard>
            <h1>Project 3</h1>
            <p>another card</p>
            <a href="">&rarr;</a>
          </ProjectCard>
        </div>
      </div>
    </>
  );
};

export default Lab;
