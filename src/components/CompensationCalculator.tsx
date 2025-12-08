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

    let totalPayout = 100; // Base 100%

    // 100% to 125% at 2x
    if (attainmentPercent > 100) {
      const tier1 = Math.min(attainmentPercent - 100, 25);
      totalPayout += tier1 * 2;
    }

    // 125% to 150% at 2.25x
    if (attainmentPercent > 125) {
      const tier2 = Math.min(attainmentPercent - 125, 25);
      totalPayout += tier2 * 2.25;
    }

    // 150% to 175% at 2.5x
    if (attainmentPercent > 150) {
      const tier3 = Math.min(attainmentPercent - 150, 25);
      totalPayout += tier3 * 2.5;
    }

    // 175% to 200% at 2.75x
    if (attainmentPercent > 175) {
      const tier4 = Math.min(attainmentPercent - 175, 25);
      totalPayout += tier4 * 2.75;
    }

    // Above 200% at 3x
    if (attainmentPercent > 200) {
      const tier5 = attainmentPercent - 200;
      totalPayout += tier5 * 3;
    }

    return totalPayout;
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
              Calculate your payout
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
                  Payout
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
              
              {parseFloat(attainment) > 100 && (
                <Box paddingBlockStart="200">
                  <Text as="p" variant="bodySm" tone="subdued">
                    Breakdown: 100% base + {(payout - 100).toFixed(2)}% accelerated earnings
                  </Text>
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
              💡 How it works:
            </Text>
            <Text as="p" variant="bodySm">
              • Up to 100%: pays 1x (100%)
            </Text>
            <Text as="p" variant="bodySm">
              • 100-125%: marginal dollars pay 2x
            </Text>
            <Text as="p" variant="bodySm">
              • 125-150%: marginal dollars pay 2.25x
            </Text>
            <Text as="p" variant="bodySm">
              • 150-175%: marginal dollars pay 2.5x
            </Text>
            <Text as="p" variant="bodySm">
              • 175-200%: marginal dollars pay 2.75x
            </Text>
            <Text as="p" variant="bodySm">
              • Above 200%: marginal dollars pay 3x
            </Text>
          </BlockStack>
        </Box>
      </BlockStack>
    </Card>
  );
}

