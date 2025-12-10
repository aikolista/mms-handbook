import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  DataTable,
  Button,
  Banner,
  Box,
  Divider,
  Badge,
  List,
  InlineGrid,
} from '@shopify/polaris';
import { 
  metricCategories,
  metricsDashboards,
} from '../data/metrics';

export default function MetricsPage() {
  return (
    <Page
      title="Metrics & KPIs"
      subtitle="Performance indicators and targets for Mid-Market Scaled CSMs"
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="500">
            {/* Analytics Dashboards & Tools */}
            <Card>
              <BlockStack gap="400">
                <Box>
                  <Text as="h2" variant="headingLg">
                    Analytics Dashboards & Tools
                  </Text>
                  <Text as="p" variant="bodyMd" tone="subdued">
                    Essential tools and dashboards for tracking performance
                  </Text>
                </Box>
                <Divider />
                <InlineGrid columns={{ xs: 1, sm: 2, md: 3 }} gap="400">
                  {metricsDashboards.map((dashboard, index) => (
                    <a
                      key={index}
                      href={dashboard.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <div
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          border: '2px solid #E3F5EF',
                          borderRadius: '12px',
                          padding: '16px',
                          backgroundColor: '#ffffff',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 128, 96, 0.15)';
                          e.currentTarget.style.borderColor = '#008060';
                          e.currentTarget.style.backgroundColor = '#F9FFFE';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = '#E3F5EF';
                          e.currentTarget.style.backgroundColor = '#ffffff';
                        }}
                      >
                        <BlockStack gap="200">
                          <Text as="h3" variant="headingMd">
                            {dashboard.title}
                          </Text>
                          <Text as="p" variant="bodyMd" tone="subdued">
                            {dashboard.description}
                          </Text>
                        </BlockStack>
                      </div>
                    </a>
                  ))}
                </InlineGrid>
              </BlockStack>
            </Card>

            {metricCategories.map((category) => {
              const rows = category.metrics.map((metric) => [
                <Box key={metric.id}>
                  <BlockStack gap="100">
                    <Text as="span" variant="bodyMd" fontWeight="semibold">
                      {metric.name}
                    </Text>
                    <Text as="span" variant="bodySm" tone="subdued">
                      {metric.description}
                    </Text>
                  </BlockStack>
                </Box>,
                <Badge key={`${metric.id}-badge`} tone="success">
                  {metric.target}
                </Badge>,
                metric.dashboardUrl ? (
                  <Button 
                    key={`${metric.id}-btn`}
                    url={metric.dashboardUrl} 
                    external 
                    size="slim"
                    variant="plain"
                  >
                    View
                  </Button>
                ) : (
                  <Text as="span" key={`${metric.id}-na`} tone="subdued">
                    —
                  </Text>
                ),
              ]);

              // For Performance Metrics and Revenue & Pipeline, only show Metric and Target columns
              const hasTopLevelDashboard = category.dashboardUrl !== undefined;
              const columns = hasTopLevelDashboard ? 
                rows.map(row => [row[0], row[1]]) : 
                rows;
              const headings = hasTopLevelDashboard ? 
                ['Metric', 'Target'] : 
                ['Metric', 'Target', 'Link'];

              return (
                <Card key={category.title}>
                  <BlockStack gap="400">
                    <Box>
                      <Text as="h2" variant="headingLg">
                        {category.title}
                      </Text>
                      <Text as="p" variant="bodyMd" tone="subdued">
                        {category.description}
                      </Text>
                    </Box>
                    {category.dashboardUrl && (
                      <Banner tone="info">
                        <Text as="p" variant="bodyMd">
                          Track these metrics in the{' '}
                          <Button 
                            url={category.dashboardUrl} 
                            external 
                            variant="plain"
                            size="slim"
                          >
                            {category.dashboardName}
                          </Button>
                        </Text>
                      </Banner>
                    )}
                    <DataTable
                      columnContentTypes={hasTopLevelDashboard ? ['text', 'text'] : ['text', 'text', 'text']}
                      headings={headings}
                      rows={columns}
                      hoverable
                    />
                  </BlockStack>
                </Card>
              );
            })}
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
