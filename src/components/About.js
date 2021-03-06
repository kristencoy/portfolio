import { css } from "@emotion/react";
import Link from "next/link";
import Button from "./Button";

const aboutCard = css`
  max-width: 90%;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1.25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 600px) {
    padding: 0;
    max-width: 100%;
  }
`;

const aboutPara = css`
  font-size: 1.2rem;
  width: 100%;
  font-weight: 300;
  color: black;
  line-height: 1.5;
  margin-bottom: 1.5rem;
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

export default function About() {
  return (
    <div css={aboutCard}>
      <h1 css={aboutTitle}>About</h1>
      <p css={aboutPara}>
        I&apos;m a full stack web developer who has really come to enjoy that
        dopamine hit when my code looks, feels, and runs the way I want it to.
        My background is in occupational therapy with a focus in helping people
        achieve their daily functional goals through adaptations to the task,
        environment, or clients themselves. For me, the nexus between OT and
        programming is the creation of things that are intuitive, adaptable,
        inclusive, and accessible.
      </p>
      <p css={aboutPara}>
        When I&apos;m not hunched over my keyboard with 27 tabs open, I enjoy
        reading, kayaking the marshes around Beaufort, SC, chasing my 3 year old
        son, sitting on the front porch, brewing mostly-edible homemade
        kombucha, and listening to my husband talk about D&D.
      </p>
      <Link href="#projects" passHref>
        <Button href="#projects">
          See what I&apos;ve been working on &rarr;
        </Button>
      </Link>
    </div>
  );
}
