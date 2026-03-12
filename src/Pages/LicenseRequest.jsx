import {
  Container,
  Title,
  Text,
  Stack,
  Grid,
  Card,
  Group,
  Badge,
  Button
} from "@mantine/core";

import {
  summaryData,
  pendingRequests,
  activeLicenses
} from "../Components/LicenseData";

import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import SummaryCard from "../Components/SummaryCard";


const LicenseRequest = () => {

  return (
    <div>

      <TopBar />

      <Container size="md" py="xl">

        <Stack gap="lg">

          {/* ------------------------------------------------ */}
          {/* Page Header */}
          {/* ------------------------------------------------ */}

          <Stack gap={4}>
            <Title order={2}>
              License Requests
            </Title>

            <Text c="dimmed">
              Manage license requests from pharmaceutical companies interested
              in your formulas
            </Text>
          </Stack>


          {/* ------------------------------------------------ */}
          {/* Summary Cards */}
          {/* ------------------------------------------------ */}

          <Grid>

            {summaryData.map((card, index) => (

              <Grid.Col span={3} key={index}>

                <SummaryCard
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  color={card.color}
                />

              </Grid.Col>

            ))}

          </Grid>


          {/* ------------------------------------------------ */}
          {/* Pending License Requests */}
          {/* ------------------------------------------------ */}

          <Stack gap="md" mt="md">

            <Title order={4}>
              Pending License Requests
            </Title>

            {pendingRequests.map((request) => (

              <Card key={request.id} withBorder radius="md" p="md">

                <Group justify="space-between" align="flex-start">

           

                  <Stack gap={2}>

                    <Text fw={600}>
                      {request.company}
                    </Text>

                    <Text size="sm" c="dimmed">
                      Formula: {request.formula}
                    </Text>

                    <Text size="sm">
                      License Type: {request.licenseType}
                    </Text>

                    <Text size="sm">
                      Duration: {request.duration}
                    </Text>

                    <Text size="sm">
                      Price: {request.price}
                    </Text>

                  </Stack>


                  {/* Right Side - Actions */}

                  <Stack align="flex-end">

                    <Badge color="yellow" variant="light">
                      Pending
                    </Badge>

                    <Group mt="xs">

                      <Button size="xs" variant="light">
                        View
                      </Button>

                      <Button size="xs" color="green">
                        Approve
                      </Button>

                      <Button size="xs" color="red" variant="light">
                        Reject
                      </Button>

                    </Group>

                  </Stack>

                </Group>

              </Card>

            ))}

          </Stack>


          <Stack gap="md" mt="xl">

            <Title order={4}>
              Active Licenses
            </Title>

            {activeLicenses.map((license) => (

              <Card key={license.id} withBorder radius="md" p="md">

                <Group justify="space-between" align="flex-start">

                  

                  <Stack gap={2}>

                    <Text fw={600}>
                      {license.company}
                    </Text>

                    <Text size="sm" c="dimmed">
                      Formula: {license.formula}
                    </Text>

                    <Text size="sm">
                      License Type: {license.licenseType}
                    </Text>

                    <Text size="sm">
                      Duration: {license.duration}
                    </Text>

                    <Text size="sm">
                      Royalty: {license.royalty}
                    </Text>

                    <Text size="xs" c="dimmed">
                      Start Date: {license.startDate}
                    </Text>

                  </Stack>


                  <Stack align="flex-end">

                    <Badge color="green" variant="light">
                      Active
                    </Badge>

                    <Group mt="xs">

                      <Button size="xs" variant="light">
                        View License
                      </Button>

                      <Button size="xs">
                        Download Agreement
                      </Button>

                    </Group>

                  </Stack>

                </Group>

              </Card>

            ))}

          </Stack>

        </Stack>

      </Container>

      <Footer />

    </div>
  );
};

export default LicenseRequest;