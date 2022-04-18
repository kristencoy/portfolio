/** @jsxImportSource @emotion/react */
import Particles from "react-tsparticles";
import { css, jsx, keyframes } from "@emotion/react";
import Link from "next/link";
// import Navbar from "../src/components/Navbar";
import About from "./About";
import Projects from "./Projects";
import FooterContact from "./FooterContact";
import { FaRegGem } from "react-icons/fa";
import Button from "./Button";

const headerStyle = css`
  height: 100vh;
  width: 100%;
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
  @media only screen and (max-width: 600px) {
    padding: 0 0 3rem;
  }
`;

const contentContainer = css`
  left: 10%;
  width: 75%;
  padding-top: 2rem;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const contentContainerProjects = css`
  /* left: 10%; */
  width: 100%;
  padding-top: 6rem;
  margin-bottom: 6rem;
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
  @media only screen and (max-width: 800px) {
    font-size: 1.5rem;
    align-content: center;
    justify-content: center;
  }
`;

const titleAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const textAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
    
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
    
  }
`;

const titleStyle = css`
  color: white;
  font-weight: 400;
  font-size: 4rem;
  letter-spacing: 1px;
  z-index: 10;
  animation: ${titleAnimation} 1s ease-in-out;
  animation-fill-mode: forwards;
`;

const spanStyle1 = css`
  animation: ${textAnimation} 1.2s ease;
  animation-delay: 0;
  animation-fill-mode: both;
`;
const spanStyle2 = css`
  animation: ${textAnimation} 1.2s ease;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;
const spanStyle3 = css`
  animation: ${textAnimation} 1.2s ease;
  animation-delay: 0.4s;
  animation-fill-mode: both;
`;

const titleColor = css`
  color: #007c90;
  font-size: inherit;
  display: inline;
`;

const linkBtn = css`
  width: 90%;
  border: 2px solid #007d90;
  background-color: transparent;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  color: #007d90;
  border-radius: 3px;
  font-size: 1rem;
  padding: 10px;
  margin: 5rem 0 3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #007d902a;
  }
  &:active {
    transform: translateY(3px);
  }
`;

const gemStyle = css`
  font-size: 12rem;
  color: #007c90;
`;

export default function MainContent() {
  const particlesInit = async (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div css={headerStyle}>
        <div css={titleContainerStyle}>
          <h1 css={titleStyle}>
            {"Hi, I'm "}
            <span css={titleColor}>Kristen.</span>
          </h1>
          <span css={spanStyle1}>Aspiring full stack developer,</span>
          <span css={spanStyle2}>motivated self-initiated learner,</span>
          <span css={spanStyle3}>and functional healthcare clinician.</span>
          <Link href="#about" passHref>
            <Button href="#about">Look around &rarr;</Button>
          </Link>
        </div>
        <Particles
          id="tsparticles"
          height="100vh"
          width="100%"
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
        <div id="about" css={contentContainer}>
          <About />
        </div>
      </div>
      <div css={containerStyleProject}>
        <div css={contentContainerProjects}>
          <Projects />
        </div>
      </div>
      <div css={containerStyle}>
        <FaRegGem css={gemStyle} />
      </div>
      <FooterContact />
    </>
  );
}
