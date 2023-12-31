'use client';

import BigButton from '@/components/BigButton';
import AuthModal from '@/components/authModal';
import Image from 'next/image';
import googleIcon from '/public/googleIcon.png';
import githubIcon from '/public/githubIcon.png';
import AuthInput from '@/components/authInput';

export default function SignInPage() {
  return (
    <AuthModal>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-start w-[364px] h-[536px] px-[32px]'>
          <div className='text-[31px] font-bold py-4'>Sign in to X</div>
          <BigButton className='mt-2 hover:bg-gray-200 '>
            <Image src={googleIcon} alt='google-icon' width={20} />
            <span className='font-noto font-[400] ml-2 text-[14.5px]'>
              Sign in with Google
            </span>
          </BigButton>
          <BigButton className='mt-6 hover:bg-gray-200'>
            <Image src={githubIcon} alt='github-icon' width={20} />
            <span className='ml-2'>Sign in with GitHub</span>
          </BigButton>
          <div className='inline-flex items-center justify-center w-full my-6'>
            <hr className='bg-gray-200 w-full' />
            <span className='absolute bg-white px-2 -translate-y-[1px] text-[17px] dark:bg-black font'>
              or
            </span>
          </div>
          <AuthInput placeholder='Phone, email, or username' />
          <BigButton className='bg-black text-white dark:bg-white dark:text-black mt-6 hover:bg-gray-800'>
            Next
          </BigButton>
          <BigButton className='dark:bg-black dark:text-white mt-6 hover:bg-gray-200'>
            Forgot Password?
          </BigButton>
          <span className='text-[15px] mt-12'>
            Don&apos;t have an account?{' '}
            <a href='' className='text-point hover:underline'>
              Sign up
            </a>
          </span>
        </div>
      </div>
    </AuthModal>
  );
}
