import { ThemeProvider } from '@/core/theme/theme-provider';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { ReactNode } from 'react';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IPBank',
  description: 'IPBank, empowering your financial journey'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
				</body>
    </html>
  );
}
