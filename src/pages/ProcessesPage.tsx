import React from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Button,
  Divider,
  Box,
  List,
} from '@shopify/polaris';
import { processes, playbooks } from '../data/processes';

export default function ProcessesPage() {
  return (
    <Page
      title="Processes & Playbooks"
      subtitle="Step-by-step guides for deal execution and best practices"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            {processes.map((process) => (
              <Card key={process.id}>
                <BlockStack gap="400">
                  <Box>
                    <Text as="h2" variant="headingLg">
                      {process.title}
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      {process.description}
                    </Text>
                  </Box>
                  <Divider />
                  <BlockStack gap="400">
                    {process.steps.map((step) => (
                      <Box key={step.step}>
                        <BlockStack gap="200">
                          <Text as="h3" variant="headingMd">
                            Step {step.step}: {step.title}
                          </Text>
                          <Text as="p" variant="bodyMd">
                            {step.description}
                          </Text>
                        </BlockStack>
                      </Box>
                    ))}
                  </BlockStack>
                </BlockStack>
              </Card>
            ))}

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Solution Playbooks
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Detailed playbooks for specific solutions and scenarios:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {playbooks.map((playbook) => (
                    <Box key={playbook.title}>
                      <BlockStack gap="200">
                        <Text as="h3" variant="headingMd">
                          {playbook.title}
                        </Text>
                        <Text as="p" variant="bodyMd" tone="subdued">
                          {playbook.description}
                        </Text>
                        <Box>
                          <Button url={playbook.url} external>
                            View Playbook
                          </Button>
                        </Box>
                      </BlockStack>
                      <Box paddingBlockStart="300">
                        <Divider />
                      </Box>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Additional Resources
                </Text>
                <Divider />
                <List type="bullet">
                  <List.Item>
                    <Button variant="plain" url="https://vault.shopify.io/sales-resources" external>
                      Sales Resources Hub
                    </Button>
                  </List.Item>
                  <List.Item>
                    <Button variant="plain" url="https://vault.shopify.io/case-studies" external>
                      Merchant Case Studies
                    </Button>
                  </List.Item>
                  <List.Item>
                    <Button variant="plain" url="https://vault.shopify.io/competitive" external>
                      Competitive Intelligence
                    </Button>
                  </List.Item>
                </List>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

