// Chat Types for AI Consultant
export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: number;
}

// Application View Types
export enum AppView {
  CHAT = 'chat',
  VISION = 'vision',
  IMAGEN = 'imagen',
  SETTINGS = 'settings'
}

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}

// Landing Page Data Types
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface PriceItem {
  id: number;
  plan: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}