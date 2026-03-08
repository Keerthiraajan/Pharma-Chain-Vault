import {
  Container,
  Title,
  Text,
  Group,
  Select,
  Paper,
  TextInput,
  Button,
  Box,
  Tooltip,
  SimpleGrid,
  ActionIcon,
} from '@mantine/core';
import {
  IconCategory,
  IconCircleCheck,
  IconSearch,
  IconPlus,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';
import FormulaCard from '../Components/FormulaCard';

const MyFormulas = () => {
  const navigate = useNavigate();

  const formulas = [
    {
      id: 'FC-1023',
      title: 'Herbal Anti-Inflammatory Compound',
      category: 'Ayurveda',
      date: '12 Jan 2026',
      status: 'VERIFIED',
      statusColor: 'green',
    },
    {
      id: 'FC-1041',
      title: 'Synthetic Analgesic Formula',
      category: 'Chemical',
      date: '05 Jan 2026',
      status: 'PENDING',
      statusColor: 'yellow',
    },
    {
      id: 'FC-1098',
      title: 'Neural Regeneration Peptide',
      category: 'Pharmacology',
      date: '28 Dec 2025',
      status: 'VERIFIED',
      statusColor: 'green',
    },
  ];

  return (
    <Box bg="gray.0" style={{ minHeight: '100vh' }}>
      <TopBar />

      {/* Header */}
      <Container size="lg" mt="lg">
        <Group justify="space-between" align="flex-end">
          <Box>
            <h3 style={{margin:'0', fontSize: '1.5rem', fontWeight: 700}}>
              My Formulas
            </h3>
            <Text c="dimmed" fz="sm" mt={4}>
              Securely stored research formulas with verified blockchain ownership
            </Text>
          </Box>

          <Button
            leftSection={<IconPlus size={16} />}
            radius="md"
            size="sm"
            className="hidden-mobile"
            onClick={() => navigate('/formulas/upload')}
          >
            New Formula
          </Button>
        </Group>
      </Container>

      {/* Filters */}
      <Container size="lg" mt="lg">
        <Paper withBorder radius="md" p="sm">
          <Group gap="sm">
            <TextInput
              placeholder="Search by name or chemical ID..."
              leftSection={<IconSearch size={14} />}
              radius="md"
              size="sm"
              maw={360}
              flex={1}
            />

            <Select
              placeholder="Category"
              leftSection={<IconCategory size={14} />}
              data={['Pharmacology', 'Ayurveda', 'Chemical', 'Clinical Research']}
              clearable
              radius="md"
              size="sm"
              w={160}
            />

            <Select
              placeholder="Status"
              leftSection={<IconCircleCheck size={14} />}
              data={['Draft', 'Pending', 'Verified', 'Rejected']}
              clearable
              radius="md"
              size="sm"
              w={140}
            />
          </Group>
        </Paper>
      </Container>

      {/* Cards */}
      <Container size="lg" mt="lg" pb={64}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
          {formulas.map((formula) => (
            <FormulaCard
              key={formula.id}
              id={formula.id}
              title={formula.title}
              category={formula.category}
              date={formula.date}
              status={formula.status}
              statusColor={formula.statusColor}
              onView={() => navigate(`/formulas/${formula.id}`)}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Footer />

      {/* Floating Action Button */}
      <Box style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 1000 }}>
        <Tooltip label="Upload new formula" position="left" withArrow>
          <ActionIcon
            size={52}
            radius="xl"
            variant="filled"
            color="blue"
          >
            <IconPlus size={24} />
          </ActionIcon>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default MyFormulas;
