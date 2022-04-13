import { css } from "@emotion/react";

const navBar = css`
  position: sticky;
  width: 100%;
  height: 20px;
  background-color: blue;
  top: 0;
`;

function Navbar() {
  return (
    <nav css={navBar}>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Navbar;
