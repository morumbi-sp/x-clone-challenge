'use client';

import { auth } from '@/lib/firebase';
import {
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  serviceProvider?: 'google' | 'github';
}

export default function BigButton({
  children,
  className,
  href,
  type,
  serviceProvider,
}: Props) {
  const router = useRouter();

  const onClickHandler = async () => {
    try {
      let provider: AuthProvider;
      let credential;
      let result;

      if (serviceProvider === 'google') {
        provider = new GoogleAuthProvider();
        result = await signInWithPopup(auth, provider);
        credential = GoogleAuthProvider.credentialFromResult(result);
      } else if (serviceProvider === 'github') {
        provider = new GithubAuthProvider();
        result = await signInWithPopup(auth, provider);
        credential = GithubAuthProvider.credentialFromResult(result);
      } else {
        throw new Error('Unsupported serviceProvider');
      }

      const token = credential?.accessToken;
      const userEmail = result.user.email;

      console.log('email : ', userEmail);
      console.log('token : ', token);

      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return href ? (
    <Link
      href={href}
      className={` flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClickHandler}
      className={`flex justify-center items-center border rounded-full border-gray-300 h-[38px] w-full text-[14px] font-bold transition ease-in-out duration-200 delay-75 ${className}`}
    >
      {children}
    </button>
  );
}
