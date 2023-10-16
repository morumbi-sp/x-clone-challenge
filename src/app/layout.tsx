import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans, Noto_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'X',
  description: 'Cloning X',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  console.log(props);
  return (
    <html lang='en'>
      <body className={openSans.className}>
        {props.children}
        {props.auth}
      </body>
    </html>
  );
}
