import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import TopBar from './TopBar';
import Footer from './Footer';

const FormulasLayout = () => {
  return (
    <>
      <TopBar />
      <Container size="xl" py="lg">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default FormulasLayout;
