import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.39788adf6d62471fbe0e12e1aed10b2a',
  appName: 'tani-rent-digital-pertanian',
  webDir: 'dist',
  server: {
    url: 'https://39788adf-6d62-471f-be0e-12e1aed10b2a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;