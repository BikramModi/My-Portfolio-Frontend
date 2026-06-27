import type { Metadata } from 'next';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
