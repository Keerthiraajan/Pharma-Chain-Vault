import {
  Container,
  Text,
  Group,
  Box,
  Stack,
  ThemeIcon,
  Paper,
} from '@mantine/core';
import '../CSS/Workflow.css';
import '@mantine/core/styles.css';

const steps = [
  { title: 'Submit', description: 'Researchers submit Patent securely' },
  { title: 'Review', description: 'Regulatory and internal review' },
  { title: 'Approve', description: 'Clear compliance decisions' },
  { title: 'Access', description: 'Controlled collaboration begins' },
];

const Workflow = () => {
  return (
    <section className="workflow-section">
     
      <Container size="lg">
        
        <Stack align="center" mb={0} spacing={8}>
          <h1 className="workflow-title">How it works</h1>
          <Text className="workflow-subtitle">
            A simple, secure workflow designed for regulated collaboration
          </Text>
        </Stack>

        
        <Paper className="workflow-card" radius="lg" withBorder={false}>
          <div className="workflow-timeline">
            
            <div className="workflow-line" />

            <Group grow align="flex-start" className="workflow-grid" >
              {steps.map((step, index) => (
                <Box key={index} className="workflow-step">
                  <ThemeIcon
                    size={52}
                    radius="xl"
                    className="workflow-icon"
                  >
                    {index + 1}
                  </ThemeIcon>

                  <Text className="step-title">{step.title}</Text>
                  <Text className="step-description">{step.description}</Text>
                </Box>
              ))}
            </Group>
          </div>
        </Paper>
        
        
       
      </Container>

      {/* <hr style={{ border: 'none', borderBottom: '4px solid #e0e0e0', margin: 5 }} /> */}
     
    </section>
  );
};

export default Workflow;