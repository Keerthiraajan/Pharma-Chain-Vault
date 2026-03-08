import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Group, Image, Anchor, Button, Container } from '@mantine/core';
import logo from '../assets/logo.jpg';
import '@mantine/core/styles.css';
import '../CSS/navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('platform');
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const NAVBAR_HEIGHT = 64;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <>
      <Box component="nav" className="pcv-navbar">
        <Container fluid className="pcv-navbar-inner">
          {/* Logo */}
          <Group>
            <Image
              src={logo}
              alt="Pharma-Chain Vault"
              h={42}
              w="auto"
            />
          </Group>

          {/* Links + Actions */}
          <Group gap={36}>
            <Group gap={28} visibleFrom="sm">
              <Anchor
                component="button"
                className={`pcv-nav-link ${
                  active === 'platform' ? 'pcv-active' : ''
                }`}
                onClick={() => {
                  setActive('platform');
                  scrollToSection('platform');
                }}
                underline="never"
              >
                Platform
              </Anchor>

              <Anchor
                component="button"
                className={`pcv-nav-link ${
                  active === 'how-it-works' ? 'pcv-active' : ''
                }`}
                onClick={() => {
                  setActive('how-it-works');
                  scrollToSection('how-it-works');
                }}
                underline="never"
              >
                How It Works
              </Anchor>

              <Anchor
                component="button"
                className={`pcv-nav-link ${
                  active === 'about-us' ? 'pcv-active' : ''
                }`}
                onClick={() => {
                  setActive('about-us');
                  scrollToSection('about-us');
                }}
                underline="never"
              >
                About Us
              </Anchor>

              <Anchor
                component="button"
                className="pcv-nav-link"
                onClick={() => setActive('resources')}
                underline="never"
              >
                Resources
              </Anchor>
            </Group>

            <Group gap="sm">
              <button
              className="pcv-nav-btn pcv-nav-btn-primary"
              onClick={() => navigate('/login')}
            >
              Login
            </button>

            <button
              className="pcv-nav-btn pcv-nav-btn-outline"
            >
              Contact Us
            </button>
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Spacer */}
      <div className="pcv-navbar-spacer" />
    </>
  );
};

export default Navbar;
