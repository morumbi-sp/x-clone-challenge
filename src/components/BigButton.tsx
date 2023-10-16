'use client';

import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function BigButton({ children, className, href }: Props) {
  return href ? (
    <Link
      href={href}
      className={`flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      className={`flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </button>
  );
}
