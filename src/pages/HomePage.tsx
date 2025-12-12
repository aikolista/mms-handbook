import { useState, useEffect } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  InlineStack,
  Button,
  Banner,
  Box,
  Divider,
} from '@shopify/polaris';
import { useNavigate } from 'react-router-dom';
import { announcements, recentUpdates } from '../data/announcements';

export default function HomePage() {
  const navigate = useNavigate();
  const [dismissedAnnouncements, setDismissedAnnouncements] = useState<string[]>([]);

  // Load dismissed announcements from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('dismissedAnnouncements');
    if (stored) {
      setDismissedAnnouncements(JSON.parse(stored));
    }
  }, []);

  const activeAnnouncements = announcements.filter(
    (announcement) => !dismissedAnnouncements.includes(announcement.id)
  );

  const handleDismiss = (announcementId: string) => {
    const updated = [...dismissedAnnouncements, announcementId];
    setDismissedAnnouncements(updated);
    localStorage.setItem('dismissedAnnouncements', JSON.stringify(updated));
  };

  return (
    <Page title="🌟 MMS Customer Success Handbook">
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            {/* Announcements Section */}
            {activeAnnouncements.map((announcement) => (
              <Banner
                key={announcement.id}
                title={announcement.title}
                tone={announcement.tone}
                onDismiss={
                  announcement.dismissible
                    ? () => handleDismiss(announcement.id)
                    : undefined
                }
                action={
                  announcement.action
                    ? {
                        content: announcement.action.content,
                        onAction: () => {
                          if (announcement.action!.url.startsWith('/')) {
                            navigate(announcement.action!.url);
                          } else {
                            window.open(announcement.action!.url, '_blank');
                          }
                        },
                      }
                    : undefined
                }
              >
                <p>{announcement.message}</p>
              </Banner>
            ))}

            {/* Welcome Section */}
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Welcome! 👋
                </Text>
                <Text as="p" variant="bodyLg">
                  Great customer success is a thing of beauty. This handbook represents the best 
                  of our collective knowledge for the MMS team. Think of it as your compass for 
                  navigating tools, processes, metrics, and team culture.
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Whether you're new to the team or a seasoned pro, you'll find everything you need 
                  to excel in your role and help our merchants succeed.
                </Text>
                <Divider />
                <InlineStack gap="200" align="start">
                  <Button url="https://vault.shopify.io/teams/16865-CSM-MMS" external>
                    View Our Vault Team Page
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>

            <Layout>
              <Layout.Section variant="oneThird">
                <Card>
                  <BlockStack gap="300">
                    <Text as="h3" variant="headingMd">
                      Recent Updates
                    </Text>
                    <Divider />
                    <BlockStack gap="200">
                      {recentUpdates.map((update, index) => (
                        <Box key={index}>
                          <Text as="p" variant="bodyMd" fontWeight="semibold">
                            {update.title}
                          </Text>
                          <Text as="p" variant="bodySm" tone="subdued">
                            {update.description} • {update.date}
                          </Text>
                        </Box>
                      ))}
                    </BlockStack>
                  </BlockStack>
                </Card>
              </Layout.Section>

              <Layout.Section variant="oneThird">
                <Card>
                  <BlockStack gap="300">
                    <Text as="h3" variant="headingMd">
                      Important Links
                    </Text>
                    <Divider />
                    <BlockStack gap="200">
                      <Button variant="plain" url="https://vault.shopify.io" external>
                        Vault Team Page
                      </Button>
                      <Button variant="plain" url="https://tableau.shopify.io" external>
                        Tableau Dashboards
                      </Button>
                      <Button variant="plain" url="https://salesforce.shopify.io" external>
                        Salesforce
                      </Button>
                      <Button variant="plain" url="https://shopify.enterprise.slack.com" external>
                        Team Slack Channel
                      </Button>
                    </BlockStack>
                  </BlockStack>
                </Card>
              </Layout.Section>

              <Layout.Section variant="oneThird">
                <Card>
                  <BlockStack gap="300">
                    <Text as="h3" variant="headingMd">
                      Key Resources
                    </Text>
                    <Divider />
                    <BlockStack gap="200">
                      <Button variant="plain" onClick={() => navigate('/processes')}>
                        Deal Qualification
                      </Button>
                      <Button variant="plain" onClick={() => navigate('/metrics')}>
                        Performance Metrics
                      </Button>
                      <Button variant="plain" onClick={() => navigate('/resources')}>
                        Training Materials
                      </Button>
                      <Button variant="plain" onClick={() => navigate('/compensation')}>
                        Compensation Details
                      </Button>
                    </BlockStack>
                  </BlockStack>
                </Card>
              </Layout.Section>
            </Layout>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

