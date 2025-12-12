import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Box,
  List,
  Divider,
  Banner,
  Badge,
  Button,
} from '@shopify/polaris';
import { missionVisionData, communicationGuidelines } from '../data/missionVision';

export default function MissionVisionPage() {
  return (
    <Page
      title="Mission & Vision"
      subtitle="Our purpose, values, and how we work together"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Banner tone="info">
              <Text as="p" variant="bodyMd">
                {missionVisionData.context.description}
              </Text>
              <Box paddingBlockStart="200">
                <Badge tone="info">{`Last updated: ${missionVisionData.context.lastUpdated}`}</Badge>
              </Box>
            </Banner>

            <Layout>
              <Layout.Section variant="oneHalf">
                <Card>
                  <BlockStack gap="400">
                    <Box paddingBlockEnd="200">
                      <Text as="h2" variant="headingLg" alignment="center">
                        🚀 {missionVisionData.mission.title}
                      </Text>
                    </Box>
                    <Divider />
                    <Text as="p" variant="bodyLg" alignment="center">
                      {missionVisionData.mission.content}
                    </Text>
                  </BlockStack>
                </Card>
              </Layout.Section>

              <Layout.Section variant="oneHalf">
                <Card>
                  <BlockStack gap="400">
                    <Box paddingBlockEnd="200">
                      <Text as="h2" variant="headingLg" alignment="center">
                        🎯 {missionVisionData.objective.title}
                      </Text>
                    </Box>
                    <Divider />
                    <Text as="p" variant="bodyLg" alignment="center">
                      {missionVisionData.objective.content}
                    </Text>
                  </BlockStack>
                </Card>
              </Layout.Section>
            </Layout>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Our Core Values
                </Text>
                <Divider />
                <BlockStack gap="400">
                  {missionVisionData.values.map((value, index) => (
                    <Box key={index}>
                      <BlockStack gap="200">
                        <Text as="h3" variant="headingMd">
                          {value.title}
                        </Text>
                        <Text as="p" variant="bodyMd" tone="subdued">
                          {value.description}
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
                  Communication & Knowledge Sharing
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  How we stay aligned and share information as a team:
                </Text>
                <Divider />
                <Banner tone="warning">
                  <Text as="p" variant="bodyMd" fontWeight="semibold">
                    Our #cs-na-midmarket-scaled Slack channel is our 'source of truth' for key announcements
                  </Text>
                </Banner>
                <List type="bullet">
                  {communicationGuidelines.map((guideline, index) => (
                    <List.Item key={index}>{guideline}</List.Item>
                  ))}
                </List>
                <Box>
                  <Button 
                    url="https://shopify.enterprise.slack.com/archives/C03QXQXQXQX" 
                    external
                  >
                    Open #ms-na-midmarket-scaled
                  </Button>
                </Box>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

