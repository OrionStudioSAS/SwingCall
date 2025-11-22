import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}
