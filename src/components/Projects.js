import { css } from "@emotion/react";
import ProjectCard from "./ProjectCard";

const projectContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
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

const projectsCard = css`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px; */
  max-height: 75%;
  max-width: 90%;
  margin-left: 1rem;
  margin-top: 2rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function Projects() {
  return (
    <div css={projectsCard}>
      <h1 css={projectsTitle}>Recent Projects</h1>
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
  );
}

export default Projects;
