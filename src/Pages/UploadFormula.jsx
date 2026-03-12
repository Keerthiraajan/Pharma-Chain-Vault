import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Card,
  Stepper,
  Button,
  Group,
  Grid,
  TextInput, 
  Select,
  Textarea,
  FileInput,
  Checkbox,
  Divider
} from "@mantine/core";

const UploadFormula = () => {

  const [active, setActive] = useState(0);

  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Container size="md" py="xl">

      {/* Page Header */}
      <Title order={2}>Register Pharmaceutical Formula</Title>

      <Text c="dimmed" mt="xs" mb="lg">
        Securely upload and register your pharmaceutical formula.
        The system will encrypt your data and store ownership proof on blockchain.
      </Text>

      {/* Main Card */}
      <Card shadow="sm" padding="lg" radius="md" withBorder>

        <Stepper active={active} breakpoint="sm">

          {/* STEP 1 — BASIC INFORMATION */}

          <Stepper.Step label="Basic Information">

            <Title order={4}>Basic Information</Title>
            <Divider my="sm" />

            <Grid>

              <Grid.Col span={6}>
                <TextInput
                  label="Formula Name"
                  placeholder="Enter formula name"
                  required
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <Select
                  label="Category"
                  placeholder="Select category"
                  data={[
                    "Antibiotic",
                    "Vaccine",
                    "Herbal",
                    "Ayurvedic",
                    "Biotech"
                  ]}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <TextInput
                  label="Research Domain"
                  placeholder="Example: Oncology, Immunology"
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <Textarea
                  label="Short Description"
                  placeholder="Briefly describe the formula"
                  minRows={4}
                />
              </Grid.Col>

            </Grid>

          </Stepper.Step>


          {/* STEP 2 — SCIENTIFIC INFORMATION */}

          <Stepper.Step label="Scientific Information">

            <Title order={4}>Scientific Information</Title>
            <Divider my="sm" />

            <Grid>

              <Grid.Col span={12}>
                <Textarea
                  label="Chemical Composition"
                  placeholder="Describe chemical composition"
                  minRows={3}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <Textarea
                  label="Key Ingredients"
                  placeholder="List active ingredients"
                  minRows={3}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <Select
                  label="Dosage Form"
                  placeholder="Select dosage type"
                  data={[
                    "Tablet",
                    "Capsule",
                    "Injection",
                    "Liquid",
                    "Powder"
                  ]}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label="Storage Conditions"
                  placeholder="Example: 2-8°C"
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <Textarea
                  label="Manufacturing Process"
                  placeholder="Describe preparation / manufacturing method"
                  minRows={4}
                />
              </Grid.Col>

            </Grid>

          </Stepper.Step>


          {/* STEP 3 — DOCUMENT UPLOAD */}

          <Stepper.Step label="Supporting Documents">

            <Title order={4}>Supporting Documents</Title>
            <Divider my="sm" />

            <Grid>

              <Grid.Col span={12}>
                <FileInput
                  label="Research Paper"
                  placeholder="Upload research paper"
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <FileInput
                  label="Lab Report"
                  placeholder="Upload lab validation report"
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <FileInput
                  label="Formula Document"
                  placeholder="Upload detailed formula file"
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <FileInput
                  label="Additional Documents"
                  placeholder="Optional supporting documents"
                />
              </Grid.Col>

            </Grid>

          </Stepper.Step>


          {/* STEP 4 — FINAL SUBMISSION */}

          <Stepper.Step label="Submission">

            <Title order={4}>Finalize Submission</Title>
            <Divider my="sm" />

            <Text size="sm" mb="md">
              Before submitting, please confirm the following:
            </Text>

            <Checkbox
              label="I confirm that this formula is original research."
              mb="sm"
            />

            <Checkbox
              label="I agree to encrypt this formula and store ownership proof on blockchain."
              mb="sm"
            />

            <Checkbox
              label="I agree to provide regulatory access if required."
            />

          </Stepper.Step>

        </Stepper>


        {/* Navigation Buttons */}

        <Group justify="space-between" mt="xl">

          <Button variant="default" onClick={prevStep} disabled={active === 0}>
            Back
          </Button>

          {active !== 3 ? (
            <Button onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button color="green">
              Submit Formula
            </Button>
          )}

        </Group>

      </Card>

    </Container>
  );
};

export default UploadFormula;