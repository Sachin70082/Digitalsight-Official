
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
    description: 'Get your tracks on 150+ stores like Spotify, Apple Music, and JioSaavn.',
    icon: <Music className="w-8 h-8 text-purple-500" />,
    path: '/distribution'
  },
  {
    title: 'Video Distribution',
    description: 'Global reach on VEVO, YouTube Music, Facebook, and Instagram Video.',
    icon: <Video className="w-8 h-8 text-blue-500" />,
    path: '/distribution#video-distribution'
  },
  {
    title: 'YouTube CMS',
    description: 'Advanced content management and monetization for high-traffic channels.',
    icon: <Youtube className="w-8 h-8 text-red-500" />,
    path: '/distribution#youtube-cms'
  },
  {
    title: 'Mixing & Mastering',
    description: 'Professional-grade audio engineering to make your sound radio-ready.',
    icon: <Headphones className="w-8 h-8 text-emerald-500" />,
    path: '/mixing-mastering'
  },
  {
    title: 'Artist Support',
    description: 'Dedicated account managers to help you navigate the music industry.',
    icon: <Users className="w-8 h-8 text-orange-500" />,
    path: '/about#artist-support'
  },
  {
    title: 'Promotion Tools',
    description: 'Smart links and pre-save campaigns to boost your release visibility.',
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
