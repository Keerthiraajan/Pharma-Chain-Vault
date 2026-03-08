import {
  Paper,
  Stack,
  Box,
  Group,
  Badge,
  Text,
  Button,
  Divider,
} from '@mantine/core';
import {
  IconCategory,
  IconCalendarMonth,
  IconUser,
  IconChevronRight,
} from '@tabler/icons-react';

const FormulaCard = ({
  id,
  title,
  category,
  date,
  status,
  statusColor,
  owner = 'You',
  onView,
}) => {
  return (
    <Paper
      withBorder
      radius="md"
      p="md"
      shadow="xs"
      style={{
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        cursor: 'pointer',
      }}
      sx={(theme) => ({
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: theme.shadows.sm,
        },
      })}
    >
      <Stack justify="space-between" h="100%">
        {/* Top Content */}
        <Box>
          <Group justify="space-between" mb={6} wrap="nowrap" align="flex-start">
            <Badge color={statusColor} variant="dot" size="sm">
              {status}
            </Badge>
            <Text size="xs" c="dimmed" fw={500}>
              ID: #{id}
            </Text>
          </Group>

          <Text fw={600} fz="md" mb="sm" lineClamp={2}>
            {title}
          </Text>

          <Stack gap={4}>
            <Group gap={6}>
              <IconCategory size={13} color="gray" />
              <Text size="xs" c="dimmed">
                {category}
              </Text>
            </Group>

            <Group gap={6}>
              <IconCalendarMonth size={13} color="gray" />
              <Text size="xs" c="dimmed">
                Uploaded: {date}
              </Text>
            </Group>

            <Group gap={6}>
              <IconUser size={13} color="gray" />
              <Text size="xs" c="dimmed">
                Owner: {owner}
              </Text>
            </Group>
          </Stack>
        </Box>

        {/* Action */}
        <Box mt="md">
          <Divider mb="sm" variant="dashed" />
          <Button
            variant="light"
            fullWidth
            size="xs"
            rightSection={<IconChevronRight size={13} />}
            radius="md"
            onClick={onView}
          >
            View Details
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};

export default FormulaCard;
