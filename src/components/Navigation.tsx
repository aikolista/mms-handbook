import { Navigation as PolarisNavigation } from '@shopify/polaris';
import {
  HomeIcon,
  FlagIcon,
  PersonIcon,
  ChartVerticalIcon,
  CashDollarIcon,
  WrenchIcon,
  CalendarIcon,
  PlayIcon,
  BookIcon,
  PersonFilledIcon,
  QuestionCircleIcon,
} from '@shopify/polaris-icons';

interface NavigationProps {
  location: string;
  onNavigate: (path: string) => void;
}

export default function Navigation({ location, onNavigate }: NavigationProps) {
  return (
    <PolarisNavigation location={location}>
      <PolarisNavigation.Section
        items={[
          {
            label: 'Home',
            selected: location === '/',
            onClick: () => onNavigate('/'),
          },
        ]}
      />
      <PolarisNavigation.Section
        title="Team Information"
        items={[
          {
            label: '🎯 Mission & Vision',
            selected: location === '/mission-vision',
            onClick: () => onNavigate('/mission-vision'),
          },
          {
            label: '👤 Roles & Responsibilities',
            selected: location === '/roles',
            onClick: () => onNavigate('/roles'),
          },
          {
            label: '👥 Team Directory',
            selected: location === '/team-directory',
            onClick: () => onNavigate('/team-directory'),
          },
        ]}
      />
      <PolarisNavigation.Section
        title="Performance & Growth"
        items={[
          {
            label: '📊 Metrics & KPIs',
            selected: location === '/metrics',
            onClick: () => onNavigate('/metrics'),
          },
          {
            label: '💰 Incentive Compensation',
            selected: location === '/compensation',
            onClick: () => onNavigate('/compensation'),
          },
        ]}
      />
      <PolarisNavigation.Section
        title="Daily Operations"
        items={[
          {
            label: '🔧 Tools & Systems',
            selected: location === '/tools',
            onClick: () => onNavigate('/tools'),
          },
          {
            label: '📅 Meetings & Cadence',
            selected: location === '/meetings',
            onClick: () => onNavigate('/meetings'),
          },
          {
            label: '📋 Project Board',
            selected: location === '/project-board',
            onClick: () => onNavigate('/project-board'),
          },
          {
            label: '📖 Processes & Playbooks',
            selected: location === '/processes',
            onClick: () => onNavigate('/processes'),
          },
          {
            label: '📚 Learning Resources',
            selected: location === '/resources',
            onClick: () => onNavigate('/resources'),
          },
        ]}
      />
      <PolarisNavigation.Section
        title="Support"
        items={[
          {
            label: '🏖 PTO & Time Off',
            selected: location === '/pto',
            onClick: () => onNavigate('/pto'),
          },
        ]}
      />
    </PolarisNavigation>
  );
}

