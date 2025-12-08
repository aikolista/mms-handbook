import React, { useState } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  List,
  Divider,
  Box,
  Banner,
  Tabs,
  Button,
} from '@shopify/polaris';

export default function RolesPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      id: 'c5-craft',
      content: 'C5 Craft Skills',
    },
    {
      id: 'c6-craft',
      content: 'C6 Craft Skills',
    },
  ];

  const c5CraftSkills = {
    skills: [
      'Be obsessed with building relationships and closing deals.',
      'Be results oriented.',
      'Ruthless time management and prioritization.',
      'Know our products and services in detail and make expert recommendations.',
      "Understand customer goals and drive towards maximizing value from Shopify's ecosystem.",
      'Build strong relationships and act as a trusted advisor.',
      'Collaborate with customers to develop tailored solutions.',
      'Identify cross-selling opportunities and foster product adoption.',
    ],
    responsibilitiesCraft: [
      'Constantly charge your trust battery and make your team better.',
      'Build great relationships with customers using your resources effectively.',
      'Talk to customers and immerse in their business context.',
      'Know the progress and tools in your field. Use only what accelerates Shopify.',
      'Engage with customers to understand their ongoing goals and unique challenges.',
      'Utilize technical expertise to address customer needs and facilitate solutions.',
      'Maintain operational excellence and ensure overall account health.',
    ],
    responsibilitiesShopify: [
      'Set daily goals to outperform your past achievements.',
      'Set daily goals to surpass compliance on account management effectiveness.',
      "Commit to embodying Shopify's culture and values through customer interactions.",
    ],
  };

  const c6CraftSkills = {
    skills: [
      'Be obsessed with building relationships and closing deals.',
      'Be results oriented.',
      'Ruthless time management and prioritization.',
      'Know our products and services in detail and make expert recommendations.',
      "Understand customer goals and drive towards maximizing value from Shopify's ecosystem.",
      'Build strong relationships and act as a trusted advisor.',
      'Collaborate with customers to develop tailored solutions.',
      'Identify cross-selling opportunities and foster product adoption.',
      'Solve high-value problems within an area, with an understanding of related domains.',
      'Deepen relationship-building and closing skills.',
      'Leverage technical knowledge to provide expert recommendations.',
      'Analyze KPIs to enhance account strategies and customer satisfaction.',
      'Embrace continuous improvement in craft skills and customer insights.',
    ],
    responsibilitiesCraft: [
      'Constantly charge your trust battery and make your team better.',
      'Build great relationships with customers using your resources effectively.',
      'Talk to customers and immerse in their business context.',
      'Know the progress and tools in your field. Use only what accelerates Shopify.',
      'Engage with customers to understand their ongoing goals and unique challenges.',
      'Utilize technical expertise to address customer needs and facilitate solutions.',
      'Maintain operational excellence and ensure overall account health.',
      'Exhibit good judgment. Be right often.',
      'Foster strong relationships with clients while actively advocating for their success.',
      'Collaborate with internal teams to align on product improvements and customer needs.',
      'Model accountability, proactively seeking solutions to complex customer challenges.',
    ],
    responsibilitiesShopify: [
      'Set daily goals to outperform your past achievements.',
      'Set daily goals to surpass compliance on account management effectiveness.',
      "Commit to embodying Shopify's culture and values through customer interactions.",
      'Set daily goals to outdo personal records and elevate performance.',
      'Aim for innovative approaches, challenging traditional methods where necessary.',
    ],
  };

  const currentCraftSkills = selectedTab === 0 ? c5CraftSkills : c6CraftSkills;

  return (
    <Page
      title="Roles & Responsibilities"
      subtitle="Role descriptions, expectations, and career progression"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Banner tone="info">
              <p>
                Understanding role expectations helps us grow individually and succeed as a team.
                Review the competencies for your level and identify areas for development.
              </p>
            </Banner>

            <Card>
              <BlockStack gap="400">
                <Box>
                  <Text as="h2" variant="headingLg">
                    Craft Skills Framework
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    The Customer Success role is a pivotal role that integrates the functions of account management, cross-selling, and technical solutioning to drive customer satisfaction, retention, and growth within our Shopify ecosystem. This newly combined role necessitates a unique blend of account management expertise, product knowledge, technical proficiency, and sales acumen to ensure our customers derive maximum value from Shopify platform.
                  </Text>
                  <Box paddingBlockStart="300">
                    <Button url="https://os.shopify.io/" external size="slim">
                      View on Shopify OS
                    </Button>
                  </Box>
                </Box>
                
                <Divider />
                
                <Tabs tabs={tabs} selected={selectedTab} onSelect={setSelectedTab}>
                  <Box paddingBlockStart="400">
                    <BlockStack gap="400">
                      <Box>
                        <BlockStack gap="300">
                          <Text as="h3" variant="headingMd">
                            Craft Skills
                          </Text>
                          <List type="bullet">
                            {currentCraftSkills.skills.map((skill, index) => (
                              <List.Item key={index}>{skill}</List.Item>
                            ))}
                          </List>
                        </BlockStack>
                      </Box>

                      <Divider />

                      <Box>
                        <BlockStack gap="300">
                          <Text as="h3" variant="headingMd">
                            Responsibilities To The Craft/Job
                          </Text>
                          <List type="bullet">
                            {currentCraftSkills.responsibilitiesCraft.map((resp, index) => (
                              <List.Item key={index}>{resp}</List.Item>
                            ))}
                          </List>
                        </BlockStack>
                      </Box>

                      <Divider />

                      <Box>
                        <BlockStack gap="300">
                          <Text as="h3" variant="headingMd">
                            Responsibilities To Shopify
                          </Text>
                          <List type="bullet">
                            {currentCraftSkills.responsibilitiesShopify.map((resp, index) => (
                              <List.Item key={index}>{resp}</List.Item>
                            ))}
                          </List>
                        </BlockStack>
                      </Box>
                    </BlockStack>
                  </Box>
                </Tabs>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  Career Progression
                </Text>
                <Text as="p" variant="bodyMd">
                  Advancement is based on demonstrated craft skills, business impact, and team contribution. 
                  Talk to your manager about development opportunities and creating a growth plan.
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Visit Vault for detailed career ladders and competency frameworks.
                </Text>
              </BlockStack>
            </Card>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

