export interface NavItem {
  id: string;
  label: string;
  number: string;
}

export interface StatItem {
  value: string;
  label: string;
  source?: string;
}

export interface ComparisonItem {
  brand: string;
  desc: string;
  frolicDiff: string;
}

export interface CompetitorItem {
  brand: string;
  title: string;
  success: string;
  swot: {
    s: string;
    w: string;
    o: string;
    t: string;
  };
  strategy: string;
}

export interface PhaseItem {
  phase: string;
  title: string;
  period: string;
  goal: string;
  keyAction: string;
}

export interface KitItem {
  id: string;
  name: string;
  desc: string;
  mode: string;
}

export interface ExecutiveItem {
  title: string;
  desc: string;
}