import { css } from "@emotion/react";
import Link from "next/link";

const footerContainer = css`
  clip-path: polygon(50% 35%, 100% 0, 100% 100%, 0 100%, 0 0);
  background-color: #1b293e;
  height: 60vh;
  margin-top: 10rem;
`;

const mailToStyles = css`
  color: white;
  position: relative;
  display: block;
  top: 4rem;
  left: 6rem;
`;

const MailTo = ({ mailto, label }) => {
  return (
    <Link
      href={mailto}
      passHref={true}
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault;
      }}
    >
      <a css={mailToStyles}>{label}</a>
    </Link>
  );
};

function FooterContact() {
  return (
    <div css={footerContainer}>
      <MailTo label="shoot me an email" mailto="mailto:kristenwcoy@gmail.com" />
    </div>
  );
}

export default FooterContact;
