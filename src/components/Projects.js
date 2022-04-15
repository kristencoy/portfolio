import { css } from "@emotion/react";
import mealPlannerPicture from "../../public/meal-planner-project/meal_planner_frame.png";
import cogAccPicture from "../../public/cog-accessibility-project/cog_acc_spaced.png";
import picnickyHomePicture from "../../public/picnicky_home.png";
import portfolioHomePicture from "../../public/portfolio_home.png";
import { FaGithub } from "react-icons/fa";

// @todo:
// decide on project style - how much to write, etc.
// tweak projects as much as possible
// make browserframe screenshots
// go from there

const projectContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const projectsTitle = css`
  letter-spacing: 1.25;
  z-index: 999;
  width: 100%;
  margin-bottom: 3rem;
  letter-spacing: 2px;
  &:before {
    border-bottom: 0.2rem solid #007c90;
    content: "";
    top: 4rem;
    width: 18rem;
    position: relative;
    display: block;
    z-index: 0;
  }
`;

const projectCard = css`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 28rem;
  width: 95%;
  min-width: 900px;
  margin-top: 2rem;
  margin: 1.5rem;
  padding: 0.7rem;
  background-color: white;
  display: flex;
  overflow: auto;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const projectsSection = css`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px; */
  /* max-height: 75%;
  max-width: 90%; */
  margin-left: 1rem;
  margin-top: 2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const projectImgStyles = css`
  height: 100%;
  max-width: 100%;
`;

const projectText = css`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  span {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    font-size: 0.8rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1rem;
    width: 100%;
    font-weight: 300;
    color: black;
    line-height: 1.5;
  }
  a {
    font-size: 2rem;
    transition: all 0.2s;
    right: 0;
    &:hover {
      color: #007c90;
    }
  }
`;

const titleContainer = css`
  width: 75%;
`;

function Projects() {
  return (
    <div css={projectsSection}>
      <div css={titleContainer}>
        <h1 css={projectsTitle}>Recent Projects</h1>
      </div>
      <div css={projectContainer}>
        <div css={projectCard}>
          <img css={projectImgStyles} src={mealPlannerPicture.src} />
          <div css={projectText}>
            <h1>Weekly Meal Planner</h1>
            <p>
              It's a meal planner that picks recipes for you when your brain
              doesn't want to come up with things to make for the week
            </p>
            <span>Next.js | React | MongoDB</span>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
        <div css={projectCard}>
          <div css={projectText}>
            <h1>Cognitive Accessibility</h1>
            <p>
              A web application that allows the user to personalize their
              experience with the ultimate goal of improving content
              accessibility for those with visual, attention, or memory deficits
            </p>
            <span>React | styled-components | Node.js</span>
            <a href="">
              <FaGithub />
            </a>
          </div>
          <img css={projectImgStyles} src={cogAccPicture.src} />
        </div>
        <div css={projectCard}>
          <img css={projectImgStyles} src={picnickyHomePicture.src} />
          <div css={projectText}>
            <h1>Picnicky</h1>
            <p>
              A fullstack CRUD application made as part of Colt Steele's "Web
              Developer Bootcamp" course
            </p>
            <span>Vanilla JS | Express | Mongoose | Bootstrap 5</span>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </div>
        <div css={projectCard}>
          <div css={projectText}>
            <h1>Portfolio</h1>
            <p>
              Yep, the one you're looking at. I actually put a lot of work into
              this thing.
            </p>
            <span>Next.js | React | emotion</span>
            <a href="">
              <FaGithub />
            </a>
          </div>
          <img css={projectImgStyles} src={portfolioHomePicture.src} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
