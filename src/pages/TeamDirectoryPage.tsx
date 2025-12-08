import React, { useState } from 'react';
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  ResourceList,
  ResourceItem,
  Avatar,
  TextField,
  Filters,
  Badge,
  ButtonGroup,
  Button,
  InlineStack,
  Box,
} from '@shopify/polaris';
import { teamMembers } from '../data/team';

type ViewMode = 'list' | 'grid';

export default function TeamDirectoryPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Get unique expertise areas
  const allExpertise = Array.from(
    new Set(teamMembers.flatMap((member) => member.expertise))
  );

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      searchValue === '' ||
      member.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      member.role.toLowerCase().includes(searchValue.toLowerCase()) ||
      member.email.toLowerCase().includes(searchValue.toLowerCase());

    const matchesExpertise =
      selectedExpertise.length === 0 ||
      selectedExpertise.some((exp) => member.expertise.includes(exp));

    return matchesSearch && matchesExpertise;
  });

  const handleSearchChange = (value: string) => setSearchValue(value);
  const handleSearchClear = () => setSearchValue('');

  const filters = [
    {
      key: 'expertise',
      label: 'Expertise',
      filter: (
        <TextField
          label="Expertise"
          value={selectedExpertise.join(', ')}
          onChange={() => {}}
          autoComplete="off"
          labelHidden
        />
      ),
      shortcut: true,
    },
  ];

  const appliedFilters = selectedExpertise.map((exp) => ({
    key: exp,
    label: `Expertise: ${exp}`,
    onRemove: () => {
      setSelectedExpertise(selectedExpertise.filter((e) => e !== exp));
    },
  }));

  // Fun color palette for avatars
  const getAvatarColor = (name: string) => {
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#06b6d4', '#14b8a6'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const renderGridView = () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: '20px',
      padding: '8px'
    }}>
      {filteredMembers.map((member) => {
        const initials = member.name.split(' ').map((n) => n[0]).join('');
        const avatarColor = getAvatarColor(member.name);
        
        return (
          <div
            key={member.id}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(99, 102, 241, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            className="team-card"
            onClick={() => window.open(member.vaultUrl, '_blank')}
          >
            <BlockStack gap="300">
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {member.avatarUrl ? (
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      boxShadow: `0 4px 12px ${avatarColor}40`,
                    }}
                  />
                ) : (
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: avatarColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: 'white',
                    boxShadow: `0 4px 12px ${avatarColor}40`
                  }}>
                    {initials}
                  </div>
                )}
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <Text as="h3" variant="headingMd">
                  {member.name}
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  {member.role}
                </Text>
              </div>

              <BlockStack gap="100">
                <Text as="p" variant="bodySm">
                  📧 {member.email.split('@')[0]}
                </Text>
                <Text as="p" variant="bodySm">
                  💬 {member.slackHandle}
                </Text>
                {member.manager && (
                  <Text as="p" variant="bodySm">
                    👤 {member.manager}
                  </Text>
                )}
              </BlockStack>

              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {member.expertise.slice(0, 2).map((exp) => (
                  <Badge key={exp} tone="info">{exp}</Badge>
                ))}
                {member.expertise.length > 2 && (
                  <Badge>+{member.expertise.length - 2}</Badge>
                )}
              </div>
            </BlockStack>
          </div>
        );
      })}
    </div>
  );

  const renderListView = () => (
    <ResourceList
      resourceName={{ singular: 'team member', plural: 'team members' }}
      items={filteredMembers}
      renderItem={(member) => {
        const { id, name, role, email, slackHandle, expertise, manager, vaultUrl, avatarUrl } = member;
        const initials = name.split(' ').map((n) => n[0]).join('');
        const avatarColor = getAvatarColor(name);

        return (
          <ResourceItem
            id={id}
            url={vaultUrl}
            media={
              avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  {initials}
                </div>
              )
            }
            accessibilityLabel={`View details for ${name}`}
          >
            <BlockStack gap="200">
              <Text as="h3" variant="bodyMd" fontWeight="semibold">
                {name}
              </Text>
              <Text as="p" variant="bodySm" tone="subdued">
                {role}
              </Text>
              <BlockStack gap="100">
                <Text as="p" variant="bodySm">
                  📧 {email}
                </Text>
                <Text as="p" variant="bodySm">
                  💬 {slackHandle}
                </Text>
                {manager && (
                  <Text as="p" variant="bodySm">
                    👤 Reports to: {manager}
                  </Text>
                )}
              </BlockStack>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {expertise.map((exp) => (
                  <Badge key={exp} tone="success">{exp}</Badge>
                ))}
              </div>
            </BlockStack>
          </ResourceItem>
        );
      }}
    />
  );

  return (
    <Page
      title="👥 Team Directory"
      subtitle={`Meet our amazing team of ${filteredMembers.length} ${filteredMembers.length === 1 ? 'person' : 'people'}`}
      backAction={{ onAction: () => window.history.back() }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="400">
              <InlineStack align="space-between" blockAlign="center">
                <Filters
                  queryValue={searchValue}
                  queryPlaceholder="Search by name, role, or email..."
                  filters={filters}
                  appliedFilters={appliedFilters}
                  onQueryChange={handleSearchChange}
                  onQueryClear={handleSearchClear}
                  onClearAll={() => {
                    handleSearchClear();
                    setSelectedExpertise([]);
                  }}
                />
                <ButtonGroup variant="segmented">
                  <Button
                    pressed={viewMode === 'grid'}
                    onClick={() => setViewMode('grid')}
                  >
                    🎨 Grid
                  </Button>
                  <Button
                    pressed={viewMode === 'list'}
                    onClick={() => setViewMode('list')}
                  >
                    📋 List
                  </Button>
                </ButtonGroup>
              </InlineStack>
              
              {viewMode === 'grid' ? renderGridView() : renderListView()}
            </BlockStack>
          </Card>

          <Card>
            <BlockStack gap="300">
              <Text as="h2" variant="headingLg">
                🎯 Team Expertise
              </Text>
              <Text as="p" variant="bodyMd" tone="subdued">
                Our team's superpowers:
              </Text>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {allExpertise.map((exp) => (
                  <Badge key={exp} tone="attention">{exp}</Badge>
                ))}
              </div>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>

      <style>{`
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(99, 102, 241, 0.15) !important;
        }
      `}</style>
    </Page>
  );
}

