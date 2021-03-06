import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarTag>
      <nav className="navbar">
        <h1 className="navbar__title">The Shoppies</h1>
      </nav>
    </NavbarTag>
  );
};

export default Navbar;

const NavbarTag = styled.nav`
  .navbar {
    z-index: 99;
    display: flex;
    align-items: center;
    min-height: 7.5vh;
    width: 100%;
    position: fixed;
    &__title {
      margin: 1em;
      font-size: 1.25rem;
      color: #004c3f;
      font-weight: 700;
    }
  }
  @media (max-width: 470px) {
    .navbar {
      &__title {
        font-size: 1rem;
      }
    }
  }
`;
