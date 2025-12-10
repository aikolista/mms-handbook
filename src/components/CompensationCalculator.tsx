import { useState } from 'react';
import { Card, TextField, BlockStack, Text, Box, InlineStack } from '@shopify/polaris';

export default function CompensationCalculator() {
  const [attainment, setAttainment] = useState('');
  const [incentiveAmount, setIncentiveAmount] = useState('');
  const [payout, setPayout] = useState<number | null>(null);
  const [dollarPayout, setDollarPayout] = useState<number | null>(null);

  const calculatePayout = (attainmentPercent: number): number => {
    if (attainmentPercent <= 100) {
      return attainmentPercent;
    }

    const basePayout = 100;
    const excessAttainment = attainmentPercent - 100;
    let accelerator = 1;

    // Determine which tier the attainment falls into
    // The accelerator applies to ALL excess above 100%, not marginal
    if (attainmentPercent >= 200) {
      accelerator = 3;
    } else if (attainmentPercent >= 175) {
      accelerator = 2.75;
    } else if (attainmentPercent >= 150) {
      accelerator = 2.5;
    } else if (attainmentPercent >= 125) {
      accelerator = 2.25;
    } else if (attainmentPercent > 100) {
      accelerator = 2;
    }

    return basePayout + (excessAttainment * accelerator);
  };

  const getDetailedBreakdown = (attainmentPercent: number): string[] => {
    if (attainmentPercent <= 100) {
      return [`${attainmentPercent}% attainment = ${attainmentPercent}% payout (1x)`];
    }

    const breakdown: string[] = [];
    const excessAttainment = attainmentPercent - 100;
    let accelerator = 1;
    let tierName = '';

    // Determine which tier
    if (attainmentPercent >= 200) {
      accelerator = 3;
      tierName = '≥200%';
    } else if (attainmentPercent >= 175) {
      accelerator = 2.75;
      tierName = '175-200%';
    } else if (attainmentPercent >= 150) {
      accelerator = 2.5;
      tierName = '150-175%';
    } else if (attainmentPercent >= 125) {
      accelerator = 2.25;
      tierName = '125-150%';
    } else if (attainmentPercent > 100) {
      accelerator = 2;
      tierName = '100-125%';
    }

    breakdown.push('100% base = 100%');
    breakdown.push(`${excessAttainment.toFixed(2)}% above 100% × ${accelerator}x (${tierName} tier) = ${(excessAttainment * accelerator).toFixed(2)}%`);
    breakdown.push(`Total = ${(100 + excessAttainment * accelerator).toFixed(2)}%`);

    return breakdown;
  };

  const handleCalculate = () => {
    const attainmentNum = parseFloat(attainment);
    const incentiveNum = parseFloat(incentiveAmount);
    
    if (!isNaN(attainmentNum) && attainmentNum >= 0) {
      const calculatedPayout = calculatePayout(attainmentNum);
      setPayout(calculatedPayout);
      
      if (!isNaN(incentiveNum) && incentiveNum > 0) {
        setDollarPayout((calculatedPayout / 100) * incentiveNum);
      } else {
        setDollarPayout(null);
      }
    } else {
      setPayout(null);
      setDollarPayout(null);
    }
  };

  const handleAttainmentChange = (value: string) => {
    setAttainment(value);
    
    const attainmentNum = parseFloat(value);
    
    if (!isNaN(attainmentNum) && attainmentNum >= 0) {
      const calculatedPayout = calculatePayout(attainmentNum);
      setPayout(calculatedPayout);
      
      if (incentiveAmount) {
        const incentiveNum = parseFloat(incentiveAmount);
        if (!isNaN(incentiveNum) && incentiveNum > 0) {
          setDollarPayout((calculatedPayout / 100) * incentiveNum);
        } else {
          setDollarPayout(null);
        }
      } else {
        setDollarPayout(null);
      }
    } else {
      setPayout(null);
      setDollarPayout(null);
    }
  };

  const handleIncentiveChange = (value: string) => {
    setIncentiveAmount(value);
    
    if (attainment) {
      const attainmentNum = parseFloat(attainment);
      const incentiveNum = parseFloat(value);
      
      if (!isNaN(attainmentNum) && attainmentNum >= 0) {
        const calculatedPayout = calculatePayout(attainmentNum);
        setPayout(calculatedPayout);
        
        if (!isNaN(incentiveNum) && incentiveNum > 0) {
          setDollarPayout((calculatedPayout / 100) * incentiveNum);
        } else {
          setDollarPayout(null);
        }
      }
    }
  };

  return (
    <Card>
      <BlockStack gap="400">
        <Box>
          <Text as="h2" variant="headingMd">
            🧮 Payout Calculator
          </Text>
          <Box paddingBlockStart="200">
            <Text as="p" variant="bodySm" tone="subdued">
              Estimate your payout
            </Text>
          </Box>
        </Box>

        <TextField
          label="Attainment %"
          value={attainment}
          onChange={handleAttainmentChange}
          type="number"
          placeholder="Enter your attainment (e.g., 105)"
          autoComplete="off"
          helpText="Enter your attainment percentage (e.g., 105 for 105%)"
        />

        <TextField
          label="Incentive Amount ($)"
          value={incentiveAmount}
          onChange={handleIncentiveChange}
          type="number"
          placeholder="Enter your incentive amount (optional)"
          autoComplete="off"
          helpText="Enter your target incentive dollar amount (optional)"
        />

        {payout !== null && (
          <Box
            padding="400"
            background="bg-fill-success-secondary"
            borderRadius="200"
          >
            <BlockStack gap="300">
              <InlineStack align="space-between" blockAlign="center">
                <Text as="p" variant="headingLg" fontWeight="bold">
                  {payout.toFixed(2)}%
                </Text>
                <Text as="p" variant="bodyLg" tone="success" fontWeight="semibold">
                  Total Payout
                </Text>
              </InlineStack>
              
              {dollarPayout !== null && (
                <Box paddingBlockStart="200">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text as="p" variant="headingMd" fontWeight="bold">
                      ${dollarPayout.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Text>
                    <Text as="p" variant="bodyMd" tone="success" fontWeight="semibold">
                      Dollar Payout
                    </Text>
                  </InlineStack>
                </Box>
              )}
              
              {parseFloat(attainment) > 0 && (
                <Box paddingBlockStart="300">
                  <BlockStack gap="100">
                    <Text as="p" variant="bodySm" fontWeight="semibold">
                      📊 Calculation Breakdown:
                    </Text>
                    {getDetailedBreakdown(parseFloat(attainment)).map((line, index) => (
                      <Text key={index} as="p" variant="bodySm" tone="subdued">
                        {line}
                      </Text>
                    ))}
                  </BlockStack>
                </Box>
              )}
            </BlockStack>
          </Box>
        )}

        <Box
          padding="300"
          background="bg-surface-secondary"
          borderRadius="200"
        >
          <BlockStack gap="200">
            <Text as="p" variant="bodySm" fontWeight="semibold">
              💡 How Accelerators Work:
            </Text>
            <Text as="p" variant="bodySm">
              Your tier is based on total attainment, and the accelerator applies to ALL attainment above 100%:
            </Text>
            <Text as="p" variant="bodySm">
              • Up to 100%: 1x
            </Text>
            <Text as="p" variant="bodySm">
              • &gt;100 to &lt;125%: 2x on all dollars above 100%
            </Text>
            <Text as="p" variant="bodySm">
              • &gt;125 to &lt;150%: 2.25x on all dollars above 100%
            </Text>
            <Text as="p" variant="bodySm">
              • &gt;150 to &lt;175%: 2.5x on all dollars above 100%
            </Text>
            <Text as="p" variant="bodySm">
              • &gt;175 to &lt;200%: 2.75x on all dollars above 100%
            </Text>
            <Text as="p" variant="bodySm">
              • &gt;200%: 3x on all dollars above 100%
            </Text>
          </BlockStack>
        </Box>
      </BlockStack>
    </Card>
  );
}

