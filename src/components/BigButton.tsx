'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function BigButton({ children, className, href, type }: Props) {
  return href ? (
    <Link
      href={href}
      className={`bg-white text-black flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={`${
        className || 'bg-white'
      } text-black flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </button>
  );
}
