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
} from '@shopify/polaris';
import { 
  metricCategories,
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
