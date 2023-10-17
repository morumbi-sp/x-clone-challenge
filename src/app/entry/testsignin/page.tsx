'use client';
import BigButton from '@/components/BigButton';
import AuthModal from '@/components/authModal';
import Image from 'next/image';
import googleIcon from '/public/googleIcon.png';
import githubIcon from '/public/githubIcon.png';
import AuthInput from '@/components/authInput';
import { useForm } from 'react-hook-form';
import {
  EmailAuthProvider,
  User,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface SignInForm {
  password: string;
  email: string;
}

export default function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignInForm>();

  const onSubmit = async ({ email, password }: SignInForm) => {};

  return (
    <AuthModal>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col items-start w-[364px] h-[536px] px-[32px]'>
          <div className='text-[31px] font-bold py-4'>Sign in to X</div>
          <BigButton className=' hover:bg-gray-200 '>
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
          <form onSubmit={handleSubmit(onSubmit)} action='' className='w-full'>
            <AuthInput<SignInForm>
              placeholder='Your email address'
              register={register}
              title='email'
              type='email'
              watch={watch}
            />
            <AuthInput<SignInForm>
              placeholder='Password'
              register={register}
              title='password'
              type='password'
              watch={watch}
              className='mt-4'
            />
            <BigButton
              type='submit'
              className='bg-gray-900 text-white dark:bg-white dark:text-black mt-6 hover:bg-gray-700'
            >
              Next
            </BigButton>
          </form>
          <BigButton className='dark:bg-black dark:text-white mt-6 hover:bg-gray-200'>
            Forgot Password?
          </BigButton>
          <span className='text-[15px] mt-5'>
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
