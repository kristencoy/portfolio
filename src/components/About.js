import { css } from "@emotion/react";

const aboutPara = css`
  font-size: 1.5rem;
  width: 75%;
`;

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p css={aboutPara}>
        I'm an occupational therapist with a background in helping people
        achieve their daily goals. Now I'm doing programming instead, because
        healthcare is terrible.
      </p>
    </div>
  );
}

export default About;
