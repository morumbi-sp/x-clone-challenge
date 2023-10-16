'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AuthModal({ children }: Props) {
  const router = useRouter();
  return (
    <div className='w-full h-[100vh] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-30 '>
      <div className='w-[600px] h-[650px] bg-white dark:bg-black rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40'>
        <div className='flex justify-between px-[16px] h-[53px] items-center'>
          <div>
            <button onClick={() => router.back()} className='text-[17px]'>
              ✕
            </button>
          </div>
          <div>
            <svg viewBox='0 0 24 24' width={28} className='dark:fill-white'>
              <g>
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
              </g>
            </svg>
          </div>
          <div></div>
        </div>
        {children}
      </div>
    </div>
  );
}
