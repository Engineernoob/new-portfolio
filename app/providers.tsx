'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

// This provider component must be a client component
export function Providers({ children }: { children: React.ReactNode }) {
  // Pass your theme settings to ThemeProvider
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}