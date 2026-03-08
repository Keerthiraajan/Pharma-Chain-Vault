import { Paper, Text, Group, ThemeIcon } from "@mantine/core";
import CountUp from "react-countup";

const SummaryCard = ({ title, value, icon, color, subText, prefix }) => {
  const isNumber = typeof value === "number";

  return (
    <Paper withBorder radius="md" p="md">
      <Group justify="space-between" align="flex-start">
        <div>
          <Text size="sm" c="dimmed" >
            {title}
          </Text>

          <Text size="xl" fw={600}>
            {prefix}
            {isNumber ? (
              <CountUp end={value} duration={2} separator="," preserveValue />
            ) : (
              value
            )}
          </Text>

          {subText && (
            <Text size="xs" c="dimmed" mt={4}>
              {subText}
            </Text>
          )}
        </div>

        <ThemeIcon variant="light" color={color} size="lg" radius="md">
          {icon}
        </ThemeIcon>
      </Group>
    </Paper>
  );
};

export default SummaryCard;
