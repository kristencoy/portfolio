import { css } from "@emotion/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const footerContainer = css`
  clip-path: polygon(50% 35%, 100% 0, 100% 100%, 0 100%, 0 0);
  background-color: #1b293e;
  /* height: 60vh; */
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 2.5rem 2.5rem 6rem 2.5rem;
`;

const contentCard = css`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  position: relative;
  padding-top: 6rem;
  margin-top: 2rem;
`;

const footerTitle = css`
  letter-spacing: 1.25;
  z-index: 999;
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
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

const linkStyles = css`
  color: white;
  font-size: 2rem;
  position: relative;
  display: block;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const linksContStyle = css`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-between;
`;

const footerStyle = css`
  bottom: 1rem;
  text-align: center;
  margin-top: 3rem;
`;

const footerText = css`
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  font-size: 0.8rem;
  color: white;
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
      <a css={linkStyles}>{label}</a>
    </Link>
  );
};

const GitHubLink = () => {
  return (
    <Link href="https://www.github.com/kristencoy" passHref={true}>
      <a css={linkStyles}>
        <FaGithub />
      </a>
    </Link>
  );
};

export default function FooterContact() {
  return (
    <div css={footerContainer}>
      <div css={contentCard}>
        <h1 css={footerTitle}>{"Let's connect"}</h1>
        <div css={linksContStyle}>
          <MailTo
            label={<HiOutlineMail />}
            mailto="mailto:kristen@kristencoy.com"
          />
          <GitHubLink />
        </div>
      </div>
      <div css={footerStyle}>
        <span css={footerText}>Designed & Built by Kristen Coy</span>
      </div>
    </div>
  );
}
