import {Box,Group,Image,Container,Menu,Avatar,Text,UnstyledButton,rem, } from '@mantine/core';
import {IconUser,IconLogout,IconChevronDown,IconUserCircle,IconSettings} from '@tabler/icons-react';
import logo from '../assets/logo.jpg';
import { useNavigate, useLocation } from 'react-router-dom';
import '../CSS/topbar.css';

const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include"
      });

      if (res.ok) {
        localStorage.removeItem("user");
        navigate("/login");
      }

    } catch (error) {
      console.error("Logout failed:", error);

    }
  };

  const navItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'My Formulas', link: '/formulas' },
    { label: 'License Requests', link: '/licenses' },
    { label: 'Analytics', link: '/profile' },
  ];

  return (
    <>
      <Box component="nav" className="navbar">
        <div  className="navbarInner">
          
          {/* LEFT: Logo */}
          <Group gap="sm" style={{ cursor: 'pointer', flex: 1 }} onClick={() => navigate('/')}>
            <Image src={logo} alt="Pharma-Chain Vault" h={40} w="auto" />
          </Group>

          {/* CENTER: Navigation */}
          <Group gap={4} visibleFrom="sm" className="navLinksContainer">
            {navItems.map((item) => (
              <UnstyledButton
                key={item.label}
                className={`navLink ${location.pathname === item.link ? 'active' : ''}`}
                onClick={() => navigate(item.link)}
              >
                {item.label}
              </UnstyledButton>
            ))}
          </Group>

          {/* RIGHT: User Profile */}
          <Group gap="md" style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Menu
              position="bottom-end"
              shadow="lg"
              width={220}
              withArrow
              transitionProps={{ transition: 'pop-top-right', duration: 150 }}
            > 
              <Menu.Target>
                <UnstyledButton className="userButton">
                  <Avatar radius="xl" color="blue" size={30} src={null}>
                    <IconUser size={16} />
                  </Avatar>
                  <Box visibleFrom="xs">
                    <Text size="sm" fw={500} style={{ lineHeight: 1 }}>{ user?.name}</Text>
                  </Box>
                  <IconChevronDown size={14} className="chevron" />
                </UnstyledButton>
              </Menu.Target>
                
              <Menu.Dropdown>
                <div className="menuHeader">
                  <Text size="xs" fw={700} c="dimmed" tt="uppercase" lts={1}>
                    Account
                  </Text>
                  <Text size="sm" fw={600}>{user?.full_name} </Text>
                  <Text size="xs" c="dimmed">{user?.email}</Text>
                </div>

                <Menu.Divider />

                <Menu.Item
                  leftSection={<IconUserCircle size={16} stroke={1.5} />}
                  onClick={() => navigate('/profile')}
                >
                  My Profile
                </Menu.Item>
                
                <Menu.Item
                  leftSection={<IconSettings size={16} stroke={1.5} />}
                >
                  Account Settings
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                  color="red"
                  leftSection={<IconLogout size={16} stroke={1.5} />}
                  onClick={() => { handleLogout() } }
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      </Box>
      <div className="navbarSpacer" />
    </>
  );
};

export default TopBar;