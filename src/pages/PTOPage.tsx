import React from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Button,
  Banner,
  List,
  Divider,
  Box,
} from '@shopify/polaris';

export default function PTOPage() {
  return (
    <Page
      title="PTO & Time Off"
      subtitle="Time off policies, request process, and coverage protocols"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Banner tone="info">
              <p>
                Shopify offers flexible time off. Take the time you need to rest, recharge, and maintain work-life balance.
              </p>
            </Banner>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Time Off Policy
                </Text>
                <Text as="p" variant="bodyMd">
                  Shopify provides flexible, unlimited vacation time. We trust you to manage your time off
                  responsibly while ensuring your work is covered.
                </Text>
                <Divider />
                <BlockStack gap="300">
                  <Box>
                    <Text as="h3" variant="headingMd">
                      Key Principles
                    </Text>
                    <List type="bullet">
                      <List.Item>Take time off when you need it</List.Item>
                      <List.Item>Coordinate with your team and manager</List.Item>
                      <List.Item>Ensure merchant coverage during your absence</List.Item>
                      <List.Item>Document your out-of-office plan</List.Item>
                      <List.Item>Minimum 2 weeks notice for extended absences (5+ days)</List.Item>
                    </List>
                  </Box>
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  How to Request Time Off
                </Text>
                <Divider />
                <List type="number">
                  <List.Item>
                    <Text as="span" fontWeight="semibold">Check team calendar</Text> - Ensure coverage won't be impacted
                  </List.Item>
                  <List.Item>
                    <Text as="span" fontWeight="semibold">Submit in Time Away system</Text> - Log your request in Shopify's official system
                  </List.Item>
                  <List.Item>
                    <Text as="span" fontWeight="semibold">Notify your manager</Text> - Get approval via Slack or email
                  </List.Item>
                  <List.Item>
                    <Text as="span" fontWeight="semibold">Update team calendar</Text> - Add to shared MMS calendar
                  </List.Item>
                  <List.Item>
                    <Text as="span" fontWeight="semibold">Set up coverage</Text> - Arrange for merchant coverage if needed
                  </List.Item>
                  <List.Item>
                    <Text as="span" fontWeight="semibold">Set OOO messages</Text> - Update Slack status, email auto-reply
                  </List.Item>
                </List>
                <Box paddingBlockStart="400">
                  <Button url="https://time-away.shopify.io" external>
                    Time Away System
                  </Button>
                </Box>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Coverage Protocol
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Before taking time off, ensure your merchants and deals are covered:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  <Box>
                    <Text as="h3" variant="headingMd">
                      For Planned Absence
                    </Text>
                    <List type="bullet">
                      <List.Item>Identify coverage partner(s) at least 1 week in advance</List.Item>
                      <List.Item>Brief coverage partner on active deals and priorities</List.Item>
                      <List.Item>Update Salesforce with coverage notes and next steps</List.Item>
                      <List.Item>Notify key merchants of your absence and coverage contact</List.Item>
                      <List.Item>Share access to relevant documents and resources</List.Item>
                    </List>
                  </Box>
                  <Box>
                    <Text as="h3" variant="headingMd">
                      Coverage Template
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued">
                      Share this with your coverage partner:
                    </Text>
                    <Box paddingBlockStart="200">
                      <Text as="p" variant="bodyMd" tone="subdued">
                        • Active deals requiring attention<br />
                        • Scheduled merchant meetings<br />
                        • Pending proposals or quotes<br />
                        • Key contacts and escalation paths<br />
                        • Access to shared folders
                      </Text>
                    </Box>
                  </Box>
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Team Calendar Integration
                </Text>
                <Text as="p" variant="bodyMd">
                  View team time off on our shared calendar to coordinate schedules and ensure coverage.
                </Text>
                <Box>
                  <Button url="https://calendar.google.com/calendar/u/0/r" external>
                    Open Team Calendar
                  </Button>
                </Box>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Other Leave Types
                </Text>
                <Divider />
                <BlockStack gap="300">
                  <Box>
                    <Text as="h3" variant="headingMd">
                      Parental Leave
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Shopify offers generous parental leave. Contact People team for details and planning.
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" variant="headingMd">
                      Sick Leave
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Take time when you're sick. No need to log short-term sick days, just notify your manager.
                    </Text>
                  </Box>
                  <Box>
                    <Text as="h3" variant="headingMd">
                      Extended Leave
                    </Text>
                    <Text as="p" variant="bodyMd">
                      For sabbaticals or extended leave (30+ days), discuss with your manager well in advance.
                    </Text>
                  </Box>
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  Questions?
                </Text>
                <Text as="p" variant="bodyMd">
                  For questions about time off policies or specific situations:
                </Text>
                <BlockStack gap="200">
                  <Button variant="plain" url="https://vault.shopify.io/people/time-off" external>
                    People Team - Time Off Policies
                  </Button>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Or reach out to your manager or People Business Partner
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}


