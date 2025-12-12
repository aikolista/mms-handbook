import React, { useState, useMemo } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  TextField,
  Collapsible,
  Button,
  Box,
  Divider,
  InlineStack,
  Badge,
} from '@shopify/polaris';
import { faqs, faqCategories } from '../data/faqs';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        searchQuery === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || faq.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenItems(filteredFaqs.map((faq) => faq.id));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <Page
      title="Frequently Asked Questions"
      subtitle="Quick answers to common questions"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Card>
              <BlockStack gap="400">
                <TextField
                  label="Search FAQs"
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search questions and answers..."
                  autoComplete="off"
                  clearButton
                  onClearButtonClick={() => setSearchQuery('')}
                />

                <Box>
                  <InlineStack gap="200" wrap>
                    {faqCategories.map((category) => (
                      <Button
                        key={category}
                        pressed={selectedCategory === category}
                        onClick={() => setSelectedCategory(category)}
                        size="slim"
                      >
                        {category}
                      </Button>
                    ))}
                  </InlineStack>
                </Box>

                <InlineStack gap="200">
                  <Button onClick={expandAll} size="slim">
                    Expand All
                  </Button>
                  <Button onClick={collapseAll} size="slim">
                    Collapse All
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  {filteredFaqs.length} Question{filteredFaqs.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {filteredFaqs.length === 0 ? (
                    <Box padding="400">
                      <Text as="p" variant="bodyMd" tone="subdued" alignment="center">
                        No FAQs found matching your search.
                      </Text>
                    </Box>
                  ) : (
                    filteredFaqs.map((faq) => {
                      const isOpen = openItems.includes(faq.id);
                      return (
                        <Box key={faq.id}>
                          <BlockStack gap="200">
                            <Button
                              onClick={() => toggleItem(faq.id)}
                              textAlign="left"
                              fullWidth
                              disclosure={isOpen ? 'up' : 'down'}
                            >
                              <InlineStack gap="200" blockAlign="center">
                                <Badge tone="info">{faq.category}</Badge>
                                <Text as="span" variant="bodyMd" fontWeight="semibold">
                                  {faq.question}
                                </Text>
                              </InlineStack>
                            </Button>
                            <Collapsible
                              open={isOpen}
                              id={faq.id}
                              transition={{
                                duration: '200ms',
                                timingFunction: 'ease-in-out',
                              }}
                            >
                              <Box paddingBlockStart="200" paddingInlineStart="400">
                                <Text as="p" variant="bodyMd">
                                  {faq.answer}
                                </Text>
                              </Box>
                            </Collapsible>
                          </BlockStack>
                          <Box paddingBlockStart="300">
                            <Divider />
                          </Box>
                        </Box>
                      );
                    })
                  )}
                </BlockStack>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="300">
                <Text as="h2" variant="headingLg">
                  Can't Find What You're Looking For?
                </Text>
                <Text as="p" variant="bodyMd">
                  If your question isn't answered here, try these resources:
                </Text>
                <BlockStack gap="200">
                  <Button variant="plain" url="https://vault.shopify.io" external>
                    Search Vault Documentation
                  </Button>
                  <Button variant="plain" url="https://shopify.enterprise.slack.com/archives/mms-team" external>
                    Ask in #mms-team Slack
                  </Button>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Or reach out to your manager directly
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


