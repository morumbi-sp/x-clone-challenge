'use client';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Noto_Sans } from 'next/font/google';

export const open = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open',
});
export const noto = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
  variable: '--font-noto',
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <AuthProvider>
        <body className={`${open.variable} ${noto.variable} font-open`}>
          {props.children}
        </body>
      </AuthProvider>
    </html>
  );
}
