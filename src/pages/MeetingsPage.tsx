import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Button,
  Banner,
  Box,
  Divider,
  List,
  Badge,
  InlineStack,
} from '@shopify/polaris';
import { meetings, fellowInfo, meetingPhilosophy, meetingBestPractices } from '../data/meetings';

export default function MeetingsPage() {
  return (
    <Page
      title="Meetings & Cadence"
      subtitle="Meeting structure, agendas, and expectations"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Banner tone="info">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" fontWeight="semibold">
                  {meetingPhilosophy.title}
                </Text>
                <Text as="p" variant="bodyMd">
                  {meetingPhilosophy.description}
                </Text>
              </BlockStack>
            </Banner>

            {meetings.map((meeting) => (
              <Card key={meeting.id}>
                <BlockStack gap="400">
                  <Box>
                    <InlineStack gap="200" blockAlign="center" wrap={false}>
                      <Text as="h2" variant="headingLg">
                        {meeting.title}
                      </Text>
                      <Badge tone="info">{meeting.frequency}</Badge>
                    </InlineStack>
                  </Box>

                  <Box>
                    <BlockStack gap="200">
                      <InlineStack gap="200" blockAlign="center">
                        <Text as="p" variant="bodyMd" tone="subdued">
                          <strong>Attendees:</strong>
                        </Text>
                        <Text as="p" variant="bodyMd">
                          {meeting.attendees}
                        </Text>
                      </InlineStack>
                      <Text as="p" variant="bodyMd">
                        {meeting.description}
                      </Text>
                    </BlockStack>
                  </Box>

                  <Divider />

                  <Box>
                    <BlockStack gap="300">
                      <Text as="h3" variant="headingMd">
                        Typical Agenda
                      </Text>
                      <List type="bullet">
                        {meeting.agenda.map((item, index) => (
                          <List.Item key={index}>{item}</List.Item>
                        ))}
                      </List>
                    </BlockStack>
                  </Box>
                </BlockStack>
              </Card>
            ))}

            <Card>
              <BlockStack gap="400">
                <Box>
                  <InlineStack gap="200" blockAlign="center">
                    <Text as="h2" variant="headingLg">
                      {fellowInfo.name}
                    </Text>
                    <Badge tone="success">Meeting Assistant</Badge>
                  </InlineStack>
                </Box>

                <Text as="p" variant="bodyMd">
                  {fellowInfo.description}
                </Text>

                <Divider />

                <Box>
                  <BlockStack gap="300">
                    <Text as="h3" variant="headingMd">
                      Key Features
                    </Text>
                    <List type="bullet">
                      {fellowInfo.features.map((feature, index) => (
                        <List.Item key={index}>{feature}</List.Item>
                      ))}
                    </List>
                  </BlockStack>
                </Box>

                <Box>
                  <Button url={fellowInfo.url} external>
                    Open Fellow
                  </Button>
                </Box>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Meeting Best Practices
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Make the most of your meeting time:
                </Text>
                <Divider />
                <List type="bullet">
                  {meetingBestPractices.map((practice, index) => (
                    <List.Item key={index}>{practice}</List.Item>
                  ))}
                </List>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Meeting Principles
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {meetingPhilosophy.principles.map((principle, index) => (
                    <Box key={index} paddingInlineStart="400">
                      <InlineStack gap="200" blockAlign="start">
                        <Text as="span" variant="bodyMd">
                          {index + 1}.
                        </Text>
                        <Text as="p" variant="bodyMd">
                          {principle}
                        </Text>
                      </InlineStack>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Banner tone="highlight">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" fontWeight="semibold">
                  💡 Pro Tip: Google Meet Recordings
                </Text>
                <Text as="p" variant="bodyMd">
                  If you miss a meeting, don't worry! Use Google Meet recordings to catch up 
                  and review any action items assigned to you. Stay in the loop even when you can't attend live.
                </Text>
              </BlockStack>
            </Banner>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  Quick Reference
                </Text>
                <Divider />
                <BlockStack gap="200">
                  <Box>
                    <Text as="p" variant="bodyMd">
                      <strong>Weekly/Bi-Weekly:</strong> 1:1s, Team Meetings, Segment Meetings
                    </Text>
                  </Box>
                  <Box>
                    <Text as="p" variant="bodyMd">
                      <strong>Monthly:</strong> Mid-Market Town Hall
                    </Text>
                  </Box>
                  <Box>
                    <Text as="p" variant="bodyMd">
                      <strong>Meeting Tool:</strong> Fellow (for agendas, notes, and recordings via Google Meet)
                    </Text>
                  </Box>
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

