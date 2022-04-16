import Link from "next/link";
import { css } from "@emotion/react";
import mealPlannerPicture from "../../public/meal-planner-project/meal_planner_frame.png";
import cogAccPicture from "../../public/cog-accessibility-project/cog_acc_spaced.png";
import picnickyHomePicture from "../../public/picnicky_home.png";
import portfolioHomePicture from "../../public/portfolio_home.png";
import { FaGithub } from "react-icons/fa";

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
  display: flex;
  flex-direction: row;
  min-width: 900px;
  margin-top: 2rem;
  margin: 1.5rem;
  padding: 0.7rem;
  background-color: white;
  display: flex;
  overflow: auto;
  transition: all 0.2s;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    min-width: 400px;
    height: auto;
  }
  /* &:hover {
    transform: translateY(-5px);
  } */
`;

const projectsSection = css`
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
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
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

export default function Projects() {
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
              A meal planner application that stores recipe information via
              MongoDB, and provides a 5 day recipe-based meal plan to make
              weekly planning/shopping less time intensive. Allows the user to
              create and upload their own recipes to the app.
            </p>
            <span>Next.js | React | MongoDB | Node.js</span>
            <Link
              href="https://github.com/kristencoy/meal-planner"
              passHref={true}
            >
              <a>
                <FaGithub />
              </a>
            </Link>
          </div>
        </div>
        <div css={projectCard}>
          <div css={projectText}>
            <h1>Cognitive Accessibility</h1>
            <p>
              An application that demonstrates a set of utilities to allow the
              user to personalize the way they view information. Created with
              the ultimate goal of improving content accessibility for those
              with visual, attention, or memory deficits. Features include a
              tool for toggling between light and dark themes, font size
              controls, a toggle to space content for improved readability, and
              a toggle to filter extraneous content for improved attention to
              information.
            </p>
            <span>React | styled-components | Node.js</span>
            <Link
              href="https://github.com/kristencoy/cognitive-accessibility"
              passHref={true}
            >
              <a>
                <FaGithub />
              </a>
            </Link>
          </div>
          <img css={projectImgStyles} src={cogAccPicture.src} />
        </div>
        <div css={projectCard}>
          <img css={projectImgStyles} src={picnickyHomePicture.src} />
          <div css={projectText}>
            <h1>Picnicky</h1>
            <p>
              A fullstack CRUD application made using boilerplate from Colt
              Steele&apos;s &quot;Web Developer Bootcamp&quot; Udemy course.
              Provides a platform for users to create and review picnic
              locations.
            </p>
            <span>Node.js | Express | Mongoose | Bootstrap 5</span>
            <Link href="https://github.com/kristencoy/picnic" passHref={true}>
              <a>
                <FaGithub />
              </a>
            </Link>
          </div>
        </div>
        <div css={projectCard}>
          <div css={projectText}>
            <h1>Personal Website</h1>
            <p>
              Yep, the one you&apos;re looking at. I designed and built this
              website using Next.js, React, emotion, and the tsparticles
              library. I had a lot of fun building it!
            </p>
            <span>Next.js | React | emotion</span>
            <Link
              href="https://github.com/kristencoy/portfolio"
              passHref={true}
            >
              <a>
                <FaGithub />
              </a>
            </Link>
          </div>
          <img css={projectImgStyles} src={portfolioHomePicture.src} />
        </div>
      </div>
    </div>
  );
}
