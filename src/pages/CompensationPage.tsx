import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  DataTable,
  Banner,
  Button,
  Box,
  Divider,
  InlineGrid,
  InlineStack,
  Badge,
} from '@shopify/polaris';
import { compensationStructure } from '../data/compensation';
import CompensationCalculator from '../components/CompensationCalculator';

export default function CompensationPage() {
  return (
    <Page
      title="Incentive Compensation"
      subtitle="Compensation structure, quota attainment, and payout details"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            <Banner tone="info">
              <BlockStack gap="200">
                <Text as="p" variant="bodyMd">
                  In Mid-Market Scaled, incentive compensation is based on <strong>individual quotas</strong> (i.e. individual targets). 
                  Payouts are determined by attainment percentages against those individual quotas.
                </Text>
                <Text as="p" variant="bodyMd">
                  Customer Success Managers are compensated based on Net Revenue Retention. Net Revenue Retention represents the actual $ earned by Shopify in a given period (excluding revenue from certain products and fees).
                </Text>
              </BlockStack>
            </Banner>

            <Layout>
              <Layout.Section variant="oneHalf">
                <Card>
                  <BlockStack gap="400">
                    <Box>
                      <Text as="h2" variant="headingLg">
                        Pay Mix Structure
                      </Text>
                      <Text as="p" variant="bodyMd" tone="subdued">
                        Standard CSM compensation model
                      </Text>
                    </Box>
                    <Divider />
                    
                    <InlineStack gap="400" align="center" blockAlign="center">
                      <Box>
                        <BlockStack gap="200" align="center">
                          <Text as="p" variant="heading3xl" alignment="center">
                            {compensationStructure.payMix.base}%
                          </Text>
                          <Badge tone="success">Base Salary</Badge>
                        </BlockStack>
                      </Box>
                      <Text as="p" variant="headingXl" tone="subdued">
                        +
                      </Text>
                      <Box>
                        <BlockStack gap="200" align="center">
                          <Text as="p" variant="heading3xl" alignment="center">
                            {compensationStructure.payMix.incentive}%
                          </Text>
                          <Badge tone="info">Incentive</Badge>
                        </BlockStack>
                      </Box>
                    </InlineStack>

                    <Text as="p" variant="bodyMd">
                      {compensationStructure.payMix.description}
                    </Text>
                  </BlockStack>
                </Card>
              </Layout.Section>

              <Layout.Section variant="oneHalf">
                <Card>
                  <BlockStack gap="400">
                    <Box>
                      <Text as="h2" variant="headingLg">
                        Incentive Breakdown
                      </Text>
                      <Text as="p" variant="bodyMd" tone="subdued">
                        How your 20% incentive is calculated
                      </Text>
                    </Box>
                    <Divider />
                    
                    <InlineStack gap="400" align="center" blockAlign="center">
                      <Box>
                        <BlockStack gap="200" align="center">
                          <Text as="p" variant="heading3xl" alignment="center">
                            {compensationStructure.incentiveSplit.nrr}%
                          </Text>
                          <Badge>Net Revenue Retention</Badge>
                        </BlockStack>
                      </Box>
                    </InlineStack>

                    <Text as="p" variant="bodyMd">
                      {compensationStructure.incentiveSplit.description}
                    </Text>
                  </BlockStack>
                </Card>
              </Layout.Section>
            </Layout>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Quotas
                </Text>
                <Text as="p" variant="bodyMd">
                  Your quota is set based on your plan period and is visible in the{' '}
                  <Button 
                    url="https://lookerstudio.google.com/u/0/reporting/266ba3ed-5a65-4ad2-8d16-1ddc2a0e07d4/page/p_9huwcdkwxd?s=vY5xW_e2uuo" 
                    external 
                    variant="plain"
                    size="slim"
                  >
                    Incentive Compensation Tool
                  </Button>.
                </Text>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Accelerators and Payouts
                </Text>
                <Text as="p" variant="bodyMd">
                  At the end of each plan period, we calculate your attainment percentage and you receive a payout. 
                  You will receive accelerators on marginal dollars above your target. Accelerators are visible in the{' '}
                  <Button 
                    url="https://lookerstudio.google.com/u/0/reporting/266ba3ed-5a65-4ad2-8d16-1ddc2a0e07d4/page/p_9huwcdkwxd?s=vY5xW_e2uuo" 
                    external 
                    variant="plain"
                    size="slim"
                  >
                    Incentive Compensation Tool
                  </Button>. There are no decelerators.
                </Text>
                <Divider />
                <DataTable
                  columnContentTypes={['text', 'text']}
                  headings={['Attainment', 'Accelerator (Marginal)']}
                  rows={[
                    ['>100 to < 125%', '2x'],
                    ['>125 to < 150%', '2.25x'],
                    ['>150 to < 175%', '2.5x'],
                    ['>175 to < 200%', '2.75x'],
                    ['>200%', '3x'],
                  ]}
                />
              </BlockStack>
            </Card>

            {/* Payout Calculator */}
            <CompensationCalculator />

            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingLg">
                  Payout Factors
                </Text>
                <Text as="p" variant="bodyMd" tone="subdued">
                  Your incentive compensation is impacted by the following factors:
                </Text>
                <Divider />
                <BlockStack gap="300">
                  {compensationStructure.payoutFactors.map((factor, index) => (
                    <Box key={index} paddingInlineStart="400">
                      <InlineStack gap="200" blockAlign="start">
                        <Text as="span" variant="bodyMd">
                          •
                        </Text>
                        <Text as="p" variant="bodyMd">
                          {factor}
                        </Text>
                      </InlineStack>
                    </Box>
                  ))}
                </BlockStack>
              </BlockStack>
            </Card>

            <Banner tone="warning">
              <p>
                <strong>Questions about your specific compensation?</strong> Reach out to your manager or the People team for personalized guidance.
              </p>
            </Banner>
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
