
import React from 'react';
import { Music, Video, Youtube, Zap, Mic2, Users, Headphones, Radio, Share2 } from 'lucide-react';
import { NavItem, Service, Platform } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Distribution', path: '/distribution' },
  { label: 'Mixing & Mastering', path: '/mixing-mastering' },
  { label: 'Platforms', path: '/platforms' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Music Distribution',
    description: 'Global music distribution to 150+ stores like Spotify, Apple Music, and JioSaavn. Includes CRBT / Caller Tune support. Keep 70% of your royalties.',
    icon: <Music className="w-8 h-8 text-purple-500" />,
    path: '/distribution'
  },
  {
    title: 'Video Distribution',
    description: 'Global video distribution on YouTube Music, Facebook, and Instagram Video. Professional setup for artists.',
    icon: <Video className="w-8 h-8 text-blue-500" />,
    path: '/distribution#video-distribution'
  },
  {
    title: 'YouTube CMS & Content ID',
    description: 'Advanced YouTube CMS management, Content ID monetization, and copyright protection for high-traffic channels.',
    icon: <Youtube className="w-8 h-8 text-red-500" />,
    path: '/distribution#youtube-cms'
  },
  {
    title: 'Mixing & Mastering',
    description: 'Professional-grade audio engineering and mastering services to make your sound radio-ready for global streaming.',
    icon: <Headphones className="w-8 h-8 text-emerald-500" />,
    path: '/mixing-mastering'
  },
  {
    title: 'Artist Support & Marketing',
    description: 'Dedicated account managers and music marketing tools to help independent artists navigate the music industry.',
    icon: <Users className="w-8 h-8 text-orange-500" />,
    path: '/about#artist-support'
  },
  {
    title: 'Promotion & Smart Links',
    description: 'Smart links, pre-save campaigns, and artist promotion tools to boost your release visibility and streaming numbers.',
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    path: '/distribution#promotion'
  }
];

export const PLATFORMS: Platform[] = [
  { id: '1', name: 'Spotify', logo: 'https://cdn-icons-png.flaticon.com/512/174/174872.png', category: 'audio' },
  { id: '2', name: 'Apple Music', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1024px-Apple_Music_icon.svg.png', category: 'audio' },
  { id: '3', name: 'JioSaavn', logo: 'https://www.jiosaavn.com/favicon.ico', category: 'audio' },
  { id: '4', name: 'YouTube', logo: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', category: 'video' },
  { id: '5', name: 'Instagram', logo: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', category: 'social' },
  { id: '6', name: 'Facebook', logo: 'https://cdn-icons-png.flaticon.com/512/124/124010.png', category: 'social' },
  { id: '7', name: 'Wynk Music', logo: 'https://www.wynk.in/favicon.ico', category: 'audio' },
  { id: '8', name: 'Gaana', logo: 'https://gaana.com/favicon.ico', category: 'audio' },
  { id: '9', name: 'Deezer', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111361.png', category: 'audio' },
  { id: '10', name: 'Tidal', logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111655.png', category: 'audio' },
];
