import {SimpleGrid,Container,Stack,Title,Text,Paper,Group,ThemeIcon,Button,Divider,} from '@mantine/core';
import {IconFlask,IconCircleCheck,IconLicense,IconCurrencyRupee,IconAlertTriangle,IconClock,IconFileText,IconShieldCheck} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryCard from '../Components/SummaryCard';
import Topbar from '../Components/TopBar';
import VerificationModel from '../Components/VerificationModel';

const ReasercherDashboard = () => {
  const navigate = useNavigate();
  const isVerified = false;
  const pendingReviews = 1;
  const activeLicenses = 0;
  const actions = [];

  if (!isVerified) {
    actions.push({
      id: 'verify',
      title: 'Account verification required',
      message: 'Complete verification to unlock licensing and payouts',
      color: 'red',
      bg: 'rgba(255, 0, 0, 0.05)',
      icon: <IconAlertTriangle size={20} />,
      action: (
        <Button size="xs" color="red" onClick={() => navigate('/verify')}>
          Verify now
        </Button>
      ),
    });
  }

  if (pendingReviews > 0) {
    actions.push({
      id: 'cdsco',
      title: 'Regulatory review pending',
      message: `${pendingReviews} formulas awaiting CDSCO approval`,
      color: 'orange',
      bg: 'rgba(255, 165, 0, 0.06)',
      icon: <IconClock size={20} />,
    });
  }

  if (activeLicenses === 0) {
    actions.push({
      id: 'license',
      title: 'No active licenses',
      message: 'Verify formulas to start receiving license requests',
      color: 'yellow',
      bg: 'rgba(255, 193, 7, 0.08)',
      icon: <IconLicense size={20} />,
    });
  }

  // ---- Recent Activity (STATIC DATA)
  const recentActivities = [
    {
      id: 1,
      icon: <IconFlask size={18} />,
      color: 'blue',
      text: 'Formula ABC-21 submitted for registration',
      time: '2 hours ago',
    },
    {
      id: 2,
      icon: <IconShieldCheck size={18} />,
      color: 'green',
      text: 'Formula QRT-11 verified successfully',
      time: 'Yesterday',
    },
    {
      id: 3,
      icon: <IconFileText size={18} />,
      color: 'orange',
      text: 'Formula XYZ-09 sent for CDSCO review',
      time: '2 days ago',
    },
    {
      id: 4,
      icon: <IconLicense size={18} />,
      color: 'violet',
      text: 'License request received from ABC Pharma',
      time: '3 days ago',
    },
    {
      id: 5,
      icon: <IconCurrencyRupee size={18} />,
      color: 'teal',
      text: '₹25,000 credited from licensed formula ABC-21',
      time: '5 days ago',
    },
  ];

  // ---- Verification modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('verificationDismissed');
    if (!dismissed) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('verificationDismissed', 'true');
    setShowModal(false);
  };

  // ---- Summary cards
  const summaryData = [
    { title: 'Total Formulas', value: 12, icon: <IconFlask size={18} />, color: 'blue' },
    { title: 'Verified Formulas', value: 7, icon: <IconCircleCheck size={18} />, color: 'green' },
    { title: 'Active Licenses', value: 4, icon: <IconLicense size={18} />, color: 'violet' },
    {
      title: 'Total Earnings',
      value: 125000,
      icon: <IconCurrencyRupee size={18} />,
      color: 'teal',
      prefix: '₹',
    },
    { title: 'Pending Reviews', value: 3, icon: <IconClock size={18} />, color: 'orange' },
  ];

  return (
    <>
      <Topbar />
      <VerificationModel opened={showModal} onClose={handleClose} />

      <Container size="xl" py="lg">
        <Stack spacing="lg">
          {/* Header */}
          <Stack spacing={4}>
            <Title order={3}>Researcher Dashboard</Title>
            <Text size="sm" c="dimmed">
              Overview of your formulas, licenses, and earnings
            </Text>
          </Stack>

          {/* Summary Cards */}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing="md">
            {summaryData.map((item, index) => (
              <SummaryCard key={index} {...item} />
            ))}
          </SimpleGrid>

          {/* Action Required */}
          <Paper withBorder radius="md" p="md">
            <Stack spacing="sm">
              <Text fw={600}>Action Required</Text>

              {actions.length === 0 ? (
                <Group spacing="xs">
                  <ThemeIcon color="green" variant="light">
                    <IconCircleCheck size={18} />
                  </ThemeIcon>
                  <Text size="sm" c="dimmed">
                    No immediate actions required
                  </Text>
                </Group>
              ) : (
                actions.map((action) => (
                  <Paper
                    key={action.id}
                    radius="sm"
                    p="sm"
                    style={{
                      backgroundColor: action.bg,
                      borderLeft: `4px solid var(--mantine-color-${action.color}-6)`,
                    }}
                  >
                    <Group justify="space-between" align="flex-start">
                      <Group spacing="sm">
                        <ThemeIcon color={action.color} variant="light">
                          {action.icon}
                        </ThemeIcon>
                        <Stack spacing={2}>
                          <Text size="sm" fw={500}>
                            {action.title}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {action.message}
                          </Text>
                        </Stack>
                      </Group>
                      {action.action}
                    </Group>
                  </Paper>
                ))
              )}
            </Stack>
          </Paper>

          
          <Paper withBorder radius="md" p="md">
            <Stack spacing="sm">
              <Text fw={600}>Recent Activity</Text>

              {recentActivities.length === 0 ? (
                <Text size="sm" c="dimmed">
                  No recent activity yet
                </Text>
              ) : (
                recentActivities.map((activity, index) => (
                  <Stack key={activity.id} spacing={6}>
                    <Group spacing="sm">
                      <ThemeIcon color={activity.color} variant="light">
                        {activity.icon}
                      </ThemeIcon>
                      <Stack spacing={2}>
                        <Text size="sm">{activity.text}</Text>
                        <Text size="xs" c="dimmed">
                          {activity.time}
                        </Text>
                      </Stack>
                    </Group>
                    {index !== recentActivities.length - 1 && <Divider />}
                  </Stack>
                ))
              )}
            </Stack>
          </Paper>
          {/* Quick Actions */}
<Paper withBorder radius="md" p="md">
  <Stack spacing="sm">
    <Text fw={600}>Quick Actions</Text>

    <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
      {/* Register Formula */}
      <Paper
        withBorder
        radius="sm"
        p="sm"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/formulas/new')}
      >
        <Stack align="center" spacing={6}>
          <ThemeIcon color="blue" variant="light" size="lg">
            <IconFlask size={20} />
          </ThemeIcon>
          <Text size="sm" fw={500}>
            Register Formula
          </Text>
          <Text size="xs" c="dimmed" ta="center">
            Submit a new pharmaceutical formula
          </Text>
        </Stack>
      </Paper>

      {/* View My Formulas */}
      <Paper
        withBorder
        radius="sm"
        p="sm"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/formulas')}
      >
        <Stack align="center" spacing={6}>
          <ThemeIcon color="green" variant="light" size="lg">
            <IconFileText size={20} />
          </ThemeIcon>
          <Text size="sm" fw={500}>
            My Formulas
          </Text>
          <Text size="xs" c="dimmed" ta="center">
            View and manage submitted formulas
          </Text>
        </Stack>
      </Paper>

      {/* License Requests */}
      <Paper
        withBorder
        radius="sm"
        p="sm"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/licenses')}
      >
        <Stack align="center" spacing={6}>
          <ThemeIcon color="violet" variant="light" size="lg">
            <IconLicense size={20} />
          </ThemeIcon>
          <Text size="sm" fw={500}>
            View Your Licenses
          </Text>
          <Text size="xs" c="dimmed" ta="center">
            Mannage license requests and agreements
          </Text>
        </Stack>
      </Paper>

      {/* Profile / Verification */}
      <Paper
        withBorder
        radius="sm"
        p="sm"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(isVerified ? '/profile' : '/verify')}
      >
        <Stack align="center" spacing={6}>
          <ThemeIcon
            color={isVerified ? 'green' : 'red'}
            variant="light"
            size="lg"
          >
            <IconShieldCheck size={20} />
          </ThemeIcon>
          <Text size="sm" fw={500}>
            {isVerified ? 'View Profile' : 'Complete Verification'}
          </Text>
          <Text size="xs" c="dimmed" ta="center">
            Manage account and compliance
          </Text>
        </Stack>
      </Paper>
    </SimpleGrid>
  </Stack>
</Paper>

        </Stack>
      </Container>
    </>
  );
};

export default ReasercherDashboard;
