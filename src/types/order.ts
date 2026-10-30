export type OrderStatus = 'queue' | 'processing' | 'completed' | 'payment';

export type OrderTab = 'current' | 'history';

export interface OrderTimelineStep {
  label: string;
  time?: string;
  done: boolean;
  current?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  group: OrderTab;
  serviceName: string;
  estimatedNote: string;
  amount: string;
  steps: OrderTimelineStep[];
}

export interface StatusMetadata {
  label: string;
  englishLabel: string;
  description: string;
  badgeClass: string;
  dotClass: string;
  cardBorderClass: string;
  iconBgClass: string;
}

