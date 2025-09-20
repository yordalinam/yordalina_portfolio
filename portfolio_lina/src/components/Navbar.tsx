import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Heart from '../assets/svgs/Heart.tsx'
import styled from "styled-components";

const Header = styled.header`
font-family: sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  color: white;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
   background: linear-gradient(
    to right,
    rgba(27, 3, 41, 1),
    #8b2db7
  );
  `;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(FiMenu)`
  width: 2rem;
  height: 2rem;
`;

const CloseIcon = styled(FiX)`
  width: 2rem;
  height: 2rem;
`;

const NavLinksDesktop = styled.nav`
  display: none;
  align-items: center;
  gap: 1.75rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: white;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #e5e7eb;
  }
`;

const MenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  height: 100vh;
  width: 100vw;
  background-color: #801b9c;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 1rem;
  z-index: 30;
  overflow-y: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;


const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1.8rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const NavLinkMobile = styled.a`
  color: white;
  font-size: 1.125rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #d1d5db;
  }
`;

const IconContainer = styled.div`
position: absolute;
width: 8rem;
height: 8rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const PortfolioText = styled.span`
  display: inline-block;
  white-space: nowrap;
  color: white;
  font-weight: 500;
  margin-left: 0.5rem; 
  font-size: 18px;
`;

const navLinks = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "Skills", link: "#skills" },
  { id: 4, name: "My Projects", link: "#projects" },
  { id: 5, name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Header data-aos='fade-up' data-aos-delay='300'>
      <Container>

        <a href="#home" style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <IconContainer>
            <Heart />
            <PortfolioText>My Portfolio</PortfolioText>
          </IconContainer>
        </a>
        <MenuButton onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </MenuButton>
        <NavLinksDesktop>
          {navLinks.map(({ id, name, link }) => (
            <NavLink href={link} key={id}>
              {name}
            </NavLink>
          ))}
        </NavLinksDesktop>
      </Container>

      <MenuOverlay isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </CloseButton>

        {navLinks.map(({ id, name, link }) => (
          <NavLinkMobile
            key={id}
            href={link}
            onClick={() => setIsOpen(false)}
          >
            {name}
          </NavLinkMobile>
        ))}
      </MenuOverlay>
    </Header>
  );
}