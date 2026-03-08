import { Modal, Center, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

const VerificationModel = ({ opened, onClose }) => {
  const navigate = useNavigate();

  return (
    <Modal opened={opened} onClose={onClose} centered size="sm" withCloseButton={false}>
      <Center style={{ flexDirection: "column" }}>
        <ShieldAlert size={40} color="#f59f00" />

        <Text fw={500} mt="md">
          Verification Required
        </Text>

        <Text fw={300 } mt="xs" ta="center">
          You must be verified to perform operations on this platform
        </Text>

        <Group mt="lg">
          <Button variant="outline" onClick={onClose}>
            Maybe later
          </Button>

          <Button onClick={() => navigate("/verify")}>
            Verify now
          </Button>
        </Group>
      </Center>
    </Modal>
  );
};

export default VerificationModel;
