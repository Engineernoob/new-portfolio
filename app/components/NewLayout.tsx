// This entire component must be a Client Component to manage the theme/layout
'use client'; 
import React from 'react';
import { useTheme } from 'next-themes'; 
import { Sidebar } from './Sidebar'; 

export function NewLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    // Set a light theme base with a smooth background and color transition
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} transition-colors duration-500`}>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-4 xl:grid-cols-5 h-full">
        
        {/* Left Column: Sidebar (Fixed) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:col-span-1 border-r border-gray-200 dark:border-gray-800 p-8">
          <Sidebar />
        </div>
        
        {/* Right Column: Content (Scrollable) */}
        <main className="lg:col-span-3 xl:col-span-4 overflow-y-auto p-8 lg:p-12">
          {children}
        </main>
        
      </div>
    </div>
  );
}