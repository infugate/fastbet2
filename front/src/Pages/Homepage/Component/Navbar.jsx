

import React, { useEffect, useState ,useMemo} from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import fastbetLogo from '../../../assets/brand/fastbetLogo.png';
const NavbarContainer = styled.nav`
  background-color: #0a3b66;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  width: 90%;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? '0' : '-100%')}; /* Slide-in effect */
    width: 60%;
    height: 100vh;
    background: #0a3b66;
    flex-direction: column;
    text-align: center;
    padding: 80px 20px;
    transition: right 0.4s ease-in-out; 
    // box-shadow: ${({ open }) => (open ? '-5px 0px 15px rgba(0,0,0,0.3)' : 'none')};
  }
`;

const NavLink = styled.li`
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 20px;
  &:hover {
    color: lightgray;
  }
  &.active {
    color: limegreen;
  }
`;

const SignUp = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-right: 20px;
  &:hover {
    color: lightgray;
  }


  @media (max-width: 768px) {
    font-size:0.8rem;
      margin-right: 10px;
  }
`;

const MenuIcon = styled.div`
  color: white;
  // float:right;
  margin-top:0.4rem;
  font-size: 24px;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    z-index: 1100;

  }
`;
const MenuSignUp = styled.div`
display:flex;
gap:1rem;
align-items:center;


`

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('#home-page');

  const sections = useMemo(() => ['#home', '#about','#how-to-play', '#contact-us'], []);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionElement = document.querySelector(section);
        if (sectionElement) {
          const offsetTop = sectionElement.offsetTop - 80;
          const offsetBottom = offsetTop + sectionElement.offsetHeight;
          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
            setActiveNav(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <NavbarContainer>
      <Logo src={fastbetLogo} alt="98Fastbet Logo" />
      <NavLinks open={menuOpen}>

        {sections.map((section, index) => (
          <NavLink
            key={index}
            className={activeNav === section ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {section === '#home' ? (
              <Link
                to="/"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                HOME
              </Link>
            ) : (
              section.replace('#', '').replace(/-/g, ' ').toUpperCase()
            )}
          </NavLink>
        ))}


      </NavLinks>
      <MenuSignUp>
        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
        <Link to="/signup">
          <SignUp>
            <FaUserAlt /> SignUp
          </SignUp>
        </Link>
        <Link to="/login">
          <SignUp>
            <FaUserAlt /> Login
          </SignUp>
        </Link>
      </MenuSignUp>

    </NavbarContainer>
  );
};