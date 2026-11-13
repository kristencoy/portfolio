import React from "react";
import { css } from "@emotion/react";

const style = css`
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 20rem;
  width: 15rem;
  margin-left: 1rem;
  margin-top: 2rem;
  padding: 1rem;
  background-color: white;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function ProjectCard(props) {
  return <div css={style}>{props.children}</div>;
}
