import { css } from "@emotion/react";

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

function Button(props) {
  return (
    <a css={linkBtn} href={props.href}>
      {props.children}
    </a>
  );
}

export default Button;
