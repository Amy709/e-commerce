import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <Link to="/">
        <img className="logo" src="./images/e-commerce-logo.png" alt="logo" />
      </Link>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
