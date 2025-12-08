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
import { learningResources } from '../data/resources';

export default function ResourcesPage() {
  return (
    <Page
      title="Learning Resources"
      subtitle="Training materials, documentation, and industry resources"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Vault Documentation
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Internal documentation and resources on Vault:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {learningResources.vaultDocs.map((resource) => (
                    <Box key={resource.title}>
                      <BlockStack gap="200">
                        <Button url={resource.url} external>
                          {resource.title}
                        </Button>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {resource.description}
                        </Text>
                      </BlockStack>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Shopify University Training
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Structured learning paths and certifications:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {learningResources.training.map((resource) => (
                    <Box key={resource.title}>
                      <BlockStack gap="200">
                        <Button url={resource.url} external>
                          {resource.title}
                        </Button>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {resource.description}
                        </Text>
                      </BlockStack>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Shopify Content
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  External-facing content and product updates:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {learningResources.external.map((resource) => (
                    <Box key={resource.title}>
                      <BlockStack gap="200">
                        <Button url={resource.url} external>
                          {resource.title}
                        </Button>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {resource.description}
                        </Text>
                      </BlockStack>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Industry Research
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Stay informed with market research and trends:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {learningResources.industry.map((resource) => (
                    <Box key={resource.title}>
                      <BlockStack gap="200">
                        <Button url={resource.url} external>
                          {resource.title}
                        </Button>
                        <Text as="p" variant="bodySm" tone="subdued">
                          {resource.description}
                        </Text>
                      </BlockStack>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  Recommended Learning Path
                </Text>
                <Text as="p" variant="bodyMd">
                  For new team members, we recommend completing training in this order:
                </Text>
                <List type="number">
                  <List.Item>MMS Onboarding (Week 1-2)</List.Item>
                  <List.Item>Product Certification - Core products (Week 2-3)</List.Item>
                  <List.Item>Shopify Plus Deep Dive (Week 3-4)</List.Item>
                  <List.Item>Sales Skills Training (Ongoing)</List.Item>
                  <List.Item>Industry Research (Ongoing)</List.Item>
                </List>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

