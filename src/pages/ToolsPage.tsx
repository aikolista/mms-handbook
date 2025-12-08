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
  Badge,
  InlineStack,
} from '@shopify/polaris';
import { mmsTools, slackChannels, toolCategories, getToolsByCategory } from '../data/tools';

export default function ToolsPage() {
  return (
    <Page
      title="Tools & Systems"
      subtitle="Access your essential MMS tools and resources"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Banner tone="info">
              <p>
                All tools require Shopify SSO authentication. Contact IT via{' '}
                <strong>#help-it</strong> if you need access to any tools.
              </p>
            </Banner>

            {toolCategories.map((category) => {
              const categoryTools = getToolsByCategory(category);
              
              if (categoryTools.length === 0) return null;

              return (
                <Card key={category}>
                  <BlockStack gap="400">
                    <Text as="h2" variant="headingLg">
                      {category}
                    </Text>
                    <Divider />
                    <BlockStack gap="400">
                      {categoryTools.map((tool) => (
                        <Box key={tool.name}>
                          <BlockStack gap="300">
                            <InlineStack gap="200" blockAlign="center">
                              <Text as="h3" variant="headingMd">
                                {tool.name}
                              </Text>
                              {tool.isComingSoon && (
                                <Badge tone="attention">Coming Soon</Badge>
                              )}
                              {tool.slackWorkflow && (
                                <Badge tone="info">Slack Workflow</Badge>
                              )}
                            </InlineStack>
                            <Text as="p" variant="bodyMd" tone="subdued">
                              {tool.description}
                            </Text>
                            {tool.url && !tool.isComingSoon && (
                              <Box>
                                <Button url={tool.url} external>
                                  {tool.slackWorkflow ? 'Open in Slack' : `Open ${tool.name}`}
                                </Button>
                              </Box>
                            )}
                          </BlockStack>
                          <Box paddingBlockStart="300">
                            <Divider />
                          </Box>
                        </Box>
                      ))}
                    </BlockStack>
                  </BlockStack>
                </Card>
              );
            })}

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Key Slack Channels
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Stay connected with your team and get support:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {slackChannels.map((channel) => (
                    <Box key={channel.name}>
                      <BlockStack gap="200">
                        <InlineStack gap="200" blockAlign="center">
                          <Text as="h3" variant="headingMd">
                            {channel.name}
                          </Text>
                          {channel.isPrimary && (
                            <Badge tone="success">Source of Truth</Badge>
                          )}
                        </InlineStack>
                        <Text as="p" variant="bodyMd" tone="subdued">
                          {channel.description}
                        </Text>
                        <Box>
                          <Button url={channel.url} external size="slim">
                            Open Channel
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

            <Banner tone="highlight">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd" fontWeight="semibold">
                  💡 Hot Tip: Merchant Story Workflow
                </Text>
                <Text as="p" variant="bodyMd">
                  Have a merchant win to share? Hop on <strong>#ms-na-midmarket-scaled</strong> and 
                  hit the 'Submit Merchant Story' workflow. Ideally, share at least 1 merchant story 
                  every month to help nurture and promote great stories for our segment.
                </Text>
              </BlockStack>
            </Banner>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Tool Navigation Tips
                </Text>
                <Divider />
                <BlockStack gap="300">
                  <Box>
                    <Text as="h3" variant="headingMd">
                      For Book Prioritization:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      <strong>MMS Tracker</strong> is your compass (static, monthly updates) → 
                      <strong> Copilot</strong> is your GPS (real-time data)
                    </Text>
                  </Box>

                  <Divider />

                  <Box>
                    <Text as="h3" variant="headingMd">
                      For Metrics & Performance:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Start with <strong>WDGLL</strong> for overview → 
                      Use <strong>IPP Pipeline</strong> for cross-sell focus → 
                      Check <strong>Post-Sales Dashboard</strong> for engagement tracking
                    </Text>
                  </Box>

                  <Divider />

                  <Box>
                    <Text as="h3" variant="headingMd">
                      Before Merchant Calls:
                    </Text>
                    <Text as="p" variant="bodyMd">
                      <strong>Call Prep Assistant</strong> for context → 
                      <strong>Store Audit</strong> for CRO opportunities → 
                      <strong>App Explorer</strong> for tech stack review
                    </Text>
                  </Box>
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  Need Training?
                </Text>
                <Text as="p" variant="bodyMd">
                  Check out these resources for tool training and enablement:
                </Text>
                <BlockStack gap="200">
                  <Button variant="plain" url="https://seismic.shopify.io" external>
                    Seismic Learning
                  </Button>
                  <Button variant="plain" url="https://vault.shopify.io/mms-onboarding" external>
                    MMS Onboarding Guide
                  </Button>
                  <Button variant="plain" url="https://vault.shopify.io/learning" external>
                    Shopify University
                  </Button>
                </BlockStack>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
