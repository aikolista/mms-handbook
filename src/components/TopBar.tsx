import React, { useState, useRef, useEffect } from 'react';
import { TextField, Box, Icon } from '@shopify/polaris';
import { SearchIcon } from '@shopify/polaris-icons';
import { useNavigate } from 'react-router-dom';
import { mmsTools } from '../data/tools';
import { meetings } from '../data/meetings';
import { metricCategories } from '../data/metrics';

interface SearchResult {
  type: 'tool' | 'meeting' | 'metric';
  title: string;
  description: string;
  url?: string;
  path?: string;
}

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
        setSearchTerm('');
        setResults([]);
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (value.length > 2) {
      performSearch(value);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const performSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const newResults: SearchResult[] = [];

    // Search Tools
    mmsTools.forEach(tool => {
      if (tool.name.toLowerCase().includes(lowerCaseQuery) || 
          tool.description.toLowerCase().includes(lowerCaseQuery) || 
          tool.category.toLowerCase().includes(lowerCaseQuery)) {
        newResults.push({
          type: 'tool',
          title: tool.name,
          description: tool.description,
          url: tool.url,
          path: '/tools'
        });
      }
    });

    // Search Meetings
    meetings.forEach(meeting => {
      if (meeting.title.toLowerCase().includes(lowerCaseQuery) || 
          meeting.description.toLowerCase().includes(lowerCaseQuery) || 
          meeting.frequency.toLowerCase().includes(lowerCaseQuery)) {
        newResults.push({
          type: 'meeting',
          title: meeting.title,
          description: meeting.description,
          path: '/meetings'
        });
      }
    });

    // Search Metrics
    metricCategories.forEach(category => {
      category.metrics.forEach(metric => {
        if (metric.name.toLowerCase().includes(lowerCaseQuery) || 
            metric.description.toLowerCase().includes(lowerCaseQuery)) {
          newResults.push({
            type: 'metric',
            title: metric.name,
            description: metric.description,
            path: '/metrics'
          });
        }
      });
    });

    setResults(newResults.slice(0, 10));
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.url) {
      window.open(result.url, '_blank');
    } else if (result.path) {
      navigate(result.path);
    }
    setSearchTerm('');
    setResults([]);
    setShowResults(false);
    setIsSearchExpanded(false);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setShowResults(false);
  };

  const handleSearchIconClick = () => {
    setIsSearchExpanded(true);
  };

  return (
    <div style={{
      height: '64px',
      background: '#ffffff',
      borderBottom: '1px solid #F5F5F5',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '24px',
      paddingRight: '24px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
    }}>
      <img 
        src="/cs-mms-logo.png" 
        alt="CS MMS" 
        style={{
          height: '64px',
          width: 'auto',
        }}
      />
      
      <div 
        ref={searchRef}
        style={{
          marginLeft: 'auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {!isSearchExpanded ? (
          <button
            onClick={handleSearchIconClick}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F9FAFB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Icon source={SearchIcon} tone="base" />
          </button>
        ) : (
          <div style={{
            width: '400px',
            position: 'relative'
          }}>
            <TextField
              label=""
              labelHidden
              value={searchTerm}
              onChange={handleSearchChange}
              clearButton
              onClearButtonClick={handleClearSearch}
              autoComplete="off"
              placeholder="Search handbook..."
              autoFocus
            />
            
            {showResults && results.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: '8px',
                background: '#ffffff',
                border: '1px solid #DCDCDC',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                maxHeight: '400px',
                overflowY: 'auto',
                zIndex: 1000,
              }}>
                {results.map((result, index) => (
                  <div
                    key={index}
                    onClick={() => handleResultClick(result)}
                    style={{
                      padding: '12px 16px',
                      borderBottom: index < results.length - 1 ? '1px solid #F5F5F5' : 'none',
                      cursor: 'pointer',
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F9FAFB';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#ffffff';
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>
                      {result.title} <span style={{ color: '#616161', fontWeight: 400 }}>({result.type})</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#616161' }}>
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {showResults && searchTerm.length > 2 && results.length === 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                marginTop: '8px',
                background: '#ffffff',
                border: '1px solid #DCDCDC',
                borderRadius: '8px',
                padding: '16px',
                color: '#616161',
                fontSize: '14px',
              }}>
                No results found for "{searchTerm}".
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

