import {
  Container,
  Group,
  Text,
  Stack,
  Divider
} from '@mantine/core';


import {
  IconShieldCheck,
  IconLock,
  IconFileDescription,
  IconPhone,
  IconMail
} from '@tabler/icons-react';

import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container size="lg">
        <Stack spacing={28}>
          
          {/* Top row */}
          <Group justify="space-between" align="flex-start">
            
            {/* Brand & Contact */}
            <Stack spacing={8} className="footer-brand">
              <Text className="footer-title">Pharma-Chain Vault</Text>

              <Text className="footer-description">
                A secure platform for regulated pharmaceutical collaboration,
                intellectual property protection, and verifiable access control.
              </Text>

              {/* Contact info */}
              <Stack spacing={6} className="footer-contact">
                <Group gap={8}>
                  <IconMail size={14} />
                  <Text size="sm">contact@pharmachainvault.com</Text>
                </Group>

                <Group gap={8}>
                  <IconPhone size={14} />
                  <Text size="sm">+91 98765 43210</Text>
                </Group>
              </Stack>
            </Stack>

            {/* Key principles */}
            <Stack spacing={10} className="footer-points">
              <Group gap={8}>
                <IconShieldCheck size={16} />
                <Text size="sm">Immutable audit trails</Text>
              </Group>

              <Group gap={8}>
                <IconLock size={16} />
                <Text size="sm">Controlled data access</Text>
              </Group>

              <Group gap={8}>
                <IconFileDescription size={16} />
                <Text size="sm">Regulatory-aligned workflows</Text>
              </Group>
            </Stack>

          </Group>

          <Divider />

          
          <Group align = "center"  className="footer-bottom">
            <Text size="sm">
              © {new Date().getFullYear()} Pharma-Chain Vault. All rights reserved.
            </Text>

           
          </Group>

        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
