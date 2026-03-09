
import React from 'react';

export interface Platform {
  id: string;
  name: string;
  logo: string;
  category: 'audio' | 'video' | 'social';
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}