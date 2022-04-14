import { css } from "@emotion/react";
import Button from "@mui/material/button";
import Link from "next/link";

const aboutCard = css`
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

const aboutPara = css`
  font-size: 1.2rem;
  width: 100%;
  font-weight: 300;
  color: black;
  line-height: 1.5;
  margin-bottom: 4rem;
`;

const aboutTitle = css`
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
    z-index: -1;
  }
`;

function About() {
  return (
    <div css={aboutCard}>
      <h1 css={aboutTitle}>About</h1>
      <p css={aboutPara}>
        I'm an occupational therapist with a background in helping people
        achieve their daily goals. Now I'm doing programming instead, because
        healthcare is terrible.
      </p>
      <Link href="#projects-section" passHref>
        <Button
          variant="outlined"
          sx={{
            marginTop: 10,
            color: "#007c90",
            borderColor: "#007c90",
            width: "fit-content",
          }}
        >
          See what I've been working on &rarr;
        </Button>
      </Link>
    </div>
  );
}

export default About;
