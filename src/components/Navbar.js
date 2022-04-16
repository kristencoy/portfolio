// currently under construction

// import { css } from "@emotion/react";

// const navBar = css`
//   position: fixed;
//   width: 100%;
//   height: 20px;
//   background-color: #007c90;
//   top: 0;
// `;

// function Navbar() {
//   return (
//     <nav css={navBar}>
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import React from "react";
import { PropTypes } from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to Elevate App Bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>{props.children}</Container>
    </>
  );
}
