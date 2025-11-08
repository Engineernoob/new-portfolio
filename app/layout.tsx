import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers'; // Import the new provider

export const metadata: Metadata = {
  title: 'Taahirah Denmark | Portfolio',
  description: 'Full-stack Developer Portfolio using Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {/* Apply the base styling for the entire body */}
          <div className="min-h-screen bg-primary-bg text-primary-text transition-colors duration-500">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
