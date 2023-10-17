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

export const metadata: Metadata = {
  title: 'X',
  description: 'Cloning X',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${open.variable} ${noto.variable} font-open`}>
        {props.children}
        {props.auth}
      </body>
    </html>
  );
}
