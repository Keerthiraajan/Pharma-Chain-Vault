import Footer from "../Components/Footer";
import { Container, Title, Text, Button } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS/notfound.css";
import TopBar from "./TopBar";

const ERROR_MAP = {
  401: {
    code: "401",
    title: "Unauthorized..",
    message: "Please login to aceess this resource."
  },
  403: {
    code: "403",
    title: "Access denied",
    message: "You do not have permission to access this page."
  },
  404: {
    code: "404",
    title: "Page not found",
    message:
      "The page you are trying to access does not exist or may have been moved."
  }
};

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const errorCode = location.state?.code || 404;
  const error = ERROR_MAP[errorCode];

  return (
    <>
      <TopBar />

      <section className="notfound">
        <Container size="sm" className="notfound-content">
          <Text className="notfound-code">{error.code}</Text>

          <Title order={2}>{error.title}</Title>

          <Text c="dimmed" mt="sm">
            {error.message}
          </Text>
          

          <Button mt="lg" onClick={() => navigate("/")}>
            Go to Home
          </Button>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;
